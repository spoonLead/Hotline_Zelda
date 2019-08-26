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

    this.sprite = new Image();
    this.sprite.src = "./img/player.jpg";

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
      this.x -= this.speed;
    }
    if(isElemInArr(keyListener_downKeys, controlKeys.right)){
      this.x += this.speed;
    }
    if(isElemInArr(keyListener_downKeys, controlKeys.up)){
      this.y -= this.speed;
    }
    if(isElemInArr(keyListener_downKeys, controlKeys.down)){
      this.y += this.speed;
    }
  }

  draw(){
    screen.save();
    screen.translate(this.x+player.width/2, this.y+player.height/2);
    screen.rotate((player.beta * Math.PI)/180);
    screen.drawImage(this.sprite, 0, 0, 50, 50, -this.width/2, -this.height/2, this.width, this.height);
    screen.rotate(-player.beta * Math.PI/180);
    screen.restore();
  }
}

//^^^^^^CLASS PLAYER^^^^^^//
