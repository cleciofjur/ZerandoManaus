const CACHE_NAME = 'zerando-manaus-v3';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './styles.css',
  './como-jogar.html',
  './mapa.html',
  './perfil.html',
  './fase.html',
  './img/fundo-manaus.jpg',
  './script.js',
  './manifest.json',
  './img/ED0C05AD-55DA-4F9A-B217-DAB66AD9E2E6.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

// Apaga somente caches antigos deste jogo quando a nova versão assume
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k.startsWith('zerando-manaus-') && k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => cache.match(event.request, {
      ignoreSearch: new URL(event.request.url).pathname.endsWith('/fase.html')
    })).then((response) => response || fetch(event.request))
  );
});
