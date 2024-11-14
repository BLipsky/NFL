function autoFill1() {
  let gameWin1 = parseInt(localStorage.getItem("gameWin1")) || 0;
  let gameLose1 = parseInt(localStorage.getItem("gameLose1")) || 0;
  let gameTie1 = parseInt(localStorage.getItem("gameTie1")) || 0;

  if (gameWin1 + gameLose1 + gameTie1 === 17) {
    return;
  }

  let autoScore = Math.random();
  if (autoScore < 0.49) {
    gameWin1++;
  } else if (autoScore < 0.98) {
    gameLose1++;
  } else {
    gameTie1++;
  }

  localStorage.setItem("gameWin1", gameWin1);
  localStorage.setItem("gameLose1", gameLose1);
  localStorage.setItem("gameTie1", gameTie1);

  document.getElementById("gameWin1").value = gameWin1;
  document.getElementById("gameLose1").value = gameLose1;
  document.getElementById("gameTie1").value = gameTie1;
}

function fillAllGames1() {
  localStorage.setItem("gameWin1", 0);
  localStorage.setItem("gameLose1", 0);
  localStorage.setItem("gameTie1", 0);

  for (let i = 0; i < 17; i++) {
    autoFill1();
  }
}

function loadGameValues1() {
  let gameWin1 = parseInt(localStorage.getItem("gameWin1")) || 0;
  let gameLose1 = parseInt(localStorage.getItem("gameLose1")) || 0;
  let gameTie1 = parseInt(localStorage.getItem("gameTie1")) || 0;

  document.getElementById("gameWin1").value = gameWin1;
  document.getElementById("gameLose1").value = gameLose1;
  document.getElementById("gameTie1").value = gameTie1;
}

window.onload = function () {
  loadGameValues1();
};

// Game 2 Functions
function autoFill2() {
  let gameWin2 = parseInt(localStorage.getItem("gameWin2")) || 0;
  let gameLose2 = parseInt(localStorage.getItem("gameLose2")) || 0;
  let gameTie2 = parseInt(localStorage.getItem("gameTie2")) || 0;
  if (gameWin2 + gameLose2 + gameTie2 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.49) {
    gameWin2++;
  } else if (autoScore < 0.98) {
    gameLose2++;
  } else {
    gameTie2++;
  }
  localStorage.setItem("gameWin2", gameWin2);
  localStorage.setItem("gameLose2", gameLose2);
  localStorage.setItem("gameTie2", gameTie2);
  document.getElementById("gameWin2").value = gameWin2;
  document.getElementById("gameLose2").value = gameLose2;
  document.getElementById("gameTie2").value = gameTie2;
}
function fillAllGames2() {
  localStorage.setItem("gameWin2", 0);
  localStorage.setItem("gameLose2", 0);
  localStorage.setItem("gameTie2", 0);
  for (let i = 0; i < 17; i++) {
    autoFill2();
  }
}
function loadGameValues2() {
  let gameWin2 = parseInt(localStorage.getItem("gameWin2")) || 0;
  let gameLose2 = parseInt(localStorage.getItem("gameLose2")) || 0;
  let gameTie2 = parseInt(localStorage.getItem("gameTie2")) || 0;
  document.getElementById("gameWin2").value = gameWin2;
  document.getElementById("gameLose2").value = gameLose2;
  document.getElementById("gameTie2").value = gameTie2;
}

// Game 3 Functions
function autoFill3() {
  let gameWin3 = parseInt(localStorage.getItem("gameWin3")) || 0;
  let gameLose3 = parseInt(localStorage.getItem("gameLose3")) || 0;
  let gameTie3 = parseInt(localStorage.getItem("gameTie3")) || 0;
  if (gameWin3 + gameLose3 + gameTie3 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.49) {
    gameWin3++;
  } else if (autoScore < 0.98) {
    gameLose3++;
  } else {
    gameTie3++;
  }
  localStorage.setItem("gameWin3", gameWin3);
  localStorage.setItem("gameLose3", gameLose3);
  localStorage.setItem("gameTie3", gameTie3);
  document.getElementById("gameWin3").value = gameWin3;
  document.getElementById("gameLose3").value = gameLose3;
  document.getElementById("gameTie3").value = gameTie3;
}
function fillAllGames3() {
  localStorage.setItem("gameWin3", 0);
  localStorage.setItem("gameLose3", 0);
  localStorage.setItem("gameTie3", 0);
  for (let i = 0; i < 17; i++) {
    autoFill3();
  }
}
function loadGameValues3() {
  let gameWin3 = parseInt(localStorage.getItem("gameWin3")) || 0;
  let gameLose3 = parseInt(localStorage.getItem("gameLose3")) || 0;
  let gameTie3 = parseInt(localStorage.getItem("gameTie3")) || 0;
  document.getElementById("gameWin3").value = gameWin3;
  document.getElementById("gameLose3").value = gameLose3;
  document.getElementById("gameTie3").value = gameTie3;
}

// Game 4 Functions
function autoFill4() {
  let gameWin4 = parseInt(localStorage.getItem("gameWin4")) || 0;
  let gameLose4 = parseInt(localStorage.getItem("gameLose4")) || 0;
  let gameTie4 = parseInt(localStorage.getItem("gameTie4")) || 0;
  if (gameWin4 + gameLose4 + gameTie4 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.49) {
    gameWin4++;
  } else if (autoScore < 0.98) {
    gameLose4++;
  } else {
    gameTie4++;
  }
  localStorage.setItem("gameWin4", gameWin4);
  localStorage.setItem("gameLose4", gameLose4);
  localStorage.setItem("gameTie4", gameTie4);
  document.getElementById("gameWin4").value = gameWin4;
  document.getElementById("gameLose4").value = gameLose4;
  document.getElementById("gameTie4").value = gameTie4;
}
function fillAllGames4() {
  localStorage.setItem("gameWin4", 0);
  localStorage.setItem("gameLose4", 0);
  localStorage.setItem("gameTie4", 0);
  for (let i = 0; i < 17; i++) {
    autoFill4();
  }
}
function loadGameValues4() {
  let gameWin4 = parseInt(localStorage.getItem("gameWin4")) || 0;
  let gameLose4 = parseInt(localStorage.getItem("gameLose4")) || 0;
  let gameTie4 = parseInt(localStorage.getItem("gameTie4")) || 0;
  document.getElementById("gameWin4").value = gameWin4;
  document.getElementById("gameLose4").value = gameLose4;
  document.getElementById("gameTie4").value = gameTie4;
}
// Game 5 Functions
function autoFill5() {
  let gameWin5 = parseInt(localStorage.getItem("gameWin5")) || 0;
  let gameLose5 = parseInt(localStorage.getItem("gameLose5")) || 0;
  let gameTie5 = parseInt(localStorage.getItem("gameTie5")) || 0;
  if (gameWin5 + gameLose5 + gameTie5 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.49) {
    gameWin5++;
  } else if (autoScore < 0.98) {
    gameLose5++;
  } else {
    gameTie5++;
  }
  localStorage.setItem("gameWin5", gameWin5);
  localStorage.setItem("gameLose5", gameLose5);
  localStorage.setItem("gameTie5", gameTie5);
  document.getElementById("gameWin5").value = gameWin5;
  document.getElementById("gameLose5").value = gameLose5;
  document.getElementById("gameTie5").value = gameTie5;
}
function fillAllGames5() {
  localStorage.setItem("gameWin5", 0);
  localStorage.setItem("gameLose5", 0);
  localStorage.setItem("gameTie5", 0);
  for (let i = 0; i < 17; i++) {
    autoFill5();
  }
}
function loadGameValues5() {
  let gameWin5 = parseInt(localStorage.getItem("gameWin5")) || 0;
  let gameLose5 = parseInt(localStorage.getItem("gameLose5")) || 0;
  let gameTie5 = parseInt(localStorage.getItem("gameTie5")) || 0;
  document.getElementById("gameWin5").value = gameWin5;
  document.getElementById("gameLose5").value = gameLose5;
  document.getElementById("gameTie5").value = gameTie5;
}

