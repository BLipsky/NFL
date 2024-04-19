// First set of game counts
let gameWin1 = 0;
let gameLose1 = 0;
let gameTie1 = 0;

function autoFill1() {
  if (gameWin1 + gameLose1 + gameTie1 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.45) {
    gameWin1++;
  } else if (autoScore < 0.9) {
    gameLose1++;
  } else {
    gameTie1++;
  }
  document.getElementById('gameWin1').textContent = gameWin1;
  document.getElementById('gameLose1').textContent = gameLose1;
  document.getElementById('gameTie1').textContent = gameTie1;
}

function fillAllGames1() {
  gameWin1 = 0;
  gameLose1 = 0;
  gameTie1 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill1();
  }
}

// Second set of game counts
let gameWin2 = 0;
let gameLose2 = 0;
let gameTie2 = 0;

function autoFill2() {
  if (gameWin2 + gameLose2 + gameTie2 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.45) {
    gameWin2++;
  } else if (autoScore < 0.9) {
    gameLose2++;
  } else {
    gameTie2++;
  }
  document.getElementById('gameWin2').textContent = gameWin2;
  document.getElementById('gameLose2').textContent = gameLose2;
  document.getElementById('gameTie2').textContent = gameTie2;
}

function fillAllGames2() {
  gameWin2 = 0;
  gameLose2 = 0;
  gameTie2 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill2();
  }
}

// Third set of game counts
let gameWin3 = 0;
let gameLose3 = 0;
let gameTie3 = 0;

function autoFill3() {
  if (gameWin3 + gameLose3 + gameTie3 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.45) {
    gameWin3++;
  } else if (autoScore < 0.9) {
    gameLose3++;
  } else {
    gameTie3++;
  }
  document.getElementById('gameWin3').textContent = gameWin3;
  document.getElementById('gameLose3').textContent = gameLose3;
  document.getElementById('gameTie3').textContent = gameTie3;
}

function fillAllGames3() {
  gameWin3 = 0;
  gameLose3 = 0;
  gameTie3 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill3();
  }
}

// Fourth set of game counts
let gameWin4 = 0;
let gameLose4 = 0;
let gameTie4 = 0;

function autoFill4() {
  if (gameWin4 + gameLose4 + gameTie4 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.45) {
    gameWin4++;
  } else if (autoScore < 0.9) {
    gameLose4++;
  } else {
    gameTie4++;
  }
  document.getElementById('gameWin4').textContent = gameWin4;
  document.getElementById('gameLose4').textContent = gameLose4;
  document.getElementById('gameTie4').textContent = gameTie4;
}

function fillAllGames4() {
  gameWin4 = 0;
  gameLose4 = 0;
  gameTie4 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill4();
  }
}

let gameWin5 = 0;
let gameLose5 = 0;
let gameTie5 = 0;

function autoFill5() {
  if (gameWin5 + gameLose5 + gameTie5 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.45) {
    gameWin5++;
  } else if (autoScore < 0.9) {
    gameLose5++;
  } else {
    gameTie5++;
  }
  document.getElementById('gameWin5').textContent = gameWin5;
  document.getElementById('gameLose5').textContent = gameLose5;
  document.getElementById('gameTie5').textContent = gameTie5;
}

function fillAllGames5() {
  gameWin5 = 0;
  gameLose5 = 0;
  gameTie5 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill5();
  }
  document.getElementById('gameWin5').textContent = gameWin5;
  document.getElementById('gameLose5').textContent = gameLose5;
  document.getElementById('gameTie5').textContent = gameTie5;
}

// Repeat the above pattern for teams 6 through 16

// Team 6
let gameWin6 = 0;
let gameLose6 = 0;
let gameTie6 = 0;

function autoFill6() {
  if (gameWin6 + gameLose6 + gameTie6 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.45) {
    gameWin6++;
  } else if (autoScore < 0.9) {
    gameLose6++;
  } else {
    gameTie6++;
  }
  document.getElementById('gameWin6').textContent = gameWin6;
  document.getElementById('gameLose6').textContent = gameLose6;
  document.getElementById('gameTie6').textContent = gameTie6;
}

