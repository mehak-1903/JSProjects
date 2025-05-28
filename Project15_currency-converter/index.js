
const API_KEY = 'af00d95629e9461bb895467b2dfd01d4';

fetch(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${API_KEY}`)
.then(response => response.json())
.data((data) => console.log(data))