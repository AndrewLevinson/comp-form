let playButton;
let stopButton;
let changeNoteButton;
let analyzer;
function preload() {
  myDrums = loadSound(
    "https://raw.githubusercontent.com/AndrewLevinson/comp-form/master/week2/sketch-4/drumloop.wav"
  );
}

// The midi notes of a scale
let notes = [
  { noteNum: 58, noteName: "A#" },
  { noteNum: 60, noteName: "C" },
  { noteNum: 63, noteName: "D#" },
  { noteNum: 65, noteName: "E" },
  { noteNum: 66, noteName: "F#" },
  { noteNum: 67, noteName: "G" },
  { noteNum: 70, noteName: "A#" }
];

let currentNote = notes[Math.floor(Math.random(0, notes.length))];

function setup() {
  colorMode(HSB, 100);
  textAlign(LEFT);
  createCanvas(300, 300);
  backgroundColor = color(99, 40, 90);

  analyzer = new p5.Amplitude();
  analyzer.setInput(myDrums);
  osc = new p5.Oscillator("triangle");

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

  // change note
  changeNoteButton = createButton("Random Note");
  changeNoteButton.position(190, 50);
  changeNoteButton.size(50, 30);
  changeNoteButton.mousePressed(changeNote);
}

function draw() {
  background(backgroundColor);
  noStroke();
  fill("#3d3d3d");
  text("A# Blues-y Scale", 20, height - 20);

  text(`Note: ${currentNote["noteName"]}`, 225, 40);

  // Get the average (root mean square) amplitude
  var rms = analyzer.getLevel();
  fill(80, 50, 90);
  // Draw an ellipse with size based on volume
  ellipse(width / 2, height / 2, 10 + rms * 200, 10 + rms * 200);
}

function startAll() {
  osc.freq(midiToFreq(currentNote["noteNum"]));
  osc.start();
  osc.amp(0.3, 0.3);

  myDrums.amp(0.35, 0.05);

  backgroundColor = color(50, 40, 90);
}

function stopAll() {
  osc.amp(0, 0.5);
  myDrums.amp(0, 0.5);
  backgroundColor = color(99, 40, 90);
}

function changeNote() {
  currentNote = notes[floor(random(0, notes.length))];
  osc.freq(midiToFreq(currentNote["noteNum"]));
}
