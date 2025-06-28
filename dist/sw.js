const CACHE_NAME = 'support-guide-v2';
const CACHE_FILES = [
  '/',
  '/index.html',
  '/protocol',
  '/protocol/',
  '/evidence',
  '/evidence/',
  '/tiered',
  '/tiered/',
  '/how-to-use',
  '/how-to-use/',
  '/mobile-protocol',
  '/mobile-protocol/',
  '/mobile-tiered',
  '/mobile-tiered/'
];

// Always serve index.html for navigation requests
const shouldAlwaysServeIndex = (request) => {
  return request.mode === 'navigate' || 
         request.headers.get('accept').includes('text/html');
};

// Install event - cache the application shell
self.addEventListener('install', event => {
  console.log('Service Worker installing.');
  // Skip waiting to activate the new service worker immediately
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching app shell');
        return cache.addAll(CACHE_FILES);
      })
      .catch(error => {
        console.error('Cache addAll error:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker activating.');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Take control of all clients immediately
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache, falling back to network
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  const requestUrl = new URL(event.request.url);
  
  // Skip cross-origin requests
  if (requestUrl.origin !== location.origin) {
    return;
  }

  // Handle navigation requests
  if (shouldAlwaysServeIndex(event.request)) {
    event.respondWith(
      caches.match('/index.html')
        .then(cachedResponse => {
          // Always fetch from network first for navigation requests
          return fetch(event.request)
            .then(networkResponse => {
              // Update cache with fresh response
              const responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME)
                .then(cache => cache.put(event.request, responseToCache));
              return networkResponse;
            })
            .catch(() => {
              // If network fails, return cached response or index.html
              return cachedResponse || caches.match('/index.html');
            });
        })
    );
    return;
  }

  // For other requests, try cache first, then network
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Return cached response if found
        if (cachedResponse) {
          return cachedResponse;
        }

        // Otherwise, fetch from network
        return fetch(event.request)
          .then(response => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            // Cache the response
            caches.open(CACHE_NAME)
              .then(cache => cache.put(event.request, responseToCache));

            return response;
          });
      })
  );
});
