// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.js

let canvas = { width: 500, height: 500 };

function setup() {
  createCanvas(canvas.width, canvas.height);
  colorMode(HSB, 100);
}

function draw() {
  // background(50, 10, 90);

  img = createImage(10, 20);
  img.loadPixels();

  // ocean
  for (var i = 0; i < 20; i++) {
    var c = color(50, 40, 90);
    img.set(i, 19, c);
    img.set(i, 18, c);
    img.set(i, 16, c);
    img.set(i, 17, c);
    img.set(i, 15, c);
    img.set(i, 14, c);
    img.set(i, 13, c);
  }

  // sand light
  for (var i = 0; i < 10; i++) {
    var c = color(10, 40, 90);
    img.set(i, 10, c);
    img.set(i, 9, c);
    img.set(i, 8, c);
    img.set(i, 7, c);

    img.set(i, 11, c);
    img.set(i, 12, c);
  }
  // ocean creep
  for (var i = 0; i < 10; i++) {
    var c = color(50, 40, 90);
    img.set(random(5), random(12, 13), c);
    img.set(random(i), random(11, 12), c);
  }

  // sky
  for (var i = 0; i < 10; i++) {
    var c = color(80, 10, 90);
    img.set(i, 0, c);
    img.set(i, 1, c);
    img.set(i, 2, c);
  }

  // buildings
  for (var i = 0; i < 10; i++) {
    var c = color(30, 90, 10);
    img.set(i, 6, c);
    img.set(i, 5, c);
    img.set(i, 4, c);
    // img.set(i, 3, c);
  }

  // buildings top
  for (var i = 0; i < 10; i++) {
    var c = color(30, 90, 10);
    img.set(0, 1, c);
    img.set(0, 2, c);
    img.set(0, 3, c);
    img.set(1, 3, c);
    img.set(2, 2, c);
    img.set(2, 3, c);
    img.set(3, 1, c);
    img.set(3, 2, c);
    img.set(3, 3, c);
    img.set(4, 3, c);
    img.set(6, 3, c);
    img.set(5, 3, c);
    img.set(5, 2, c);
    img.set(5, 1, c);
    img.set(7, 3, c);
    img.set(7, 2, c);
    img.set(8, 3, c);
    img.set(8, 1, c);
    img.set(8, 2, c);
    img.set(9, 3, c);
  }

  img.updatePixels();

  noSmooth();
  image(img, 0, 0, width, height);
  noLoop();
}
