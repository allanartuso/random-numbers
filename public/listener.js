window.addEventListener('load',init);

async function init(){
    //table
    tableRandom = document.getElementById('tableRandom');
    tableRandomBody = document.querySelector('#tableRandom tbody');
    textWait = document.getElementById('wait');

    await setMyNumber();
    textWait.innerHTML = 'Ready, waiting for server';

    //Connection
    var socket = io.connect('http://localhost:3000');
    socket.on('data', getData);
}