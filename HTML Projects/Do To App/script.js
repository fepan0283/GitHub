timerInput = [0,0,0];

function importInput() {
    timerInput[0] = parseInt(document.getElementById('hours-input').value);
    timerInput[1] = parseInt(document.getElementById('minutes-input').value);
    timerInput[2] = parseInt(document.getElementById('seconds-input').value);
    console.log(timerInput)
    document.getElementById('hours').innerHTML = timerInput[0]
    document.getElementById('minutes').innerHTML = timerInput[1]
    document.getElementById('seconds').innerHTML = timerInput[2]
    updateTimer();
}

function updateTimer(){
        endTimer()
        setTimeout(function(){ updateSeconds()}, 10);
}

function updateSeconds() {
    if (timerInput[2] === 0) {
        timerInput[2] = 60;
    }
    timerInput[2] = timerInput[2] - 1;
    document.getElementById('seconds').innerHTML = timerInput[2];
    updateMinutes()
}

function updateMinutes() {
    if (timerInput[2] === 59 && timerInput[1] > 0) {
        timerInput[1] = timerInput[1] - 1;
        document.getElementById('minutes').innerHTML = timerInput[1];
        updateHours()
    } else {
        updateHours()
    }
}

function updateHours() {
    if (timerInput[1] === 0 && timerInput[2] === 0 && timerInput[0] > 0) {
        timerInput[0] = timerInput[0] - 1;
        timerInput[1] = timerInput[1] + 60;
        document.getElementById('hours').innerHTML = timerInput[0];
        updateTimer()
    } else {
        updateTimer()
    }
}

function endTimer() {
    if (timerInput[0] === 0 && timerInput[1] === 0 && timerInput[2] === 59) {
        alert("Timer is over!");
        location.reload();
    }
}