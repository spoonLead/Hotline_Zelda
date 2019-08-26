class Enemy{
  constructor(){
    this.x = 500;
    this.y = 300;
    this.width = 25;
    this.height = 25;

    this.sprite = new Image();
    this.sprite.src = "./img/enemy.jpg";
  }

  draw(){
    screen.drawImage(this.sprite, 0, 0, 50, 50, this.x, this.y, 50, 50);
  }

  process(){
    if(hasCollisionComplex(player, this))
      this.swapToSprite("./img/enemyRed.jpg")
    else
      this.swapToSprite("./img/enemy.jpg")
  }

  swapToSprite(sprite){
    if(this.sprite.src != sprite)
        this.sprite.src = sprite;
  }

}
