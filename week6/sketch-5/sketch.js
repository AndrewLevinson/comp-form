// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.js

let canvas = { width: 400, height: 400 };

function setup() {
  createCanvas(canvas.width, canvas.height);
  colorMode(HSB, 100);
}
let gap = 100;

function draw() {
  background(20);

  noStroke();
  ellipseMode(CENTER);

  var noiseFrequency = 0.02;

  randomSeed(1);
  for (z = 0; z < 600; z++) {
    for (var i = 0; i < 200; i++) {
      // these points are not scattered in the same way
      // how can you make the arrangement match the challenge?

      let x = random(canvas.width * 0.1) - 10;
      // let x = noise(frameCount * 0.03, frameCount * 0.03) * 100;

      let y = random(canvas.height);

      // the diameter shouldn't always be 10, it needs to vary
      let diameter = random(3, 16);

      // the colors also need to change
      // what colorMode would be easiest to work with?
      let hue = noise(x * noiseFrequency, y * noiseFrequency) * 105;
      // console.log(hue);
      fill(hue, 95, 60);

      ellipse(x + z, y, diameter);
    }
    // z += gap;
  }

  // noLoop();
}
