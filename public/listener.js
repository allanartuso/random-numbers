window.addEventListener('load',init);

function init(){
    //table
    tableRandom = document.getElementById('tableRandom');
    tableRandomBody = document.querySelector('#tableRandom tbody');
    textWait = document.getElementById('wait');

    //Connection
    var socket = io.connect('http://localhost:3000');
    socket.on('data', getData);
}