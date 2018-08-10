window.addEventListener('load',init);

var socket = io.connect('http://localhost:3000');

async function init(){
    
    var tableRandom = document.getElementById('tableRandom');
    var tableRandomBody = document.querySelector('#tableRandom tbody');
    var textWait = document.getElementById('wait');

    var myNumberIs = await setMyNumber();
    console.log(myNumberIs);
    textWait.innerHTML = 'Ready, waiting for server';

    socket.on('data', getData);

}