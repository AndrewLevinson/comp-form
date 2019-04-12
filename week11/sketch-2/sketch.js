// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.js

const weatherAPI = {
  key: "058e5a582368a449e5156441d3403646",
  location: 11238
};

let input, button;
let temp = 0;

function setup() {
  createCanvas(400, 50);
  colorMode(HSB, 100);

  input = createInput().attribute("placeholder", " 🕵🏻‍♂️ Enter a Zipcode");
  input.position(40, 51);

  button = createButton("Tell me something!");
  button.position(input.x + input.width + 10, 48);
  button.mousePressed(gen);
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
    .then(weather => {
      temp = Math.round(weather.main.temp);
      createP(`<br>I can tell you something boring...<br> in <b>${
        weather.name
      }</b> it's currently <b>${temp}</b> ℉ (also
      ${weather.weather[0].main.toLowerCase()} with a windspeed of ${
        weather.wind.speed
      } mph).
      
  `);
    })
    .then(x => {
      fetch(`http://numbersapi.com/${temp}?json`)
        .then(res => {
          return res.json();
        })
        .then(nums => {
          createP(`<br>
        But something more interesting... <br>is that <b>${
          nums.text
        }</b><br><br>`);
        });
    })
    .catch(err => {
      console.log(err);
      createP(`Something went wrong, try entering a zip code again!`);
    });
}
