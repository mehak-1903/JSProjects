const clock = document.getElementById('clock');

setInterval(()=>{
    let date = new Date();              //new Date() => current time lata hai
    clock.innerHTML = date.toLocaleTimeString();                //toLocaleTimeString() => converted time into readable form
}, 1000)