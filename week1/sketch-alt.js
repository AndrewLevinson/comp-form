const canvasX = innerWidth;
const canvasY = innerHeight;

// let stacks = [];
// stacks[0] = { x: canvasX * 0.2, y: canvasY - 50, radius: 10 };
// stacks[1] = { x: canvasX * 0.8, y: canvasY - 50, radius: 10 };
// stacks[2] = { x: canvasX * 0.5, y: canvasY * 0.1, radius: 10 };

// let thing = { x: canvasX / 2, y: canvasY / 2, radius: 2 };

// make2D array function code from The Coding Train Tutorial
// https://www.youtube.com/watch?v=OTNpiLUSiB4
var cols = 50;
var rows = 30;
var colors = [];
function make2Darray(cols, rows) {
  var arr = new Array(cols);
  arr.forEach(el => {
    arr[el] = new Array(rows);
  });
  return arr;
}

function setup() {
  canvas = createCanvas(canvasX, canvasY);
  canvas.parent("sketch-holder");
  // background("#3d3d3d");
  // colors = make2Darray(cols, rows);
  // for (var i = 0; i < cols; i++) {
  //   colors[i] = [];
  //   for (var j = 0; j < rows; j++) {
  //     colors[i][j] = random(255);
  //   }
  // }
  colors = make2Darray(cols, rows);
}

function draw() {
  frameRate(10);
  background("#222");
  for (var i = 0; i < cols; i++) {
    colors[i] = [];
    for (var j = 0; j < rows; j++) {
      colors[i][j] = random(255);
    }
  }
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      var x = i * 30;
      var y = j * 30;

      fill(colors[i][j], random(0, 255), random(0, 255));
      stroke(colors[i][j], random(0, 255), random(0, 255));
      // stroke(random(0, 255));
      rect(x, y, random(0, 30), random(0, 30));
      // rect(x, y, 30, 30);
    }
  }
}
// function draw() {
//   for (i = 0; i < 75; i++) {
//     drawSelf();
//     updateSelf();
//   }
// }

// function updateSelf() {
//   // where you move positions and stuf like x and y
//   let randomSpot = floor(random(0, 3));
//   thing.x = lerp(thing.x, stacks[randomSpot].x, 0.5);
//   thing.y = lerp(thing.y, stacks[randomSpot].y, 0.5);
// }

// function drawSelf() {
//   // where you redraw
//   noStroke();
//   fill("cyan");
//   for (const stack of stacks) {
//     ellipse(stack.x, stack.y, stack.radius);
//   }
//   fill("coral");
//   ellipse(thing.x, thing.y, thing.radius);
// }

// centered canvas on window resize
function windowResized() {
  resizeCanvas(canvasX, canvasY);
}
