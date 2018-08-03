function getData(data){

    myDate = data.myDate;
    myNumber = data.myNumber;
    
    createRow(checkRows);
    writeData(myDate, myNumber); 
    checkNumbers(myNumberIs,myNumber);
    
};

function createRow(callback){

    row = document.createElement('tr');
    celDate = document.createElement('td');
    celNumber = document.createElement('td');

    row.appendChild(celDate);
    row.appendChild(celNumber);

    tableRandomBody.appendChild(row);

    callback();

};

function writeData(myDate, myNumber){

    celDate.innerHTML = myDate;
    celNumber.innerHTML = myNumber;

};

function checkRows(){

    rows = document.getElementsByTagName('tr');

    if(rows.length>=1){
        
        if(!tableRandom.classList.contains('show')){
            tableRandom.classList.add('show');
        }

        textWait.innerHTML = 'Listening server';      
        
    }

    if(rows.length>10){
        document.getElementsByTagName('tr')[1].remove();
    }

}


//Set my number
function getRandomInt(min, max) {

    randomNumber = formatNumber( Math.floor(Math.random() * (max - min)) + min );
    return randomNumber;

}

function formatNumber(val){

    var formattedNumber = ("0" + val).slice(-2);
    return formattedNumber;

}

function setMyNumber(){

    myNumber = document.getElementById('myNumber');

    let promiseCreateNumber = new Promise(function(resolve){
        randomNumber = getRandomInt(0,100); 
        resolve(randomNumber);
    });
    
    promiseCreateNumber.then(                             
        myNumber.innerHTML = `My number is ${randomNumber}`
    );

    return randomNumber;
    
}

function checkNumbers(myNumberIs,myNumber){

    if(myNumberIs == myNumber){
        textWait.innerHTML = 'You win';
        socket.disconnect();
    }

}