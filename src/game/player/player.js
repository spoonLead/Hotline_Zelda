//------CLASS PLAYER-------//
class Player extends Drawable{

  constructor(x, y){    //x,y - started coordinates
    super();
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.speed = 10;

    this.animationMap = {
      runLeft:   ["./img/runRight/1.png","./img/runRight/2.png","./img/runRight/3.png"],
      runRight:  ["./img/runRight/1.png","./img/runRight/2.png","./img/runRight/3.png"],
      runTop:    ["./img/runRight/1.png","./img/runRight/2.png","./img/runRight/3.png"],
      runBottom: ["./img/runRight/1.png","./img/runRight/2.png","./img/runRight/3.png"],
      stay:      ["./img/stay/1.png","./img/stay/2.png","./img/stay/3.png",
                  "./img/stay/4.png"],
    }
  }

  move(controlKeys = {left:65, right:68, up:87, down:83}){
    if(isElemInArr(keyListener_downKeys, controlKeys.left)){
      this.runLeft();
    }
    if(isElemInArr(keyListener_downKeys, controlKeys.right)){
      this.runRight();
    }
    if(isElemInArr(keyListener_downKeys, controlKeys.up)){
      this.runTop();
    }
    if(isElemInArr(keyListener_downKeys, controlKeys.down)){
      this.runBottom();
    }
    if(keyListener_downKeys.length == 0){
      this.stay();
    }
  }

  stay(){
    this.setCurrentAnimationForSec(this.animationMap.stay, 1.5);
  }

  runLeft(){
    this.x -= this.speed;
    this.setCurrentAnimationForSec(this.animationMap.runLeft);
  }

  runRight(){
    this.x += this.speed;
    this.setCurrentAnimationForSec(this.animationMap.runRight);
  }

  runTop(){
    this.y -= this.speed;
    this.setCurrentAnimationForSec(this.animationMap.runTop);
  }

  runBottom(){
    this.y += this.speed;
    this.setCurrentAnimationForSec(this.animationMap.runBottom);
  }


// TODO: remove to Drawable?
  draw(){
    // TODO: new name for Setters
    this.currentSpriteSourceSetter();
    this.drawImageRotateble();
    this.spritesCounter();
  }


}

//^^^^^^CLASS PLAYER^^^^^^//
