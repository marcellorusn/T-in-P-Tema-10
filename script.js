const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const mesaj = document.getElementById("mesaj");

let startTime = 0;
let asteaptaVerde = false;
let poateClick = false;
let timer;

// funcție care colorează canvasul
function deseneazaCuloare(culoare) {
  ctx.fillStyle = culoare;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// când dai click pe canvas
canvas.addEventListener("click", () => {
  if (!asteaptaVerde && !poateClick) {
    // prima apăsare → începem jocul
    mesaj.textContent = "Așteaptă culoarea verde...";
    deseneazaCuloare("gray");

    asteaptaVerde = true;

    let timpRandom = Math.random() * 3000 + 2000; // între 2 și 5 secunde

    timer = setTimeout(() => {
      deseneazaCuloare("green");
      mesaj.textContent = "Click ACUM!";
      startTime = Date.now();
      poateClick = true;
      asteaptaVerde = false;
    }, timpRandom);
  } else if (poateClick) {
    let timp = Date.now() - startTime;
    mesaj.textContent = "Bravo! Timp: " + timp + " ms";
    deseneazaCuloare("white");
    poateClick = false;
  } else if (asteaptaVerde) {
    clearTimeout(timer);
    mesaj.textContent = "Prea devreme! Încearcă din nou.";
    deseneazaCuloare("red");
    asteaptaVerde = false;
  } else {
    // reset
    mesaj.textContent = "Click pe canvas pentru a începe";
    deseneazaCuloare("white");
  }
});

// inițial, canvasul e alb
deseneazaCuloare("white");

