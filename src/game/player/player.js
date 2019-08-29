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

    this.stateMap = {
      runLeft:   ["./img/runRight/1.png","./img/runRight/2.png","./img/runRight/3.png"],
      runRight:  ["./img/runRight/1.png","./img/runRight/2.png","./img/runRight/3.png"],
      runTop:    ["./img/runRight/1.png","./img/runRight/2.png","./img/runRight/3.png"],
      runBottom: ["./img/runRight/1.png","./img/runRight/2.png","./img/runRight/3.png"],
      stay:      ["./img/stay/1.png"],
      default:   ["./img/stay/1.png"],
    }



    this.frameIntervalBtwnSprites = 0;
    this.currentFrameBtwnSprites = 1;


    this.currentSpriteGroup = this.stateMap.default;
    this.spritePointer = 0;

    this.currentSprite = new Image();
    this.currentSprite.src;

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
      // TODO: fix for currentSpriteGroup.length > 15
      // TODO: fix for float
      this.frameIntervalBtwnSprites = 30/this.currentSpriteGroup.length;
    }
  }

  draw(){
    // TODO: new name for Setters
    this.currentSpriteSourceSetter();
    this.drawImageRotateble(this.currentSprite);
    this.spritePointerSetter();
  }


  currentSpriteSourceSetter(){
    this.currentSprite.src = this.currentSpriteGroup[this.spritePointer];
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


  spritePointerSetter(){
    this.spritePointerCounter();
    this.currentFrameBtwnSpritesCounter();
  }

  spritePointerCounter(){
    if(this.currentFrameBtwnSprites == 1){
        if(this.spritePointer < this.currentSpriteGroup.length-1)
          this.spritePointer += 1;
        else
          this.spritePointer =0;
      }
  }

  currentFrameBtwnSpritesCounter(){
    if(this.currentFrameBtwnSprites < this.frameIntervalBtwnSprites)
      this.currentFrameBtwnSprites += 1
    else
      this.currentFrameBtwnSprites = 1;
  }

}

//^^^^^^CLASS PLAYER^^^^^^//
