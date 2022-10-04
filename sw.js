

self.addEventListener('fetch', event =>{
    
    //console.log(event);
    //console.log('SW: hola Janus ');
    if(event.request.url.includes('.jpg')){
       // event.respondWith( null);
      console.log(event.request.url);
      let fotoReq = fetch (event.request);
      event.respondWith(fotoReq);
    
    }
});