function fillAllGames6() {
  gameWin6 = 0;
  gameLose6 = 0;
  gameTie6 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill6();
  }
  document.getElementById('gameWin6').textContent = gameWin6;
  document.getElementById('gameLose6').textContent = gameLose6;
  document.getElementById('gameTie6').textContent = gameTie6;
}

let gameWin7 = 0;
let gameLose7 = 0;
let gameTie7 = 0;

function autoFill7() {
  if (gameWin7 + gameLose7 + gameTie7 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.45) {
    gameWin7++;
  } else if (autoScore < 0.9) {
    gameLose7++;
  } else {
    gameTie7++;
  }
  document.getElementById('gameWin7').textContent = gameWin7;
  document.getElementById('gameLose7').textContent = gameLose7;
  document.getElementById('gameTie7').textContent = gameTie7;
}

function fillAllGames7() {
  gameWin7 = 0;
  gameLose7 = 0;
  gameTie7 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill7();
  }
  document.getElementById('gameWin7').textContent = gameWin7;
  document.getElementById('gameLose7').textContent = gameLose7;
  document.getElementById('gameTie7').textContent = gameTie7;
}

// Team 8
let gameWin8 = 0;
let gameLose8 = 0;
let gameTie8 = 0;

function autoFill8() {
  if (gameWin8 + gameLose8 + gameTie8 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.45) {
    gameWin8++;
  } else if (autoScore < 0.9) {
    gameLose8++;
  } else {
    gameTie8++;
  }
  document.getElementById('gameWin8').textContent = gameWin8;
  document.getElementById('gameLose8').textContent = gameLose8;
  document.getElementById('gameTie8').textContent = gameTie8;
}

function fillAllGames8() {
  gameWin8 = 0;
  gameLose8 = 0;
  gameTie8 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill8();
  }
  document.getElementById('gameWin8').textContent = gameWin8;
  document.getElementById('gameLose8').textContent = gameLose8;
  document.getElementById('gameTie8').textContent = gameTie8;
}

let gameWin9 = 0;
let gameLose9 = 0;
let gameTie9 = 0;

function autoFill9() {
  if (gameWin9 + gameLose9 + gameTie9 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.45) {
    gameWin9++;
  } else if (autoScore < 0.9) {
    gameLose9++;
  } else {
    gameTie9++;
  }
  document.getElementById('gameWin9').textContent = gameWin9;
  document.getElementById('gameLose9').textContent = gameLose9;
  document.getElementById('gameTie9').textContent = gameTie9;
}

function fillAllGames9() {
  gameWin9 = 0;
  gameLose9 = 0;
  gameTie9 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill9();
  }
  document.getElementById('gameWin9').textContent = gameWin9;
  document.getElementById('gameLose9').textContent = gameLose9;
  document.getElementById('gameTie9').textContent = gameTie9;
}
let gameWin10 = 0;
let gameLose10 = 0;
let gameTie10 = 0;

function autoFill10() {
  if (gameWin10 + gameLose10 + gameTie10 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.45) {
    gameWin10++;
  } else if (autoScore < 0.9) {
    gameLose10++;
  } else {
    gameTie10++;
  }
  document.getElementById('gameWin10').textContent = gameWin10;
  document.getElementById('gameLose10').textContent = gameLose10;
  document.getElementById('gameTie10').textContent = gameTie10;
}

function fillAllGames10() {
  gameWin10 = 0;
  gameLose10 = 0;
  gameTie10 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill10();
  }
  document.getElementById('gameWin10').textContent = gameWin10;
  document.getElementById('gameLose10').textContent = gameLose10;
  document.getElementById('gameTie10').textContent = gameTie10;
}


let gameWin11 = 0;
let gameLose11 = 0;
let gameTie11 = 0;

function autoFill11() {
  if (gameWin11 + gameLose11 + gameTie11 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.45) {
    gameWin11++;
  } else if (autoScore < 0.9) {
    gameLose11++;
  } else {
    gameTie11++;
  }
  document.getElementById('gameWin11').textContent = gameWin1;
  document.getElementById('gameLose11').textContent = gameLose11;
  document.getElementById('gameTie11').textContent = gameTie11;
}

function fillAllGames11() {
  gameWin11 = 0;
  gameLose11 = 0;
  gameTie11 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill11();
  }
  document.getElementById('gameWin11').textContent = gameWin11;
  document.getElementById('gameLose11').textContent = gameLose11;
  document.getElementById('gameTie11').textContent = gameTie11;
}
let gameWin12 = 0;
let gameLose12 = 0;
let gameTie12 = 0;

