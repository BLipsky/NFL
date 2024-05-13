let gameWin1 = 0;
let gameLose1 = 0;
let gameTie1 = 0;

// Team 1
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
  document.getElementById('gameWin1').value = gameWin1;
  document.getElementById('gameLose1').value = gameLose1;
  document.getElementById('gameTie1').value = gameTie1;
}
function fillAllGames1() {
  gameWin1 = 0;
  gameLose1 = 0;
  gameTie1 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill1();
  }
}
let gameWin2 = 0;
let gameLose2 = 0;
let gameTie2 = 0;

// Team 2
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
  document.getElementById('gameWin2').value = gameWin2;
  document.getElementById('gameLose2').value = gameLose2;
  document.getElementById('gameTie2').value = gameTie2;
}
function fillAllGames2() {
  gameWin2 = 0;
  gameLose2 = 0;
  gameTie2 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill2();
  }
}
let gameWin3 = 0;
let gameLose3 = 0;
let gameTie3 = 0;

// Team 3
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
  document.getElementById('gameWin3').value = gameWin3;
  document.getElementById('gameLose3').value = gameLose3;
  document.getElementById('gameTie3').value = gameTie3;
}
function fillAllGames3() {
  gameWin3 = 0;
  gameLose3 = 0;
  gameTie3 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill3();
  }
}
let gameWin4 = 0;
let gameLose4 = 0;
let gameTie4 = 0;

// Team 4
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
  document.getElementById('gameWin4').value = gameWin4;
  document.getElementById('gameLose4').value = gameLose4;
  document.getElementById('gameTie4').value = gameTie4;
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

// Team 5
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
  document.getElementById('gameWin5').value = gameWin5;
  document.getElementById('gameLose5').value = gameLose5;
  document.getElementById('gameTie5').value = gameTie5;
}
function fillAllGames5() {
  gameWin5 = 0;
  gameLose5 = 0;
  gameTie5 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill5();
  }
  document.getElementById('gameWin5').value = gameWin5;
  document.getElementById('gameLose5').value = gameLose5;
  document.getElementById('gameTie5').value = gameTie5;
}

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
  document.getElementById('gameWin6').value = gameWin6;
  document.getElementById('gameLose6').value = gameLose6;
  document.getElementById('gameTie6').value = gameTie6;
}
function fillAllGames6() {
  gameWin6 = 0;
  gameLose6 = 0;
  gameTie6 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill6();
  }
  document.getElementById('gameWin6').value = gameWin6;
  document.getElementById('gameLose6').value = gameLose6;
  document.getElementById('gameTie6').value = gameTie6;
}
let gameWin7 = 0;
let gameLose7 = 0;
let gameTie7 = 0;

// Team 7
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
  document.getElementById('gameWin7').value = gameWin7;
  document.getElementById('gameLose7').value = gameLose7;
  document.getElementById('gameTie7').value = gameTie7;
}
function fillAllGames7() {
  gameWin7 = 0;
  gameLose7 = 0;
  gameTie7 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill7();
  }
  document.getElementById('gameWin7').value = gameWin7;
  document.getElementById('gameLose7').value = gameLose7;
  document.getElementById('gameTie7').value = gameTie7;
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
  document.getElementById('gameWin8').value = gameWin8;
  document.getElementById('gameLose8').value = gameLose8;
  document.getElementById('gameTie8').value = gameTie8;
}
function fillAllGames8() {
  gameWin8 = 0;
  gameLose8 = 0;
  gameTie8 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill8();
  }
  document.getElementById('gameWin8').value = gameWin8;
  document.getElementById('gameLose8').textContent = gameLose8;
  document.getElementById('gameTie8').textContent = gameTie8;
}
let gameWin9 = 0;
let gameLose9 = 0;
let gameTie9 = 0;

