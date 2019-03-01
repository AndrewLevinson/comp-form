// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.js

// Dot Challenge
let canvas = { width: 400, height: 400 };

function setup() {
  createCanvas(canvas.width, canvas.height);
  colorMode(HSB, 100);
}

function draw() {
  background(20);

  noStroke();
  ellipseMode(CENTER);

  var noiseFrequency = 0.02;

  for (var i = 0; i < 100; i++) {
    // these points are not scattered in the same way
    // how can you make the arrangement match the challenge?
    var x =
      (random(canvas.width) + random(canvas.width) + random(canvas.width)) / 3;
    var y =
      (random(canvas.height) + random(canvas.height) + random(canvas.height)) /
      3;

    // the diameter shouldn't always be 10, it needs to vary
    var diameter = random(3, 16);

    // the colors also need to change
    // what colorMode would be easiest to work with?
    fill(noise(x * noiseFrequency, y * noiseFrequency) * 125, 100, 100);

    ellipse(x, y, diameter);
  }

  noLoop();
}
