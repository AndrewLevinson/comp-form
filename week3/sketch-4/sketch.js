// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.js

// https://funtranslations.com/api used for translations

let input, button, selector;

function setup() {
  // create canvas
  colorMode(HSB, 100);
  createCanvas(600, 400);
  background(90, 10, 99);

  input = createInput().attribute("placeholder", " Enter text to translate");
  input.position(40, 51);

  // createP("Text Transform");
  selector = createSelect();
  selector.option("Yoda", "yoda");
  selector.option("Pirate", "pirate");
  selector.option("Valley Speak", "valspeak");
  selector.option("Minion", "minion");
  selector.option("Shakespeare", "shakespeare");
  selector.option("Emoji", "emoji");
  selector.position(input.width + 50, 53);

  button = createButton("Translate!");
  button.position(input.x + input.width + selector.width + 80, 48);
  button.mousePressed(gen);
}

function gen() {
  let query = input.value();
  let type = selector.value();
  input.value("");

  // string replacement from appendTo.com
  for (i = 0; i < query.length; i++) {
    query = query.replace(" ", "%20");
  }

  fetch(`https://api.funtranslations.com/translate/${type}.json?text=${query}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      textStyle(BOLD);
      text(`${type} translation: ${data.contents.translated}`, 10, 150);
      textStyle(NORMAL);
      text(`Original text: ${data.contents.text}`, 10, 220);
    })
    .catch(err => {
      console.log("Error happened during fetching!", err);
    });
}
