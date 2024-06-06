var nComputer = '';
var nPlayer = '';
var myChoice = '';

function draw(max) {
    return Math.floor(Math.random() * max);
}

function play() {
    nPlayer = Number(document.querySelector('#myNumber').value);
    nComputer = draw(5);
    myChoice = document.querySelector('input[type="radio"]:checked').value;

    if (!nPlayer) {
        alert('Text a number between 0 to 5!');
        return;
    }

    var total = nPlayer + nComputer;
    var res = (total % 2 == 0) ? 'even' : 'odd';

    checkResult(res);
}

function checkResult(res) {
    if (myChoice == res) {
        alert('You won!');
    } else {
        alert('You lost, the computer won!');
    }

    console.log(nPlayer, nComputer)
}