// Team 9
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
  document.getElementById('gameLose9').value = gameLose9;
  document.getElementById('gameTie9').value = gameTie9;
}
function fillAllGames9() {
  gameWin9 = 0;
  gameLose9 = 0;
  gameTie9 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill9();
  }
  document.getElementById('gameWin9').value = gameWin9;
  document.getElementById('gameLose9').value = gameLose9;
  document.getElementById('gameTie9').value = gameTie9;
}
let gameWin10 = 0;
let gameLose10 = 0;
let gameTie10 = 0;

// Team 10
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
  document.getElementById('gameWin10').value = gameWin10;
  document.getElementById('gameLose10').value = gameLose10;
  document.getElementById('gameTie10').value = gameTie10;
}
function fillAllGames10() {
  gameWin10 = 0;
  gameLose10 = 0;
  gameTie10 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill10();
  }
  document.getElementById('gameWin10').value = gameWin10;
  document.getElementById('gameLose10').value = gameLose10;
  document.getElementById('gameTie10').value = gameTie10;
}
let gameWin11 = 0;
let gameLose11 = 0;
let gameTie11 = 0;

// Team 11
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
  document.getElementById('gameWin11').value = gameWin1;
  document.getElementById('gameLose11').value = gameLose11;
  document.getElementById('gameTie11').value = gameTie11;
}
function fillAllGames11() {
  gameWin11 = 0;
  gameLose11 = 0;
  gameTie11 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill11();
  }
  document.getElementById('gameWin11').value = gameWin11;
  document.getElementById('gameLose11').value = gameLose11;
  document.getElementById('gameTie11').value = gameTie11;
}
let gameWin12 = 0;
let gameLose12 = 0;
let gameTie12 = 0;

// Team 12
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
  document.getElementById('gameWin12').value = gameWin12;
  document.getElementById('gameLose12').value = gameLose12;
  document.getElementById('gameTie12').value = gameTie12;
}
function fillAllGames12() {
  gameWin12 = 0;
  gameLose12 = 0;
  gameTie12 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill12();
  }
  document.getElementById('gameWin12').value = gameWin12;
  document.getElementById('gameLose12').value = gameLose12;
  document.getElementById('gameTie12').value = gameTie12;
}
let gameWin13 = 0;
let gameLose13 = 0;
let gameTie13 = 0;

// Team 13
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
  document.getElementById('gameWin13').value = gameWin13;
  document.getElementById('gameLose13').value = gameLose13;
  document.getElementById('gameTie13').value = gameTie13;
}
function fillAllGames13() {
  gameWin13 = 0;
  gameLose13 = 0;
  gameTie13 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill13();
  }
  document.getElementById('gameWin13').value = gameWin13;
  document.getElementById('gameLose13').value = gameLose13;
  document.getElementById('gameTie13').value = gameTie13;
}
let gameWin14 = 0;
let gameLose14 = 0;
let gameTie14 = 0;

// Team 14
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
  document.getElementById('gameWin14').value = gameWin14;
  document.getElementById('gameLose14').value = gameLose14;
  document.getElementById('gameTie14').value = gameTie14;
}
function fillAllGames14() {
  gameWin14 = 0;
  gameLose14 = 0;
  gameTie14 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill14();
  }
  document.getElementById('gameWin14').value = gameWin14;
  document.getElementById('gameLose14').value = gameLose14;
  document.getElementById('gameTie14').value = gameTie14;
}
let gameWin15 = 0;
let gameLose15 = 0;
let gameTie15 = 0;

// Team 15
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
  document.getElementById('gameWin15').value = gameWin15;
  document.getElementById('gameLose15').value = gameLose15;
  document.getElementById('gameTie15').value = gameTie15;
}
function fillAllGames15() {
  gameWin15 = 0;
  gameLose15 = 0;
  gameTie15 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill15();
  }
  document.getElementById('gameWin15').value = gameWin15;
  document.getElementById('gameLose15').value = gameLose15;
  document.getElementById('gameTie15').value = gameTie15;
}
let gameWin16 = 0;
let gameLose16 = 0;
let gameTie16 = 0;

