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
  
}
