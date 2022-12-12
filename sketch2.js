let inputTxt = document.getElementById("input-text");
let wordBlock = document.getElementById("white-card");

// wordBlock.innerHTML = inputTxt;
let x, y;
let img;

function preload() {
  // img = loadImage("cadre3.png");
}


function setup() {
  let canvas = createCanvas(650, 650);
  canvas.parent("canvasContainer");

  background(100);
  x = width / 1.22;
  y = height / 1.08;


}

function draw() {
  background(191, 138, 100);
  wordBlock.innerHTML = inputTxt.value;


  let rectHeight = 20;
  for (let y = 0; y < height; y += rectHeight) {
    let r = map(y, 0, height, 102, 193);
    let g = map(y, 0, height, 203, 395);
    let b = 215;

    noStroke();
    fill(r, g, b);
    rect(0, y, width, rectHeight);
  }

  stroke(70, 58, 2);
  fill(193, 168, 55);
  beginShape();

  curveVertex(0, 650);
  curveVertex(0, 650);
  curveVertex(2, 650);
  curveVertex(0, 243);
  curveVertex(79, 183);
  curveVertex(150, 157);
  curveVertex(221, 169);
  curveVertex(301, 218);
  curveVertex(378, 222);
  curveVertex(442, 193);
  curveVertex(499, 182);
  curveVertex(650, 166);
  curveVertex(650, 650);
  curveVertex(650, 650);
  curveVertex(650, 650);
  curveVertex(650, 648);
  endShape();
  stroke(133, 114, 18);
  fill(226, 198, 70);
  beginShape();

  curveVertex(646, 324);
  curveVertex(650, 261);
  curveVertex(321, 252);
  curveVertex(239, 288);
  curveVertex(74, 241);
  curveVertex(0, 302);
  curveVertex(0, 567);
  curveVertex(1, 635);
  curveVertex(652, 640);
  curveVertex(646, 471);
  endShape();
  stroke(112, 95, 7);
  fill(216, 193, 93);
  beginShape();
  curveVertex(517, 428);
  curveVertex(3, 642);
  curveVertex(0, 365);
  curveVertex(120, 330);
  curveVertex(304, 374);
  curveVertex(414, 436);
  curveVertex(502, 448);
  curveVertex(600, 452);
  curveVertex(650, 461);
  curveVertex(650, 524);
  curveVertex(650, 651);
  curveVertex(650, 650);
  endShape();
  fill(103, 36, 21);
  quad(650, 650, 650, 566, 166, 479, 0, 650);
  noFill();
  stroke(40, 93, 118);
  strokeWeight(2)
  for (let i = 0; i < 10; i++) {
    let x = width / 1;
    let y = height * 2.5 / 3 - i * 16;
    let w = 100 - i * 87;
    let h = 200 - i * 40;
    ellipse(y, x, w, h);
  }

  quad(650, 650, 650, 566, 166, 479, 0, 650);

  stroke(68, 23, 2);
  fill(170, 87, 26);
  circle(533, 603, 75);
  fill(189, 87, 11);
  noFill();
  stroke(125, 173, 225);

  for (let i = 0; i < 6; i++) {
    let dia = 30 + i * 5;
    ellipse(x, y, dia);
  }
  stroke(99, 6, 41);
  circle(533, 603, 60);
  noStroke();
  fill(170, 87, 26);
  triangle(570, 592, 519, 548, 496, 604);

  stroke(99, 6, 41);
  circle(520, 552, 15);
  fill(30, 79, 130);
  triangle(514, 599, 525, 581, 551, 593)
  triangle(526, 582, 527, 556, 515, 558)
  triangle(526, 580, 504, 586, 510, 572)
  triangle(527, 583, 539, 566, 548, 576)
  beginShape();


  endShape();

}

function mousePressed() {
  //console.log(mouseX, mouseY);
  //console.log("vertex(" + mouseX + ", " + mouseY + ");");

  console.log("curveVertex(" + mouseX + ", " + mouseY + ");");
}


fill(255);
textSize(30);
// text(inputTxt.value, 100, 100);

//image(img, windowWidth / 2, windowHeight / 2);
//console.log(img)

//drawDecorations();



function drawDecorations() {
  image(img, windowWidth / 2, windowHeight / 2);
  img.resize(windowWidth, windowHeight);
}
function keyPressed() {
  //if (key == "s") {
  //saveCanvas("Card from Morocco", "png");
  //}
}
function mousePressed() {
  //console.log(mouseX, mouseY);
  //console.log("vertex(" + mouseX + ", " + mouseY + ");");

  console.log("curveVertex(" + mouseX + ", " + mouseY + ");");
}