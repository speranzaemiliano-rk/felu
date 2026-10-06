// Service worker de la página de Felu.
// Cambiar CACHE cada vez que se publica una versión nueva, así se descarga lo nuevo.
var CACHE = 'felu-v2';
var BASE = ['./', 'index.html', 'manifest.json', 'portada.jpg',
  'iconos/icono-192.png', 'iconos/icono-512.png', 'iconos/apple-touch-icon.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(BASE); }));
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  var url = new URL(req.url);
  // Sólo lo propio. YouTube, fuentes y el video (pedidos por partes) van directo a la red.
  if (req.method !== 'GET' || url.origin !== location.origin || url.pathname.endsWith('.mp4')) return;

  // La página: primero la red (para ver siempre lo último), y si no hay conexión, la guardada.
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(function (r) {
      var copia = r.clone();
      caches.open(CACHE).then(function (c) { c.put('index.html', copia); });
      return r;
    }).catch(function () { return caches.match('index.html'); }));
    return;
  }
  // Imágenes e íconos: lo guardado, y si no está, la red.
  e.respondWith(caches.match(req).then(function (r) { return r || fetch(req); }));
});
