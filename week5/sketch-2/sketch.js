// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.js
// code inspo: Justin; in class example

let canvas = { width: 500, height: 300 };

let amplitude_slider, freq_slider, speed_slider;

let startX = 50;
let startY = 250;
let endX = 450;
let endY = 50;

let speedMultiplier = 0;

function setup() {
  createCanvas(canvas.width, canvas.height);
  colorMode(HSB, 100);

  createP("Amplitude");
  amplitude_slider = createSlider(0, 100, 50);

  createP("Frequency");
  freq_slider = createSlider(0, 100, 50);

  createP("Time Speed");
  speed_slider = createSlider(0, 200, 100);
}

function draw() {
  background("#fcf5ed");
  ellipseMode(CENTER);

  let amplitude = amplitude_slider.value() / 100;
  let frequency = freq_slider.value() / 1000;
  let speed = speed_slider.value() / 1000;

  noiseDetail(1, 0.5);

  // fill(100);
  // noStroke();
  stroke(100);

  // study this loop. do you understand how the line of ellipses is created?
  for (i = 0; i < 1; i += 0.02) {
    var x = lerp(startX, endX, i);
    var y = lerp(startY, endY, i);

    // hint: drive offsetX and offsetY with noise() instead of random()
    var offsetX = noise(frequency * x + speedMultiplier, 10) * amplitude * 85;

    var offsetY =
      noise(frequency * y + speedMultiplier, 50 + frameCount * 0.05) *
      amplitude *
      85;

    let hue = noise(10, frameCount * 0.03) * 200;
    fill(hue, 80, 60);

    let wiggleX = mouseX * 0.05;
    let wiggleY = mouseY * 0.05;
    rect(x + offsetX - 50 + wiggleX, y + offsetY - 125 + wiggleY, 30, 30);
    ellipse(x + offsetX - 25 + wiggleX, y + offsetY - 50 + wiggleY, 30, 30);
    rect(x + offsetX - 10 + wiggleX, y + offsetY - 25 + wiggleY, 30, 30);
    ellipse(x + offsetX + 10 + wiggleX, y + offsetY + 50 + wiggleY, 30, 30);
  }
  speedMultiplier += speed * 0.6;
}
