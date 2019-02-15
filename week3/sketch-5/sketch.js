// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.js

// adding parameters to the base p5 snowflake example https://p5js.org/examples/simulate-snowflakes.html

let input, button, selector;

let snowflakes = []; // array to hold snowflake objects

function setup() {
  createCanvas(400, 500);
  fill(240);
  noStroke();

  createP("Storm Intensity");
  intensity = createSlider(0.25, 2, 0.5, 0.25);

  createP("Number of new flakes added per frame");
  flakeCount = createSlider(0, 30, 5, 1);

  createP("Flakes Color");
  color_picker = createInput("#ffffff", "color");

  createP("Min Flake Size");
  minFlake = createSlider(1, 5, 2, 1);

  createP("Max Flake Size");
  maxFlake = createSlider(6, 10, 5, 1);
}

function draw() {
  background("#3d3d3d");
  let t = frameCount / 60; // update time

  // create a random number of snowflakes each frame
  for (var i = 0; i < flakeCount.value(); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(minFlake.value(), maxFlake.value());

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, intensity.value());

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    fill(color_picker.value());
    ellipse(this.posX, this.posY, this.size);
  };
}
