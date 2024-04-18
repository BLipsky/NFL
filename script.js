let gameWin = 0;
let gameLose = 0;
let gameTie = 0;

function autoFill() {
  // Check if total games reached 17
  if (gameWin + gameLose + gameTie === 17) {
    return; // Exit the function if 17 games already simulated
  }

  let autoScore = Math.random();

  if (autoScore < 0.45) {
    gameWin++;
  } else if (autoScore < 0.9) {
    gameLose++;
  } else {
    gameTie++;
  }
  
  // Update HTML elements with the new values
  document.getElementById('gameWin').textContent = gameWin;
  document.getElementById('gameLose').textContent = gameLose;
  document.getElementById('gameTie').textContent = gameTie;
}

function fillAllGames() {
  // Reset game counts
  gameWin = 0;
  gameLose = 0;
  gameTie = 0;

  // Simulate all games
  for (let i = 0; i < 17; i++) {
    autoFill();
  }
  
  // Update HTML elements with the final values
  document.getElementById('gameWin').textContent = gameWin;
  document.getElementById('gameLose').textContent = gameLose;
  document.getElementById('gameTie').textContent = gameTie;
}