// Game 6 Functions
function autoFill6() {
  let gameWin6 = parseInt(localStorage.getItem("gameWin6")) || 0;
  let gameLose6 = parseInt(localStorage.getItem("gameLose6")) || 0;
  let gameTie6 = parseInt(localStorage.getItem("gameTie6")) || 0;
  if (gameWin6 + gameLose6 + gameTie6 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.49) {
    gameWin6++;
  } else if (autoScore < 0.98) {
    gameLose6++;
  } else {
    gameTie6++;
  }
  localStorage.setItem("gameWin6", gameWin6);
  localStorage.setItem("gameLose6", gameLose6);
  localStorage.setItem("gameTie6", gameTie6);
  document.getElementById("gameWin6").value = gameWin6;
  document.getElementById("gameLose6").value = gameLose6;
  document.getElementById("gameTie6").value = gameTie6;
}
function fillAllGames6() {
  localStorage.setItem("gameWin6", 0);
  localStorage.setItem("gameLose6", 0);
  localStorage.setItem("gameTie6", 0);
  for (let i = 0; i < 17; i++) {
    autoFill6();
  }
}
function loadGameValues6() {
  let gameWin6 = parseInt(localStorage.getItem("gameWin6")) || 0;
  let gameLose6 = parseInt(localStorage.getItem("gameLose6")) || 0;
  let gameTie6 = parseInt(localStorage.getItem("gameTie6")) || 0;
  document.getElementById("gameWin6").value = gameWin6;
  document.getElementById("gameLose6").value = gameLose6;
  document.getElementById("gameTie6").value = gameTie6;
}

// Game 7 Functions
function autoFill7() {
  let gameWin7 = parseInt(localStorage.getItem("gameWin7")) || 0;
  let gameLose7 = parseInt(localStorage.getItem("gameLose7")) || 0;
  let gameTie7 = parseInt(localStorage.getItem("gameTie7")) || 0;
  if (gameWin7 + gameLose7 + gameTie7 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.49) {
    gameWin7++;
  } else if (autoScore < 0.98) {
    gameLose7++;
  } else {
    gameTie7++;
  }
  localStorage.setItem("gameWin7", gameWin7);
  localStorage.setItem("gameLose7", gameLose7);
  localStorage.setItem("gameTie7", gameTie7);
  document.getElementById("gameWin7").value = gameWin7;
  document.getElementById("gameLose7").value = gameLose7;
  document.getElementById("gameTie7").value = gameTie7;
}
function fillAllGames7() {
  localStorage.setItem("gameWin7", 0);
  localStorage.setItem("gameLose7", 0);
  localStorage.setItem("gameTie7", 0);
  for (let i = 0; i < 17; i++) {
    autoFill7();
  }
}
function loadGameValues7() {
  let gameWin7 = parseInt(localStorage.getItem("gameWin7")) || 0;
  let gameLose7 = parseInt(localStorage.getItem("gameLose7")) || 0;
  let gameTie7 = parseInt(localStorage.getItem("gameTie7")) || 0;
  document.getElementById("gameWin7").value = gameWin7;
  document.getElementById("gameLose7").value = gameLose7;
  document.getElementById("gameTie7").value = gameTie7;
}

// Game 8 Functions
function autoFill8() {
  let gameWin8 = parseInt(localStorage.getItem("gameWin8")) || 0;
  let gameLose8 = parseInt(localStorage.getItem("gameLose8")) || 0;
  let gameTie8 = parseInt(localStorage.getItem("gameTie8")) || 0;
  if (gameWin8 + gameLose8 + gameTie8 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.49) {
    gameWin8++;
  } else if (autoScore < 0.98) {
    gameLose8++;
  } else {
    gameTie8++;
  }
  localStorage.setItem("gameWin8", gameWin8);
  localStorage.setItem("gameLose8", gameLose8);
  localStorage.setItem("gameTie8", gameTie8);
  document.getElementById("gameWin8").value = gameWin8;
  document.getElementById("gameLose8").value = gameLose8;
  document.getElementById("gameTie8").value = gameTie8;
}
function fillAllGames8() {
  localStorage.setItem("gameWin8", 0);
  localStorage.setItem("gameLose8", 0);
  localStorage.setItem("gameTie8", 0);
  for (let i = 0; i < 17; i++) {
    autoFill8();
  }
}
function loadGameValues8() {
  let gameWin8 = parseInt(localStorage.getItem("gameWin8")) || 0;
  let gameLose8 = parseInt(localStorage.getItem("gameLose8")) || 0;
  let gameTie8 = parseInt(localStorage.getItem("gameTie8")) || 0;
  document.getElementById("gameWin8").value = gameWin8;
  document.getElementById("gameLose8").value = gameLose8;
  document.getElementById("gameTie8").value = gameTie8;
}
// Game 9 Functions
function autoFill9() {
  let gameWin9 = parseInt(localStorage.getItem("gameWin9")) || 0;
  let gameLose9 = parseInt(localStorage.getItem("gameLose9")) || 0;
  let gameTie9 = parseInt(localStorage.getItem("gameTie9")) || 0;
  if (gameWin9 + gameLose9 + gameTie9 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.49) {
    gameWin9++;
  } else if (autoScore < 0.98) {
    gameLose9++;
  } else {
    gameTie9++;
  }
  localStorage.setItem("gameWin9", gameWin9);
  localStorage.setItem("gameLose9", gameLose9);
  localStorage.setItem("gameTie9", gameTie9);
  document.getElementById("gameWin9").value = gameWin9;
  document.getElementById("gameLose9").value = gameLose9;
  document.getElementById("gameTie9").value = gameTie9;
}
function fillAllGames9() {
  localStorage.setItem("gameWin9", 0);
  localStorage.setItem("gameLose9", 0);
  localStorage.setItem("gameTie9", 0);
  for (let i = 0; i < 17; i++) {
    autoFill9();
  }
}
function loadGameValues9() {
  let gameWin9 = parseInt(localStorage.getItem("gameWin9")) || 0;
  let gameLose9 = parseInt(localStorage.getItem("gameLose9")) || 0;
  let gameTie9 = parseInt(localStorage.getItem("gameTie9")) || 0;
  document.getElementById("gameWin9").value = gameWin9;
  document.getElementById("gameLose9").value = gameLose9;
  document.getElementById("gameTie9").value = gameTie9;
}

