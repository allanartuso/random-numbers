module.exports = {
    currentDate: getMyDate,
    randomNumber: getRandomInt
}

function getMyDate(){

    var today  = new Date();

    myDay = formatNumber( today.getDate() );
    myMonth = formatNumber( today.getMonth() + 1 );

    myHour = formatNumber( today.getHours() );
    myMinutes = formatNumber( today.getMinutes() );
    mySeconds = formatNumber( today.getSeconds() );

    myDate = myDay + '/' + myMonth + '/' + today.getFullYear();
    myTime = myHour + ':' +  myMinutes + ':' + mySeconds;

    var currentdate = myDate + ' ' + myTime;    

    return currentdate;

}

function getRandomInt(min, max) {

    randomNumber = formatNumber( Math.floor(Math.random() * (max - min)) + min );
    return randomNumber;

}

function formatNumber(val){

    var formattedNumber = ("0" + val).slice(-2);
    return formattedNumber;

}