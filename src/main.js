//--------------ENGINE--(RENDER--KEYLISTENER--MAPSCROLLING)----------//


function render(){
  for(var i = 0; i < objects.length; i++){
    objects[i].draw();
  }
  player.draw();
}


class camera{
  constructor(){
    this.x;
    this.y;
    this.speed;
    this.mode;
  }

  //TODO this is the old mapScrolling func; add more arguments
  focusOn(obj){
    if(obj.side.up == true ){
      for(var i = 0; i < objects.length; i++){
          objects[i].y += obj.speed;
      }
    }
    if(obj.side.down == true ){
      for(var i = 0; i < objects.length; i++){
          objects[i].y -= obj.speed;
      }
    }
    if(obj.side.left == true ){
      for(var i = 0; i < objects.length; i++){
          objects[i].x += obj.speed;
      }
    }
    if(obj.side.right == true){
      for(var i = 0; i < objects.length; i++){
          objects[i].x -= obj.speed;
      }
    }
  }

  //TODO control the camera from keyListener
  freeWalk(){

  }

  //TODO moving camera to input coordinates
  goToCoord(){

  }

}

function mapScrolling(objects, side, interval){
  for(obj = 0; obj < objects.length; ++obj){
    switch(side){
      case "left": objects[obj].x -= interval; break;
      case "right": objects[obj].x += interval; break;
      case "up": objects[obj].y -= interval; break;
      case "down": objects[obj].y += interval; break;
    }
  }
}


function mapScrolling_old(objects){
  if(obj.side.up == true ){
    for(var i = 0; i < objects.length; i++){
        objects[i].y += obj.speed;
    }
  }
  if(obj.side.down == true ){
    for(var i = 0; i < objects.length; i++){
        objects[i].y -= obj.speed;
    }
  }
  if(obj.side.left == true ){
    for(var i = 0; i < objects.length; i++){
        objects[i].x += obj.speed;
    }
  }
  if(obj.side.right == true){
    for(var i = 0; i < objects.length; i++){
        objects[i].x -= obj.speed;
    }
  }
}
//^^^^^^^^^^^^^^ENGINE--(RENDER--KEYLISTENER--MAPSCROLLING!)^^^^^^^^^^//


//-----------------------KEYBOARD LISTENER---------------------//
document.addEventListener('keydown', keyListener)
keyListener_downKeys = []

function keyListener(event){
  if(event.type == 'keydown'){
    if (isElemInArr(keyListener_downKeys, event.keyCode)) keyListener_downKeys.push(event.keyCode);
  }
  else{
    keyListener_downKeys.splice(keyListener_downKeys.indexOf(event.keyCode), 1);
  }
}
//^^^^^^^^^^^^^^^^^^^^^^^KEYBOARD LISTENER^^^^^^^^^^^^^^^^^^^^^^^//



//-------------------------MOUSE LISTENER-----------------------//

//MOUSEPOSITIONS

document.addEventListener('mousemove', mousePagePosition);
var mousePagePosition_x = mousePagePosition_y = 0;
function mousePagePosition(event){
  if(event.type == 'mousemove'){
    mousePagePosition_x = event.clientX;
    mousePagePosition_y = event.clientY;
  }
}

document.addEventListener('mousemove', mouseCanvasPosition);
var mouseCanvasPosition_x = mouseCanvasPosition_y = 0;
function mouseCanvasPosition(event){
  if(event.type == 'mousemove'){
    if(event.target == canvas){
      mouseCanvasPosition_x = event.pageX - event.target.offsetLeft,
      mouseCanvasPosition_y = event.pageY - event.target.offsetTop;
    }else{
      mouseCanvasPosition_x = undefined;
      mouseCanvasPosition_y = undefined;
    }
  }
}


//MOUSEDOWN
document.addEventListener('mousedown', mouseDown);
var mouseDown_x = mouseDown_y = 0;
var mouseDown_button =  {
  "left":false,
  "middle":false,
  "right":false};
