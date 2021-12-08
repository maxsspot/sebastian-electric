const cacheName = 'offline-site';
const filestoCache = [
  '/',
  '/about',
  '/index.html',
  '/pictures.html',
  '/pcontact.html',
  '/privacy-policy.html',
  '/submitted.html',
  '/css/nothome.css',
  '/js/nav.js',
  '/img/logo.png'
]; 
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName)
    .then(cache => cache.addAll(filesToCache))
  );
});
