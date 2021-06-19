function playDice() {
  var randomNumber1 = Math.floor(Math.random() * 6 + 1);
  document.getElementById('player1').src = "images/dice" + randomNumber1 + ".png"
  var randomNumber2 = Math.floor(Math.random() * 6 + 1);
  document.getElementById('player2').src = "images/dice" + randomNumber2 + ".png"
  if (randomNumber1 > randomNumber2) {
    document.getElementById('resultText').innerHTML = "<i class='fas fa-trophy'></i> Player 1 wins";
  } else if (randomNumber1 < randomNumber2) {
    document.getElementById('resultText').innerHTML = "Player 2 wins <i class='fas fa-trophy'></i>";
  } else if (randomNumber1 == randomNumber2) {
    document.getElementById('resultText').innerHTML = "<i class='fas fa-trophy'></i> Draw <i class='fas fa-trophy'></i>";
  }
}
