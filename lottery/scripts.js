var drawn = getDrawnNumbers();
var output = document.querySelector('output');
var msg = '';

msg += '<p>Drawn numbers: </p>';
msg += `<p>${drawn.join(' , ')} </p>`;

function getDrawnNumbers() {
    var drawn = [];

    function draw() {
        return Math.floor(Math.random() * 60);
    }

    while(drawn.length < 6) {
        var d = draw();
    
        if (drawn.indexOf(d) == -1) {
            drawn[drawn.length] = d;
        }
        console.log(drawn.length, d);
    }
    return drawn;
}

var myNumbers = [4, 50, 36, 41, 8, 10];

for (i = 0; i < myNumbers.length; i++) {
    msg += `<p>${myNumbers[i]}: `;
    msg += (drawn.indexOf(myNumbers[i]) == -1) ? 'Wrong' : 'Right'
    msg += '</p>'
}

output.innerHTML = msg;