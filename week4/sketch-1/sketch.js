// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.js
// code inspo: Justin; in class example

let amplitude = 150;
let frequency = 0.02;

function setup() {
  createCanvas(600, 200);
  noStroke();
  noiseSeed(1);

  createP("Speed of Development");
  speed = createSlider(0.001, 0.02, 0.008, 0.001);
}

function draw() {
  speedBuild = speed.value();

  background(200, 200, 210);
  fill(100);
  let x = 0;
  for (x = 0; x < width; x += 20) {
    let buildingHeight =
      noise(x * frequency, frameCount * speedBuild) * amplitude;

    // build antenna for tall buildings
    if (buildingHeight > 90) {
      fill("#fff");
      rect(x + 10, height * 0.9 - buildingHeight - 20, 3, buildingHeight);
      ellipse(x + 10, height * 0.9 - buildingHeight - 10, 3, buildingHeight);
    }
    fill("#3d3d3d");
    rect(x, height * 0.9 - buildingHeight, 20, buildingHeight);
  }

  fill(120);
  rect(0, height * 0.9, width, height * 0.5);
}
