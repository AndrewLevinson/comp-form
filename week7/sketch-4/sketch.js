// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.js

// Dot Challenge
let canvas = { width: 640, height: 320 };

// draws some grass with density driven by a luminance map image

let testImage;

function preload() {
  testImage = loadImage("image.png");
  // noLoop();
}

function setup() {
  // create a place to draw
  createCanvas(testImage.width, testImage.height);

  // load up the pixel[] array so we can read colors out of it later
  testImage.loadPixels();
}

function draw() {
  // clear the background
  background(0, 0, 0);

  // set drawing styles
  fill(255, 255, 255);
  stroke(255, 100, 100, 50);

  let start = millis();

  // loop over every x,y pixel coordinate in the image
  for (x = 0; x < testImage.width; x++) {
    for (y = 0; y < testImage.height; y++) {
      let pixelRed = getQuick(testImage, x, y)[0];

      // pick a random value and compare it pixelRed
      if (random(100, 255) < pixelRed) {
        drawGrassBlade(x, y);
      }
    }
  }

  let end = millis();

  console.log(`took ${floor(end - start)} ms`);
}

function drawGrassBlade(x, y) {
  let bladeHeight = max(
    random(1, 30),
    random(1, 30),
    random(1, 30),
    random(1, 30),
    random(1, 30),
    random(1, 30)
  );

  let bladeLean = random(-0.3, 0.3);
  bladeLean *= bladeHeight;

  line(x, y, x + bladeLean, y - bladeHeight);
}

// find the RGBA values of the pixel at x, y in the img.pixels array
// see: http://p5js.org/reference/#/p5/pixels[]
// we don't need to worry about screen pixel density here, because we are not reading from the screen

function getQuick(img, x, y) {
  let i = (y * img.width + x) * 4;
  return [
    testImage.pixels[i],
    testImage.pixels[i + 1],
    testImage.pixels[i + 2],
    testImage.pixels[i + 3]
  ];
}
