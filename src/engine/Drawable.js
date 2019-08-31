
class Drawable{

  constructor(){
    this.animationMap={
      default: ["./src/engine/img/defaultSprite.png"],
    }

    this.frameIntervalBtwnSprites = 0;
    this.excessFrames = 0;
    this.currentFrameBtwnSprites = 1;

    this.currentSpriteGroup = this.animationMap.default;
    this.spritePointer = 0;

    this.currentSprite = new Image();
    this.currentSprite.src;
  }



  setCurrentAnimationForSec(spriteGroup, seconds){
    this.currentSpriteGroupSwap(spriteGroup, seconds);
  }

  currentSpriteGroupSwap(spriteGroup, seconds = 1){
    if(this.currentSpriteGroup != spriteGroup){
      this.currentSpriteGroup = spriteGroup;
      this.spritePointer = 0;
      // TODO: fix for currentSpriteGroup.length > 15
      // TODO: fix for float
      this.frameIntervalBtwnSprites = Math.floor((30*seconds)/this.currentSpriteGroup.length);
      this.excessFrames = FPS - this.frameIntervalBtwnSprites * this.currentSpriteGroup.length;
    }
  }


  //// TODO: new name
  currentSpriteSourceSetter(){
    this.currentSprite.src = this.currentSpriteGroup[this.spritePointer];
  }



  //TODO set the width and height in args
  drawImageRotateble(image = this.currentSprite){
    screen.save();
    screen.translate(this.x+player.width/2, this.y+player.height/2);
    screen.rotate((player.beta * Math.PI)/180);
    screen.drawImage(image, 0, 0, 128, 128, -this.width/2, -this.height/2, 80, 80);
    screen.rotate(-player.beta * Math.PI/180);
    screen.restore();
  }



  spritePointerSetter(){
    this.spritePointerCounter();
    this.currentFrameBtwnSpritesCounter();
  }

  spritePointerCounter(){
    if(this.isCurrentFrameForSpriteSwap()){
        if(this.spritePointer < this.currentSpriteGroup.length-1)
          this.spritePointer += 1;
        else
          this.spritePointer =0;
      }
  }

  isCurrentFrameForSpriteSwap(){
    if(this.currentFrameBtwnSprites == 1)
      return true;
    else
      return false;
  }


  currentFrameBtwnSpritesCounter(){
    if(this.excessFrames > 0){
      if(this.currentFrameBtwnSprites < this.frameIntervalBtwnSprites+1)
        this.currentFrameBtwnSprites += 1
      else
        this.currentFrameBtwnSprites = 1;
    }
    else {
      if(this.currentFrameBtwnSprites < this.frameIntervalBtwnSprites)
        this.currentFrameBtwnSprites += 1
      else
        this.currentFrameBtwnSprites = 1;
    }

  }

}
