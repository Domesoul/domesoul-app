const CACHE_NAME = 'domesoul-cache-v1';
const urlsToCache = [
  '/',
  '/domesoul-app/index.html',
  '/domesoul-app/styles.css',
  '/domesoul-app/script.js',
  '/domesoul-app/icons/icon-192.png',
  '/domesoul-app/icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(keyList.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }))
    )
  );
});
