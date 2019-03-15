// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require /turtles/turtle/turtle.js

var myTurtle;

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 100);
  myTurtle = new Turtle();
}

function draw() {
  background(70, 5, 80);

  noFill();
  stroke(100, 100, 100);
  strokeWeight(4);

  // arch biggest
  myTurtle.penUp();
  myTurtle.moveTo(-40, 15);
  myTurtle.penDown();
  myTurtle.pushState();
  // draw the triangle
  for (var i = 0; i < 102; i++) {
    stroke(random(85, 100), random(100), random(100));
    myTurtle.moveForward(600);
    myTurtle.turnRight(78);
  }
  myTurtle.popState();

  // arch big
  myTurtle.penUp();
  myTurtle.moveTo(0, 150);
  myTurtle.penDown();
  myTurtle.pushState();
  // draw the triangle
  for (var i = 0; i < 82; i++) {
    stroke(random(70, 100), random(100), random(100), 90);
    myTurtle.moveForward(500);
    myTurtle.turnRight(78);
  }
  myTurtle.popState();

  // arch 2
  myTurtle.penUp();
  myTurtle.moveTo(0, 275);
  myTurtle.penDown();
  myTurtle.pushState();
  // draw the triangle
  for (var i = 0; i < 62; i++) {
    stroke(random(55, 100), random(100), random(100), 70);
    myTurtle.moveForward(500);
    myTurtle.turnRight(78);
  }
  myTurtle.popState();

  // arch 3
  myTurtle.penUp();
  myTurtle.moveTo(45, 400);
  myTurtle.penDown();
  myTurtle.pushState();
  // draw the triangle
  for (var i = 0; i < 42; i++) {
    stroke(random(40, 100), random(100), random(100), 50);
    myTurtle.moveForward(400);
    myTurtle.turnRight(78);
  }
  myTurtle.popState();

  // arch 4
  myTurtle.penUp();
  myTurtle.moveTo(100, 490);
  myTurtle.penDown();
  myTurtle.pushState();
  // draw the triangle
  for (var i = 0; i < 22; i++) {
    stroke(random(25, 100), random(100), random(100), 30);
    myTurtle.moveForward(300);
    myTurtle.turnRight(78);
  }
  myTurtle.popState();

  // // little sun
  // myTurtle.pushState();
  // myTurtle.penUp();
  // myTurtle.moveTo(400, 0);
  // myTurtle.penDown();

  // for (var i = 0; i < 30; i++) {
  //   stroke(random(0, 10), 50, 90);
  //   myTurtle.moveForward(80);
  //   myTurtle.turnRight(78);
  // }
  // myTurtle.popState();

  noLoop();
}
