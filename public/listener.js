window.addEventListener('load',init);

var socket = io.connect('http://localhost:3000');

async function init(){
    
    tableRandom = document.getElementById('tableRandom');
    tableRandomBody = document.querySelector('#tableRandom tbody');
    textWait = document.getElementById('wait');

    myNumberIs = await setMyNumber();
    textWait.innerHTML = 'Ready, waiting for server';

    socket.on('data', getData);

}