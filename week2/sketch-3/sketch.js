function setup() {
  createCanvas(200, 200);
  background("#fff");
  colorMode(HSB, 100);
  noStroke();

  // color values with all colors representated 1 time but white 4 times to increase probability of being selected.
  colorOptions = [
    "#D01619", // red
    "#050404", // black
    "#FED308", // yellow
    "#344D90", // blue
    "#F9F9F9", // white
    "#F9F9F9", // white
    "#F9F9F9", // white
    "#F9F9F9" // white
  ];
}

function draw() {
  frameRate(2);
  // spacing of Mondrian style boxes inspired by https://editor.p5js.org/CarlieZ/sketches/BkYuHVX2
  fill(colorOptions[floor(random(0, colorOptions.length))]);
  rect(0, 0, 50, 200);

  fill(colorOptions[floor(random(0, colorOptions.length))]);
  rect(50, 0, 150, 200);

  fill(colorOptions[floor(random(0, colorOptions.length))]);
  rect(50, 135, 200, 200);

  fill(colorOptions[floor(random(0, colorOptions.length))]);
  rect(0, 135, 50, 70);

  fill(colorOptions[floor(random(0, colorOptions.length))]);
  rect(180, 170, 180, 70);

  fill(colorOptions[floor(random(0, colorOptions.length))]);
  rect(180, 165, 50, 10);

  // fixed black borders
  fill("#000");
  rect(43, 0, 8, 200);
  rect(0, 135, 200, 8);
  rect(0, 65, 50, 12);
  rect(177, 135, 7, 90);
}
