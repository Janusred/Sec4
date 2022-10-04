

self.addEventListener('fetch', event =>{
    
    //console.log(event);
    //console.log('SW: hola Janus ');
    if(event.request.url.includes('.jpg')){
        const instalacion = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('SW:Fin de la instalacion');
                self.skipWaiting();
                resolve();
            }, 10);
        });
        event.waitUntil(instalacion);
    }
});

self.addEventListener('activate', event => {
    //Se borra cache
    console.log('SW2: Activo y listo para controlar la app');
});
self.addEventListener('fetch', event => {
    //Aplica cache
    console.log('SW', event.request.url);

    if (event.request.url.includes('https://reqres.in')) {
        const resp = new Response(`{  ok:false, mensaje: 'Janus' }`)
        event.respondWith(resp);
    }
});