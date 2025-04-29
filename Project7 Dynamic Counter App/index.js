const add = document.getElementById("add");
const subtract = document.getElementById("subt");
const clear = document.getElementById("clear");
const text = document.getElementById("text");

// Background Color functions

// Dark background

function darkBackgroundColor() {
    const r = Math.floor(Math.random() * 128);
    const g = Math.floor(Math.random() * 128);
    const b = Math.floor(Math.random() * 128);

    return `rgb(${r},${g},${b})`;
}

// Light Background Color

function lightBackgroundColor() {
    const r = Math.floor(Math.random() * 128) + 128;
    const g = Math.floor(Math.random() * 128) + 128;
    const b = Math.floor(Math.random() * 128) + 128;

    return `rgb(${r},${g},${b})`;
}

add.addEventListener("click", () => {
    let value = parseInt(text.value) || 0;      // text.value string return krta hai
    if(value < 0){
        alert("Please enter a number greater than or equal to zero.");
        text.value = "";
        return;
    }
    value++;
    text.value = value;   // text.value = input text ki value jo ki number hai usko leta hai... in this LOC, yeh value ko vapise se box mei dalrha hai   
    document.body.style.backgroundColor = darkBackgroundColor();
    text.disabled = false;
    subtract.disabled = false;
})

subtract.addEventListener("click", () => {
    let value = parseInt(text.value) || 0;
    if (value <= 0) {
        text.disabled = true;
        subtract.disabled = true;
        return;
    }

    value--;
    text.value = value;
    document.body.style.backgroundColor = lightBackgroundColor();

    text.disabled = false;
    subtract.disabled = false;
    
})

clear.addEventListener('click', () => {
    text.value = "";
    text.disabled = false;
    subtract.disabled = false;
    document.body.style.backgroundColor = "#fff";
})