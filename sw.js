this.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v1').then(function(cache) {
        return cache.addAll([
          '/pwa-bootsrtap/',
           '/pwa-bootsrtap/index.html',
           '/pwa-bootsrtap/index.js',
           '/pwa-bootsrtap/bootstrap-5.1.3-dist/css/bootstrap.min.css',
           '/pwa-bootsrtap/bootstrap-5.1.3-dist/js/bootstrap.bundle.min.js',
           '/pwa-bootsrtap/recettes/img1.jpg',
           '/pwa-bootsrtap/recettes/img2.jpg',
           '/pwa-bootsrtap/recettes/img3.jpg',
           '/pwa-bootsrtap/icon-152x152.png',
           '/pwa-bootsrtap/icons-1.7.2/font/bootstrap-icons.css',
           '/pwa-bootsrtap/favicon.ico'
           /* '/restaurant32x32.png',
           '/restaurant48x48.png',
           '/restaurant152x152.png',
           '/restaurant192x192.png',
           '/restaurant512x512.png',
           '/manifest.webmanifest' */
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
 