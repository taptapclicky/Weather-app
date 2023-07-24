var cityList =$("#city-list");
var cities = [];
// add api key as a var 

function Formatday(date){
    var date = new date ();
    console.log(date)
    var month = date.getMonth()+1;
    var day = date.getDate();

    var dayOutput = date.getFullYear() + '/' +
    (month<10 ? '0' : '' ) + month + '/' +
    (day<10 ? '0' : '') + day;
    return dayOutput;

}

init();

function init(){
var storedCities = JSON.parse(localStorage.getitem('cities'));

if (storedCities !== null) {
    cities=storedCities;
}

renderCities();

}