// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.min.js
//require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.min.js


var seaweeds = [];
var seafloor_bk;
var seafloor;
var bubbles = [];
var fishes = [];

var fishColors = [];
var seaweedColors = [];

function setup() {
  createCanvas(960, 480);

  fishColors = [color(232, 191, 179), color(223, 109, 78), color(132, 101, 165)];
  seaweedColors = [color(165, 204, 198), color(136, 195, 173), color(136, 195, 173), color(219, 233, 213)];
  for (var i = 0; i < 7; i++)
    seaweeds.push(new Seaweed(random(100, width - 100), random(height, height + 100)));

  for (var i = 0; i < 10; i++) {
    bubbles.push(new Bubble());
  }

  for (var i = 0; i < 8; i++) {
    fishes.push(new Fish());
  }

  seafloor = new Seafloor(color(237, 216, 154));
  seafloor_bk = new Seafloor(color(234, 176, 90));
  //noLoop();
  noFill();
}

function draw() {
  background(245, 243, 231);

  seafloor_bk.show();

  for (let seaweed of seaweeds)
    seaweed.show();

  for (let fish of fishes)
    fish.show();

  seafloor.show();

  for (let bubble of bubbles)
    bubble.show();

}

class Fish {
  constructor() {
    this.x = random(0, width);
    this.y = random(height * 0.15, height * 0.8);
    this.w = random(20, 60);
    this.h = this.w * random(0.4, 0.7);
    this.col = fishColors[Math.floor(Math.random() * fishColors.length)];
    this.xspeed = random(0.7, 2);
    if (random() < 0.5)
      this.xspeed *= -1;
  }
  show() {

    noStroke();
    fill(this.col);
    this.x += this.xspeed;
    if (this.x < -150 || this.x > width + 150) {
      //turn
      this.xspeed *= -1;
      this.y = random(height * 0.15, height * 0.8);
      this.w = random(20, 50);
      this.h = random(15, 25);
    }

    push();
    translate(this.x, this.y);
    //  console.log(this.xsppeed);
    if (this.xspeed < 0) {

      beginShape();
      curveVertex(-this.w, 0);
      curveVertex(-this.w, 0);
      curveVertex(-this.w * 0.3, -this.h);
      curveVertex(this.w, 0);
      curveVertex(this.w, this.h * 0.3);
      endShape(CLOSE);

      beginShape();
      curveVertex(-this.w, 0);
      curveVertex(-this.w, 0);
      curveVertex(-this.w * 0.3, this.h * 0.8);
      curveVertex(this.w, 0);
      curveVertex(this.w, -this.h * 0.3);
      endShape(CLOSE);

    } else {

      beginShape();
      curveVertex(this.w, 0);
      curveVertex(this.w, 0);
      curveVertex(this.w * 0.3, -this.h);
      curveVertex(-this.w, 0);
      curveVertex(-this.w, this.h * 0.3);
      endShape(CLOSE);

      beginShape();
      curveVertex(this.w, 0);
      curveVertex(this.w, 0);
      curveVertex(this.w * 0.3, this.h * 0.8);
      curveVertex(-this.w, 0);
      curveVertex(-this.w, -this.h * 0.3);
      endShape(CLOSE);

    }

    pop();

  }
}
class Bubble {
  constructor() {
    this.basex = random(0, width);
    this.x = this.basex;
    this.y = random(height, height * 1.5);
    this.r = random(10, 40);
    this.yspeed = random(1, 5);
    this.xspeed = random(-5, 5);

    this.random1 = random(20, 40);
    this.random2 = random(0.004, 0.006);
  }

  show() {
    fill(166, 208, 243, 150);
    this.y -= this.yspeed;
    this.x = this.basex + sin(millis() * this.random2) * this.random1;
    ellipse(this.x, this.y, this.r, this.r);
    fill(255, 200);
    ellipse(this.x - this.r * 0.2, this.y - this.r * 0.2, this.r * 0.2);
    if (this.y < 0) {
      this.basex = random(0, width);
      this.x = this.basex;
      this.y = random(height, height * 1.5);
    }
  }
}
class Seafloor {
  constructor(color) {
    this.vertex = [];
    var count = 5;
    //  let = 0.02;
    this.vertex.push(createVector(0, height + 100));
    this.vertex.push(createVector(0, height + 100));
    this.col = color;

    for (var i = 0; i < 4; i++) {
      var x = this.vertex[i + 1].x + random(width * 0.15, width * 0.25);
      var y = random(height * 0.8, height * 1.2);
      this.vertex.push(createVector(x, y, 0))
    }

    this.vertex.push(createVector(width, height + 100));
    this.vertex.push(createVector(width, height + 100));

    this.vertex.sort(function(a, b) {
      return b.x - a.x;
    });
  }
  show() {
    noStroke();
    fill(this.col);
    beginShape();

    for (let v of this.vertex) {
      curveVertex(v.x, v.y);
      //text(i, v.x, v.y);

    }
    endShape(CLOSE);
  }
}

