// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.js

const weatherAPI = {
  key: "058e5a582368a449e5156441d3403646",
  location: 11238
};

let input, button;

let inc = 0.1;
let scl = 10;
let cols, rows;
let zoff = 0;
let windMove = 0;
let para = "Enter a zipcode pull the windspeed and see the noise update";
let hue = 50;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 100);
  cols = floor(width / scl);
  rows = floor(height / scl);

  input = createInput().attribute("placeholder", " 🕵🏻‍♂️ Enter a Zipcode");
  input.position(40, 51);

  button = createButton("Load Windspeed! 💨");
  button.position(input.x + input.width + 10, 48);
  button.mousePressed(gen);

  createP(para);
}

function gen() {
  weatherAPI.location = input.value();
  input.value("");

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=${
      weatherAPI.location
    },us&units=imperial&appid=${weatherAPI.key}`
  )
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);

      // use to update zoff noise speed
      windMove = data.wind.speed * 0.0005;

      hue = random(100);

      // data paragraph for current weater
      createP(`Currently, in <b>${data.name}</b> it's <b>${Math.round(
        data.main.temp
      )}</b> ℉ and
      <b>${data.weather[0].main.toLowerCase()}</b> with a windspeed of <b>${
        data.wind.speed
      }</b> mph.
  `);
    })
    .catch(err => {
      console.log(err);
      createP(`Something went wrong, try entering a zip code again!`);
    });
}

function draw() {
  background(10);

  // code from coding train 2d noise demo
  // https://www.youtube.com/watch?v=BjoM9oKOAKY&list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD&index=6
  let yoff = 0;
  for (y = 0; y < rows; y++) {
    var xoff = 0;
    for (x = 0; x < cols; x++) {
      let angle = noise(xoff, yoff, zoff) * TWO_PI;
      let v = p5.Vector.fromAngle(angle);
      xoff += inc;
      stroke(hue, 60, 80);
      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      line(0, 0, scl, 0);
      pop();
    }
    yoff += inc;
    zoff += windMove;
  }
}
