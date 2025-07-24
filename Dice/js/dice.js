var LittleDiceNumber = document.getElementById('LittleDiceNumber');
var MediumDiceNumber = document.getElementById('MediumDiceNumber');
var BigDiceNumber = document.getElementById('BigDiceNumber');


var LittleDiceDotNumber = document.getElementById('LittleDiceDotNumber');
var MediumDiceDotNumber = document.getElementById('MediumDiceDotNumber');
var BigDiceDotNumber = document.getElementById('BigDiceDotNumber');

var LittleDice = document.getElementsByClassName('dice1');
var MediumDice = document.getElementsByClassName('dice2');
var BigDice = document.getElementsByClassName('dice3');

LittleDiceNumber.textContent = LittleDice.length;
MediumDiceNumber.textContent = MediumDice.length;
BigDiceNumber.textContent = BigDice.length;

var littleDiceDotCounter = 0;

for (var i = 0; i < LittleDice.length; i++) {
    var nokta = LittleDice[i].getElementsByTagName('div');
    for (var j = 0; j < nokta.length; j++) {
        littleDiceDotCounter++;
    }
}

LittleDiceDotNumber.textContent = littleDiceDotCounter;

var mediumDiceDotCounter = 0;

for (var i = 0; i < MediumDice.length; i++) {
    var nokta = MediumDice[i].getElementsByTagName('div');
    for (var j = 0; j < nokta.length; j++) {
        mediumDiceDotCounter++;
    }
}

MediumDiceDotNumber.textContent = mediumDiceDotCounter;

var bigDiceDotCounter = 0;

for (var i = 0; i < BigDice.length; i++) {
    var nokta = BigDice[i].getElementsByTagName('div');
    for (var j = 0; j < nokta.length; j++) {
        bigDiceDotCounter++;
    }
}
BigDiceDotNumber.textContent = bigDiceDotCounter;

function changeLittleDiceColor() {
    for (var i = 0; i < LittleDice.length; i++) {
        LittleDice[i].style.backgroundColor = 'red';
    }
}
function changeMediumDiceColor() {
    for (var i = 0; i < MediumDice.length; i++) {
        MediumDice[i].style.backgroundColor = 'blueViolet';
    }
}
function changeBigDiceColor() {
    for (var i = 0; i < BigDice.length; i++) {
        BigDice[i].style.backgroundColor = 'yellowGreen';
    }
}


