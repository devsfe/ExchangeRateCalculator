var input_1 = document.getElementById('input_1');
var input_2 = document.getElementById('input_2');
var exchangeRate_1 = document.getElementById('exchangeRate_1');
var exchangeRate_2 = document.getElementById('exchangeRate_2');



var valueExchange1 = exchangeRate_1.value;
var valueExchange1 = exchangeRate_2.value;

function calculate() {

    
    
     fetch(`https://api.exchangeratesapi.io/latest?base=${valueExchange1}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.rates.base * 2);
        })

}

// Events
input_1.addEventListener('input', calculate);
input_2.addEventListener('input', calculate);
exchangeRate_1.addEventListener('change', calculate);
exchangeRate_2.addEventListener('change', calculate);    