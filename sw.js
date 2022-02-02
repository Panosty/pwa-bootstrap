this.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v1').then(function(cache) {
        return cache.addAll([
           '/pwa-bootstrap/index.html',
           '/pwa-bootstrap/index.js',
           '/pwa-bootstrap/bootstrap-5.1.3-dist/css/bootstrap.min.css',
           '/pwa-bootstrap/bootstrap-5.1.3-dist/js/bootstrap.bundle.min.js',
           '/pwa-bootstrap/recettes/img1.jpg',
           '/pwa-bootstrap/recettes/img2.jpg',
           '/pwa-bootstrap/recettes/img3.jpg',
           '/pwa-bootstrap/restaurant.png',
           '/pwa-bootstrap/icons-1.7.2/font/bootstrap-icons.css',
           '/pwa-bootstrap/boot.png',
           '/pwa-bootstrap/icon-192x192.png',
        ]);
      })
    );
  });
 

  this.addEventListener('fetch', function(event) {
    console.log("Fetching ..." + event.request.url);
    event.respondWith(caches.match(event.request).then((response) => {
        if (response !== undefined) {
            return response;
        } else {
            console.log("Fetching from fetch ..." + event.request.url);
            return fetch(event.request);
        }
    }))
 });
 