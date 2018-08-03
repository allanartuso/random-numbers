const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const myModule = require('./myModule');

//App setup
const app = express();
const server = http.Server(app);
server.listen(3000, () => console.log('Example app listening on port 3000!'));

//Static files
app.use(express.static('public'));

//Emit event
const io = socketIO(server);
io.on('connection', connectionIO);

function connectionIO (socket){
    console.log('socket connection made ' + socket.id);
};

setInterval(function(){

    var currentDate  = myModule.currentDate();
    var randomNumber = myModule.randomNumber(0,100);
    
    var toEmit = { myDate: currentDate, myNumber: randomNumber }
    io.sockets.emit('data', toEmit);
    
}, 5000);