function autoFill12() {
  if (gameWin12 + gameLose12 + gameTie12 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.45) {
    gameWin12++;
  } else if (autoScore < 0.9) {
    gameLose12++;
  } else {
    gameTie12++;
  }
  document.getElementById('gameWin12').textContent = gameWin12;
  document.getElementById('gameLose12').textContent = gameLose12;
  document.getElementById('gameTie12').textContent = gameTie12;
}

function fillAllGames12() {
  gameWin12 = 0;
  gameLose12 = 0;
  gameTie12 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill12();
  }
  document.getElementById('gameWin12').textContent = gameWin12;
  document.getElementById('gameLose12').textContent = gameLose12;
  document.getElementById('gameTie12').textContent = gameTie12;
}

// Team 13
let gameWin13 = 0;
let gameLose13 = 0;
let gameTie13 = 0;

function autoFill13() {
  if (gameWin13 + gameLose13 + gameTie13 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.45) {
    gameWin13++;
  } else if (autoScore < 0.9) {
    gameLose13++;
  } else {
    gameTie13++;
  }
  document.getElementById('gameWin13').textContent = gameWin13;
  document.getElementById('gameLose13').textContent = gameLose13;
  document.getElementById('gameTie13').textContent = gameTie13;
}

function fillAllGames13() {
  gameWin13 = 0;
  gameLose13 = 0;
  gameTie13 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill13();
  }
  document.getElementById('gameWin13').textContent = gameWin13;
  document.getElementById('gameLose13').textContent = gameLose13;
  document.getElementById('gameTie13').textContent = gameTie13;
}
let gameWin14 = 0;
let gameLose14 = 0;
let gameTie14 = 0;

function autoFill14() {
  if (gameWin14 + gameLose14 + gameTie14 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.45) {
    gameWin14++;
  } else if (autoScore < 0.9) {
    gameLose14++;
  } else {
    gameTie14++;
  }
  document.getElementById('gameWin14').textContent = gameWin14;
  document.getElementById('gameLose14').textContent = gameLose14;
  document.getElementById('gameTie14').textContent = gameTie14;
}

function fillAllGames14() {
  gameWin14 = 0;
  gameLose14 = 0;
  gameTie14 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill14();
  }
  document.getElementById('gameWin14').textContent = gameWin14;
  document.getElementById('gameLose14').textContent = gameLose14;
  document.getElementById('gameTie14').textContent = gameTie14;
}

// Team 15
let gameWin15 = 0;
let gameLose15 = 0;
let gameTie15 = 0;

function autoFill15() {
  if (gameWin15 + gameLose15 + gameTie15 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.45) {
    gameWin15++;
  } else if (autoScore < 0.9) {
    gameLose15++;
  } else {
    gameTie15++;
  }
  document.getElementById('gameWin15').textContent = gameWin15;
  document.getElementById('gameLose15').textContent = gameLose15;
  document.getElementById('gameTie15').textContent = gameTie15;
}

function fillAllGames15() {
  gameWin15 = 0;
  gameLose15 = 0;
  gameTie15 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill15();
  }
  document.getElementById('gameWin15').textContent = gameWin15;
  document.getElementById('gameLose15').textContent = gameLose15;
  document.getElementById('gameTie15').textContent = gameTie15;
}

// Team 16
let gameWin16 = 0;
let gameLose16 = 0;
let gameTie16 = 0;

function autoFill16() {
  if (gameWin16 + gameLose16 + gameTie16 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.45) {
    gameWin16++;
  } else if (autoScore < 0.9) {
    gameLose16++;
  } else {
    gameTie16++;
  }
  document.getElementById('gameWin16').textContent = gameWin16;
  document.getElementById('gameLose16').textContent = gameLose16;
  document.getElementById('gameTie16').textContent = gameTie16;
}

function fillAllGames16() {
  gameWin16 = 0;
  gameLose16 = 0;
  gameTie16 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill16();
  }
  document.getElementById('gameWin16').textContent = gameWin16;
  document.getElementById('gameLose16').textContent = gameLose16;
  document.getElementById('gameTie16').textContent = gameTie16;
}