let inputTxt = document.getElementById("input-text");
let wordBlock = document.getElementById("white-card");

// wordBlock.innerHTML = inputTxt;
let a;
let b;
let img;

function preload() {
  // img = loadImage("cadre2.png");
}


function setup() {
  let canvas = createCanvas(750, 650);
  canvas.parent("canvasContainer");
  a = width / 2;
  b = height / 2;


}

function draw() {
  background(191, 138, 100);
  wordBlock.innerHTML = inputTxt.value;
  stroke(106, 83, 50);
  noFill();
  for (x = 100; x < width * 2.5; x += 20) {
    for (y = 100; y < height * 2.5; y += 10) {
      circle(x, y, 40);
    }
  }

  noStroke();
  fill(191, 138, 100);
  rect(0, 0, 140, 530);
  rect(0, 0, 690, 90);
  rect(560, 0, 180, 530);
  triangle(133, 143, 225, 92, 143, 78);
  triangle(581, 172, 584, 92, 456, 84);
  fill(245, 211, 160);

  // Let's use nested loops for the increment of the radian distance and diameter!
  for (let i = 0; i < 3; i++) {
    for (let deg = 0; deg < 360; deg += 30) {
      let angle = radians(deg);
      let radDist = 20 + i * 25; // ***
      let a = 50 + cos(angle) * radDist;
      let b = 220 + sin(angle) * radDist;
      let dia = 10 - i * 2; // ***
      ellipse(a, b, dia, dia);
    }
  }
  // Let's use nested loops for the increment of the radian distance and diameter!
  for (let i = 0; i < 3; i++) {
    for (let deg = 0; deg < 360; deg += 30) {
      let angle = radians(deg);
      let radDist = 20 + i * 25; // ***
      let a = 50 + cos(angle) * radDist;
      let b = 490 + sin(angle) * radDist;
      let dia = 10 - i * 2; // ***
      ellipse(a, b, dia, dia);
    }
  }
  // Let's use nested loops for the increment of the radian distance and diameter!
  for (let i = 0; i < 3; i++) {
    for (let deg = 0; deg < 360; deg += 30) {
      let angle = radians(deg);
      let radDist = 20 + i * 25; // ***
      let a = 50 + cos(angle) * radDist;
      let b = 350 + sin(angle) * radDist;
      let dia = 10 - i * 2; // ***
      ellipse(a, b, dia, dia);
    }
  }
  // Let's use nested loops for the increment of the radian distance and diameter!
  for (let i = 0; i < 3; i++) {
    for (let deg = 0; deg < 360; deg += 30) {
      let angle = radians(deg);
      let radDist = 20 + i * 25; // ***
      let a = 50 + cos(angle) * radDist;
      let b = 80 + sin(angle) * radDist;
      let dia = 10 - i * 2; // ***
      ellipse(a, b, dia, dia);
    }
  }
  // Let's use nested loops for the increment of the radian distance and diameter!
  for (let i = 0; i < 3; i++) {
    for (let deg = 0; deg < 360; deg += 30) {
      let angle = radians(deg);
      let radDist = 20 + i * 25; // ***
      let a = 180 + cos(angle) * radDist;
      let b = 50 + sin(angle) * radDist;
      let dia = 10 - i * 2; // ***
      ellipse(a, b, dia, dia);
    }
  }
  // Let's use nested loops for the increment of the radian distance and diameter!
  for (let i = 0; i < 3; i++) {
    for (let deg = 0; deg < 360; deg += 30) {
      let angle = radians(deg);
      let radDist = 20 + i * 25; // ***
      let a = 320 + cos(angle) * radDist;
      let b = 30 + sin(angle) * radDist;
      let dia = 10 - i * 2; // ***
      ellipse(a, b, dia, dia);
    }
  }
  // Let's use nested loops for the increment of the radian distance and diameter!
  for (let i = 0; i < 3; i++) {
    for (let deg = 0; deg < 360; deg += 30) {
      let angle = radians(deg);
      let radDist = 20 + i * 25; // ***
      let a = 450 + cos(angle) * radDist;
      let b = 60 + sin(angle) * radDist;
      let dia = 10 - i * 2; // ***
      ellipse(a, b, dia, dia);
    }
  }
  // Let's use nested loops for the increment of the radian distance and diameter!
  for (let i = 0; i < 3; i++) {
    for (let deg = 0; deg < 360; deg += 30) {
      let angle = radians(deg);
      let radDist = 20 + i * 25; // ***
      let a = 600 + cos(angle) * radDist;
      let b = 30 + sin(angle) * radDist;
      let dia = 10 - i * 2; // ***
      ellipse(a, b, dia, dia);
    }
  }
  // Let's use nested loops for the increment of the radian distance and diameter!
  for (let i = 0; i < 3; i++) {
    for (let deg = 0; deg < 360; deg += 30) {
      let angle = radians(deg);
      let radDist = 20 + i * 25; // ***
      let a = 750 + cos(angle) * radDist;
      let b = 40 + sin(angle) * radDist;
      let dia = 10 - i * 2; // ***
      ellipse(a, b, dia, dia);
    }
  }
  // Let's use nested loops for the increment of the radian distance and diameter!
  for (let i = 0; i < 3; i++) {
    for (let deg = 0; deg < 360; deg += 30) {
      let angle = radians(deg);
      let radDist = 20 + i * 25; // ***
      let a = 650 + cos(angle) * radDist;
      let b = 150 + sin(angle) * radDist;
      let dia = 10 - i * 2; // ***
      ellipse(a, b, dia, dia);
    }
  }
  // Let's use nested loops for the increment of the radian distance and diameter!
  for (let i = 0; i < 3; i++) {
    for (let deg = 0; deg < 360; deg += 30) {
      let angle = radians(deg);
      let radDist = 20 + i * 25; // ***
      let a = 630 + cos(angle) * radDist;
      let b = 280 + sin(angle) * radDist;
      let dia = 10 - i * 2; // ***
      ellipse(a, b, dia, dia);
    }
  }
  // Let's use nested loops for the increment of the radian distance and diameter!
  for (let i = 0; i < 3; i++) {
    for (let deg = 0; deg < 360; deg += 30) {
      let angle = radians(deg);
      let radDist = 20 + i * 25; // ***
      let a = 650 + cos(angle) * radDist;
      let b = 410 + sin(angle) * radDist;
      let dia = 10 - i * 2; // ***
      ellipse(a, b, dia, dia);
    }
  }
  // Let's use nested loops for the increment of the radian distance and diameter!
  for (let i = 0; i < 3; i++) {
    for (let deg = 0; deg < 360; deg += 30) {
      let angle = radians(deg);
      let radDist = 20 + i * 25; // ***
      let a = 630 + cos(angle) * radDist;
      let b = 520 + sin(angle) * radDist;
      let dia = 10 - i * 2; // ***
      ellipse(a, b, dia, dia);
    }
  }

  //noLoop();

  strokeWeight(55);
  stroke(255);
  noFill();
  stroke(127, 82, 53);
  line(292, 110, 345, 90);
  line(345, 90, 397, 110);
  arc(292, 241, 350, 259, radians(150), radians(270));
  arc(397, 240, 350, 259, radians(270), radians(35));

  line(167, 313, 190, 330);
  line(163, 330, 140, 360);

  line(515, 320, 495, 335);
  line(515, 335, 550, 365);
  line(140, 360, 140, 530);
  line(550, 363, 550, 530);
  strokeWeight(15);
  stroke(214, 185, 154);
  fill(214, 185, 154);
  ellipse(350, 300, 250, 180);
  triangle(345, 190, 440, 250, 260, 250);
  quad(440, 530, 483, 530, 483, 380, 440, 350);
  quad(220, 530, 270, 530, 270, 350, 220, 380);
  rect(255, 280, 190, 250);
  strokeWeight(15);
  noStroke();
  fill(205, 168, 118);
  rect(0, 530, 750, 300);
  strokeWeight(1);
  fill(147, 40, 9);
  quad(260, 650, 500, 650, 390, 470, 290, 470);
  fill(99, 35, 4);
  quad(320, 660, 440, 660, 380, 480, 300, 480);
  fill(196, 100, 11);
  triangle(320, 648, 435, 648, 360, 559);
  triangle(360, 561, 379, 481, 302, 481);
  fill(205, 95, 24);
  ellipse(347, 520, 60, 10);
  ellipse(347, 520, 40, 20);
  ellipse(365, 600, 60, 10);
  ellipse(365, 600, 40, 20);
  ellipse(365, 600, 20, 40);
  ellipse(347, 520, 20, 40);
  noStroke();
  fill(194, 47, 4);
  circle(307, 620, 10);
  circle(305, 590, 10);
  circle(303, 560, 10);
  circle(300, 530, 10);
  circle(296, 500, 10);
  circle(394, 500, 10);
  circle(403, 530, 10);
  circle(413, 560, 10);
  circle(422, 590, 10);
  circle(432, 620, 10);
  beginShape();
  curveVertex(345, 184);
  curveVertex(346, 258);
  endShape();
  strokeWeight(5);
  stroke(93, 43, 29);
  line(346, 184, 348, 300);
  noFill();
  arc(307, 251, 80, 100, radians(0), PI);
  arc(308, 280, 80, 80, radians(0), PI);
  arc(319, 260, 50, 80, radians(0), PI);
  arc(321, 250, 50, 65, radians(0), PI);
  arc(388, 251, 80, 100, radians(0), PI);
  arc(389, 280, 80, 80, radians(0), PI);
  arc(375, 260, 50, 80, radians(0), PI);
  arc(373, 250, 50, 65, radians(0), PI);
  stroke(247, 194, 117);
  circle(267, 250, 5);
  circle(268, 281, 5);
  circle(297, 250, 5);
  circle(294, 262, 5);
  circle(430, 280, 5);
  circle(428, 252, 5);
  circle(400, 261, 5);
  circle(399, 251, 5);
  /*
  beginShape();
  curveVertex(185, 533); //cp
  curveVertex(185, 533);
  curveVertex(192, 303);
  curveVertex(316, 158);
  curveVertex(506, 341);
  curveVertex(555, 542);
  curveVertex(555, 542); //cp
  endShape(CLOSE);
  */

  fill(255);
  textSize(30);
  // text(inputTxt.value, 100, 100);

  //image(img, windowWidth / 2, windowHeight / 2);
  //console.log(img)

  //drawDecorations();
}


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
