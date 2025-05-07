const text = document.getElementById("text");
const double = document.getElementById("double");
const halve = document.getElementById("halve");
const clear = document.getElementById("clear");

let result;

double.addEventListener('click', () => {
    let value = parseInt(text.value) || 0;


    if (value <= 0) {
        alert("Please Give Positive Values");
        text.disabled = true;
        double.disabled = true;
        return;                 // means code yahi pe stop krgya
    }

    result = value * 2;
    text.value = result;

    text.disabled = false;
    halve.disabled = false;

})

halve.addEventListener('click', () => {
    let value = parseInt(text.value) || 0;

    if (value <= 1) {
        alert("Please Give Positive Values");
        text.disabled = true;
        halve.disabled = true;
        return;
    }

    result = value / 2;
    text.value = result;

    text.disabled = false;
    halve.disabled = false;

})

clear.addEventListener('click', () => {
    text.value = "";
    text.disabled = false;
    double.disabled = false;
    halve.disabled = false;
})