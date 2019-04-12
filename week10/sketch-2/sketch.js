// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.js
// require /turtles/turtle/turtle.js
var EXPORT = false;

let canvas = { width: 500, height: 500 };
let myTurtle;
let i = 1;
let ringColor = 1;
let backgroundHue = 50;

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 100);
  noFill();
  frameRate(60);
  // stroke(50, 50, 50);
  background(90, 40, 70);
  // noLoop();

  myTurtle = new Turtle();
  myTurtle.penUp();
  myTurtle.moveTo(width / 2, height / 2 - 50);
}

function draw() {
  background(backgroundHue, 20, 90);
  shape(i);
  ringColor++;
  backgroundHue++;

  if (EXPORT) {
    saveFrame("EXPORT", frameCount, "jpg", 90);
  }
  if (frameCount > 90) {
    noLoop();
  }
}

function shape() {
  for (let i = 0; i < 10; i++) {
    for (let x = 0; x < 500; x++) {
      myTurtle.penDown();
      myTurtle.moveForward(i);
      myTurtle.turnRight(i);
    }
    myTurtle.penUp();
    myTurtle.moveForward(10);
    stroke(ringColor, random(20, 50), 100);
    myTurtle.turnLeft(20);
  }

  myTurtle.moveForward(0.5);
  myTurtle.turnLeft(0.1);
}

// saveFrame - a utility function to save the current frame out with a nicely formatted name
// format: name_####.extension
// name: prefix for file name
// frameNumber: number for the frame, will be zero padded
// extension: jpg or png, controls file name and image format
// maxFrame: checked against frameNumber, frames beyond maxFrame are not saved
function saveFrame(name, frameNumber, extension, maxFrame) {
  // don't save frames once we reach the max
  if (maxFrame && frameNumber > maxFrame) {
    return;
  }

  if (!extension) {
    extension = "png";
  }
  // remove the decimal part (just in case)
  frameNumber = floor(frameNumber);
  // zero-pad the number (e.g. 13 -> 0013);
  var paddedNumber = ("0000" + frameNumber).substr(-4, 4);

  save(name + "_" + paddedNumber + "." + extension);
}
