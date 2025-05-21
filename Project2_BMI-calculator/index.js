const form = document.querySelector('form');

// this usecase will give you an empty value=> bcoz hmne phle hi isko value extract krne ko boldia bina form mei gye
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');


    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        // Show the results
        results.innerHTML = `<span>${bmi}</span>`;

        if(bmi < 18.60){
            results.innerHTML = `Under Weight = ${bmi}`;
        }else if(bmi < 24.9){
            results.innerHTML = `Normal Weight = ${bmi}`;
        }else{
            results.innerHTML = `Overweight = ${bmi}`;
        }
    }

    // 

    
})