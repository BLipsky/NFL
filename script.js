let gameWin = 0;
let gameLose = 0;
let gameTie = 0;

function autoFill() {
  let autoScore = Math.random();

  if (autoScore < 0.45) {
    gameWin++;
  } else if (autoScore < 0.9) {
    gameLose++;
  } else {
    gameTie++;
  }
}

for (let i = 0; i < 17; i++) {
  autoFill();
}

console.log("Wins:", gameWin, "Losses:", gameLose, "Ties:", gameTie);
