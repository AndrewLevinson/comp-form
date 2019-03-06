// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.js
// code inspo: Justin; in class example

let canvas = { width: 500, height: 500 };
let myImage;

function preload() {
  myImage = loadImage("image.jpg");
}

function setup() {
  createCanvas(canvas.width, canvas.height);
  colorMode(HSB, 100);
}

function draw() {
  background(0);

  for (let y = 0; y < myImage.height; y++) {
    for (let x = 0; x < myImage.width; x++) {
      let this_color = myImage.get(x, y);
      let below_color = myImage.get(x + 1, y + 2);

      if (brightness(this_color) > brightness(below_color)) {
        let out_color = color(70, 30, 90);
        myImage.set(x, y, out_color);
        myImage.updatePixels();
      }
    }
  }

  noSmooth();
  image(myImage, 0, 0, width, height);

  noLoop();
}
