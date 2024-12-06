function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(250, 100, 50, 20);
  bezier(100, 300, 50, 50, 450, 100, 80, 225);
  fill(255, 255, 255);

  ellipse(200, 150, 20);
  fill(0, 0, 0);
  
  text('Bass Pro Shops', 240, 210);
  textFont('nunito')
}
