
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('domesoul-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/domesoul-app/index.html',
        '/domesoul-app/assets/css/styles.css',
        '/domesoul-app/assets/js/script.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
