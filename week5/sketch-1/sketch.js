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
  background(20);
  ellipseMode(CENTER);

  let amplitude = amplitude_slider.value() / 100;
  let frequency = freq_slider.value() / 1000;
  let speed = speed_slider.value() / 1000;

  noiseDetail(1, 0.5);

  fill(100);
  noStroke();

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

    ellipse(x + offsetX, y + offsetY, 10, 10);
  }
  speedMultiplier += speed * 0.6;
}
