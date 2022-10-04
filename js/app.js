/*if ('serviceWorker in navigator'){
    console.log('Podemos usarlos');
}*/

if (navigator.serviceWorker){
navigator.serviceWorker.register('/sw.js')
.then(reg => {
    setTimeout(() => {
        reg.sync.register('post-gat');
        console.log('Gatos en servicio');
    }, 3000);
});
}

/*
fetch('https://reques.in/api/users')
.then(resp=>resp.text())
.then(console.log)*/