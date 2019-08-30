
class Drawable{

  constructor(){
    this.stateMap={
      default: ["./src/engine/img/defaultSprite.png"],
    }

    this.frameIntervalBtwnSprites = 0;
    this.currentFrameBtwnSprites = 1;

    this.currentSpriteGroup = this.stateMap.default;
    this.spritePointer = 0;

    this.currentSprite = new Image();
    this.currentSprite.src;
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



  currentSpriteSourceSetter(){
    this.currentSprite.src = this.currentSpriteGroup[this.spritePointer];
  }



  //TODO set the width and height in args
  drawImageRotateble(image = this.currentSprite){
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
