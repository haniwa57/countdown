self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('countdown-timer-v1').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/style.css',
                '/manifest.json',
                '/icon-192x192.png',
                '/icon-512x512.png',
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
