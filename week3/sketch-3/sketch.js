// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.js

let input, button;

function setup() {
  // create canvas
  colorMode(HSB, 100);
  createCanvas(400, 400, WEBGL);
  background(70, 10, 99);

  input = createInput().attribute("placeholder", " 🕵🏻‍♂️ Search for an image");
  input.position(40, 51);

  button = createButton("Find It");
  button.position(input.x + input.width + 10, 48);
  button.mousePressed(gen);
}

function gen() {
  let query = input.value();
  input.value("");

  fetch(`https://source.unsplash.com/600x600/?${query}`)
    .then(response => {
      return response;
    })
    .then(data => {
      loadImage(data.url, img => {
        texture(img);
        rect(-200, -200, 400, 400);
      });
      // console.log(data.url);
    })
    .catch(err => {
      console.log("Error happened during fetching!", err);
    });
}
