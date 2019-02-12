// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.js

let x = 30;
let y = 150;

function setup() {
  colorMode(HSB, 100);
  createCanvas(300, 300);
  textFont("Monospace");

  createP("Font Weight");
  weightSelector = createSelect();
  weightSelector.option("Regular", NORMAL);
  weightSelector.option("Bold", BOLD);
  weightSelector.option("Italics", ITALIC);

  createP("Font Size");
  fontSizeSlider = createSlider(10, 50, 30, 1);

  createP("Letter Tracking");
  trackingSlider = createSlider(0, 80, 20, 0.5);

  createP("Text Transform");
  selector = createSelect();
  selector.option("Lower Case", "lower");
  selector.option("Upper Case", "upper");
  createP("<br> ");

  createP("Y Position (staggered)");
  vertSlider = createSlider(-50, 50, 0, 1);

  createP("Number of Characters");
  sliderNum = createSlider(1, 10, 5, 1);
}

function draw() {
  moveStuff();
  drawStuff();
}

function moveStuff() {
  tracking = trackingSlider.value();
  numLetters = sliderNum.value();
  vert = vertSlider.value();
  fontSize = fontSizeSlider.value();
  fontWeight = weightSelector.value();
}

function drawStuff() {
  background(50, 10, 95);
  fill(50, 10, 25);
  textSize(fontSize);
  textStyle(fontWeight);

  for (i = 0; i < numLetters; i++) {
    selector.value() === "upper"
      ? (textContent = `${char(97 + i).toUpperCase()}`)
      : (textContent = `${char(97 + i).toLowerCase()}`);

    text(textContent, x + i * tracking, y + i * vert);
  }
}
