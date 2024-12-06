function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
 
  let R = (millis()/50);
  
  //wall
  fill(240,200,200);
  rect(0,0,600,600);
  
  //calendar
  fill(255);
  rect(400,50,150,150);
  fill("red");
  rect(400,50,150,40);
  
  if (R>=85&&R<170) {
  textSize(30);
  text('Oct',425,155);
  textSize(50);
  text(2,490,160);
    
  //left plant leaf
  fill(R,150,10);
  push();
  translate(40,165)
  rotate(-.16);
  beginShape();
  bezier(200,350,200,250,130,190,180,150); 
  bezier(180,150,240,210,220,260,200,350); 
  endShape();
  pop();

  //right plant leaf
  push();
  translate(150,90);
  rotate(.27);
  beginShape();
  bezier(280,150,180,170,200,230,250,350); 
  bezier(250,350,240,260,300,210,280,150); 
  endShape();
  pop();
    }
  else if (R>=170&&R<255){
  textSize(30);
  text('Oct',425,155);
  textSize(50);
  text(3,490,160);
  
  //left plant leaf
  fill(R,150,10);
  push();
  translate(40,170)
  rotate(-.16);
  beginShape();
  bezier(200,350,200,250,130,190,180,150); 
  bezier(180,150,240,210,220,260,200,350); 
  endShape();
  pop();

  //right plant leaf
  push();
  translate(150,95);
  rotate(.27);
  beginShape();
  bezier(280,150,180,170,200,230,250,350); 
  bezier(250,350,240,260,300,210,280,150); 
  endShape();
  pop();
  }
  else if (R>=255){
  textSize(30);
  text('Oct',425,155);
  textSize(50);
  text(4,490,160);
    
  //left plant leaf
  fill(R,150,10);
  push();
  translate(40,185)
  rotate(-.16);
  beginShape();
  bezier(200,350,200,250,130,190,180,150); 
  bezier(180,150,240,210,220,260,200,350); 
  endShape();
  pop();

  //right plant leaf
  push();
  translate(150,105);
  rotate(.27);
  beginShape();
  bezier(280,150,180,170,200,230,250,350); 
  bezier(250,350,240,260,300,210,280,150); 
  endShape();
  pop();
    
  }
  else{
  textSize(30);
  text('Oct',425,155);
  textSize(50);
  text(1,490,160);
    
   //left plant leaf
  fill(R,150,10);
  push();
  translate(40,150);
  rotate(-.16);
  beginShape();
  bezier(200,350,200,250,130,190,180,150); 
  bezier(180,150,240,210,220,260,200,350); 
  endShape();
  pop();

  //right plant leaf
  push();
  translate(150,85);
  rotate(.27);
  beginShape();
  bezier(280,150,180,170,200,230,250,350); 
  bezier(250,350,240,260,300,210,280,150); 
  endShape();
  pop();
  }
  
  //table
  fill(55,10,10);
  rect(0,525,600,75);
  
  //plant pot
  fill(150,60,30);
  quad(400,430,375,550,225,550,200,430);
  quad(410,430,405,460,195,460,190,430);
}
