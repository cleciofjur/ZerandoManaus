const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const front = path.join(__dirname, '../frontend');
const script = fs.readFileSync(path.join(front, 'script.js'), 'utf8');

function game(file = 'fase.html', saved = null, search = '') {
  const html = fs.readFileSync(path.join(front, file), 'utf8');
  const nodes = new Map();
  function node() {
    const classes = new Set();
    return { style: {}, classList: {
      add: (...names) => names.forEach(n => classes.add(n)),
      remove: (...names) => names.forEach(n => classes.delete(n)),
      toggle: (n, on) => on ? classes.add(n) : classes.delete(n)
    }, setAttribute() {}, appendChild() {}, scrollIntoView() {}, querySelector: () => node() };
  }
  for (const match of html.matchAll(/\bid="([^"]+)"/g)) nodes.set(match[1], node());
  let stored = saved;
  const context = vm.createContext({
    document: {
      getElementById: id => nodes.get(id) || null,
      querySelectorAll: selector => selector === '.node-btn' && file === 'mapa.html' ? Array.from({length:6}, node) : [],
      querySelector: () => node(), createElement: node
    },
    localStorage: { getItem: () => stored, setItem: (key, value) => { stored = value; } },
    window: { location: { search, replace(url) { this.href = url; } }, addEventListener() {} },
    navigator: {}, URLSearchParams, setTimeout() {}, confirm: () => true
  });
  vm.runInContext(script, context);
  return { run: text => vm.runInContext(text, context), stored: () => JSON.parse(stored) };
}

test('todas as páginas inicializam e seus recursos locais existem', () => {
  for (const file of ['index.html','como-jogar.html','mapa.html','perfil.html','fase.html']) {
    game(file);
    const html = fs.readFileSync(path.join(front, file), 'utf8');
    assert.equal((html.match(/<!doctype html>/gi) || []).length, 1);
    for (const match of html.matchAll(/(?:href|src)="\.\/([^"?]+)(?:\?[^" ]*)?"/g)) {
      assert.ok(fs.existsSync(path.join(front, match[1])), `${file}: ${match[1]}`);
    }
  }
  assert.ok(!/^([<=>])\1{6}/m.test(script));
});

test('save inválido não infla XP ou resultados', () => {
  const g = game('perfil.html', JSON.stringify({completedList:[1,1,99,'2',null],bestScores:{1:99,2:3,3:-1}}));
  assert.equal(g.run('gameState.xp'), 50);
  assert.equal(g.run('JSON.stringify(gameState.completedList)'), '[1]');
  assert.equal(g.run('JSON.stringify(gameState.bestScores)'), '{"2":3}');
  assert.equal(game('mapa.html', '{broken').run('gameState.xp'), 0);
});

test('links diretos respeitam bloqueio e fase inválida volta para fase 1', () => {
  assert.equal(game('fase.html', null, '?fase=2').run('window.location.href'), './mapa.html');
  assert.equal(game('fase.html', null, '?fase=999').run('gameState.currentLevel'), 1);
  const g = game('mapa.html');
  g.run('openLevel(0); openLevel(999)');
  assert.equal(g.run('window.location.href'), undefined);
});

test('3/5 reprova; 4/5 aprova e libera fase; repetição não duplica XP', () => {
  const g = game();
  g.run('startQuiz(); quizState.correct = 3; finishQuiz()');
  assert.equal(g.run('gameState.xp'), 0);
  assert.equal(g.run('isUnlocked(2)'), false);
  g.run('startQuiz(); quizState.correct = 4; finishQuiz()');
  assert.equal(g.run('gameState.xp'), 50);
  assert.equal(g.run('isUnlocked(2)'), true);
  g.run('openLevel(2)');
  assert.equal(g.run('window.location.href'), './fase.html?fase=2');
  g.run('gameState.currentLevel = 1');
  g.run('startQuiz(); quizState.correct = 5; finishQuiz()');
  assert.equal(g.run('gameState.xp'), 50);
  assert.equal(g.stored().bestScores[1], 5);
});

test('cliques repetidos não contam duas respostas ou pulam perguntas', () => {
  const g = game();
  g.run('startQuiz(); answerQuestion(999)');
  assert.equal(g.run('quizState.answered'), false);
  g.run('const correctOption = quizState.questions[0].options.findIndex(o => o.isCorrect); answerQuestion(correctOption); answerQuestion(correctOption)');
  assert.equal(g.run('quizState.correct'), 1);
  g.run('nextQuestion(); nextQuestion()');
  assert.equal(g.run('quizState.index'), 1);
});

test('reiniciar apaga progresso e melhores resultados', () => {
  const g = game('perfil.html', JSON.stringify({completedList:[1,2],bestScores:{1:5,2:4}}));
  g.run('resetGame()');
  assert.equal(g.run('gameState.xp'), 0);
  assert.deepEqual(g.stored(), {completedList:[], bestScores:{}});
});
