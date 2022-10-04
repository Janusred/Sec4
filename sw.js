

self.addEventListener('fetch', event =>{
    
    //console.log(event);
    //console.log('SW: hola Janus ');
    if(event.request.url.include(style.css)){
        event.respondWith( null);

    }else{
        event.respondWith( fetch(event.request));
    }
});