const button = document.querySelectorAll('.button');

const body = document.querySelector('body');

button.forEach((button) => {
    button.addEventListener('click', (e)=>{
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;    // e.target.id -> the color that we selected on our browser window... we can also write 'red' color
        }
        else if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'orangered'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id;
        }
        else{
            body.style.backgroundColor = 'white';
        }
    })
})