class Seaweed {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.col = seaweedColors[Math.floor(Math.random() * seaweedColors.length)];
    //this.kitten = random(kittens);
    this.parts = [];
    this.contourVertexes = [];
    this.contourVertexes2 = [];
    this.contourVertexes3 = [];

    this.rot = random(-1, 1) * PI / 4;
    this.partNum = floor(random(2, 7));

    //var isTail = true;
    for (var i = 0; i < this.partNum; i++) {
      var pct = i / this.partNum;

      var minR = 25;
      var maxR = 50;
      this.r = random(minR, maxR);
      var isHead;
      if (i == this.partNum - 1) {
        isHead = true;
        this.r = minR;
      } else
        isHead = false;


      this.parts[i] = new SeaweedPart(0, 0 - i * maxR, this.r, isHead, pct);
    }


  }

  updateContour() {
    //console.log("update contour");
    this.contourVertexes = [];
    this.contourVertexes2 = [];
    this.contourVertexes3 = [];
    var partNum = 5;
    //var isTail = true;
    for (var i = 0; i < this.partNum; i++) {
      this.contourVertexes = this.contourVertexes.concat(this.parts[i].vertexes);
      this.contourVertexes2 = this.contourVertexes2.concat(this.parts[i].vertexes2);
    }
    this.contourVertexes3 = this.contourVertexes.concat(this.contourVertexes2.reverse());

  }

  show() {

    //---
    push();
    translate(this.x, this.y);
    rotate(this.rot);
    this.updateContour();
    //
    //stroke(0);
    //fill(166, 204, 197);
    fill(this.col);
    noStroke();
    beginShape();
    curveVertex(this.contourVertexes3[0].x, this.contourVertexes3[0].y);
    var tp = 0;
    for (var v of this.contourVertexes3) {
      curveVertex(v.x, v.y);
      //ellipse(v.x, v.y, 5, 5);  //show every contour point
    }
    curveVertex(this.contourVertexes3[this.contourVertexes3.length - 1].x, this.contourVertexes3[this.contourVertexes3.length - 1].y);
    endShape(CLOSE);

    //debug
    // stroke(0);
    // for (var i = 0; i < this.contourVertexes3.length; i++) {
    //   text(i, this.contourVertexes3[i].x, this.contourVertexes3[i].y);
    // }



    beginShape();
    curveVertex(this.parts[0].x, this.parts[0].y);
    for (let part of this.parts) {
      part.updateVertexes();
      part.show();

      //text(part.pct, part.x, part.y);
      curveVertex(part.nx, part.ny);
    }
    curveVertex(this.parts[this.parts.length - 1].x, this.parts[this.parts.length - 1].y);
    stroke(255, 60);
    strokeWeight(3);
    endShape();

    pop();

  }



}

class SeaweedPart {
  constructor(x, y, r, isHead, pct) {
    this.x = x;
    this.y = y;
    this.r = r;
    //this.kitten = random(kittens);
    this.isHead = isHead;
    this.nx = x;
    this.ny = y;

    this.pct = pct;
    //create vertexes
    this.vertexes = [];
    this.vertexes2 = [];
    this.steps = floor(map(this.pct, 0, 1, 7, 3));
    if (this.isHead == true)
      this.steps = floor(random(1, 4));

    this.updateVertexes();
  }

  show() {

    //moving
    this.nx = this.x + (sin(millis() * 0.01 + this.pct * 8) * 20 + 20) * this.pct;

    noFill();
    strokeWeight(5)
    stroke(136, 197, 174);
    //ellipse(this.nx, this.ny, this.r, this.r);


  }

  updateVertexes() {
    // console.log(this.nx);
    this.vertexes = [];
    this.vertexes2 = [];



    var startIndex;
    if (this.isHead == true)
      startIndex = 0;
    else
      startIndex = 1;

    for (var i = startIndex; i < this.steps - 1; i++) {
      var yoffset = sin(-PI / 2 - i * (PI / this.steps)) * this.r / 2;
      var xoffset = cos(-PI / 2 - i * (PI / this.steps)) * this.r / 2;

      //  var randomRadius = 10;
      this.vertexes.push(createVector(this.nx + xoffset, this.ny + yoffset));
      this.vertexes2.push(createVector(this.nx - xoffset, this.ny + yoffset));
    }
    this.vertexes = this.vertexes.reverse();

    this.vertexes2 = this.vertexes2.reverse();
    if (this.isHead)
      this.vertexes2.pop();
  }

}