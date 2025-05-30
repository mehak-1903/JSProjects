const amountInput = document.getElementById('inputAmount');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const swapBtn = document.getElementById('swap');
const exchangeBtn = document.getElementById('exchangeRate');
const resultBtn = document.getElementById('result');


const API_KEY = 'af00d95629e9461bb895467b2dfd01d4';

fetch(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${API_KEY}`)
.then(response => response.json())
.then(data => {
    const currencyList = Object.keys(data.rates);     // Gives an array of all currency codes.

    currencyList.forEach(code => {
        const option1 = document.createElement('option');
        option1.value = code;
        option1.textContent = code;
        fromCurrency.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = code;
        option2.textContent = code;
        toCurrency.appendChild(option2);
    });

    // Default values
    fromCurrency.value = "USD";
    toCurrency.value = "INR";
})
.catch(error => console.log('Error', error));

swapBtn.addEventListener('click', () => {
    let temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
})
