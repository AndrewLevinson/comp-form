// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.js
var EXPORT = false;
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

  if (EXPORT) {
    saveFrame("EXPORT", frameCount, "jpg", 60);
  }
  if (frameCount > 60) {
    noLoop();
  }
}

// saveFrame - a utility function to save the current frame out with a nicely formatted name
// format: name_####.extension
// name: prefix for file name
// frameNumber: number for the frame, will be zero padded
// extension: jpg or png, controls file name and image format
// maxFrame: checked against frameNumber, frames beyond maxFrame are not saved
function saveFrame(name, frameNumber, extension, maxFrame) {
  // don't save frames once we reach the max
  if (maxFrame && frameNumber > maxFrame) {
    return;
  }

  if (!extension) {
    extension = "png";
  }
  // remove the decimal part (just in case)
  frameNumber = floor(frameNumber);
  // zero-pad the number (e.g. 13 -> 0013);
  var paddedNumber = ("0000" + frameNumber).substr(-4, 4);

  save(name + "_" + paddedNumber + "." + extension);
}
