self.addEventListener('install', event => {
event.waitUntil(
caches.open('mi-pwa-cache').then(cache => {
return cache.addAll([
'/',
'estudiante.html',
'ingeniero.html',
'gamer.html',
'images.jpg',
'07-BLOG-ing-sistemas-1.jpg.jpg',
'hq720.jpg'
]);
})
);
console.log('Service Worker instalado');
});

self.addEventListener('fetch', event => {
event.respondWith(
caches.match(event.request)
.then(respuesta => respuesta || fetch(event.request)));
});

