function setup() {
  createCanvas(400, 400);
  //I lost a kite from childhood while moving. It was a butterfly shaped kite and most part of the kite was dark ocean blue. The wings of the butterfly had some cute beige and yellow dots along the edge. It also had one yellow and one orange tail trailing behind the kite for each side of the wings. The center of the butterfly is darker in color, and had some black wires supporting its structure as a kite.
}

function draw() {
  background("lightblue");
  translate(0,-50);
  blendMode(BLEND);
  
//wings
  fill("darkblue");
  stroke(0,0,0);
  strokeWeight(2);
  quad(100,100,150,100,200,200,100,175);
  quad(250,100,300,100,300,175,200,200);
  quad(200,200,150,300,75,350,100,250);
  quad(200,200,300,250,325,350,250,300);

//body
  fill(0,0,0);
  ellipse(200,215,12,100);
  
//antennas
  strokeWeight(1);
  line(205,210,180,100);
  line(220,100,200,190);
  
//beige dots
  noStroke();
  fill("beige");
  circle(120,120,10);
  circle(100,310,8);
  circle(280,120,10);
  circle(300,310,8);
  
//yellow dots
  fill("yellow");
  circle(130,150,6);
  circle(270,150,6);
  circle(90,325,6);
  circle(310,325,6);
  
//tails
  fill("yellow");
  triangle(75,350,70,450,60,450);
  triangle(325,350,340,450,330,450);
  
  push();
  angleMode(DEGREES);
  rotate(QUARTER_PI-1);
  fill("orange");
  triangle(75,350,70,450,60,450);
  triangle(325,350,340,450,330,450);
  pop();
  
  
//string
  stroke(0,0,0);
  strokeWeight(1.5);
  fill(0,0,0);
  line(200,200,200,450);
  
}