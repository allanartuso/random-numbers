function getData(data){

    myDate = data.myDate;
    myNumber = data.myNumber;
    
    createRow();
    writeData(myDate, myNumber); 
    
};

function createRow(){

    row = document.createElement('tr');
    celDate = document.createElement('td');
    celNumber = document.createElement('td');

    row.appendChild(celDate);
    row.appendChild(celNumber);

    tableRandomBody.appendChild(row);

    checkRows();

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

        if(!textWait.classList.contains('hide')){
            textWait.classList.add('hide');
        }        
        
    }

    if(rows.length>10){
        document.getElementsByTagName('tr')[1].remove();
    }

}