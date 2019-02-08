const canvasX = innerWidth * 0.8;
const canvasY = innerHeight * 0.8;

let stacks = [];
stacks[0] = { x: canvasX * 0.2, y: canvasY - 50, radius: 10 };
stacks[1] = { x: canvasX * 0.8, y: canvasY - 50, radius: 10 };
stacks[2] = { x: canvasX * 0.5, y: canvasY * 0.1, radius: 10 };

let thing = { x: canvasX / 2, y: canvasY / 2, radius: 2 };

function setup() {
  canvas = createCanvas(canvasX, canvasY);
  canvas.parent("sketch-holder");
  background("#3d3d3d");
}

function draw() {
  for (i = 0; i < 75; i++) {
    drawSelf();
    updateSelf();
  }
}

function updateSelf() {
  // where you move positions and stuf like x and y
  let randomSpot = floor(random(0, 3));
  thing.x = lerp(thing.x, stacks[randomSpot].x, 0.5);
  thing.y = lerp(thing.y, stacks[randomSpot].y, 0.5);
}

function drawSelf() {
  // where you redraw
  noStroke();
  fill("cyan");
  for (const stack of stacks) {
    ellipse(stack.x, stack.y, stack.radius);
  }
  fill("coral");
  ellipse(thing.x, thing.y, thing.radius);
}

// centered canvas on window resize
function windowResized() {
  resizeCanvas(canvasX, canvasY);
}