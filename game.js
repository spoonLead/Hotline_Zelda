window.onload = init;

//-----------------------DECLARATIONS---------------------//

var canvas;
var screen;

var player; var playerSp = new Image(); playerSp.src = "img/player.jpg";
var hp; var hpSp = new Image(); hpSp.src = "img/food.png";
var enemy; var enemySp = new Image(); enemySp.src = "img/enemy.jpg";
var background; var backgroundSp = new Image(); backgroundSp.src = "img/bg.jpg";

var objects = [];

//^^^^^^^^^^^^^^^^^^^^^^^DECLARATIONS^^^^^^^^^^^^^^^^^^^^^//



//--------------ENGINE--(RENDER--KEYLISTENER--INIT)----------//

function init(){
  canvas = document.getElementById("canvas"); //конвенция
  screen = canvas.getContext("2d");
  player = new Player();
  objects.push(background = new background(), enemy = new Enemy());

  game();       //игровой цикл
}

function render(){
  for(var i = 0; i < objects.length; i++){
    objects[i].draw();
  }
  player.draw();
}

function keyListener(){
  window.onmousemove = function(e){
    this.x = e.offsetX==undefined?e.layerX:e.offsetX-player.width/2;
    this.y = e.offsetY==undefined?e.layerY:e.offsetY-player.height/2;

    this.BCLen = Math.abs(this.x-player.x);
    this.ACLen = Math.abs(this.y-player.y);
    if(this.x>player.x & this.y<player.y){player.beta = (Math.atan(this.BCLen/this.ACLen)*180)/Math.PI;}    //первая четверь
    else if(this.x<player.x & this.y<player.y){player.beta = 90 - Math.atan(this.BCLen/this.ACLen)*180/Math.PI + 270 ;}   //вторая четверть
    else if(this.x<player.x & this.y>player.y){player.beta = Math.atan(this.BCLen/this.ACLen)*180/Math.PI + 180;}   //третья четверть
    else if(this.x>player.x & this.y>player.y){player.beta = 90 - Math.atan(this.BCLen/this.ACLen)*180/Math.PI + 90;}   //четвёртая четверть
    console.log(this.x, this.y, this.BCLen, this.ACLen, player.beta);
  }
  window.onkeydown = function(e){
    switch(e.keyCode){
      case 37, 65:
        player.side.left = true;
        player.side.right = false;
      break;
      case 38, 87:
        player.side.up = true;
        player.side.down = false;
      break;
      case 39, 68:
        player.side.right = true;
        player.side.left = false;
      break;
      case 40, 83:
        player.side.down = true;
        player.side.up = false;
      break;
      case 16:  //shift - speedboost
        player.speed += player.speedUp;
      break;
      case 32:
          jump = true;
          player.side.down = player.side.up = player.side.right = player.side.left = true
      break;
    }
  }
  window.onkeyup = function(e){
    switch(e.keyCode){
      case 37, 65:
        player.side.left = false;
      break;
      case 38, 87:
        player.side.up = false;
      break;
      case 39, 68:
        player.side.right = false;
      break;
      case 40, 83:
        player.side.down = false;
      break;
      case 16:
        player.speed-= player.speedUp;
      break;
      case 32:
        jump = false;
      break;
    }
  }
}

function mapScrolling(){
  if(player.side.up == true ){
    for(var i = 0; i < objects.length; i++){
        objects[i].y += player.speed;
    }
  }
  if(player.side.down == true ){
    for(var i = 0; i < objects.length; i++){
        objects[i].y -= player.speed;
    }
  }
  if(player.side.left == true ){
    for(var i = 0; i < objects.length; i++){
        objects[i].x += player.speed;
    }
  }
  if(player.side.right == true){
    for(var i = 0; i < objects.length; i++){
        objects[i].x -= player.speed;
    }
  }
}
//^^^^^^^^^^^^^^ENGINE--(RENDER--KEYLISTENER--MAPSCROLLING!--INIT)^^^^^^^^^^//


//-----GAMELOOP-----//
function game(){
  screen.clearRect(0, 0, canvas.width, canvas.height);
  document.getElementById("canvas").onmousehover = keyListener;

  render();
  keyListener();
  mapScrolling();

  requestAnimationFrame(game);  //ограничивает fps
}


//------CLASS PLAYER-------//
function Player(){
  this.x = 375;
  this.y = 275;
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

Player.prototype.move = function(){
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

Player.prototype.draw = function(){
  screen.save();
  screen.translate(this.x+player.width/2, this.y+player.height/2);
  screen.rotate((player.beta * Math.PI)/180);
  screen.drawImage(playerSp, 0, 0, 50, 50, -this.width/2, -this.height/2, this.width, this.height);
  screen.rotate(-player.beta * Math.PI/180);
  screen.restore();
  // screen.drawImage(playerSp, 0, 0, 50, 50, this.x, this.y, this.width, this.height);
}
//^^^^^^CLASS PLAYER^^^^^^//

function Enemy(){
  this.x = 500;
  this.y = 300;
  this.width = 50;
  this.height = 50;
}

Enemy.prototype.draw = function(){
  screen.drawImage(enemySp, 0, 0, 50, 50, this.x, this.y, this.width, this.height);
}


function background() {
  this.x = 0;
  this.y = 0;
}

background.prototype.draw = function() {
  screen.drawImage(backgroundSp, 0, 0, 3058, 3058, this.x, this.y, 3058, 3058);
}



// function Smooth(){
//   this.ACLen;
//   this.BCLen;
//   this.ABLen;
//   this.Str;
//   this.moveX;
//   this.moveY;
// }
//
// Smooth.prototype.comp = function(Ax, Ay, Bx, By){
//   //console.log(player.x, player.y);
//   this.ACLen = Bx-Ax;
//   this.BCLen = By-Ay;
//   this.ABLen = Math.sqrt(Math.pow(this.ACLen, 2)+Math.pow(this.BCLen, 2));
//   this.Str = Math.round((Math.ceil((this.ABLen/player.speed)*2))/2);  //округление до большего целового числа
//   this.moveX = this.ACLen/this.Str;
//   this.moveY = this.BCLen/this.Str;
// }
//
// Smooth.prototype.move = function(){
//   if (this.Str > 0){
//     for(var i = 0; i < objects.length; i++){
//       objects[i].x -= this.moveX;
//       objects[i].y -= this.moveY;
//       this.Str -= 1;
//     }
//   }else{
//     for(var i = 0; i < objects.length; i++){
//       objects[i].x = objects[i].x%5>2.5?objects[i].x+(5-objects[i].x%5):objects[i].x-(objects[i].x%5);
//       objects[i].y = objects[i].y%5>2.5?objects[i].y+(5-objects[i].y%5):objects[i].y-(objects[i].y%5);
//       keyListener.moveFlag = false;
//     }
//   }
// }
