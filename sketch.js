//atribut class Map
const WIDTH = 600;
const HEIGHT = 450;
let mode = 1;

//atribut class Hero
var dPadAtas = true;
var dPadBawah = true;
var dPadKanan = true;
var dPadKiri = true;
var zapperwidth = 6;

//atribut class monster
var diameterBolaJatuh = 10;
var jmlBolaJatuh = 20;
var bolaJatuhX = [];
var bolaJatuhY = [];
var akselerasiBolaJatuh = [];
var kecepBolaJatuh = [];
var timeB = 0;
var timeperiod =  0;

function setup() {
  
  var temp00 = 0, temp01 = -1000;
  while(temp01 < height){
    temp00 += 0.02;
    temp01 += temp00;
    timeperiod++;
  }
  
  m.init();
  mons.initRandBolaJatuh();
  
}

class Map{
  
  constructor(WIDTH,HEIGHT){
    this.WIDTH = WIDTH;
    this.HEIGHT = HEIGHT;
  }
  
  init(){
    createCanvas(this.WIDTH, this.HEIGHT);
  }
  
  move(){
    
  }
}

class Level{
  
   setLevel(){
    this.akselerasiBolaJatuh = 20;
  }
  
  getCurrentLevel(){
    return akselerasiBolaJatuh;
  }

}




class Entity{
  constructor(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  
  moveRight(){
    if(keyCode === RIGHT_ARROW) {
      
      if(this.x > WIDTH){
        gameover();
      }
      else{
        this.x += dPadKanan
      }
    }
  }
  
  moveLeft(){
    if(keyCode === LEFT_ARROW) {
      
      if(this.x < 0){
        gameover();
      }
      else{
        this.x -= dPadKiri
      }
    }
  }
  
  moveDown(){
    if(keyCode === DOWN_ARROW) {
      
      if(this.y > HEIGHT){
        gameover();
      }
      else{
        this.y += dPadBawah
      }
    }
  }
  
    moveUp(){
    if(keyCode === UP_ARROW) {
      
      if(this.y < 0){
        gameover();
      }
      else{
        this.y -= dPadAtas;
      }
    }
  }
  
}

class Monster extends Entity{
  initRandBolaJatuh(){
    for(var i = 0; i < jmlBolaJatuh; i++){
      akselerasiBolaJatuh[i] = random(0.02, 0.03);
      kecepBolaJatuh[i] = random(0.5);
      bolaJatuhX[i] = random(zapperwidth+(0.5*20), width);
      bolaJatuhY[i] = random(-20, -0.5*20);
    }
  }
  
  updateBolaJatuh(){
    for(var i = 0; i < jmlBolaJatuh; i++){
      kecepBolaJatuh[i] += akselerasiBolaJatuh[i];
      bolaJatuhY[i]  += kecepBolaJatuh[i];
    }
    
    if(timeB > timeperiod){
      mons.initRandBolaJatuh();
      timeB = 0;
    }
  }
  
  moveRandom(){
    
  }
  
  saveScore(){
    
  }
}


function game(){
  background(0);
  
  h.tampilBola();
  fill(255);
  h.increaseScore();
  text("High Score : "+ h.saveScore(), 20, 50)
  for(var i = 0; i<jmlBolaJatuh; i++){
    ellipse(bolaJatuhX[i], bolaJatuhY[i], diameterBolaJatuh,diameterBolaJatuh); 
  }
  
  if(h.ujiBolaJatuh()){ 
    gameover() 
  }

  timeB++;
  
  mons.updateBolaJatuh();
  
  h.moveRight();
  h.moveLeft();
  h.moveUp();
  h.moveDown();
  lv.setLevel();
}


class Hero extends Entity{ 
  constructor(x, y, width, height){
    super(x, y, width, height);
    this.score = 0;
    this.highScore = 0;
  }
  
  tampilBola(){
    fill(255);
    ellipse(this.x, this.y, this.width, this.height);
  }
  
   ujiBolaJatuh(){
   var temp =  0.5*(20+ diameterBolaJatuh)-2;
   var distance;
   
    for(var i = 0; i<jmlBolaJatuh; i++){
        distance = dist(this.x, this.y, bolaJatuhX[i], bolaJatuhY[i]);
          if(distance <  temp){
            return true;
          }  
    }
    return false;
}
  
  increaseScore(){
    this.score += 10;
    fill(255);
    text("Score: " + int(this.score/timeperiod), 20, 20);
  }
  
   calculateLife(){
    
  }
  
   saveScore(){
    if(this.highScore < int(this.score/timeperiod)){
      this.highScore = int(this.score/timeperiod);
    }
    return this.highScore;
  }
}


var m = new Map(WIDTH, HEIGHT);
var h = new Hero(0.5 * WIDTH, HEIGHT - 0.5 * WIDTH + 1, 20, 20);
var mons = new Monster(0.5 * WIDTH, HEIGHT - 0.5 * WIDTH + 1);
var lv = new Level();

function draw() {
  if (mode == 1){
    mulai()  
  }else if (mode == 2){
    game()
  }else if(mode == 3)
    gameover()
}

function mousePressed(){
	if(mode == 1){
  	mode = 2
  }else if(mode == 3){
  	mode = 1
  }
}

function mulai(){
    background('lightblue'); 
    fill('#000000') // 
    textSize(20) // 
    text('Mari Mulai !!!', (width/2) - 50, height/2 ); 
}

function game(){
  background(0);
  
  h.tampilBola();
  fill(255);
  h.increaseScore();
  text("High Score : "+ h.saveScore(), 20, 50)
  
  for(var i = 0; i<jmlBolaJatuh; i++){
    ellipse(bolaJatuhX[i], bolaJatuhY[i], diameterBolaJatuh,diameterBolaJatuh); 
  }
  
  if(h.ujiBolaJatuh()){ 
    gameover() 
  }

  timeB++;
  
  mons.updateBolaJatuh();
  
  h.moveRight();
  h.moveLeft();
  h.moveUp();
  h.moveDown();
  lv.setLevel();
}

function gameover(){
  background('navy')
  fill(255);
  h.increaseScore();
  text("High Score : "+ h.saveScore(), 20, 50)
  text("Game Over", 0.5*width, 0.5 * height);
  textSize(12);
  text("\nBuilt by: \nRoy Rafles Matorang Pasaribu_2117051058 \nFirman Ahmad Bayumi_2117051062 \nSiti Ayuni_2117051068", 347, 377);
  noLoop();
}
