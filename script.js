let stare = "start"; 
let startTimp;
let reactionTimp;
let timerID;

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
  textSize(24);
}

function draw() {
  background(255);

  if (stare === "start") {
    fill(0);
    text("Click pentru a începe", width / 2, height / 2);
  } else if (stare === "asteapta") {
    background(180);
    fill(0);
    text("Așteaptă verde...", width / 2, height / 2);
  } else if (stare === "verde") {
    background("green");
    fill(255);
    text("Click ACUM!", width / 2, height / 2);
  } else if (stare === "preaDevreme") {
    background("red");
    fill(255);
    text("Prea devreme! Click pentru a relua", width / 2, height / 2);
  } else if (stare === "final") {
    background(200);
    fill(0);
    text("Timp reacție: " + reactionTimp + " ms", width / 2, height / 2);
    text("Click pentru a relua", width / 2, height / 2 + 40);
  }
}

function mousePressed() {
  if (stare === "start") {
    stare = "asteapta";
    let t = random(2000, 5000);
    timerID = setTimeout(() => {
      stare = "verde";
      startTimp = millis();
    }, t);
  } else if (stare === "asteapta") {
    clearTimeout(timerID);
    stare = "preaDevreme";
  } else if (stare === "verde") {
    reactionTimp = int(millis() - startTimp);
    stare = "final";
  } else {
    stare = "start";
  }
}
