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
  
}