// Game 10 Functions
function autoFill10() {
  let gameWin10 = parseInt(localStorage.getItem("gameWin10")) || 0;
  let gameLose10 = parseInt(localStorage.getItem("gameLose10")) || 0;
  let gameTie10 = parseInt(localStorage.getItem("gameTie10")) || 0;
  if (gameWin10 + gameLose10 + gameTie10 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.49) {
    gameWin10++;
  } else if (autoScore < 0.98) {
    gameLose10++;
  } else {
    gameTie10++;
  }
  localStorage.setItem("gameWin10", gameWin10);
  localStorage.setItem("gameLose10", gameLose10);
  localStorage.setItem("gameTie10", gameTie10);
  document.getElementById("gameWin10").value = gameWin10;
  document.getElementById("gameLose10").value = gameLose10;
  document.getElementById("gameTie10").value = gameTie10;
}
function fillAllGames10() {
  localStorage.setItem("gameWin10", 0);
  localStorage.setItem("gameLose10", 0);
  localStorage.setItem("gameTie10", 0);
  for (let i = 0; i < 17; i++) {
    autoFill10();
  }
}
function loadGameValues10() {
  let gameWin10 = parseInt(localStorage.getItem("gameWin10")) || 0;
  let gameLose10 = parseInt(localStorage.getItem("gameLose10")) || 0;
  let gameTie10 = parseInt(localStorage.getItem("gameTie10")) || 0;
  document.getElementById("gameWin10").value = gameWin10;
  document.getElementById("gameLose10").value = gameLose10;
  document.getElementById("gameTie10").value = gameTie10;
}

// Game 11 Functions
function autoFill11() {
  let gameWin11 = parseInt(localStorage.getItem("gameWin11")) || 0;
  let gameLose11 = parseInt(localStorage.getItem("gameLose11")) || 0;
  let gameTie11 = parseInt(localStorage.getItem("gameTie11")) || 0;
  if (gameWin11 + gameLose11 + gameTie11 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.49) {
    gameWin11++;
  } else if (autoScore < 0.98) {
    gameLose11++;
  } else {
    gameTie11++;
  }
  localStorage.setItem("gameWin11", gameWin11);
  localStorage.setItem("gameLose11", gameLose11);
  localStorage.setItem("gameTie11", gameTie11);
  document.getElementById("gameWin11").value = gameWin11;
  document.getElementById("gameLose11").value = gameLose11;
  document.getElementById("gameTie11").value = gameTie11;
}
function fillAllGames11() {
  localStorage.setItem("gameWin11", 0);
  localStorage.setItem("gameLose11", 0);
  localStorage.setItem("gameTie11", 0);
  for (let i = 0; i < 17; i++) {
    autoFill11();
  }
}
function loadGameValues11() {
  let gameWin11 = parseInt(localStorage.getItem("gameWin11")) || 0;
  let gameLose11 = parseInt(localStorage.getItem("gameLose11")) || 0;
  let gameTie11 = parseInt(localStorage.getItem("gameTie11")) || 0;
  document.getElementById("gameWin11").value = gameWin11;
  document.getElementById("gameLose11").value = gameLose11;
  document.getElementById("gameTie11").value = gameTie11;
}

// Game 12 Functions
function autoFill12() {
  let gameWin12 = parseInt(localStorage.getItem("gameWin12")) || 0;
  let gameLose12 = parseInt(localStorage.getItem("gameLose12")) || 0;
  let gameTie12 = parseInt(localStorage.getItem("gameTie12")) || 0;
  if (gameWin12 + gameLose12 + gameTie12 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.49) {
    gameWin12++;
  } else if (autoScore < 0.98) {
    gameLose12++;
  } else {
    gameTie12++;
  }
  localStorage.setItem("gameWin12", gameWin12);
  localStorage.setItem("gameLose12", gameLose12);
  localStorage.setItem("gameTie12", gameTie12);
  document.getElementById("gameWin12").value = gameWin12;
  document.getElementById("gameLose12").value = gameLose12;
  document.getElementById("gameTie12").value = gameTie12;
}
function fillAllGames12() {
  localStorage.setItem("gameWin12", 0);
  localStorage.setItem("gameLose12", 0);
  localStorage.setItem("gameTie12", 0);
  for (let i = 0; i < 17; i++) {
    autoFill12();
  }
}
function loadGameValues12() {
  let gameWin12 = parseInt(localStorage.getItem("gameWin12")) || 0;
  let gameLose12 = parseInt(localStorage.getItem("gameLose12")) || 0;
  let gameTie12 = parseInt(localStorage.getItem("gameTie12")) || 0;
  document.getElementById("gameWin12").value = gameWin12;
  document.getElementById("gameLose12").value = gameLose12;
  document.getElementById("gameTie12").value = gameTie12;
}

// Game 13 Functions
function autoFill13() {
  let gameWin13 = parseInt(localStorage.getItem("gameWin13")) || 0;
  let gameLose13 = parseInt(localStorage.getItem("gameLose13")) || 0;
  let gameTie13 = parseInt(localStorage.getItem("gameTie13")) || 0;
  if (gameWin13 + gameLose13 + gameTie13 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.49) {
    gameWin13++;
  } else if (autoScore < 0.98) {
    gameLose13++;
  } else {
    gameTie13++;
  }
  localStorage.setItem("gameWin13", gameWin13);
  localStorage.setItem("gameLose13", gameLose13);
  localStorage.setItem("gameTie13", gameTie13);
  document.getElementById("gameWin13").value = gameWin13;
  document.getElementById("gameLose13").value = gameLose13;
  document.getElementById("gameTie13").value = gameTie13;
}
function fillAllGames13() {
  localStorage.setItem("gameWin13", 0);
  localStorage.setItem("gameLose13", 0);
  localStorage.setItem("gameTie13", 0);
  for (let i = 0; i < 17; i++) {
    autoFill13();
  }
}
function loadGameValues13() {
  let gameWin13 = parseInt(localStorage.getItem("gameWin13")) || 0;
  let gameLose13 = parseInt(localStorage.getItem("gameLose13")) || 0;
  let gameTie13 = parseInt(localStorage.getItem("gameTie13")) || 0;
  document.getElementById("gameWin13").value = gameWin13;
  document.getElementById("gameLose13").value = gameLose13;
  document.getElementById("gameTie13").value = gameTie13;
}

