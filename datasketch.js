let fidget = [10.21, 11.1, 11.15, 11.46, 12.01, 13.17, 14.25, 16, 17.1, 18.05, 20.59, 21.05, 21.08, 21.3, 22.02, 9.46, 12.2, 12.5, 14.33, 14.47, 16.09, 17.4, 18.19, 19.01, 19.24, 20];
function preload(){
  silver=loadImage('silver.avif');
}
function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  ellipseMode(CENTER);
  frameRate(10);
}
function draw() {
  background(silver);
  translate(0,-15);
  ladybug();
  spots();
}
function ladybug() {
  //body
  fill("red");
  ellipse (300, 350, 400, 450);
  //head
  fill(0);
  ellipse (300,150,225,150);
  //body line and antennae
  strokeWeight(8);
  line(300,150,300,575);
  line(200,50,250,100);
  line(400,50,350,100);
}
function spots(){
  for(let i=0; i < fidget.length; i++){
		const x = random(125,475);
		const y = random(200,545);
        const diam = fidget[i];
		circle(x, y, diam);
    }
}