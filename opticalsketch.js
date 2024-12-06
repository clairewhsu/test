function setup() {
  createCanvas(600, 600);
  textSize(25);
}

function draw() {
  background(255);
  fill(255);
  //graph paper grid
  for (let x=0; x<25; x++){
    for (let y=0; y<25; y++){
      stroke(0,0,255);
      rect(x*25, y*25, 25, 25);
    }
  }
  
  //graph paper holes
  circle(50,75,50);
  circle(50,550,50);
  
  //uv ink message
  fill(255, 255, 0);
  noStroke();
  text('math used to be my favorite class', 125, 250);
  text('i would never', 150, 300);
  text('say that now...', 150, 325);
  
  //pen message
  fill(0, 0, 255);
  text('Claire Hsu', 125, 75);
  text('Math 6+', 125, 100);
  text('10/10/14', 125, 125);
  text('Homework 4.6 - Chapter 10, Problems 4-16 even', 125, 250);
  text('4. 3(x+2)=15', 125, 300);
  text('(3(x+2)=15)/3', 150, 325);
  text('x+2=5', 150, 350);
  text('x=5-2', 150, 375);
  text('x=3', 150, 400);
  text('6. 6(x-13)=48', 125, 475);
  text('(6(x-13)=48)/6', 150, 500);
  text('x-13=8', 150, 525);
  text('x=8+13', 150, 550);
  text('x=21', 150, 575);

  //cursor blendmode
  if (mouseIsPressed) {
    blendMode(MULTIPLY);
    fill(0, 0, 255);
    ellipse(mouseX, mouseY, 75);
  } else {
    blendMode(BLEND);
  }
}