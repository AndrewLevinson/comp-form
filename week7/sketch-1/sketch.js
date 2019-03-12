// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.js
// require /turtles/turtle/turtle.js

let canvas = { width: 500, height: 500 };
let myTurtle;

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 100);
  noFill();
  // stroke(50, 50, 50);
  background(50, 40, 70);
  // noLoop();

  myTurtle = new Turtle();
  myTurtle.penUp();
  myTurtle.moveTo(width / 2, height / 2 - 50);
}

function draw() {
  // background(90, 20, 90);

  for (let i = 0; i < 10; i++) {
    for (let x = 0; x < 300; x++) {
      myTurtle.penDown();
      myTurtle.moveForward(1);
      myTurtle.turnRight(1);
    }
    myTurtle.penUp();
    myTurtle.moveForward(10);
    stroke(random(20), random(20, 50), 100);
    myTurtle.turnLeft(20);
  }

  myTurtle.moveForward(2);
  myTurtle.turnLeft(0.1);
}
