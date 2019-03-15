// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.js

let canvas = { width: 500, height: 500 };

let myTurtle;
let myWeight;

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 100);
  noLoop();
  myTurtle = new Turtle();

  myWeight = noise(50, 50) * 5;
}

function draw() {
  frameRate(10);
  // background(90);
  myTurtle.penUp();
  myTurtle.moveTo(250, 250);
  myTurtle.penDown();

  for (let i = 0; i < 150; i++) {
    myWeight = myWeight + 0.2;
    strokeWeight(myWeight);
    stroke(random(20), 30, 80);
    myTurtle.moveForward(i * 8);
    myTurtle.turnLeft(90.2);
  }
}
