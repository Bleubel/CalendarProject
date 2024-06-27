let monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

//Variables para establecer una fecha:

let currentDate = new Date(); //Fecha del pc. Como referencia.

let currentDay = currentDate.getDate(); //Esto nos devuelve el dia de la semana.
let monthNumber = currentDate.getMonth(); //Consigo el mes.
let currentYear = currentDate.getFullYear(); // Consigo el anio.

//console.log(currentDay + '/' + monthNumber + '/' + currentYear);PRUEBA

let dates = document.getElementById('dates');
let month = document.getElementById('month');
let year = document.getElementById('year');

let monthPrevDOM = document.getElementById('monthPrev');
let monthNextDOM = document.getElementById('monthNext');

month.textContent = monthNames[monthNumber];
year.textContent = currentYear.toString();

monthPrevDOM.addEventListener('click',()=>lastMonth ());
monthNextDOM.addEventListener('click',()=>nextMonth());

writeMonth(monthNumber);
//funciones:

function writeMonth(month){

    for(let i=1; i<=getTotalDays(month); i++){
        dates.innerHTML += ` <div class ="calendarDate calendarItem">${i}</div>`;
    }
}

//Obtenemos el total de dias
function getTotalDays(month){
    if (month === -1) month = 11;

    if (month == 0 || month ==2 || month == 4 || month == 6 || month == 7 || month == 9 || month ==11){

        return 31;

    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
        return 30;

    } else {
        return isLeap() ? 29:28; //Operador ternario, condicion ? true : false.
    }
}

//Si year es biciesto
function isLeap(){
    return ((currentYear % 100 !== 0) && (currentYear % 4 === 0) || (currentYear % 400 === 0))
        
    
}

//En que dia empezaria la semana. Crea una nueva fecha para ver donde cae el d'ia uno del mes. 
function startDay(){
    let start = new Date(currentYear, monthNumber, 1);
    return ((start.getDay()-1 )=== -1) ? 6 : start.getDay()-1;

}

function lastMonth (){
    if (monthNumber !== 0){
        monthNumber--;
    }else{
        monthNumber = 11;
        currentYear--;
    }
    setNewDate();
}

function nextMonth(){
    if (monthNumber !== 11){
        monthNumber++;
    }else{
        monthNumber = 0;
        currentYear++;
    }
    setNewDate();
}
//fecha cuando movamos el calendario.
function setNewDate(){
    currentDate.setFullYear(currentYear,monthNumber,currentDay);
    month.textContent = monthNames[monthNumber];
    year.textContent = currentYear.toString();



}