// Team 16
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
  document.getElementById('gameWin16').value = gameWin16;
  document.getElementById('gameLose16').value = gameLose16;
  document.getElementById('gameTie16').value = gameTie16;
}
function fillAllGames16() {
  gameWin16 = 0;
  gameLose16 = 0;
  gameTie16 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill16();
  }
  document.getElementById('gameWin16').value = gameWin16;
  document.getElementById('gameLose16').value = gameLose16;
  document.getElementById('gameTie16').value = gameTie16;
}

let gameWin17 = 0;
let gameLose17 = 0;
let gameTie17 = 0;

// Team 17
function autoFill17() {
  if (gameWin17 + gameLose17 + gameTie17 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.45) {
    gameWin17++;
  } else if (autoScore < 0.9) {
    gameLose17++;
  } else {
    gameTie17++;
  }
  document.getElementById('gameWin17').value = gameWin17;
  document.getElementById('gameLose17').value = gameLose17;
  document.getElementById('gameTie17').value = gameTie17;
}
function fillAllGames17() {
  gameWin17 = 0;
  gameLose17 = 0;
  gameTie17 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill17();
  }
  document.getElementById('gameWin17').value = gameWin17;
  document.getElementById('gameLose17').value = gameLose17;
  document.getElementById('gameTie17').value = gameTie17;
}

// Team 18
let gameWin18 = 0;
let gameLose18 = 0;
let gameTie18 = 0;

function autoFill18() {
  if (gameWin18 + gameLose18 + gameTie18 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.45) {
    gameWin18++;
  } else if (autoScore < 0.9) {
    gameLose18++;
  } else {
    gameTie18++;
  }
  document.getElementById('gameWin18').value = gameWin18;
  document.getElementById('gameLose18').value = gameLose18;
  document.getElementById('gameTie18').value = gameTie18;
}
function fillAllGames18() {
  gameWin18 = 0;
  gameLose18 = 0;
  gameTie18 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill18();
  }
  document.getElementById('gameWin18').value = gameWin18;
  document.getElementById('gameLose18').value = gameLose18;
  document.getElementById('gameTie18').value = gameTie18;
}

let gameWin19 = 0;
let gameLose19 = 0;
let gameTie19 = 0;

function autoFill19() {
  if (gameWin19 + gameLose19 + gameTie19 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.45) {
    gameWin19++;
  } else if (autoScore < 0.9) {
    gameLose19++;
  } else {
    gameTie19++;
  }
  document.getElementById('gameWin19').value = gameWin19;
  document.getElementById('gameLose19').value = gameLose19;
  document.getElementById('gameTie19').value = gameTie19;
}

function fillAllGames19() {
  gameWin19 = 0;
  gameLose19 = 0;
  gameTie19 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill19();
  }
  document.getElementById('gameWin19').value = gameWin19;
  document.getElementById('gameLose19').value = gameLose19;
  document.getElementById('gameTie19').value = gameTie19;
}

// Team 20
let gameWin20 = 0;
let gameLose20 = 0;
let gameTie20 = 0;

function autoFill20() {
  if (gameWin20 + gameLose20 + gameTie20 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.45) {
    gameWin20++;
  } else if (autoScore < 0.9) {
    gameLose20++;
  } else {
    gameTie20++;
  }
  document.getElementById('gameWin20').value = gameWin20;
  document.getElementById('gameLose20').value = gameLose20;
  document.getElementById('gameTie20').value = gameTie20;
}

function fillAllGames20() {
  gameWin20 = 0;
  gameLose20 = 0;
  gameTie20 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill20();
  }
  document.getElementById('gameWin20').value = gameWin20;
  document.getElementById('gameLose20').value = gameLose20;
  document.getElementById('gameTie20').value = gameTie20;
}

// Team 21
let gameWin21 = 0;
let gameLose21 = 0;
let gameTie21 = 0;

