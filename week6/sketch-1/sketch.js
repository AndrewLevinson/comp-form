// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.js

let canvas = { width: 500, height: 500 };

function setup() {
  createCanvas(canvas.width, canvas.height);
  colorMode(HSB, 100);
}

function draw() {
  randomSeed(1);
  background(100);

  img = createImage(100, 1);
  img.loadPixels();

  for (var y = 0; y < img.height; y++) {
    for (var x = 0; x < img.width; x++) {
      let hue = noise(100) * frameCount * random();
      var c = color(hue, 50, 90);
      img.set(x, y, c);
    }
  }

  img.updatePixels();

  noSmooth();
  image(img, 0, 0, width, height);
  // noLoop();
}
