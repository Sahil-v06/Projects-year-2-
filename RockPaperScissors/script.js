let button = document.querySelectorAll(".button");
let no = document.querySelectorAll(".no");
let temp, player = 0, robot = 0, random, val = 0;

no.forEach((no) => {
    no.addEventListener("click", () => {
        val = parseInt(no.value); 
    });
});

function disableGame() {
    document.querySelectorAll('.button').forEach(btn => btn.disabled = true);
}

function checkWinner() {
    if (player + robot === val) {
        if (player > robot) {
            document.getElementById('winner').innerText = 'Player Won!';
        } else if (robot > player) {
            document.getElementById('winner').innerText = 'Robot Won!';
        } else {
            document.getElementById('winner').innerText = 'It\'s a Tie!';
        }
        disableGame();
    }
}

function updateScore() {
    document.getElementById('score').innerText = `Player: ${player}  Robot: ${robot}`;
    checkWinner();
}

function rock() {
    random = Math.floor(Math.random() * 3);
    if (random == 0) {
        document.getElementById('response').innerText = 'scissors';
        player++;
    } else if (random == 2) {
        document.getElementById('response').innerText = 'paper';
        robot++;
    } else {
        document.getElementById('response').innerText = 'rock';
    }
    updateScore();
}

function paper() {
    random = Math.floor(Math.random() * 3);
    if (random == 1) {
        document.getElementById('response').innerText = 'rock';
        player++;
    } else if (random == 0) {
        document.getElementById('response').innerText = 'scissors';
        robot++;
    } else {
        document.getElementById('response').innerText = 'paper';
    }
    updateScore();
}

function scissors() {
    random = Math.floor(Math.random() * 3);
    if (random == 2) {
        document.getElementById('response').innerText = 'paper';
        player++;
    } else if (random == 1) {
        document.getElementById('response').innerText = 'rock';
        robot++;
    } else {
        document.getElementById('response').innerText = 'scissors';
    }
    updateScore();
}

function reset() {
    player = 0;
    robot = 0;
    val = 0;
    document.getElementById('score').innerText = `Player: ${player}  Robot: ${robot}`;
    document.getElementById('response').innerText = '';
    document.getElementById('winner').innerText = '';
    document.querySelectorAll('.button').forEach(btn => btn.disabled = false);
}