function autoFill21() {
  if (gameWin21 + gameLose21 + gameTie21 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.45) {
    gameWin21++;
  } else if (autoScore < 0.9) {
    gameLose21++;
  } else {
    gameTie21++;
  }
  document.getElementById('gameWin21').value = gameWin21;
  document.getElementById('gameLose21').value = gameLose21;
  document.getElementById('gameTie21').value = gameTie21;
}

function fillAllGames21() {
  gameWin21 = 0;
  gameLose21 = 0;
  gameTie21 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill21();
  }
  document.getElementById('gameWin21').value = gameWin21;
  document.getElementById('gameLose21').value = gameLose21;
  document.getElementById('gameTie21').value = gameTie21;
}
// Team 22
let gameWin22 = 0;
let gameLose22 = 0;
let gameTie22 = 0;

function autoFill22() {
  if (gameWin22 + gameLose22 + gameTie22 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.45) {
    gameWin22++;
  } else if (autoScore < 0.9) {
    gameLose22++;
  } else {
    gameTie22++;
  }
  document.getElementById('gameWin22').value = gameWin22;
  document.getElementById('gameLose22').value = gameLose22;
  document.getElementById('gameTie22').value = gameTie22;
}

function fillAllGames22() {
  gameWin22 = 0;
  gameLose22 = 0;
  gameTie22 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill22();
  }
  document.getElementById('gameWin22').value = gameWin22;
  document.getElementById('gameLose22').value = gameLose22;
  document.getElementById('gameTie22').value = gameTie22;
}

// Team 23
let gameWin23 = 0;
let gameLose23 = 0;
let gameTie23 = 0;

function autoFill23() {
  if (gameWin23 + gameLose23 + gameTie23 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.45) {
    gameWin23++;
  } else if (autoScore < 0.9) {
    gameLose23++;
  } else {
    gameTie23++;
  }
  document.getElementById('gameWin23').value = gameWin23;
  document.getElementById('gameLose23').value = gameLose23;
  document.getElementById('gameTie23').value = gameTie23;
}

function fillAllGames23() {
  gameWin23 = 0;
  gameLose23 = 0;
  gameTie23 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill23();
  }
  document.getElementById('gameWin23').value = gameWin23;
  document.getElementById('gameLose23').value = gameLose23;
  document.getElementById('gameTie23').value = gameTie23;
}

// Team 24
let gameWin24 = 0;
let gameLose24 = 0;
let gameTie24 = 0;

function autoFill24() {
  if (gameWin24 + gameLose24 + gameTie24 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.45) {
    gameWin24++;
  } else if (autoScore < 0.9) {
    gameLose24++;
  } else {
    gameTie24++;
  }
  document.getElementById('gameWin24').value = gameWin24;
  document.getElementById('gameLose24').value = gameLose24;
  document.getElementById('gameTie24').value = gameTie24;
}

function fillAllGames24() {
  gameWin24 = 0;
  gameLose24 = 0;
  gameTie24 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill24();
  }
  document.getElementById('gameWin24').value = gameWin24;
  document.getElementById('gameLose24').value = gameLose24;
  document.getElementById('gameTie24').value = gameTie24;
}

// Team 25
let gameWin25 = 0;
let gameLose25 = 0;
let gameTie25 = 0;

function autoFill25() {
  if (gameWin25 + gameLose25 + gameTie25 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.45) {
    gameWin25++;
  } else if (autoScore < 0.9) {
    gameLose25++;
  } else {
    gameTie25++;
  }
  document.getElementById('gameWin25').value = gameWin25;
  document.getElementById('gameLose25').value = gameLose25;
  document.getElementById('gameTie25').value = gameTie25;
}

function fillAllGames25() {
  gameWin25 = 0;
  gameLose25 = 0;
  gameTie25 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill25();
  }
  document.getElementById('gameWin25').value = gameWin25;
  document.getElementById('gameLose25').value = gameLose25;
  document.getElementById('gameTie25').value = gameTie25;
}

// Team 26
let gameWin26 = 0;
let gameLose26 = 0;
let gameTie26 = 0;