function mouseDown(event){
  if(event.type == 'mousedown'){
    mouseDown_x = mouseCanvasPosition_x;
    mouseDown_y = mouseCanvasPosition_y;
    if(event.button & 0) mouseDown_button.right = true;
    if(event.button & 1) mouseDown_button.middle = true;
    if(event.button & 2) mouseDown_button.left = true;
  }
}

//^^^^^^^^^^^^^^^^^^^^^^^^^MOUSE LISTENER^^^^^^^^^^^^^^^^^^^^^^^^^//


// prototype of method. roll object to mouse 
function rollToMouse(obj){
  window.onmousemove = function(e){
    this.x = e.offsetX==undefined?e.layerX:e.offsetX-obj.width/2;
    this.y = e.offsetY==undefined?e.layerY:e.offsetY-obj.height/2;

    this.BCLen = Math.abs(this.x-obj.x);
    this.ACLen = Math.abs(this.y-obj.y);
    if(this.x>obj.x & this.y<obj.y){obj.beta = (Math.atan(this.BCLen/this.ACLen)*180)/Math.PI;}    //первая четверь
    else if(this.x<obj.x & this.y<obj.y){obj.beta = 90 - Math.atan(this.BCLen/this.ACLen)*180/Math.PI + 270 ;}   //вторая четверть
    else if(this.x<obj.x & this.y>obj.y){obj.beta = Math.atan(this.BCLen/this.ACLen)*180/Math.PI + 180;}   //третья четверть
    else if(this.x>obj.x & this.y>obj.y){obj.beta = 90 - Math.atan(this.BCLen/this.ACLen)*180/Math.PI + 90;}   //четвёртая четверть
    console.log(this.x, this.y, this.BCLen, this.ACLen, obj.beta);
  }
}

function isElemInArr(array, element){
  if (array.indexOf(event.keyCode) === -1) return true;
  else return false
}

window.onload = init;

//-----------------------DECLARATIONS---------------------//
var canvas;
var screen;

//TODO add the dictionary of image path's for models
var player; var playerSp = new Image(); playerSp.src = "./img/player.jpg";
var enemy; var enemySp = new Image(); enemySp.src = "./img/enemy.jpg";
var background; var backgroundSp = new Image(); backgroundSp.src = "./img/bg.jpg";
var dic

var objects = [];

//^^^^^^^^^^^^^^^^^^^^^^^DECLARATIONS^^^^^^^^^^^^^^^^^^^^^//

//----------------------INITIALISATION--------------------//
function init(){
  canvas = document.getElementById("canvas"); //конвенция
  screen = canvas.getContext("2d");
  player = new Player(canvas.width/2-25, canvas.height/2-25);
  objects.push(background = new background(), enemy = new Enemy());

  game();       //игровой цикл
}
//^^^^^^^^^^^^^^^^^^^^^^INITIALISATION^^^^^^^^^^^^^^^^^^^^//

//-----GAMELOOP-----//
function game(){
  screen.clearRect(0, 0, canvas.width, canvas.height);


  render();
  //keyListener(player);
  //mapScrolling_old(player);
  mapScrolling(objects, "up", 5);

  //console.log(window.mouseDown_x +" : "+ window.mouseDown_y + "   r: " + window.mouseDown_button["right"] + " m:" + window.mouseDown_button["middle"] + " l:" + window.mouseDown_button["left"])
  //console.log(window.mouseCanvasPosition_x + " : " + window.mouseCanvasPosition_y);
  requestAnimationFrame(game);  //ограничивает fps
}



function background() {
  this.x = 0;
  this.y = 0;
}

background.prototype.draw = function() {
  screen.drawImage(backgroundSp, 0, 0, 1024, 1024, this.x, this.y, 1024, 1024);
}

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

function Enemy(){
  this.x = 500;
  this.y = 300;
  this.width = 50;
  this.height = 50;
}

Enemy.prototype.draw = function(){
  screen.drawImage(enemySp, 0, 0, 50, 50, this.x, this.y, this.width, this.height);
}

