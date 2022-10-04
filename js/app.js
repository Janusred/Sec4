/*if ('serviceWorker in navigator'){
    console.log('Podemos usarlos');
}*/

if (navigator.serviceWorker){
navigator.serviceWorker.register('/sw.js');
}

fetch('https://reques.in/api/users')
.then(resp=>resp.text())
.then(console.log)