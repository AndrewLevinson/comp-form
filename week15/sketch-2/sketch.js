// // require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// // require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js
// // require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.sound.js
// // require /microgames/sketches/p5.play.js

let canvasX = innerWidth * 0.8;
let canvasY = innerHeight * 0.8;
let speedX = [];
let speedY = [];
let ballX = [];
let ballY = [];
let level, paddleSize, score;
let color = "#3A7279";
let highScore = 0;
let quantity = 5;

let hat;
let kick;
let snare;
let clap;

let playing = false;

// function preload() {
//   hat = loadSound("/sound/sketches/hat.wav");
//   kick = loadSound("/sound/sketches/kick.wav");
//   snare = loadSound("/sound/sketches/snare.wav");
//   clap = loadSound("/sound/sketches/clap.wav");
// }

var sprite;
var pig, muffin, racoon;
function setup() {
  racoon = loadImage("racoon.png");
  muffin = loadImage("muffin.png");

  // sprite = createSprite(200, 150, 100, 100);
  // sprite.addImage("main", pig);
  // sprite.scale = 0.25;

  canvas = createCanvas(canvasX, canvasY);
  //   canvas.parent("sketch-holder");
  score = 0;
  // establish ball starting position and speed
  for (var i = 0; i < quantity; i++) {
    ballX[i] = random(5, 495);
    ballY[i] = random(5, 395);
    speedX[i] = -3;
    speedY[i] = -3;
  }
  // establish starting paddle w x h
  paddleWidth = 150;
  paddleHeight = 15;
}

function draw() {
  background("#F2F0EA");
  // drawSprites();

  // create moving ball that stays within play
  // create paddle
  // fill("#fff");
  // noStroke();
  // rect(mouseX, windowHeight * 0.725, paddleWidth, paddleHeight, 20);

  image(racoon, mouseX, windowHeight * 0.7, 110, 122);

  for (var i = 0; i < quantity; i++) {
    // fill("#EAC771");
    // noStroke();
    // ellipse(ballX[i], ballY[i], 30, 30);
    image(muffin, ballX[i], ballY[i], 50, 50);

    ballX[i] = ballX[i] + speedX[i];
    ballY[i] = ballY[i] + speedY[i];

    if (ballX[i] >= canvasX - 15 || ballX[i] <= 15) {
      speedX[i] *= -1;
      // kick.play();
    }
    if (ballY[i] <= 15) {
      speedY[i] *= -1;
    }

    if (ballY[i] >= canvasY) {
      // kick.stop();
    }
    // handle ball to paddle contact
    if (
      ballX[i] > mouseX &&
      ballX[i] < mouseX + paddleWidth &&
      ballY[i] + 15 >= windowHeight * 0.75 - 15 &&
      ballY[i] < canvasY
    ) {
      // speedY[i] *= -1;
      score++;

      // make more difficult as you level up
      if (level == "INTERMEDIATE") {
        speedY[i] = -7;
      }
      if (level == "EXPERT") {
        speedY[i] = speedY[i] + speedY[i] * 0.02;
      }
    }

    // check if all balls are outside canvas
    function totalLoser(ball) {
      return ball >= canvasY;
    }

    // game over message
    if (ballY.every(totalLoser)) {
      fill("#fff");
      noStroke();

      textSize(40);
      textAlign(CENTER);
      text("Game Over", canvasX / 2, (windowHeight * 0.65) / 2);

      fill(color);
      if (level == "BEGINNER") {
        rect(canvasX / 2 + 13, canvasY / 2 - 15, 92, 20, 4);
      } else if (level == "INTERMEDIATE") {
        rect(canvasX / 2 - 6, canvasY / 2 - 15, 128, 20, 4);
      } else {
        rect(canvasX / 2 + 21, canvasY / 2 - 15, 75, 20, 4);
      }

      textSize(16);
      fill("#fff");
      text("Your level: " + level, canvasX / 2, canvasY / 2);

      text(
        "But you can do better than " + score + " points...",
        canvasX / 2,
        canvasY / 1.8
      );

      textSize(18);
      fill("#f65856");
      text("CLICK TO PLAY AGAIN", mouseX, mouseY - 15);

      // set highscore
      if (score > highScore) {
        highScore = score;
      }
      // removes canvas when game ends to stop continuous draw function always running during development
      // remove();
    }
  }

  // display score
  fill("#3d3d3d");
  textSize(20);
  textAlign(LEFT);
  textFont("monospace");
  text("SCORE: " + score, 16, 30);

  // display high score
  fill("#3d3d3d");
  textSize(20);
  textAlign(LEFT);
  textFont("monospace");
  text("HIGH SCORE: " + highScore, 16, 50);

  //   // level specific outcomes
  //   if (score <= 5) {
  //     level = "BEGINNER";
  //     color = "#3A7279";
  //   }
  //   if (score <= 10 && score > 5) {
  //     level = "INTERMEDIATE";
  //     color = "#99751D";
  //     // speed level 2
  //     fill("#1DD3B0");
  //     rect(canvasX - 36, 16, 6, 18, 4);
  //   }
  //   if (score > 10) {
  //     level = "EXPERT";
  //     color = "#21A736";

  //     // speed level 3
  //     fill("#1DD3B0");
  //     rect(canvasX - 36, 16, 6, 18, 4);
  //     fill("#1DD3B0");
  //     rect(canvasX - 26, 16, 6, 18, 4);
  //   }

  //   // display speed label top right
  //   textSize(15);
  //   fill("#fff");
  //   textAlign(RIGHT);
  //   text("Speed: ", canvasX - 46, 30);

  //   // display bars for speed top right
  //   stroke("#1DD3B0");
  //   noFill();
  //   rect(canvasX - 46, 16, 6, 18, 4);
  //   stroke("#1DD3B0");
  //   noFill();
  //   rect(canvasX - 36, 16, 6, 18, 4);
  //   stroke("#1DD3B0");
  //   noFill();
  //   rect(canvasX - 26, 16, 6, 18, 4);
  //   // speed level 1
  //   fill("#1DD3B0");
  //   rect(canvasX - 46, 16, 6, 18, 4);
}

function mouseReleased() {
  setup();
}

// ability to use left and right arrows to control paddle
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    mouseX -= 60;
  } else if (keyCode === RIGHT_ARROW) {
    mouseX += 60;
  }
}

// centered canvas on window resize
function windowResized() {
  resizeCanvas(canvasX, canvasY);
}

// var sprite1, sprite2;

// function setup() {
//   createCanvas(600, 300);

//   var kingImage = loadImage("lil_pig.svg");

//   sprite1 = createSprite(200, 150, 100, 100);
//   sprite1.addImage("main", kingImage);
//   sprite1.scale = 0.25;

//   noSmooth();
// }

// function draw() {
//   background(50, 50, 80);

//   drawSprites();
// }
