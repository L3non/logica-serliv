var n1 = '0';
var operation = null;
var n2 = '';
var clickedInEqual = false;

function showsOnDisplay(value) {
    document.querySelector('output').innerHTML = value;
}

function addNum(num) {
    if (n2 && operation && clickedInEqual) {
        clickedInEqual = false;
        clean();
        n1 = num;
        showsOnDisplay(n1);
        return;
    }

    if (operation != null) {
        n2 += num;
        showsOnDisplay(n2);
    } else {
        if (n1 == '0') {
            n1 = num;
        } else {
            n1 += num;
        }
        showsOnDisplay(n1);
    }
}

function startCalc(symbol) {
    if (clickedInEqual) {
        clickedInEqual = false;
        n2 = '';
    }

    if (operation == null || n2 == '') {
        operation = symbol;
    } else {
        var res = calculate();
        n1 = res;
        operation = symbol;
        n2 = '';
        showsOnDisplay(n1);
    }
}

function calculate() {
    var nCalculated = 0;
    var nn1 = Number(n1);
    var nn2 = Number(n2);

    switch(operation){
        case '+':
            nCalculated = nn1 + nn2
            break;
        case '-':
            nCalculated = nn1 - nn2
            break;
        case '*':
            nCalculated = nn1 * nn2
            break;
        case '/':
            nCalculated = nn1 / nn2
            break;
        case '+':
            nCalculated = nn1 + nn2
            break;
    }
    return nCalculated;
}

function getPercent() {
    if (!n2) {
        clean();
        showsOnDisplay(n1);
    } else {
        if (operation == '+' || operation == '-') {
            var percent = n1 * n2 / 100;
        } else {
            var percent = n2 / 100;
        }        
        n2 = percent;
        showsOnDisplay(n2);
    }
}

function addFloat() {
    if (operation && n2 == '') {
        n2 = '0.';
    } else if (operation && n2) {
        n2 += '.';
    } else {
        n1 += '.';
    }
}

function clean() {
    n1 = '0';
    operation = null;
    n2 = '';
    showsOnDisplay(n1);
}

function backSpace() {
    if (n2 && operation) {
        n2 == n2.slice(0, -1);
        if (n2 == '') {
            operation = null;
        }
        showsOnDisplay(n2);
    } else if (operation) {
        showsOnDisplay(n1);
    } else {
        n1 = n1.slice(0, -1);
        if (n1 == '') {
            n1 = '0';
        }
        showsOnDisplay(n1);
    }
}

function finishCalc() {
    clickedInEqual = true;
    var res = calculate();
    n1 = res;
    showsOnDisplay(n1);
}