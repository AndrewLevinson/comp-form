const canvasX = innerWidth;
const canvasY = innerHeight;
let cols = 50;
let rows = 30;

// make2D array function code inspired by The Coding Train Tutorial
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

      fill(10);
      stroke(random(0, 255), random(0, 255), random(0, 255), random(0, 600));
      stroke(random(0, 255), random(0, 255), random(0, 255));
      // ellipse(x, y, 40, 40);
      rect(x, y, 30, 30);
    }
  }
}
