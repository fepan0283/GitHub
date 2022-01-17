let currentPlayer = 'cross';
let selectedFields = [];
let winner;
let roundsPlayed = 0;

function selectField(id) {
    number = id.slice(-1);
    if (currentPlayer === 'cross') {
        document.getElementById('cross'+ number).classList.remove('d-none');
        document.getElementById('circle'+ number).remove();
        currentPlayer = 'circle';
        selectedFields[number] = 'cross';
        roundsPlayed++;
    } else {
        document.getElementById('circle'+ number).classList.remove('d-none');
        document.getElementById('cross'+ number).remove();
        currentPlayer = 'cross';
        selectedFields[number] = 'circle';
        roundsPlayed++;
    }
    checkForWinner()    
}

function checkForWinner() {
    // rows
    if (selectedFields[1] === selectedFields[2] && selectedFields[1] === selectedFields[3] && selectedFields[1]) {
        setTimeout(function(){ alertWinner(); }, 500);
    }
    if (selectedFields[4] === selectedFields[5] && selectedFields[6] === selectedFields[4] && selectedFields[4]) {
        setTimeout(function(){ alertWinner(); }, 500);
    }
    if (selectedFields[7] === selectedFields[8] && selectedFields[9] === selectedFields[7] && selectedFields[7]) {
        setTimeout(function(){ alertWinner(); }, 500);
    }
    // columns
    if (selectedFields[1] === selectedFields[4] && selectedFields[1] === selectedFields[7] && selectedFields[1]) {
        setTimeout(function(){ alertWinner(); }, 500);
    }
    if (selectedFields[2] === selectedFields[5] && selectedFields[2] === selectedFields[8] && selectedFields[2]) {
        setTimeout(function(){ alertWinner(); }, 500);
    }
    if (selectedFields[3] === selectedFields[6] && selectedFields[3] === selectedFields[9] && selectedFields[3]) {
        setTimeout(function(){ alertWinner(); }, 500);
    }
    // diagonals
    if (selectedFields[1] === selectedFields[5] && selectedFields[1] === selectedFields[9] && selectedFields[1]) {
        setTimeout(function(){ alertWinner(); }, 500);
    }
    if (selectedFields[3] === selectedFields[5] && selectedFields[3] === selectedFields[7] && selectedFields[3]) {
        setTimeout(function(){ alertWinner(); }, 500);
    }
    if (roundsPlayed === 9) {
        document.getElementById('winner').innerHTML = "nobody you monkeys";
        setTimeout(function(){ restartGame(); }, 500);
    }
}

function alertWinner() {
    document.getElementById('winner-popup').classList.remove("d-none");
    if (currentPlayer === 'circle') {
        document.getElementById('winner').innerHTML = "Player 1";
    } else {
        document.getElementById('winner').innerHTML = "Player 2";
    }
    
}

function restartGame() {
    location.reload();
}