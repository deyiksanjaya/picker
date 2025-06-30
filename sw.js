// sw.js
const cacheName = 'divina-cache-v1';
const assets = [
  '/',
  '/index.html',
  '/manifest.json',
  // Tambahkan juga ikon, font, dll
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
