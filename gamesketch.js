let sceneNum = 0;
let person;
let words = [];
let wordsNum = 11;
let wordList = ['title', 'author', 'table of contents', 'chapter one', 'chapter two', 'chapter three', 'once upon a time', 'the end', 'cover', 'protagonist', 'villain', 'there once was a land'];
let points = 0;
let timer = 15;
let start;
let myFont;

function preload(){
  soundFormats('mp3');
  Song = loadSound('/Assets/daydream.mp3');
  myFont = loadFont('/Assets/Shooting Star.ttf');
  girl = loadImage('/Assets/girl.png');
  girlbook = loadImage('/Assets/girlbook.png');
  room = loadImage('/Assets/Game Room.png');
  book = loadImage('/Assets/book.png');
  star = loadImage('/Assets/star.png');
}
function setup() {
  createCanvas(600, 400);
  noStroke();
  textFont(myFont);
  textSize(20);
  person = new Person();
  for (let i = 0; i < wordsNum; i++) {
    words[i] = new Words(random(width), random(10,340),random(1,2.5), color(random(255), random(255), random(255)), wordList[i]);
  }
  Song.play();
}

function draw() {
  background(220);

  switch (sceneNum) {
    case 0:
    scene0();
      break; 

    case 1:
    scene1();
    person.bookCollision();
      break;

    case 2:
    scene1();
    person.book();
    person.bedCollision();
      break;
      
    case 3:
    scene2(); 
      break;
    
    case 4:
    scene3();
      break;
      
    case 5:
    scene4();
    break;
    
    case 6:
    scene5();
    break;
  }
}
function scene0(){
  background(160,200,250);
  fill(255);
  text('press ENTER to play!',75,200);
  image(girlbook,320,50);
  if (keyCode==13){
      sceneNum++;
    }
}
function scene1(){
  fill (0);
  rect (400,0,100,50); //bookshelf
  rect (0,220,100,180); //bed
  image(room, 0,0);
  textSize (15);
  text ('collect book from shelf and go to bed',40,50);
  person.body();
}
function scene2(){
  image(book, 0,0)
  fill(0);
  text('can you finish reading before mom finds you?', 80,170);
  text('press SPACE to begin!', 310,250);
  if (keyCode==32){
    sceneNum++;
    start=millis();
    }
}
function scene3(){
  background(255);
    for (let word of words) {
        word.body();
        word.move();
        word.checkCollision();
    }
  person.body();
  Clock();
  if (points == 11){
    sceneNum=6;
    Reset();
    wordsAgain();
  }
}
function scene4(){
  background (255,0,0);
   fill(0);
  text('YOU GOT CAUGHT! press ESC to restart',80,200);
  if (keyCode==27){
       sceneNum=0;
    Reset();
    wordsAgain();
     }
}
function scene5(){
  background (150,250,150);
  fill(0);
  image(star,370,100);
  text('YOU WON! press ESC to restart',80,200);
   if (keyCode==27){
       sceneNum=0;  
    }
}
class Person{
  constructor(x, y){
  this.x = x;
  this.y = y;
}
  body(){
  image(girl, mouseX-50, mouseY-50, 120,150);
  }
  book(){
     image(girlbook, mouseX-50, mouseY-50, 120,150);
  }
  bookCollision() {
     let distFromShelf = dist(mouseX, mouseY, 450, 25); 
     if(distFromShelf <= 65){
      sceneNum++;
    }
  }
  bedCollision(){
    let distFromBed = dist(mouseX, mouseY, 50, 350); 
     if(distFromBed <= 80){
      sceneNum++;
  }
}
}
class Words {
  constructor(x,y,speed,color,word){
	this.x = x;
	this.y = y;
    this.speed = speed
    this.c = color;
    this.word = word;
  }
  body(){
    fill(this.c);
    text(this.word, this.x, this.y);
  }
  move(){
  if(this.x <=0) {
      this.x = width;
    } else {
      this.x = this.x - this.speed;
    }
  }
  remove(){
    this.y = 800;
  }
  checkCollision() {
    let distFromPerson = dist(mouseX, mouseY, this.x, this.y); 
    if(distFromPerson <= 30){
       this.remove();
      points++;
     }
  }
}
function Clock(){
  let elapsed = int((millis() - start)/1000);
  let remaining = timer - elapsed;
    if (remaining <= 0) {
      remaining = 0;
      fill(0);
      text('time is up!',50,375);
      sceneNum=5;
    }
  else{
    fill(0);
    text('time remaining:', 50, 360);
    text(remaining,50,375);
  }
}
function Reset(){
  start = millis();
  points = 0;
}
function wordsAgain(){
  words = [];
  for (let i = 0; i < wordsNum; i++) {
    words[i] = new Words(random(width), random(10, 340), random(1, 2.5), color(random(255), random(255), random(255)), wordList[i]);
  }
}