    let isDarkMode = true;
    let isbgChanging = false;
    let timerInterval = null;          // hold an interval id -- that value jo setInterval return karta hai(unique value)
    let isPaused = false;
    let countdownDate = null;        // Make it changeable
    let isStarted = false;

    // const countdownDate = new Date('May 10, 2025 12: 00: 00').getTime();   //future date that we want to set and getime = convert that date into ms.

    function updateCountdown() {
        const now = new Date().getTime();     // current time in ms

        const difference = countdownDate - now;      // difference in ms

        if(difference <= 0){
            clearInterval(timerInterval);
            timerInterval = null;

            // Show 00: 00: 00
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';

            // Greeting 
            document.getElementById('timer-msg').textContent = '';
            document.getElementById('timer-msg').textContent = "Times Up!!!!";
            document.getElementById('timer-msg').style.color = 'crimson';

            return;   // Important stop further code.
        }
        

        // converting ms into days,hrs,mins,secs

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));

        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

        const seconds = Math.floor((difference % (1000 * 60)) / (1000));

        // Displaying time in boxes
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

        if (isbgChanging) {
            changingBg();
        }

    }

    function darkBg() {
        const r = 30 + Math.floor(Math.random() * 70);
        const g = 30 + Math.floor(Math.random() * 70);
        const b = 30 + Math.floor(Math.random() * 70);

        return `rgb(${r},${g},${b})`;
    }

    function lightBg() {
        const r = 155 + Math.floor(Math.random() * 45);
        const g = 155 + Math.floor(Math.random() * 45);
        const b = 155 + Math.floor(Math.random() * 45);

        return `rgb(${r},${g},${b})`;
    }

    function changingBg() {
        if (isbgChanging) {
            document.body.style.background = isDarkMode ? darkBg() : lightBg();
        }
    }

    function toggleBtn() {
        if(!timerInterval) return;
        isDarkMode = !isDarkMode;
        isbgChanging = true;

        if (isDarkMode) {
            document.querySelector('h1').textContent = "Countdown Timer with Dark Background";
            document.getElementById('toggleBtn').textContent = "Dark Mode On.";
        } else {
            document.querySelector('h1').textContent = "Countdown Timer with Light Background";
            document.getElementById('toggleBtn').textContent = "Light Mode On.";
        }


    }

    // Start Button

    document.getElementById('start').addEventListener('click', () => {
        //if already running, do nothing
        if (timerInterval) return;

        //Begin updating every second
        timerInterval = setInterval(updateCountdown, 1000);
        isStarted = true;
    })

    // Stop Button

    document.getElementById('stop').addEventListener('click', () => {
        clearInterval(timerInterval);
        timerInterval = null;
        // Reset the countdown display to 00

        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';

    })

    // Pause Button

    document.getElementById('pause').addEventListener('click', () => {
        if (timerInterval) {
            //Pause Timer

            clearInterval(timerInterval);  // stop the ticking
            timerInterval = null    // mark as paused
            isPaused = true;

            document.getElementById('pause').textContent = 'Resume';
        }
        else if (isPaused) {
            // Resume Timer

            timerInterval = setInterval(updateCountdown, 1000);
            isPaused = false;
            document.getElementById('pause').textContent = 'Pause'
        }
    })


    // User Input 

    document.getElementById('setTimerBtn').addEventListener('click', () => {
        const userInput = document.getElementById('userDateTime').value;

        if (!userInput) {
            document.getElementById('timer-msg').textContent = 'Please Select a Valid date and Time.';
            return;
        }

        const selectedTime = new Date(userInput).getTime();
        const now = new Date().getTime();

        if(selectedTime <= now){
            document.getElementById('timer-msg').textContent = 'Please select a **future** time';
            return;
        }

        countdownDate = selectedTime;

        document.getElementById('timer-msg').style.color = "green";
        document.getElementById('timer-msg').textContent = 'Timer is set!!! You can now start.';

        // disabled

    })
    document.getElementById('toggleBtn').addEventListener('click', toggleBtn)
    // updateCountdown()