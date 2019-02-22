// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.js

const weatherAPI = {
  key: "058e5a582368a449e5156441d3403646",
  location: {
    newYork: {
      zip: 11238,
      hue: 10
    },
    chicago: {
      zip: 60614,
      hue: 40
    },
    losAngeles: {
      zip: 90011,
      hue: 80
    }
  }
};

let inc = 0.1;
let scl = 10;
let cols, rows;
let zoff = 0;
let windMove = 0;
let para = "Enter a zipcode pull the windspeed and see the noise update";
let hue = 50;

function setup() {
  colorMode(HSB, 100);

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=${
      weatherAPI.location.newYork.zip
    },us&units=imperial&appid=${weatherAPI.key}`
  )
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);

      // use to update zoff noise speed
      windMove = data.wind.speed * 0.0005;

      hue = weatherAPI.location.losAngeles.hue;

      // data paragraph for current weater
      createP(`<b>${data.name}:</b> <b>${data.wind.speed}</b> mph wind
  `);
    })
    .then(() => {
      createCanvas(300, 300);
      cols = floor(width / scl);
      rows = floor(height / scl);
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

      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      line(width, height, scl, 0);
      pop();
    }
    yoff += inc;
    zoff += windMove;
  }
}
