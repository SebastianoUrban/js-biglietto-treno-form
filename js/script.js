//default var
const costKm = 0.2762;
const discountUnderAge = 0.175;
const discountOver65 = 0.333;

//HTML elements
let button = document.getElementById('submit');
let km = document.getElementById('km')
let age = document.getElementById('age')
let output = document.getElementById('output')

//when the bustton is clicked
button.addEventListener('click', function() {
    let ticketPrice = km.value * costKm;

    if(age.value < 18){
        ticketPrice = ticketPrice * (1 - discountUnderAge);
    }
    if(age.value > 65){
        ticketPrice = ticketPrice * (1 - discountOver65);
    }

    console.log('Il Biglietto costa: ' + ticketPrice.toFixed(2))
    output.innerHTML = 'Il Biglietto costa: ' + ticketPrice.toFixed(2) + '&euro;'
});