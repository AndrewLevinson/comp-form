// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.js
var EXPORT = false;

let haystacks = [];
let fixed = [];
let pointOne, pointTwo, pointThree;

// triangle dots
haystacks[0] = { x: 300, y: 100 };
haystacks[1] = { x: 100, y: 500 };
haystacks[2] = { x: 500, y: 500 };

// fixed points
fixed[0] = { x: 300, y: 100 };
fixed[1] = { x: 100, y: 500 };
fixed[2] = { x: 500, y: 500 };
fixed[3] = { x: 100, y: 500 };
fixed[4] = { x: 100, y: 500 };

// quad
// haystacks[0] = { x: 150, y: 150 };
// haystacks[1] = { x: 100, y: 500 };
// haystacks[2] = { x: 500, y: 100 };
// haystacks[3] = { x: 450, y: 450 };

let donkey = { x: 300, y: 300 };

window.setup = function() {
  createCanvas(600, 600);
  colorMode(HSB, 100);
  background(50, 50, 50);

  fill(10, 80, 90);
  noStroke();
  // for (const haystack of haystacks) {
  //   ellipse(haystack.x, haystack.y, 12, 12);
  // }
};

window.draw = function() {
  for (let i = 0; i < 100; i++) {
    drawSelf();
    updateSelf();
  }

  if (EXPORT) {
    saveFrame("EXPORT", frameCount, "jpg", 300);
  }
  if (frameCount > 300) {
    noLoop();
  }
};

function updateSelf() {
  // push();
  // background(50, 50, 50);
  // fixed[0].x += 0.02;
  // fixed[0].y -= 0.02;
  // fixed[2].x += 0.02;
  // fixed[2].y -= 0.02;

  if (frameCount > 0 && frameCount < 100) {
    fixed[1].y -= 0.02;
    fixed[1].x += 0.01;
    fixed[3].y -= 0.02;
    fixed[3].x += 0.01;

    fixed[4].x += 0.02;
  } else if (frameCount > 100 && frameCount < 200) {
    fixed[1].x += 0.02;
    fixed[3].y -= 0.02;
    fixed[3].x += 0.01;
    fixed[4].x += 0.02;
  } else if (frameCount > 200) {
    fixed[0].x += 0.02;
    fixed[0].y -= 0.02;
    fixed[2].x += 0.02;
    fixed[2].y -= 0.02;
    fixed[3].x += 0.02;
    fixed[3].y -= 0.02;
    fixed[1].x += 0.02;
    fixed[1].y -= 0.02;
  }
  // pop();

  let haystackIndex = floor(random(haystacks.length));
  donkey.x = lerp(donkey.x, haystacks[haystackIndex].x, 0.5);
  donkey.y = lerp(donkey.y, haystacks[haystackIndex].y, 0.5);

  if (frameCount > 200) {
    push();
    translate(width / 2, 350);
    textAlign(CENTER);
    // textFont(BOLD);
    text("COMPUTATIONAL", 0, 0);
    text("FORM", 00, 20);
    pop();
  }
}

function drawSelf() {
  push();
  fill(60, 0, 100);
  noStroke();
  if (frameCount > 200) {
    ellipse(donkey.x, donkey.y, 1, 1);
  }
  pop();
  push();
  fill(10, 50, 100);
  ellipse(fixed[0].x, fixed[0].y, 12, 12);
  ellipse(fixed[1].x, fixed[1].y, 12, 12);
  ellipse(fixed[2].x, fixed[2].y, 12, 12);
  ellipse(fixed[3].x, fixed[3].y, 12, 12);
  ellipse(fixed[4].x, fixed[4].y, 12, 12);
  pop();
}

// saveFrame - a utility function to save the current frame out with a nicely formatted name
// format: name_####.extension
// name: prefix for file name
// frameNumber: number for the frame, will be zero padded
// extension: jpg or png, controls file name and image format
// maxFrame: checked against frameNumber, frames beyond maxFrame are not saved
function saveFrame(name, frameNumber, extension, maxFrame) {
  // don't save frames once we reach the max
  if (maxFrame && frameNumber > maxFrame) {
    return;
  }

  if (!extension) {
    extension = "png";
  }
  // remove the decimal part (just in case)
  frameNumber = floor(frameNumber);
  // zero-pad the number (e.g. 13 -> 0013);
  var paddedNumber = ("0000" + frameNumber).substr(-4, 4);

  save(name + "_" + paddedNumber + "." + extension);
}
