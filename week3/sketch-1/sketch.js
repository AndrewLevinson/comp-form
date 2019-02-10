// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js

let selector, happy, sad, hippo;
let image = 0;
let paused = false;

let emotions = [];
let shapes = [];

function preload() {
  happy = loadImage("happy.png");
  emotions.push(happy);
  sad = loadImage("sad.png");
  emotions.push(sad);
  hippo = loadImage("hippo.png");
  emotions.push(hippo);
}

class Ball {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
}

function setup() {
  // create select
  createP(`It's rainning moods and I'm feelin'...`);
  selector = createSelect();
  selector.option("Happy", "happy");
  selector.option("Sad", "sad");
  selector.option("Like a Hippo", "hippo");
  createP("<br> ");

  createCanvas(600, 600, WEBGL);
  colorMode(HSB, 100);
  background(color(30, 15, 95));
}

function draw() {
  frameRate(30);
  moveStuff();
  drawStuff();
}

function moveStuff() {
  for (const b of shapes) {
    b.x += 0.2;
    b.y++;
  }
}

function drawStuff() {
  translate(-300, -300);

  shapes.push(new Ball(Math.random() * 500, 0, Math.random() * 30));

  noStroke();
  background(color(30, 15, 95));

  if (selector.value() === "happy") {
    image = 0;
    background(80, 15, 95);
  } else if (selector.value() === "sad") {
    image = 1;
    background(0, 10, 10);
  } else if (selector.value() === "hippo") {
    image = 2;
    background(30, 15, 95);
  }

  for (const b of shapes) {
    texture(emotions[image]);
    ellipse(b.x, b.y, b.r);
  }
}

function mousePressed() {
  if (mouseX > 0 && mouseX < 400 && mouseY > 0 && mouseY < 400) {
    paused ? loop() : noLoop();
    paused = !paused;
  }
}