// Game 14 Functions
function autoFill14() {
  let gameWin14 = parseInt(localStorage.getItem("gameWin14")) || 0;
  let gameLose14 = parseInt(localStorage.getItem("gameLose14")) || 0;
  let gameTie14 = parseInt(localStorage.getItem("gameTie14")) || 0;
  if (gameWin14 + gameLose14 + gameTie14 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.49) {
    gameWin14++;
  } else if (autoScore < 0.98) {
    gameLose14++;
  } else {
    gameTie14++;
  }
  localStorage.setItem("gameWin14", gameWin14);
  localStorage.setItem("gameLose14", gameLose14);
  localStorage.setItem("gameTie14", gameTie14);
  document.getElementById("gameWin14").value = gameWin14;
  document.getElementById("gameLose14").value = gameLose14;
  document.getElementById("gameTie14").value = gameTie14;
}
function fillAllGames14() {
  localStorage.setItem("gameWin14", 0);
  localStorage.setItem("gameLose14", 0);
  localStorage.setItem("gameTie14", 0);
  for (let i = 0; i < 17; i++) {
    autoFill14();
  }
}
function loadGameValues14() {
  let gameWin14 = parseInt(localStorage.getItem("gameWin14")) || 0;
  let gameLose14 = parseInt(localStorage.getItem("gameLose14")) || 0;
  let gameTie14 = parseInt(localStorage.getItem("gameTie14")) || 0;
  document.getElementById("gameWin14").value = gameWin14;
  document.getElementById("gameLose14").value = gameLose14;
  document.getElementById("gameTie14").value = gameTie14;
}

let g; // Game 15 Functions
function autoFill15() {
  let gameWin15 = parseInt(localStorage.getItem("gameWin15")) || 0;
  let gameLose15 = parseInt(localStorage.getItem("gameLose15")) || 0;
  let gameTie15 = parseInt(localStorage.getItem("gameTie15")) || 0;
  if (gameWin15 + gameLose15 + gameTie15 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.49) {
    gameWin15++;
  } else if (autoScore < 0.98) {
    gameLose15++;
  } else {
    gameTie15++;
  }
  localStorage.setItem("gameWin15", gameWin15);
  localStorage.setItem("gameLose15", gameLose15);
  localStorage.setItem("gameTie15", gameTie15);
  document.getElementById("gameWin15").value = gameWin15;
  document.getElementById("gameLose15").value = gameLose15;
  document.getElementById("gameTie15").value = gameTie15;
}
function fillAllGames15() {
  localStorage.setItem("gameWin15", 0);
  localStorage.setItem("gameLose15", 0);
  localStorage.setItem("gameTie15", 0);
  for (let i = 0; i < 17; i++) {
    autoFill15();
  }
}
function loadGameValues15() {
  let gameWin15 = parseInt(localStorage.getItem("gameWin15")) || 0;
  let gameLose15 = parseInt(localStorage.getItem("gameLose15")) || 0;
  let gameTie15 = parseInt(localStorage.getItem("gameTie15")) || 0;
  document.getElementById("gameWin15").value = gameWin15;
  document.getElementById("gameLose15").value = gameLose15;
  document.getElementById("gameTie15").value = gameTie15;
}

// Game 16 Functions
function autoFill16() {
  let gameWin16 = parseInt(localStorage.getItem("gameWin16")) || 0;
  let gameLose16 = parseInt(localStorage.getItem("gameLose16")) || 0;
  let gameTie16 = parseInt(localStorage.getItem("gameTie16")) || 0;
  if (gameWin16 + gameLose16 + gameTie16 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.49) {
    gameWin16++;
  } else if (autoScore < 0.98) {
    gameLose16++;
  } else {
    gameTie16++;
  }
  localStorage.setItem("gameWin16", gameWin16);
  localStorage.setItem("gameLose16", gameLose16);
  localStorage.setItem("gameTie16", gameTie16);
  document.getElementById("gameWin16").value = gameWin16;
  document.getElementById("gameLose16").value = gameLose16;
  document.getElementById("gameTie16").value = gameTie16;
}
function fillAllGames16() {
  localStorage.setItem("gameWin16", 0);
  localStorage.setItem("gameLose16", 0);
  localStorage.setItem("gameTie16", 0);
  for (let i = 0; i < 17; i++) {
    autoFill16();
  }
}
function loadGameValues16() {
  let gameWin16 = parseInt(localStorage.getItem("gameWin16")) || 0;
  let gameLose16 = parseInt(localStorage.getItem("gameLose16")) || 0;
  let gameTie16 = parseInt(localStorage.getItem("gameTie16")) || 0;
  document.getElementById("gameWin16").value = gameWin16;
  document.getElementById("gameLose16").value = gameLose16;
  document.getElementById("gameTie16").value = gameTie16;
}

// Game 17 Functions
function autoFill17() {
  let gameWin17 = parseInt(localStorage.getItem("gameWin17")) || 0;
  let gameLose17 = parseInt(localStorage.getItem("gameLose17")) || 0;
  let gameTie17 = parseInt(localStorage.getItem("gameTie17")) || 0;
  if (gameWin17 + gameLose17 + gameTie17 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.49) {
    gameWin17++;
  } else if (autoScore < 0.98) {
    gameLose17++;
  } else {
    gameTie17++;
  }
  localStorage.setItem("gameWin17", gameWin17);
  localStorage.setItem("gameLose17", gameLose17);
  localStorage.setItem("gameTie17", gameTie17);
  document.getElementById("gameWin17").value = gameWin17;
  document.getElementById("gameLose17").value = gameLose17;
  document.getElementById("gameTie17").value = gameTie17;
}
function fillAllGames17() {
  localStorage.setItem("gameWin17", 0);
  localStorage.setItem("gameLose17", 0);
  localStorage.setItem("gameTie17", 0);
  for (let i = 0; i < 17; i++) {
    autoFill17();
  }
}
function loadGameValues17() {
  let gameWin17 = parseInt(localStorage.getItem("gameWin17")) || 0;
  let gameLose17 = parseInt(localStorage.getItem("gameLose17")) || 0;
  let gameTie17 = parseInt(localStorage.getItem("gameTie17")) || 0;
  document.getElementById("gameWin17").value = gameWin17;
  document.getElementById("gameLose17").value = gameLose17;
  document.getElementById("gameTie17").value = gameTie17;
}

