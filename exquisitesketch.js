function preload(){
  hall=loadImage('hall.jpg');
  soundFormats('mp3');
  puppy = loadSound('puppy');
}
function setup() {
  createCanvas(400, 600);
  noStroke();
  angleMode(DEGREES);
  ellipseMode(CENTER);
}
function draw() {
  background(hall);
  translate(0,45);
  head();
  //bottom teeth and ear movement
  if (mouseIsPressed===true){
  //mouth
  fill(255,200,200);
  ellipse(200,140,80,40);
  fill(180,110,30);
  ellipse(200,160,80,30);
  //teeth
  teeth(170,145,15,12);
  teeth(182,141,15,12);
  teeth(194,139,15,12);
  teeth(206,139,15,12);
  teeth(218,141,15,12);
  teeth(230,145,15,12);
  //left ear
  fill(170,110,30);
  push();
  translate(100,70);
  rotate(50);
  ellipse(0,0,75,170);
  pop();
  //right ear
  push();
  translate(300,70);
  rotate(130);
  ellipse(0,0,75,170);
  pop();
} else {
  //mouth
  fill(255,200,200);
  ellipse(200,140,80,40);
  //teeth
  teeth(170,146,15,12)
  teeth(182,151,15,12);
  teeth(194,154,15,12);
  teeth(206,154,15,12);
  teeth(218,151,15,12);
  teeth(230,146,15,12);
  //left ear
  fill(170,110,30);
  push();
  translate(100,70);
  rotate(60);
  ellipse(0,0,75,170);
  pop();
  //right ear
  push();
  translate(300,70);
  rotate(120);
  ellipse(0,0,75,170);
  pop();
}
  //top teeth
  teeth(170,136,15,12);
  teeth(182,129,15,12);
  teeth(194,126,15,12);
  teeth(206,126,15,12);
  teeth(218,129,15,12);
  teeth(230,136,15,12);
  body();
  tutu();
  legs();
  shoes();
}
function head() {
  //head base
  fill(180,110,30);
  ellipse(200,100,200,150);
  //neck
  fill(180,110,30);
  rect(165,165,70,45)
  //eyes
  push();
  translate(160,90);
  rotate(70);
  fill(255);
  ellipse(0,0,25,50);
  fill(50,20,20);
  ellipse(0,0,25,25);
  pop();
  push();
  translate(240,90);
  rotate(110);
  fill(255);
  ellipse(0,0,25,50);
  fill(50,20,20);
  ellipse(0,0,25,25);
  pop();
  //nostrils
  push();
  translate(180,110);
  rotate(70);
  fill(100,20,20);
  ellipse(0,0,8,20);
  pop();
  push();
  translate(220,110);
  rotate(110);
  fill(100,20,20);
  ellipse(0,0,8,20);
  pop();
}
function teeth(x,y,diamX,diamY){
  fill(255);
  ellipse(x,y,diamX,diamY);
}
function body(){
  //hoodie base
  fill(240,100,100);
  beginShape();
  vertex(150,200);
  vertex(200,210);
  vertex(245,200);
  vertex(290,300);
  vertex(105,300);
  vertex(150,200);
  endShape(CLOSE);
  //hoodie collar
  fill(250,120,100);
  triangle(165,170,150,200,200,210);
  triangle(235,170,245,200,200,210); 
  //letter
  fill(255);
  rect(170,250,60,30);
  //heart
  fill("red");
  //heart code referenced from chatgpt and revised for size and placement
  arc(194, 265, 15, 15, 180, 360, CHORD);
  arc(208, 265, 15, 15, 180, 360, CHORD);
  beginShape();
  vertex(186, 265);
  vertex(216, 265);
  vertex(202, 275);
  endShape(CLOSE);
  //hands
  fill(180,110,30);
  ellipse(160,265,30,50);
  rect(145,240,15,50);
  ellipse(240,265,30,50);
  rect(240,240,15,50);
}
function tutu(){
  fill(255,185,190);
  quad(290,300,340,375,55,375,105,300);
}
function legs(){
  fill(180,110,30);
  rect(150,375,40,120);
  rect(210,375,40,120);
}
function shoes(){
  fill(90,50,50);
  arc(150, 475, 35, 25, 180, 360, CHORD);
  arc(185, 475, 35, 25, 180, 360, CHORD);
  quad(202,475,180,550,150,550,132,475);
  ellipse(165,550,50,40);
  push();
  translate(65,0);
  arc(150, 475, 35, 25, 180, 360, CHORD);
  arc(185, 475, 35, 25, 180, 360, CHORD);
  quad(202,475,180,550,150,550,132,475);
  ellipse(165,550,50,40);
  pop();
  fill(255);
}
function mousePressed(){
  puppy.play();
}