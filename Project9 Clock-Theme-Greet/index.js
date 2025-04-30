let isDarkMode = true;              // tells darkmode enabled or not
let isbgChanging = false;           // decided changing color or not

//Page pe greeting h2 bnaya

const greeting = document.createElement('h2');
greeting.id = "greeting";
greeting.style.color = "orangered"
document.body.appendChild(greeting);

// current date and time

function updateClock() {
    const now  = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";

    // 2digit format mei convert kia
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    //Final time bnaya
    let time = `${hours}:${minutes}:${seconds} ${ampm}`;

    // passed time to input field
    document.getElementById('text').value = time;

    // works if its true
    if(isbgChanging){
    changeBackgroundColor();
    }

    //Greeting 

    if(hours < 12){
        greeting.textContent = "Good Morning!!!!"
    }else if(hours < 16){
        greeting.textContent = "Good Afternoon!!!!" 
    }else if(hours < 20){
        greeting.textContent = "Good Evening!!!!"  
    }else{
        greeting.textContent = "Good Night!!!!"  
    }
}

    // Background changer

    function darkBackgroundColor(){
        let r = Math.random() * 128;
        let g = Math.random() * 128;
        let b = Math.random() * 128;

        return `rgb(${r}, ${g}, ${b})`
    }

    
    function lightBackgroundColor(){
        let r = (Math.random() * 128) + 128;
        let g = (Math.random() * 128) + 128;
        let b = (Math.random() * 128) + 128;

        return `rgb(${r}, ${g}, ${b})`
    }

    //Every second background changes

    function changeBackgroundColor(){
        if(isDarkMode){
            document.body.style.backgroundColor = darkBackgroundColor();
        }else{
            document.body.style.backgroundColor = lightBackgroundColor()
        }
    }

    //Toggle Button
    function toggleBtn(){
        isDarkMode = !isDarkMode;
        isbgChanging = true;
        if(isDarkMode){
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
            document.querySelector('h1').innerText = "Digital Clock with dark background";
        }else{
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
            document.querySelector('h1').innerText = "Digital Clock with light background";
        }
    }

    document.getElementById('toggleBtn').addEventListener('click',toggleBtn);


setInterval(updateClock, 1000);
updateClock();
