const canvasX = innerWidth;
const canvasY = innerHeight;
// make2D array function code from The Coding Train Tutorial
// https://www.youtube.com/watch?v=OTNpiLUSiB4
let cols = 50;
let rows = 30;

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
  colorMode(HSB, 100);
  make2Darray(cols, rows);

  slider = createSlider(0, 100, 50, 10);
  slider.position(10, 10);
  slider.style("width", "80px");
  slider.style("background-color", "red");
}

function draw() {
  let radius = min(
    random(10, 75),
    random(10, 75),
    random(10, 75),
    random(10, 75),
    random(10, 75)
  );

  let hue = slider.value();
  frameRate(5);
  background("#222");
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * 30;
      let y = j * 30;
      fill(hue, 60, random(100));
      stroke(hue, 60, random(100));
      ellipse(x, y, radius);
      rect(x, y, 30, 30);
    }
  }
}
