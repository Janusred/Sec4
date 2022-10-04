/*if ('serviceWorker in navigator'){
    console.log('Podemos usarlos');
}*/

if (navigator.serviceWorker){
    navigator.serviceWorker.register('/sw.js');
}