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

// Swap Button.
swapBtn.addEventListener('click', () => {
    let temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
})

// Exchange button.
exchangeBtn.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);     // converting string value into number. eg: "100"
    const from = fromCurrency.value;       // takes selected values into dropdown. (fromCurrency) eg: USD
    const to = toCurrency.value;           // takes selected values into dropdown. (toCurrency) eg: INR

    if(isNaN(amount) || amount <= 0){        // agr amount NaN/ <=0, toh error message aajega, and function return hojaega.
        resultBtn.value = "Please enter a valid amount.";
        return;
    }

    fetch(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
        const rateFrom = parseFloat(data.rates[from]);   // from USD = "1"
        const rateTo = parseFloat(data.rates[to]);       // to INR = "83.35"

        const convertedAmount = (amount / rateFrom) * rateTo;        // (100 / 1) * 83.35 = 8335 INR
        resultBtn.value = `${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`;
    })
    .catch(err => {
        console.error("Conversion Error: ", err);
        resultBtn.textContent = "Something went Wrong!!!";
    })
})