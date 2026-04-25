const CACHE_NAME = 'tk-pos-v50'; 
const ASSETS = [
  './index.html',
  './manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js',
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&family=Space+Mono:wght@400;700&display=swap'
];

self.addEventListener('install', (e) => { 
    self.skipWaiting(); 
    e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))); 
});

self.addEventListener('activate', (e) => { 
    e.waitUntil(caches.keys().then((keys) => { 
        return Promise.all(keys.map((key) => { 
            if (key !== CACHE_NAME) return caches.delete(key); 
        })); 
    }).then(() => self.clients.claim())); 
});

self.addEventListener('fetch', (e) => { 
    e.respondWith(
        caches.match(e.request).then((response) => {
            if (response) return response;
            if (e.request.mode === 'navigate') return caches.match('./index.html');
            return fetch(e.request);
        })
    ); 
});
