// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.js

function setup() {
  createCanvas(600, 200);
  ellipseMode(CENTER);
  fill(200, 50, 100);
  noStroke();
}

function draw() {
  background(255);
  let n;

  stroke(0, 0, 0, 50);

  for (let x = 15; x < width - 15; x += 1.5) {
    let offsetX = 0;
    let offsetY = 0;

    // lean (mid frequency, static)
    n = noise(x * 0.1);
    offsetX += n * 20 - 10;

    // height (very high frequency becomes fully random due to aliasing)
    offsetY += noise(x * 100) * 20;

    // wind( low frequency, timed)
    n = noise(x * 0.01 + millis() * -0.001);
    offsetX += n * 40;

    line(x, 190, x + offsetX, 100 + offsetY);

    let clumping = 0.01;
    if (noise(x * clumping) > 0.5) {
      if (noise(x) < 0.5) {
        let flowerSize;
        flowerSize = map(noise(x * 0.01), 0.5, 1, 5, 25);

        drawFlower(x + offsetX, 100 + offsetY, flowerSize);
      }
    }
  }
}

function drawFlower(x, y, size) {
  push();
  fill(255, 0, 0);
  translate(x, y);
  rotate(45);
  ellipse(0, 0, size);
  fill("black");
  ellipse(0, 0, size * 0.5);
  pop();
}