// Game 18 Functions
function autoFill18() {
  let gameWin18 = parseInt(localStorage.getItem("gameWin18")) || 0;
  let gameLose18 = parseInt(localStorage.getItem("gameLose18")) || 0;
  let gameTie18 = parseInt(localStorage.getItem("gameTie18")) || 0;
  if (gameWin18 + gameLose18 + gameTie18 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.49) {
    gameWin18++;
  } else if (autoScore < 0.98) {
    gameLose18++;
  } else {
    gameTie18++;
  }
  localStorage.setItem("gameWin18", gameWin18);
  localStorage.setItem("gameLose18", gameLose18);
  localStorage.setItem("gameTie18", gameTie18);
  document.getElementById("gameWin18").value = gameWin18;
  document.getElementById("gameLose18").value = gameLose18;
  document.getElementById("gameTie18").value = gameTie18;
}
function fillAllGames18() {
  localStorage.setItem("gameWin18", 0);
  localStorage.setItem("gameLose18", 0);
  localStorage.setItem("gameTie18", 0);
  for (let i = 0; i < 17; i++) {
    autoFill18();
  }
}
function loadGameValues18() {
  let gameWin18 = parseInt(localStorage.getItem("gameWin18")) || 0;
  let gameLose18 = parseInt(localStorage.getItem("gameLose18")) || 0;
  let gameTie18 = parseInt(localStorage.getItem("gameTie18")) || 0;
  document.getElementById("gameWin18").value = gameWin18;
  document.getElementById("gameLose18").value = gameLose18;
  document.getElementById("gameTie18").value = gameTie18;
}

// Game 19 Functions
function autoFill19() {
  let gameWin19 = parseInt(localStorage.getItem("gameWin19")) || 0;
  let gameLose19 = parseInt(localStorage.getItem("gameLose19")) || 0;
  let gameTie19 = parseInt(localStorage.getItem("gameTie19")) || 0;
  if (gameWin19 + gameLose19 + gameTie19 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.49) {
    gameWin19++;
  } else if (autoScore < 0.98) {
    gameLose19++;
  } else {
    gameTie19++;
  }
  localStorage.setItem("gameWin19", gameWin19);
  localStorage.setItem("gameLose19", gameLose19);
  localStorage.setItem("gameTie19", gameTie19);
  document.getElementById("gameWin19").value = gameWin19;
  document.getElementById("gameLose19").value = gameLose19;
  document.getElementById("gameTie19").value = gameTie19;
}
function fillAllGames19() {
  localStorage.setItem("gameWin19", 0);
  localStorage.setItem("gameLose19", 0);
  localStorage.setItem("gameTie19", 0);
  for (let i = 0; i < 17; i++) {
    autoFill19();
  }
}
function loadGameValues19() {
  let gameWin19 = parseInt(localStorage.getItem("gameWin19")) || 0;
  let gameLose19 = parseInt(localStorage.getItem("gameLose19")) || 0;
  let gameTie19 = parseInt(localStorage.getItem("gameTie19")) || 0;
  document.getElementById("gameWin19").value = gameWin19;
  document.getElementById("gameLose19").value = gameLose19;
  document.getElementById("gameTie19").value = gameTie19;
}

// Game 20 Functions
function autoFill20() {
  let gameWin20 = parseInt(localStorage.getItem("gameWin20")) || 0;
  let gameLose20 = parseInt(localStorage.getItem("gameLose20")) || 0;
  let gameTie20 = parseInt(localStorage.getItem("gameTie20")) || 0;
  if (gameWin20 + gameLose20 + gameTie20 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.49) {
    gameWin20++;
  } else if (autoScore < 0.98) {
    gameLose20++;
  } else {
    gameTie20++;
  }
  localStorage.setItem("gameWin20", gameWin20);
  localStorage.setItem("gameLose20", gameLose20);
  localStorage.setItem("gameTie20", gameTie20);
  document.getElementById("gameWin20").value = gameWin20;
  document.getElementById("gameLose20").value = gameLose20;
  document.getElementById("gameTie20").value = gameTie20;
}
function fillAllGames20() {
  localStorage.setItem("gameWin20", 0);
  localStorage.setItem("gameLose20", 0);
  localStorage.setItem("gameTie20", 0);
  for (let i = 0; i < 17; i++) {
    autoFill20();
  }
}
function loadGameValues20() {
  let gameWin20 = parseInt(localStorage.getItem("gameWin20")) || 0;
  let gameLose20 = parseInt(localStorage.getItem("gameLose20")) || 0;
  let gameTie20 = parseInt(localStorage.getItem("gameTie20")) || 0;
  document.getElementById("gameWin20").value = gameWin20;
  document.getElementById("gameLose20").value = gameLose20;
  document.getElementById("gameTie20").value = gameTie20;
}
// Game 21 Functions
function autoFill21() {
  let gameWin21 = parseInt(localStorage.getItem("gameWin21")) || 0;
  let gameLose21 = parseInt(localStorage.getItem("gameLose21")) || 0;
  let gameTie21 = parseInt(localStorage.getItem("gameTie21")) || 0;
  if (gameWin21 + gameLose21 + gameTie21 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.49) {
    gameWin21++;
  } else if (autoScore < 0.98) {
    gameLose21++;
  } else {
    gameTie21++;
  }
  localStorage.setItem("gameWin21", gameWin21);
  localStorage.setItem("gameLose21", gameLose21);
  localStorage.setItem("gameTie21", gameTie21);
  document.getElementById("gameWin21").value = gameWin21;
  document.getElementById("gameLose21").value = gameLose21;
  document.getElementById("gameTie21").value = gameTie21;
}
function fillAllGames21() {
  localStorage.setItem("gameWin21", 0);
  localStorage.setItem("gameLose21", 0);
  localStorage.setItem("gameTie21", 0);
  for (let i = 0; i < 17; i++) {
    autoFill21();
  }
}
function loadGameValues21() {
  let gameWin21 = parseInt(localStorage.getItem("gameWin21")) || 0;
  let gameLose21 = parseInt(localStorage.getItem("gameLose21")) || 0;
  let gameTie21 = parseInt(localStorage.getItem("gameTie21")) || 0;
  document.getElementById("gameWin21").value = gameWin21;
  document.getElementById("gameLose21").value = gameLose21;
  document.getElementById("gameTie21").value = gameTie21;
}

