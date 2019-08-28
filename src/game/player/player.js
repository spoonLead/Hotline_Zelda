//------CLASS PLAYER-------//
class Player{

  constructor(x, y){    //x,y - started coordinates
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.speed = 5;
    this.speedBoost = 5;
    this.beta;

    this.spritePointer = 0;

    this.stateMap = {
      runLeft: ["./img/staing/1.png", "./img/staing/2.png", "./img/staing/3.png", "./img/staing/4.png", "./img/staing/5.png", "./img/staing/6.png","./img/staing/7.png","./img/staing/8.png","./img/staing/9.png","./img/staing/10.png","./img/staing/11.png","./img/staing/12.png","./img/staing/13.png","./img/staing/14.png","./img/staing/15.png","./img/staing/16.png","./img/staing/17.png","./img/staing/18.png","./img/staing/19.png","./img/staing/20.png","./img/staing/21.png","./img/staing/22.png","./img/staing/23.png","./img/staing/24.png","./img/staing/25.png","./img/staing/26.png","./img/staing/27.png","./img/staing/28.png","./img/staing/29.png","./img/staing/30.png"],
      runRight: ["./img/runRight/1.png","./img/runRight/2.png","./img/runRight/3.png"],
      runTop: ["./img/staing/1.png"],
      runBottom: ["./img/staing/1.png"],
      stay:["./img/stay/1.png"],
    }

    this.currentSpriteGroup = this.stateMap.stay;

    this.currentSprite = new Image();
    this.currentSprite.src = "./img/player.jpg";

    this.side = {
      left : false,
      right: false,
      up: false,
      down: false,

      jump: false,
      jumpTime: 2, //seconds
      jumpTimeLost: 2,
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
    this.stateSwap(this.stateMap.stay);
  }

  runLeft(){
    this.x -= this.speed;
    this.stateSwap(this.stateMap.runLeft);
  }

  runRight(){
    this.x += this.speed;
    this.stateSwap(this.stateMap.runRight);
  }

  runTop(){
    this.y -= this.speed;
    this.stateSwap(this.stateMap.runTop);
  }

  runBottom(){
    this.y += this.speed;
    this.stateSwap(this.stateMap.runBottom);
  }

  stateSwap(state){
    if(this.currentSpriteGroup != state){
      this.currentSpriteGroup = state;
      this.spritePointer = 0;
    }
  }

  draw(){
    this.currentSpriteSourceSetter();
    this.drawImageRotateble(this.currentSprite);
    this.spritePointerCounter();
  }

  currentSpriteSourceSetter(){
    this.currentSprite.src = this.currentSpriteGroup[this.spritePointer];
  }

  spritePointerCounter(){
    if(this.spritePointer < this.currentSpriteGroup.length-1)
      this.spritePointer += 1;
    else
      this.spritePointer =0
  }

  //TODO set the width and height in args
  drawImageRotateble(image){
    screen.save();
    screen.translate(this.x+player.width/2, this.y+player.height/2);
    screen.rotate((player.beta * Math.PI)/180);
    screen.drawImage(image, 0, 0, 128, 128, -this.width/2, -this.height/2, 128, 128);
    screen.rotate(-player.beta * Math.PI/180);
    screen.restore();
  }
}

//^^^^^^CLASS PLAYER^^^^^^//
