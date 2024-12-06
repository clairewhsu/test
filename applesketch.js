function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  frameRate(.5);
  
}

function draw() {
  clear();

  //red apple
  let R = random(190,255);
  let G = random(0,90);
  let B = random(0,50);
  fill (R, G, B);
  circle(300,300,400);
  
  //eyes
  fill(76,4,4);
  ellipse(230,280,30,60);
  ellipse(370,280,30,60);
  
  //stem
  fill(80,0,0);
  rect(285,45,30,60);
  fill("green");
  push();
  rotate(-.35);
  ellipse(240,170,25,65);
  pop();
  
  //mouth
  fill(80,0,0);
  arc(300,370,150,100,0,PI); 
  
} 
function mousePressed() {
  
  //green apple
  fill(10,255,10);
  circle(300,300,400);
  
  erase();
  //eyes
  fill(76,4,4);
  ellipse(230,280,30,60);
  ellipse(370,280,30,60);
  
  //mouth
  fill(80,0,0);
  arc(300,370,150,100,0,PI); 
  noErase();
  
  //fill stem
  fill(80,0,0);
  rect(285,45,30,60);
  fill(0,100,20);
  push();
  rotate(-.35);
  ellipse(240,170,25,65);
  pop();
  
  // fill eyes
  fill(10,255,10);
  ellipse(230,280,30,60);
  ellipse(370,280,30,60);
  
  // fill mouth
  fill(10,255,10);
  arc(300,370,150,100,0,PI); 
  
  //sleeping eyes
  fill(76,4,4);
  arc(230,280,80,15,0,PI);
  arc(370,280,80,15,0,PI); 
  
  //sleeping mouth
  fill(76,4,4);
  arc(300,370,150,10,0,PI); 
  
}

function keyPressed() {
  erase();
  //side bite
  ellipse(390,120,50,80);
  ellipse(430,140,50,60);
  //location bite
  ellipse(mouseX,mouseY,50,80);
  ellipse(mouseX+40,mouseY,50,60);
  noErase();

}