// Game 22 Functions
function autoFill22() {
  let gameWin22 = parseInt(localStorage.getItem("gameWin22")) || 0;
  let gameLose22 = parseInt(localStorage.getItem("gameLose22")) || 0;
  let gameTie22 = parseInt(localStorage.getItem("gameTie22")) || 0;
  if (gameWin22 + gameLose22 + gameTie22 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.49) {
    gameWin22++;
  } else if (autoScore < 0.98) {
    gameLose22++;
  } else {
    gameTie22++;
  }
  localStorage.setItem("gameWin22", gameWin22);
  localStorage.setItem("gameLose22", gameLose22);
  localStorage.setItem("gameTie22", gameTie22);
  document.getElementById("gameWin22").value = gameWin22;
  document.getElementById("gameLose22").value = gameLose22;
  document.getElementById("gameTie22").value = gameTie22;
}
function fillAllGames22() {
  localStorage.setItem("gameWin22", 0);
  localStorage.setItem("gameLose22", 0);
  localStorage.setItem("gameTie22", 0);
  for (let i = 0; i < 17; i++) {
    autoFill22();
  }
}
function loadGameValues22() {
  let gameWin22 = parseInt(localStorage.getItem("gameWin22")) || 0;
  let gameLose22 = parseInt(localStorage.getItem("gameLose22")) || 0;
  let gameTie22 = parseInt(localStorage.getItem("gameTie22")) || 0;
  document.getElementById("gameWin22").value = gameWin22;
  document.getElementById("gameLose22").value = gameLose22;
  document.getElementById("gameTie22").value = gameTie22;
}

// Game 23 Functions
function autoFill23() {
  let gameWin23 = parseInt(localStorage.getItem("gameWin23")) || 0;
  let gameLose23 = parseInt(localStorage.getItem("gameLose23")) || 0;
  let gameTie23 = parseInt(localStorage.getItem("gameTie23")) || 0;
  if (gameWin23 + gameLose23 + gameTie23 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.49) {
    gameWin23++;
  } else if (autoScore < 0.98) {
    gameLose23++;
  } else {
    gameTie23++;
  }
  localStorage.setItem("gameWin23", gameWin23);
  localStorage.setItem("gameLose23", gameLose23);
  localStorage.setItem("gameTie23", gameTie23);
  document.getElementById("gameWin23").value = gameWin23;
  document.getElementById("gameLose23").value = gameLose23;
  document.getElementById("gameTie23").value = gameTie23;
}
function fillAllGames23() {
  localStorage.setItem("gameWin23", 0);
  localStorage.setItem("gameLose23", 0);
  localStorage.setItem("gameTie23", 0);
  for (let i = 0; i < 17; i++) {
    autoFill23();
  }
}
function loadGameValues23() {
  let gameWin23 = parseInt(localStorage.getItem("gameWin23")) || 0;
  let gameLose23 = parseInt(localStorage.getItem("gameLose23")) || 0;
  let gameTie23 = parseInt(localStorage.getItem("gameTie23")) || 0;
  document.getElementById("gameWin23").value = gameWin23;
  document.getElementById("gameLose23").value = gameLose23;
  document.getElementById("gameTie23").value = gameTie23;
}

// Game 24 Functions
function autoFill24() {
  let gameWin24 = parseInt(localStorage.getItem("gameWin24")) || 0;
  let gameLose24 = parseInt(localStorage.getItem("gameLose24")) || 0;
  let gameTie24 = parseInt(localStorage.getItem("gameTie24")) || 0;
  if (gameWin24 + gameLose24 + gameTie24 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.49) {
    gameWin24++;
  } else if (autoScore < 0.98) {
    gameLose24++;
  } else {
    gameTie24++;
  }
  localStorage.setItem("gameWin24", gameWin24);
  localStorage.setItem("gameLose24", gameLose24);
  localStorage.setItem("gameTie24", gameTie24);
  document.getElementById("gameWin24").value = gameWin24;
  document.getElementById("gameLose24").value = gameLose24;
  document.getElementById("gameTie24").value = gameTie24;
}
function fillAllGames24() {
  localStorage.setItem("gameWin24", 0);
  localStorage.setItem("gameLose24", 0);
  localStorage.setItem("gameTie24", 0);
  for (let i = 0; i < 17; i++) {
    autoFill24();
  }
}
function loadGameValues24() {
  let gameWin24 = parseInt(localStorage.getItem("gameWin24")) || 0;
  let gameLose24 = parseInt(localStorage.getItem("gameLose24")) || 0;
  let gameTie24 = parseInt(localStorage.getItem("gameTie24")) || 0;
  document.getElementById("gameWin24").value = gameWin24;
  document.getElementById("gameLose24").value = gameLose24;
  document.getElementById("gameTie24").value = gameTie24;
}

// Game 25 Functions
function autoFill25() {
  let gameWin25 = parseInt(localStorage.getItem("gameWin25")) || 0;
  let gameLose25 = parseInt(localStorage.getItem("gameLose25")) || 0;
  let gameTie25 = parseInt(localStorage.getItem("gameTie25")) || 0;
  if (gameWin25 + gameLose25 + gameTie25 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.49) {
    gameWin25++;
  } else if (autoScore < 0.98) {
    gameLose25++;
  } else {
    gameTie25++;
  }
  localStorage.setItem("gameWin25", gameWin25);
  localStorage.setItem("gameLose25", gameLose25);
  localStorage.setItem("gameTie25", gameTie25);
  document.getElementById("gameWin25").value = gameWin25;
  document.getElementById("gameLose25").value = gameLose25;
  document.getElementById("gameTie25").value = gameTie25;
}
function fillAllGames25() {
  localStorage.setItem("gameWin25", 0);
  localStorage.setItem("gameLose25", 0);
  localStorage.setItem("gameTie25", 0);
  for (let i = 0; i < 17; i++) {
    autoFill25();
  }
}
function loadGameValues25() {
  let gameWin25 = parseInt(localStorage.getItem("gameWin25")) || 0;
  let gameLose25 = parseInt(localStorage.getItem("gameLose25")) || 0;
  let gameTie25 = parseInt(localStorage.getItem("gameTie25")) || 0;
  document.getElementById("gameWin25").value = gameWin25;
  document.getElementById("gameLose25").value = gameLose25;
  document.getElementById("gameTie25").value = gameTie25;
}

// Game 26 Functions
function autoFill26() {
  let gameWin26 = parseInt(localStorage.getItem("gameWin26")) || 0;
  let gameLose26 = parseInt(localStorage.getItem("gameLose26")) || 0;
  let gameTie26 = parseInt(localStorage.getItem("gameTie26")) || 0;
  if (gameWin26 + gameLose26 + gameTie26 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.49) {
    gameWin26++;
  } else if (autoScore < 0.98) {
    gameLose26++;
  } else {
    gameTie26++;
  }
  localStorage.setItem("gameWin26", gameWin26);
  localStorage.setItem("gameLose26", gameLose26);
  localStorage.setItem("gameTie26", gameTie26);
  document.getElementById("gameWin26").value = gameWin26;
  document.getElementById("gameLose26").value = gameLose26;
  document.getElementById("gameTie26").value = gameTie26;
}
function fillAllGames26() {
  localStorage.setItem("gameWin26", 0);
  localStorage.setItem("gameLose26", 0);
  localStorage.setItem("gameTie26", 0);
  for (let i = 0; i < 17; i++) {
    autoFill26();
  }
}
function loadGameValues26() {
  let gameWin26 = parseInt(localStorage.getItem("gameWin26")) || 0;
  let gameLose26 = parseInt(localStorage.getItem("gameLose26")) || 0;
  let gameTie26 = parseInt(localStorage.getItem("gameTie26")) || 0;
  document.getElementById("gameWin26").value = gameWin26;
  document.getElementById("gameLose26").value = gameLose26;
  document.getElementById("gameTie26").value = gameTie26;
}

