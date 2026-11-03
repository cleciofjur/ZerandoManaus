const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const front = path.join(__dirname, '../frontend');
const source = fs.readFileSync(path.join(front, 'sw.js'), 'utf8');

test('instalação offline inclui somente arquivos existentes e todos os fundos das fases', async () => {
  const handlers = {};
  let assets;
  vm.runInNewContext(source, {
    self: { addEventListener: (name, handler) => { handlers[name] = handler; }, skipWaiting() {} },
    caches: { open: async () => ({ addAll: async list => {
      assets = Array.from(list);
      for (const asset of assets) {
        assert.ok(fs.existsSync(path.join(front, asset)), `Precache inexistente: ${asset}`);
      }
    } }) }
  });
  let installed;
  handlers.install({ waitUntil: promise => { installed = promise; } });
  await installed;
  const css = fs.readFileSync(path.join(front, 'style.css'), 'utf8');
  for (const [, asset] of css.matchAll(/url("(./img/[^")]+)")/g)) {
    assert.ok(assets.includes(asset), `Fundo sem cache offline: ${asset}`);
  }
});
