//select HTML elements

const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

// initialize timer variables

let totalSeconds = 25 * 60; // 25 minutes
let timerInterval = null;
let isRunning  = false;
let sessionsCompleted = 0;
const sessionCountDisplay = document.getElementById('session-count');

// function to display time

function displayTime() {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    // adds leading zero if needed 
    minutesDisplay.textContent = minutes < 10 ? '0' + minutes : minutes;
    secondsDisplay.textContent = seconds < 10 ? '0' + seconds : seconds;
}   

// timer to count down every second

function countdown() {
    if (totalSeconds > 0) {
        totalSeconds--;
        displayTime();
    } else {

        // Timer finished

      pauseTimer();
        sessionsCompleted++;
        sessionCountDisplay.textContent = sessionsCompleted;
        alertSound.play();
      alert("Time's up! Take a break! 🎉");
    }   
}
//start timer function
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        document.querySelector('.timer-display').classList.add('running');
        document.querySelector('.timer-display').classList.remove('paused');
        timerInterval = setInterval(countdown, 1000);
        
    }
}

// pause timer function
function pauseTimer() {
    isRunning = false;
        
        document.querySelector('.timer-display').classList.add('paused');
        document.querySelector('.timer-display').classList.remove('running');
        clearInterval(timerInterval);
    }


// reset timer function
function resetTimer() {
    pauseTimer();
    totalSeconds = 25 * 60;
    displayTime();
}   

const alertSound = document.getElementById('alert-sound');

// event listeners for buttons
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
displayTime();