// Game 27 Functions
function autoFill27() {
  let gameWin27 = parseInt(localStorage.getItem("gameWin27")) || 0;
  let gameLose27 = parseInt(localStorage.getItem("gameLose27")) || 0;
  let gameTie27 = parseInt(localStorage.getItem("gameTie27")) || 0;
  if (gameWin27 + gameLose27 + gameTie27 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.49) {
    gameWin27++;
  } else if (autoScore < 0.98) {
    gameLose27++;
  } else {
    gameTie27++;
  }
  localStorage.setItem("gameWin27", gameWin27);
  localStorage.setItem("gameLose27", gameLose27);
  localStorage.setItem("gameTie27", gameTie27);
  document.getElementById("gameWin27").value = gameWin27;
  document.getElementById("gameLose27").value = gameLose27;
  document.getElementById("gameTie27").value = gameTie27;
}
function fillAllGames27() {
  localStorage.setItem("gameWin27", 0);
  localStorage.setItem("gameLose27", 0);
  localStorage.setItem("gameTie27", 0);
  for (let i = 0; i < 17; i++) {
    autoFill27();
  }
}
function loadGameValues27() {
  let gameWin27 = parseInt(localStorage.getItem("gameWin27")) || 0;
  let gameLose27 = parseInt(localStorage.getItem("gameLose27")) || 0;
  let gameTie27 = parseInt(localStorage.getItem("gameTie27")) || 0;
  document.getElementById("gameWin27").value = gameWin27;
  document.getElementById("gameLose27").value = gameLose27;
  document.getElementById("gameTie27").value = gameTie27;
}

// Game 28 Functions
function autoFill28() {
  let gameWin28 = parseInt(localStorage.getItem("gameWin28")) || 0;
  let gameLose28 = parseInt(localStorage.getItem("gameLose28")) || 0;
  let gameTie28 = parseInt(localStorage.getItem("gameTie28")) || 0;
  if (gameWin28 + gameLose28 + gameTie28 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.49) {
    gameWin28++;
  } else if (autoScore < 0.98) {
    gameLose28++;
  } else {
    gameTie28++;
  }
  localStorage.setItem("gameWin28", gameWin28);
  localStorage.setItem("gameLose28", gameLose28);
  localStorage.setItem("gameTie28", gameTie28);
  document.getElementById("gameWin28").value = gameWin28;
  document.getElementById("gameLose28").value = gameLose28;
  document.getElementById("gameTie28").value = gameTie28;
}
function fillAllGames28() {
  localStorage.setItem("gameWin28", 0);
  localStorage.setItem("gameLose28", 0);
  localStorage.setItem("gameTie28", 0);
  for (let i = 0; i < 17; i++) {
    autoFill28();
  }
}
function loadGameValues28() {
  let gameWin28 = parseInt(localStorage.getItem("gameWin28")) || 0;
  let gameLose28 = parseInt(localStorage.getItem("gameLose28")) || 0;
  let gameTie28 = parseInt(localStorage.getItem("gameTie28")) || 0;
  document.getElementById("gameWin28").value = gameWin28;
  document.getElementById("gameLose28").value = gameLose28;
  document.getElementById("gameTie28").value = gameTie28;
}

// Game 29 Functions
function autoFill29() {
  let gameWin29 = parseInt(localStorage.getItem("gameWin29")) || 0;
  let gameLose29 = parseInt(localStorage.getItem("gameLose29")) || 0;
  let gameTie29 = parseInt(localStorage.getItem("gameTie29")) || 0;
  if (gameWin29 + gameLose29 + gameTie29 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.49) {
    gameWin29++;
  } else if (autoScore < 0.98) {
    gameLose29++;
  } else {
    gameTie29++;
  }
  localStorage.setItem("gameWin29", gameWin29);
  localStorage.setItem("gameLose29", gameLose29);
  localStorage.setItem("gameTie29", gameTie29);
  document.getElementById("gameWin29").value = gameWin29;
  document.getElementById("gameLose29").value = gameLose29;
  document.getElementById("gameTie29").value = gameTie29;
}
function fillAllGames29() {
  localStorage.setItem("gameWin29", 0);
  localStorage.setItem("gameLose29", 0);
  localStorage.setItem("gameTie29", 0);
  for (let i = 0; i < 17; i++) {
    autoFill29();
  }
}
function loadGameValues29() {
  let gameWin29 = parseInt(localStorage.getItem("gameWin29")) || 0;
  let gameLose29 = parseInt(localStorage.getItem("gameLose29")) || 0;
  let gameTie29 = parseInt(localStorage.getItem("gameTie29")) || 0;
  document.getElementById("gameWin29").value = gameWin29;
  document.getElementById("gameLose29").value = gameLose29;
  document.getElementById("gameTie29").value = gameTie29;
}

// Game 30 Functions
function autoFill30() {
  let gameWin30 = parseInt(localStorage.getItem("gameWin30")) || 0;
  let gameLose30 = parseInt(localStorage.getItem("gameLose30")) || 0;
  let gameTie30 = parseInt(localStorage.getItem("gameTie30")) || 0;
  if (gameWin30 + gameLose30 + gameTie30 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.49) {
    gameWin30++;
  } else if (autoScore < 0.98) {
    gameLose30++;
  } else {
    gameTie30++;
  }
  localStorage.setItem("gameWin30", gameWin30);
  localStorage.setItem("gameLose30", gameLose30);
  localStorage.setItem("gameTie30", gameTie30);
  document.getElementById("gameWin30").value = gameWin30;
  document.getElementById("gameLose30").value = gameLose30;
  document.getElementById("gameTie30").value = gameTie30;
}
function fillAllGames30() {
  localStorage.setItem("gameWin30", 0);
  localStorage.setItem("gameLose30", 0);
  localStorage.setItem("gameTie30", 0);
  for (let i = 0; i < 17; i++) {
    autoFill30();
  }
}
function loadGameValues30() {
  let gameWin30 = parseInt(localStorage.getItem("gameWin30")) || 0;
  let gameLose30 = parseInt(localStorage.getItem("gameLose30")) || 0;
  let gameTie30 = parseInt(localStorage.getItem("gameTie30")) || 0;
  document.getElementById("gameWin30").value = gameWin30;
  document.getElementById("gameLose30").value = gameLose30;
  document.getElementById("gameTie30").value = gameTie30;
}

