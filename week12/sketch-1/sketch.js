// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.sound.js
// code from FFT class example

let fft;
let fft2;
let fft3;

let hat;
let kick;
let snare;
let clap;

let playing = false;

function preload() {
  hat = loadSound("/sound/sketches/hat.wav");
  kick = loadSound("/sound/sketches/kick.wav");
  snare = loadSound("/sound/sketches/snare.wav");
  clap = loadSound("/sound/sketches/clap.wav");
}

function setup() {
  createCanvas(500, 500);

  // ball 1
  x = 200;
  y = 00;
  dX = 5;
  dY = 31;

  // ball 2
  x2 = 200;
  y2 = 00;
  dX2 = 10;
  dY2 = 20;

  // ball 3
  x3 = 200;
  y3 = 00;
  dX3 = 8;
  dY3 = 18;

  fft = new p5.FFT(0, 128);
  fft.setInput(kick);

  fft2 = new p5.FFT(0, 128);
  fft2.setInput(hat);

  fft3 = new p5.FFT(0, 128);
  fft3.setInput(clap);
}

function draw() {
  background(50);
  fill(255);
  noStroke();

  const data = fft3.waveform();
  const data2 = fft2.waveform();
  const data3 = fft.waveform();

  for (let i = 0; i < 128; i++) {
    const x = map(i, 0, 128, 0, 500);
    const y = map(data2[i], -1, 1, 200, 10);
    fill(255, 255, 56);
    ellipse(x, y, 5, 5);
  }
  for (let i = 0; i < 128; i++) {
    const x = map(i, 0, 128, 0, 500);
    const y = map(data[i], -1, 1, 480, 10);
    fill(255, 56, 212);
    ellipse(x, y, 5, 5);
  }
  for (let i = 0; i < 128; i++) {
    const x = map(i, 0, 128, 0, 500);
    const y = map(data3[i], -1, 1, 760, 10);
    fill(56, 255, 225);
    ellipse(x, y, 5, 5);
  }

  // ball 1
  push();
  fill(56, 255, 225);
  x += dX;
  y += dY;

  if (x > 495) {
    dX = -abs(dX);
  }
  if (y > 375) {
    dY = -abs(dY);
    // insert sound at bottom level hits
    kick.play();
  }
  if (x < 5) {
    dX = abs(dX);
  }
  if (y < 5) {
    dY = abs(dY);
  }

  ellipse(x, y, 10, 10);
  pop();

  // ball 2
  push();
  fill(255, 56, 212);
  x2 += dX2;
  y2 += dY2;

  if (x2 > 495) {
    dX2 = -abs(dX2);
  }
  if (y2 > 220) {
    dY2 = -abs(dY2);
    // insert sound at bottom level hits
    clap.play();
  }
  if (x2 < 5) {
    dX2 = abs(dX2);
  }
  if (y2 < 5) {
    dY2 = abs(dY2);
  }

  ellipse(x2, y2, 10, 10);
  pop();

  // ball 3
  push();
  fill(255, 255, 56);
  x3 += dX3;
  y3 += dY3;

  if (x3 > 495) {
    dX3 = -abs(dX3);
  }
  if (y3 > 90) {
    dY3 = -abs(dY3);
    // insert sound at bottom level hits
    hat.play();
  }
  if (x3 < 5) {
    dX3 = abs(dX3);
  }
  if (y3 < 5) {
    dY3 = abs(dY3);
  }

  ellipse(x3, y3, 10, 10);
  pop();
}
