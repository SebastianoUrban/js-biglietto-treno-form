//default var
const costKm = 0.2762;
const discountUnderAge = 0.175;
const discountOver65 = 0.333;

//HTML elements
let button = document.getElementById('submit');
let userName = document.getElementById('user-name')
let userSurname = document.getElementById('user-surname')
let region = document.getElementById('region')
let km = document.getElementById('km')
let age = document.getElementById('age')
let output = document.getElementById('output')
//tiket-data
let ticketRegion = document.getElementById('ticket-region-data')
let ticketName = document.getElementById('ticket-name-data')
let ticketSurname = document.getElementById('ticket-surname-data')
let ticketKm = document.getElementById('ticket-km-data')
let ticketUnderAge = document.getElementById('ticket-underage-data')
let ticketOver65 = document.getElementById('ticket-over65-data')


//when the bustton is clicked
button.addEventListener('click', function() {
    console.log(userName.value.length, userSurname.value.length, region.value, km.value, age.value)
    if( (userName.value.length > 0) && (userSurname.value.length > 0) && (region.value != '') && (km.value > 0) && (age.value > 0)  ){
        let ticketPrice = km.value * costKm;

        if(age.value < 18){
            ticketPrice = ticketPrice * (1 - discountUnderAge);
        }
        if(age.value > 65){
            ticketPrice = ticketPrice * (1 - discountOver65);
        }

        output.innerHTML = 'Il Biglietto costa: ' + ticketPrice.toFixed(2) + '&euro;';
    } else {
        alert('i dati non sono stati inseriti correttamente o dati mancanti!')
    }
});

region.addEventListener('input', function(){
    if(region.value == ''){
        ticketRegion.innerHTML = '';
    } else {
        ticketRegion.innerHTML = region.value;
    }
});

userName.addEventListener('input', function(){
    ticketName.innerHTML = userName.value;
});

userSurname.addEventListener('input', function(){
    ticketSurname.innerHTML = userSurname.value;
});

km.addEventListener('input', function(){
    if(km.value.length == 0){
        ticketKm.innerHTML = '';
    } else {
        ticketKm.innerHTML = km.value + ' Km';
    }
});

age.addEventListener('input', function(){
    if(age.value.length == 0){
        ticketUnderAge.innerHTML = '';
        ticketOver65.innerHTML = '';
    } else {
        if(age.value < 18){
            ticketUnderAge.innerHTML = '&check;';
            ticketOver65.innerHTML = '&cross;';
        } else if(age.value > 65){
            ticketUnderAge.innerHTML = '&cross;';
            ticketOver65.innerHTML = '&check;';
        } else {
            ticketUnderAge.innerHTML = '&cross;';
            ticketOver65.innerHTML = '&cross;';
        }
    }
});