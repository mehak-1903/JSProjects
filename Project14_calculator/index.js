const input = document.getElementById('input');

const buttons = document.querySelectorAll('button');

let string = '';     // user jo type karega (number ya operator) woh store hoga

let isResultShown = false;     // Yeh ek flag (bool type variable) hai jo batata hai ki kya result abhi abhi dikhaya gaya hai (jaise after pressing =). Agar true hai, toh agla input reset ho jaayega.

// yeh hmei hmare sbhi buttons ka array bnakr dera hai
let arr = Array.from(buttons);

// looping Array
arr.forEach(button => {
    button.addEventListener('click', (e) => {

        const value = e.target.innerHTML;        //Yeh us button ka text ya value nikal raha hai (jaise '1', '+', '=', etc).
        if (value === '=') {
            string = eval(string);
            input.value = string;
            isResultShown = true;
        }
        else if (value === 'AC') {
            string = '';
            input.value = string;
            isResultShown = false;
        }
        else if (value === 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
            isResultShown = false;
        }
        else {
             // If result was just shown and user clicks a number, start fresh
            if (isResultShown && !isNaN(value)) {
                string = value;
                isResultShown = false;
            } else {
                string += value;
                isResultShown = false;

            }
            input.value = string;

        }
    })
})