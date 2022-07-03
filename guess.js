//object containing dynamic elements

const game = { level : document.getElementById("level"),
               emotionEl : document.getElementById("emotion"),
               trialsEl : document.getElementById("trials"), 
               numberEl : document.getElementById("number-el"),
               resultEl : document.getElementById("result-el"),
               count : 10,
               levelNo: 1,
               points: 0,
               pointsEl: document.getElementById("points-el"),
               increasedNumber : 10,
               btnEl : document.getElementById("btn-el"),
               continueEl : document.getElementById("continue-el"),
               imgEl : document.getElementById("emotion"),
               containerEl1 : document.getElementsByClassName("container1"),
               containerEl2 : document.getElementsByClassName("container2")
              };


let correctGuess = Math.floor(Math.random() * game.increasedNumber) + 1;
game.pointsEl.textContent = `POINTS: ${game.points}`;
game.level.textContent = `LEVEL ${game.levelNo}: Guess a number between 1 to ${game.increasedNumber}.`             
                       
function guessGame(){
  if (Number(game.numberEl.value) === correctGuess){
     game.points += 100;
     game.pointsEl.textContent = `POINTS: ${game.points}`;
     game.resultEl.textContent = `CORRECT! Click Continue to play Next Level`;
     game.imgEl.src = "C:\\Users\\CHINWE\\Desktop\\guess_game\\happy.gif";
     game.continueEl.style.display = "block";
     game.btnEl.style.display = "none";    
}

  if (Number(game.numberEl.value) > correctGuess){
     game.count--;     
game.resultEl.textContent = `Select a lower number.
                                  You have ${game.count} lives remaining`;
}

  if (Number(game.numberEl.value) < correctGuess){
     game.count--;
     game.resultEl.textContent = `Select a higher number
                                  You have ${game.count} lives remaining`;
}

  if(game.count === 0){
     game.pointsEl.textContent = `TOTAL POINTS: ${game.points}`
     game.imgEl.src = "C:\\Users\\CHINWE\\Desktop\\guess_game\\sad.gif";
     game.resultEl.textContent = "";
     game.level.textContent = "";
     game.btnEl.style.display = "none";
     game.numberEl.style.display = "none"
}

};
 
game.btnEl.addEventListener("click", guessGame);

function continueGame() {
      game.numberEl.value = "";
      game.resultEl.textContent = "";
      game.imgEl.src = "C:\\Users\\CHINWE\\Desktop\\guess_game\\guess.gif";
      game.continueEl.style.display = "none"
      game.btnEl.style.display = "block";
      game.increasedNumber += 10;
      correctGuess = Math.floor(Math.random() * game.increasedNumber) + 1;
      game.levelNo++;
      game.count = 10;
      game.level.textContent = `LEVEL ${game.levelNo}: Guess a number between 1 to ${game.increasedNumber}`;
}

game.continueEl.addEventListener("click", continueGame);