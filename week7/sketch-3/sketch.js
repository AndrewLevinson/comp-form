// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.js
// require /turtles/turtle/turtle.js

let canvas = { width: 500, height: 500 };

// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require /turtles/turtle/turtle.js

var myTurtle;
var aImage;

function preload() {
  aImage = loadImage("turtle.png");
}
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require /turtles/turtle/turtle.js

var myTurtle;

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 100);
  noFill();
  // stroke(100, 20, 20);
  // background(20, 20, 20);
  noLoop();

  myTurtle = new Turtle();
}

function draw() {
  myTurtle.penUp();
  myTurtle.moveTo(260, 320);
  myTurtle.penDown();

  for (var i = 0; i < 300; i++) {
    myTurtle.turnLeft(20);
    myTurtle.moveForward(25 + i * 0.15);
    drawLeaf();
  }
}

function drawLeaf() {
  myTurtle.pushState();

  for (i = 0; i < 1; i++) {
    myTurtle.moveForward(2);
    myTurtle.turnLeft(18);
    stroke(20, 30, 60);
    myTurtle.image(aImage, 42, 42);
  }

  myTurtle.popState();
}
