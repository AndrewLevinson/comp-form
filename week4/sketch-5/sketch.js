// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.js

let playButton;
let stopButton;
let analyzer;
function preload() {
  myDrums = loadSound(
    "https://raw.githubusercontent.com/AndrewLevinson/comp-form/master/week2/sketch-4/drumloop.wav"
  );
}

function setup() {
  colorMode(HSB, 100);
  createCanvas(300, 300);
  backgroundColor = color(99, 40, 90);

  analyzer = new p5.Amplitude();
  analyzer.setInput(myDrums);

  myDrums.amp(0);
  myDrums.play();
  myDrums.loop();

  // play
  playButton = createButton("Play");
  playButton.position(50, 50);
  playButton.size(50, 30);
  playButton.mousePressed(startAll);

  // stop
  stopButton = createButton("Pause");
  stopButton.position(120, 50);
  stopButton.size(50, 30);
  stopButton.mousePressed(stopAll);
}

function draw() {
  background(backgroundColor);
  noStroke();
  fill("#3d3d3d");

  // Get the average (root mean square) amplitude
  var rms = analyzer.getLevel();
  fill(80, 50, 90);

  // Draw an ellipse with size based on noise
  let r = 25 + noise(rms * 10) * 100;
  ellipse(width / 2, height / 2, r);
}

function startAll() {
  myDrums.amp(0.35, 0.05);
  backgroundColor = color(50, 40, 90);
}

function stopAll() {
  myDrums.amp(0, 0.5);
  backgroundColor = color(99, 40, 90);
}