// Game 31 Functions
function autoFill31() {
  let gameWin31 = parseInt(localStorage.getItem("gameWin31")) || 0;
  let gameLose31 = parseInt(localStorage.getItem("gameLose31")) || 0;
  let gameTie31 = parseInt(localStorage.getItem("gameTie31")) || 0;
  if (gameWin31 + gameLose31 + gameTie31 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.49) {
    gameWin31++;
  } else if (autoScore < 0.98) {
    gameLose31++;
  } else {
    gameTie31++;
  }
  localStorage.setItem("gameWin31", gameWin31);
  localStorage.setItem("gameLose31", gameLose31);
  localStorage.setItem("gameTie31", gameTie31);
  document.getElementById("gameWin31").value = gameWin31;
  document.getElementById("gameLose31").value = gameLose31;
  document.getElementById("gameTie31").value = gameTie31;
}
function fillAllGames31() {
  localStorage.setItem("gameWin31", 0);
  localStorage.setItem("gameLose31", 0);
  localStorage.setItem("gameTie31", 0);
  for (let i = 0; i < 17; i++) {
    autoFill31();
  }
}
function loadGameValues31() {
  let gameWin31 = parseInt(localStorage.getItem("gameWin31")) || 0;
  let gameLose31 = parseInt(localStorage.getItem("gameLose31")) || 0;
  let gameTie31 = parseInt(localStorage.getItem("gameTie31")) || 0;
  document.getElementById("gameWin31").value = gameWin31;
  document.getElementById("gameLose31").value = gameLose31;
  document.getElementById("gameTie31").value = gameTie31;
}

// Game 32 Functions
function autoFill32() {
  let gameWin32 = parseInt(localStorage.getItem("gameWin32")) || 0;
  let gameLose32 = parseInt(localStorage.getItem("gameLose32")) || 0;
  let gameTie32 = parseInt(localStorage.getItem("gameTie32")) || 0;
  if (gameWin32 + gameLose32 + gameTie32 === 17) {
    return;
  }
  let autoScore = Math.random();
  if (autoScore < 0.49) {
    gameWin32++;
  } else if (autoScore < 0.98) {
    gameLose32++;
  } else {
    gameTie32++;
  }
  localStorage.setItem("gameWin32", gameWin32);
  localStorage.setItem("gameLose32", gameLose32);
  localStorage.setItem("gameTie32", gameTie32);
  document.getElementById("gameWin32").value = gameWin32;
  document.getElementById("gameLose32").value = gameLose32;
  document.getElementById("gameTie32").value = gameTie32;
}
function fillAllGames32() {
  localStorage.setItem("gameWin32", 0);
  localStorage.setItem("gameLose32", 0);
  localStorage.setItem("gameTie32", 0);
  for (let i = 0; i < 17; i++) {
    autoFill32();
  }
}
function loadGameValues32() {
  let gameWin32 = parseInt(localStorage.getItem("gameWin32")) || 0;
  let gameLose32 = parseInt(localStorage.getItem("gameLose32")) || 0;
  let gameTie32 = parseInt(localStorage.getItem("gameTie32")) || 0;
  document.getElementById("gameWin32").value = gameWin32;
  document.getElementById("gameLose32").value = gameLose32;
  document.getElementById("gameTie32").value = gameTie32;
}

// Team ALL AFC
let gameWinAll = 0;
let gameLoseAll = 0;
let gameTieAll = 0;

function autoFillAll() {
  let autoScore = Math.random();
  if (autoScore < 0.49) {
    gameWinAll++;
  } else if (autoScore < 0.98) {
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

// Fill All Games NFC

function autoFillAll2() {
  let autoScore = Math.random();
  if (autoScore < 0.49) {
    gameWinAll++;
  } else if (autoScore < 0.98) {
    gameLoseAll++;
  } else {
    gameTieAll++;
  }
}

function fillAllGames991() {
  for (let i = 17; i <= 32; i++) {
    let gameWin = 0;
    let gameLose = 0;
    let gameTie = 0;

    for (let j = 0; j < 17; j++) {
      autoFillAll2();
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

function validateInput(input) {
  input.value = input.value.replace(/^0+/, "");

  if (input.value === "") return;

  if (isNaN(input.value) || parseInt(input.value) > 99) {
    alert("Please enter a single or double-digit number.");
    input.value = "";
  }
}

function resetAllScores() {
  for (let i = 1; i <= 32; i++) {
    gameWinAll = 0;
    gameLoseAll = 0;
    gameTieAll = 0;

    document.getElementById(`gameWin${i}`).value = 0;
    document.getElementById(`gameLose${i}`).value = 0;
    document.getElementById(`gameTie${i}`).value = 0;

    let gameWin = parseInt(localStorage.getItem("gameWin${i}")) || 0;
    let gameLose1 = parseInt(localStorage.getItem("gameLose${i}")) || 0;
    let gameTie1 = parseInt(localStorage.getItem("gameTie1${i}")) || 0;
  }
}
function resetAllScores1() {
  for (let i = 17; i <= 32; i++) {
    gameWinAll = 0;
    gameLoseAll = 0;
    gameTieAll = 0;

    document.getElementById(`gameWin${i}`).value = 0;
    document.getElementById(`gameLose${i}`).value = 0;
    document.getElementById(`gameTie${i}`).value = 0;

    let gameWin = parseInt(localStorage.getItem("gameWin${i}")) || 0;
    let gameLose1 = parseInt(localStorage.getItem("gameLose${i}")) || 0;
    let gameTie1 = parseInt(localStorage.getItem("gameTie1${i}")) || 0;
  }
}

// Function to validate the input (ensure only numbers are entered)
function validateInput(inputElement) {
  // Remove non-numeric characters
  inputElement.value = inputElement.value.replace(/[^0-9]/g, "");
}

// Function to simulate all games for a given team based on team number
function fillAllGames(teamNumber) {
  const winInput = document.getElementById(`gameWin${teamNumber}`);
  const loseInput = document.getElementById(`gameLose${teamNumber}`);
  const tieInput = document.getElementById(`gameTie${teamNumber}`);

  // Generate random scores for each input field
  const winScore = Math.floor(Math.random() * 10); // Random wins score
  const loseScore = Math.floor(Math.random() * 10); // Random losses score
  const tieScore = Math.floor(Math.random() * 10); // Random tie score

  // Assign random scores to the input fields
  winInput.value = winScore;
  loseInput.value = loseScore;
  tieInput.value = tieScore;
}

// Function to attach the simulate functionality to all buttons (for all teams)
function attachSimulateButtons() {
  for (let i = 1; i <= 32; i++) {
    const button = document.getElementById(`simulateButton${i}`);
    if (button) {
      button.addEventListener("click", function () {
        fillAllGames(i);
      });
    }
  }
}

// Call this function on page load to attach event listeners to all simulate buttons
document.addEventListener("DOMContentLoaded", function () {
  attachSimulateButtons();
});


