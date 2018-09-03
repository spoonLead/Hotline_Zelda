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

  move(){
    if(player.side.up == true & this.y>0){
      this.y -= this.speed;
    }
    if(player.side.down == true & this.y<(canvas.height - this.height)){
      this.y += this.speed;
    }
    if(player.side.left == true & this.x>0){
      this.x -= this.speed;
    }
    if(player.side.right == true & this.x<canvas.width - this.width){
      this.x += this.speed;
    }
  }

  draw(){
    screen.save();
    screen.translate(this.x+player.width/2, this.y+player.height/2);
    screen.rotate((player.beta * Math.PI)/180);
    screen.drawImage(playerSp, 0, 0, 50, 50, -this.width/2, -this.height/2, this.width, this.height);
    screen.rotate(-player.beta * Math.PI/180);
    screen.restore();
  }
}

//^^^^^^CLASS PLAYER^^^^^^//
