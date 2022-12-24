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
