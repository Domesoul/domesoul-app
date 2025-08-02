
const CACHE_NAME = 'domesoul-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/music.html',
  '/store.html',
  '/soul-mission.html',
  '/learn.html',
  '/assets/css/styles.css',
  '/assets/icons/icon-192.png',
  '/assets/icons/icon-512.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
