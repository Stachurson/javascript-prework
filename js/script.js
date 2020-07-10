function printMessage(msg) {
    var div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}


/* Draw computer movement */

var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

if (randomNumber == '1') {
    computerMove = 'kamień'
} else if (randomNumber == '2') {
    computerMove = 'papier'
} else if (randomNumber == '3') {
    computerMove = 'nożyce'
} else {
    computerMove = 'Nieznany ruch'
}

printMessage('Ruch komputera: ' + computerMove);


/* Player move */

var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce');
console.log('wpisana odpowiedź to: ' + playerInput);

if(playerInput == '1'){
    playerMove = 'kamień'
} else if (playerInput == '2') {
    playerMove = 'papier'
} else if (playerInput == '3'){
    playerMove = 'nożyce'
} else {
    prompt('Nieznany ruch! Podaj liczbę z zakresu 1, 2 lub 3');
    if (playerInput == '1') {
        playerMove = 'kamień'
    } else if (playerInput == '2') {
        playerMove = 'papier'
    } else if (playerInput == '3') {
        playerMove = 'nożyce'
    } else {
        printMessage('Nieznany ruch drugi raz! Przegrałeś!');
    }
}

printMessage('Twój ruch to: ' + playerMove);