function autoFill26() {
  if (gameWin26 + gameLose26 + gameTie26 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.45) {
    gameWin26++;
  } else if (autoScore < 0.9) {
    gameLose26++;
  } else {
    gameTie26++;
  }
  document.getElementById('gameWin26').value = gameWin26;
  document.getElementById('gameLose26').value = gameLose26;
  document.getElementById('gameTie26').value = gameTie26;
}

function fillAllGames26() {
  gameWin26 = 0;
  gameLose26 = 0;
  gameTie26 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill26();
  }
  document.getElementById('gameWin26').value = gameWin26;
  document.getElementById('gameLose26').value = gameLose26;
  document.getElementById('gameTie26').value = gameTie26;
}

// Team 27
let gameWin27 = 0;
let gameLose27 = 0;
let gameTie27 = 0;

function autoFill27() {
  if (gameWin27 + gameLose27 + gameTie27 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.45) {
    gameWin27++;
  } else if (autoScore < 0.9) {
    gameLose27++;
  } else {
    gameTie27++;
  }
  document.getElementById('gameWin27').value = gameWin27;
  document.getElementById('gameLose27').value = gameLose27;
  document.getElementById('gameTie27').value = gameTie27;
}

function fillAllGames27() {
  gameWin27 = 0;
  gameLose27 = 0;
  gameTie27 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill27();
  }
  document.getElementById('gameWin27').value = gameWin27;
  document.getElementById('gameLose27').value = gameLose27;
  document.getElementById('gameTie27').value = gameTie27;
}

// Team 28
let gameWin28 = 0;
let gameLose28 = 0;
let gameTie28 = 0;

function autoFill28() {
  if (gameWin28 + gameLose28 + gameTie28 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.45) {
    gameWin28++;
  } else if (autoScore < 0.9) {
    gameLose28++;
  } else {
    gameTie28++;
  }
  document.getElementById('gameWin28').value = gameWin28;
  document.getElementById('gameLose28').value = gameLose28;
  document.getElementById('gameTie28').value = gameTie28;
}

function fillAllGames28() {
  gameWin28 = 0;
  gameLose28 = 0;
  gameTie28 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill28();
  }
  document.getElementById('gameWin28').value = gameWin28;
  document.getElementById('gameLose28').value = gameLose28;
  document.getElementById('gameTie28').value = gameTie28;
}

// Team 29
let gameWin29 = 0;
let gameLose29 = 0;
let gameTie29 = 0;

function autoFill29() {
  if (gameWin29 + gameLose29 + gameTie29 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.45) {
    gameWin29++;
  } else if (autoScore < 0.9) {
    gameLose29++;
  } else {
    gameTie29++;
  }
  document.getElementById('gameWin29').value = gameWin29;
  document.getElementById('gameLose29').value = gameLose29;
  document.getElementById('gameTie29').value = gameTie29;
}

function fillAllGames29() {
  gameWin29 = 0;
  gameLose29 = 0;
  gameTie29 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill29();
  }
  document.getElementById('gameWin29').value = gameWin29;
  document.getElementById('gameLose29').value = gameLose29;
  document.getElementById('gameTie29').value = gameTie29;
}

// Team 30
let gameWin30 = 0;
let gameLose30 = 0;
let gameTie30 = 0;

function autoFill30() {
  if (gameWin30 + gameLose30 + gameTie30 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.45) {
    gameWin30++;
  } else if (autoScore < 0.9) {
    gameLose30++;
  } else {
    gameTie30++;
  }
  document.getElementById('gameWin30').value = gameWin30;
  document.getElementById('gameLose30').value = gameLose30;
  document.getElementById('gameTie30').value = gameTie30;
}

function fillAllGames30() {
  gameWin30 = 0;
  gameLose30 = 0;
  gameTie30 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill30();
  }
  document.getElementById('gameWin30').value = gameWin30;
  document.getElementById('gameLose30').value = gameLose30;
  document.getElementById('gameTie30').value = gameTie30;
}

