const canvasX = innerWidth;
const canvasY = innerHeight;
let cols = 50;
let rows = 50;
let x2 = canvasX / 2 + 15;
let y2 = canvasY / 2 + 15;
const directions = ["left", "right", "up", "down"];

// make2D array function code snippet from The Coding Train Tutorial
// https://www.youtube.com/watch?v=OTNpiLUSiB4
function make2Darray(cols, rows) {
  let arr = new Array(cols);
  arr.forEach(el => {
    arr[el] = new Array(rows);
  });
  return arr;
}

function setup() {
  canvas = createCanvas(canvasX, canvasY);
  canvas.parent("sketch-holder");
  colors = make2Darray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * 30;
      let y = j * 30;
      fill(random(0, 125));
      rect(x, y, 30, 30);
    }
  }
}

function draw() {
  frameRate(10);
  drawSelf();
  updateSelf();
}

function updateSelf() {
  // randomDirection code snippet from Chris Coyier / CSS Tricks
  let randomDirection =
    directions[Math.floor(Math.random() * directions.length)];

  if (x2 < 0 || x2 > canvasX || y2 < 0 || y2 > canvasY) {
    console.log("winner!");

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i * 30;
        let y = j * 30;

        fill(random(0, 255), random(0, 255), random(0, 255), random(0, 255));
        stroke(random(0, 255), random(0, 255), random(0, 255), random(0, 255));
        rect(x, y, random(0, 30), random(0, 30));
      }
    }
  } else {
    if (randomDirection === "left") {
      x2 = x2 - 30;
    } else if (randomDirection === "right") {
      x2 = x2 + 30;
    } else if (randomDirection === "up") {
      y2 = y2 + 30;
    } else if (randomDirection === "down") {
      y2 = y2 - 30;
    }
  }
}

function drawSelf() {
  fill(random(100, 255), 10, 10);
  ellipse(x2, y2, 15);
}
