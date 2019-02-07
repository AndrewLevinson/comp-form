function preload() {
  mySound = loadSound("drumloop.wav");
}

// The midi notes of a scale
let notes = [60, 62, 64, 65, 67, 69, 71];

function setup() {
  createCanvas(300, 300);
  backgroundColor = color(255, 0, 255);
  osc = new p5.Oscillator("triangle");

  mySound.amp(0);
  mySound.play();
  mySound.loop();
}

function draw() {
  background(backgroundColor);
  textAlign(CENTER);
  text("click inside to start", width / 2, height / 2);
  text("click outside to stop ->", width / 2, height / 2 + 50);
  frameRate(4);
  // var freq = midiToFreq(notes[floor(random(0, notes.length))]);
}

function mouseClicked() {
  if (mouseX > 0 && mouseX < width && mouseY < height && mouseY > 0) {
    osc.start();
    osc.freq(midiToFreq(notes[floor(random(0, notes.length))]));
    osc.amp(0.3, 0.3);
    mySound.amp(0.35, 0.05);
    backgroundColor = color(0, 255, 255);
  } else {
    osc.amp(0, 0.5);
    mySound.amp(0, 0.5);
    backgroundColor = color(255, 0, 255);
  }
}
