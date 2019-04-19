// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.sound.min.js

let canvas = { width: 600, height: 600 };
let inc = 0.01;
let start = 0;
let x = 0;
let y;
let osc;
let hue;

let freq;

function setup() {
  createCanvas(canvas.width, canvas.height);
  colorMode(HSB, 100);
  osc = new p5.Oscillator("triangle");

  // play
  playButton = createButton("Play");
  playButton.position(20, 20);
  playButton.size(60, 30);
  playButton.style("background-color", "fff");
  playButton.style("border-radius", "6px");
  playButton.style("border", "none");
  playButton.style("font-family", "monospaced");
  playButton.style("text-transform", "uppercase");
  playButton.style("box-shadow", "4px 4px 0px 0px #000");
  playButton.mousePressed(playNote);

  // stop
  stopButton = createButton("Pause");
  stopButton.position(100, 20);
  stopButton.size(60, 30);
  stopButton.style("background-color", "fff");
  stopButton.style("border-radius", "6px");
  stopButton.style("border", "none");
  stopButton.style("font-family", "monospaced");
  stopButton.style("text-transform", "uppercase");
  stopButton.style("box-shadow", "4px 4px 0px 0px #000");
  stopButton.mousePressed(stopNote);
}

function draw() {
  background(hue, 50, 50);
  stroke(100);
  noFill();

  // shape inspired by code train demo
  // noise line
  beginShape();
  let xoff = 0;
  for (i = 0; i < canvas.width; i++) {
    stroke(100);
    y = noise(xoff) * canvas.height;
    vertex(i, y);
    xoff += inc;
  }
  endShape();

  // ball
  fill(10, 90, 90);
  stroke(10, 80, 50);
  y = noise(start) * canvas.height;
  ellipse(x, y, 12);
  start += inc;

  // frequency for sound
  freq = y * 0.5;
  osc.freq(freq);

  hue = freq * 0.5;
  // replay automatically
  if (x > canvas.width) {
    x = 0;
    start = inc;
  } else {
    x++;
  }
}

function playNote() {
  osc.start();
  osc.amp(0.3, 0.3);
}

function stopNote() {
  osc.stop();
}