// Team 31
let gameWin31 = 0;
let gameLose31 = 0;
let gameTie31 = 0;

function autoFill31() {
  if (gameWin31 + gameLose31 + gameTie31 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.45) {
    gameWin31++;
  } else if (autoScore < 0.9) {
    gameLose31++;
  } else {
    gameTie31++;
  }
  document.getElementById('gameWin31').value = gameWin31;
  document.getElementById('gameLose31').value = gameLose31;
  document.getElementById('gameTie31').value = gameTie31;
}

function fillAllGames31() {
  gameWin31 = 0;
  gameLose31 = 0;
  gameTie31 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill31();
  }
  document.getElementById('gameWin31').value = gameWin31;
  document.getElementById('gameLose31').value = gameLose31;
  document.getElementById('gameTie31').value = gameTie31;
}

// Team 32
let gameWin32 = 0;
let gameLose32 = 0;
let gameTie32 = 0;

function autoFill32() {
  if (gameWin32 + gameLose32 + gameTie32 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.45) {
    gameWin32++;
  } else if (autoScore < 0.9) {
    gameLose32++;
  } else {
    gameTie32++;
  }
  document.getElementById('gameWin32').value = gameWin32;
  document.getElementById('gameLose32').value = gameLose32;
  document.getElementById('gameTie32').value = gameTie32;
}

function fillAllGames32() {
  gameWin32 = 0;
  gameLose32 = 0;
  gameTie32 = 0;
  for (let i = 0; i < 17; i++) {
    autoFill32();
  }
  document.getElementById('gameWin32').value = gameWin32;
  document.getElementById('gameLose32').value = gameLose32;
  document.getElementById('gameTie32').value = gameTie32;
}

// Team ALL AFC
let gameWinAll = 0;
let gameLoseAll = 0;
let gameTieAll = 0;

function autoFillAll() {
  let autoScore = Math.random();
  if (autoScore < 0.45) {
    gameWinAll++;
  } else if (autoScore < 0.9) {
    gameLoseAll++;
  } else {
    gameTieAll++;
  }
}

function fillAllGames99() {
  for (let i = 1; i <= 32; i++) {
    let gameWin = 0;
    let gameLose = 0;
    let gameTie = 0;
    
    for (let j = 0; j < 17; j++) {
      autoFillAll();
    }
    
    gameWin = gameWinAll;
    gameLose = gameLoseAll;
    gameTie = gameTieAll;

    gameWinAll = 0;
    gameLoseAll = 0;
    gameTieAll = 0;
    
    document.getElementById(`gameWin${i}`).value = gameWin;
    document.getElementById(`gameLose${i}`).value = gameLose;
    document.getElementById(`gameTie${i}`).value = gameTie;
  }
}

// Checker

fillAllGames99();

function validateInput(input) {
  input.value = input.value.replace(/^0+/, '');

  if (input.value === '') return;

  if (isNaN(input.value) || parseInt(input.value) > 99) {
      alert('Please enter a single or double-digit number.');
      input.value = '';
  }
}
 
// Fill All Games NFC

function autoFillAll() {
    let autoScore = Math.random();
    if (autoScore < 0.45) {
        gameWinAll++;
    } else if (autoScore < 0.9) {
        gameLoseAll++;
    } else {
        gameTieAll++;
    }
}

function fillAllGames991() {
    for (let i = 1; i <= 32; i++) {
        let gameWin = 0;
        let gameLose = 0;
        let gameTie = 0;

        for (let j = 0; j < 17; j++) {
            autoFillAll();
        }

        gameWin = gameWinAll;
        gameLose = gameLoseAll;
        gameTie = gameTieAll;

        gameWinAll = 0;
        gameLoseAll = 0;
        gameTieAll = 0;

        document.getElementById(`gameWin${i}`).value = gameWin;
        document.getElementById(`gameLose${i}`).value = gameLose;
        document.getElementById(`gameTie${i}`).value = gameTie;
    }
}
