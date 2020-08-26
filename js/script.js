
const buttonRock = document.getElementById('button-rock'),
  buttonPaper = document.getElementById('button-paper'),
  buttonScissors = document.getElementById('button-scissors');

let argButtonName,
playerName = prompt('Jak masz na imię ?');

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

  let argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

  /**
   * Describe this function...
   */
  function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
    }
  }

  /**
   * Describe this function...
   */
  function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
      printMessage(playerName + ' wygrywasz!');
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
      printMessage(playerName + ' wygrywasz!');
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
      printMessage(playerName + ' wygrywasz!');
    } else if (argPlayerMove == argComputerMove) {
      printMessage('Remis!');
    }
    else {
      printMessage(playerName + ' przegrywasz :(');
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  }

  playerMove = argButtonName;
  console.log('wybór ruchu gracza to: ' + playerInput);
  console.log('ruch gracza to: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
}

buttonRock.addEventListener('click', function () { buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function () { buttonClicked('papier'); });
buttonScissors.addEventListener('click', function () { buttonClicked('nożyce'); });