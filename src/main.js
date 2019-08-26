function isElemInArr(array, element){
  for(var i = 0; i < array.length; i++){
    if(array[i] == element) return true;
  }
  return false;
}

function stepsForShortestRoute(Ax, Ay, Bx, By, step){
  this.ACLen = Bx-Ax;
  this.BCLen = By-Ay;
  this.ABLen = Math.sqrt(Math.pow(this.ACLen, 2)+Math.pow(this.BCLen, 2));
  this.steps = Math.floor(this.ABLen/step);  //округление до меньшего целового числа
  this.stepX = this.ACLen/this.Str;
  this.stepY = this.BCLen/this.Str;
  return([stepX, stepY, steps]);
}

//TODO for more fields in arguments
function checkObjectField(obect, field){
  try{
    for(var obj = 0; obj < objects.length; ++obj){
      if(!objects[obj].x == undefined && !objects[obj].y == undefined){
        return false;
      }
    }
  }catch{
    if(!object.x == undefined && !object.y == undefined){
      return false;
    }
  }
  return true;
}


//-----------------------KEYBOARD LISTENER---------------------//
document.addEventListener('keydown', keyListener);
document.addEventListener('keyup', keyListener);
keyListener_downKeys = [];

function keyListener(event){
  if(event.type == 'keydown'){
    if (!isElemInArr(keyListener_downKeys, event.keyCode)) keyListener_downKeys.push(event.keyCode);
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


// prototype of method. roll object to cursor side
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


function hasCollisionObjectWithArea(obj, x, y, width, height){
    if(hasCollisionVertObjectWithArea(obj,x, width) & hasCollisionHorizontalObjectWithArea(obj,y, height))
    return true;
    else
    return false;
}

function hasCollisionVertObjectWithArea(obj, x, width){
    if((obj.x <= x + width) & (x <= obj.x + obj.width))
        return true
}

function hasCollisionHorizontalObjectWithArea(obj, y, height){
    if((obj.y <= y + height) & (y <= obj.y + obj.height))
        return true;
}



function hasCollisionComplex(obj1, obj2){
    if(hasCollisionVertical(obj1,obj2) & hasCollisionHorizontal(obj1,obj2))
        return true;
    else
        return false;
}

function hasCollisionVertical(obj1, obj2){
    if((obj1.x <= obj2.x + obj2.width) & (obj2.x <= obj1.x + obj1.width))
        return true;
}

function hasCollisionHorizontal(obj1, obj2){
    if((obj1.y <= obj2.y + obj2.height) & (obj2.y <= obj1.y + obj1.height))
        return true;
}



function render(objects){
    for(var i = 0; i < objects.length; i++){
      objects[i].draw();
    }
    player.draw(); //TODO debag: player dont draw without this string from the Camera.focusOn
  }
  
//TODO realisation
var objectsMap = [];
var objectsRender = [];
var objectsScrolling = [];

class Camera{
    constructor(x = canvas.width/2, y = canvas.height/2, speed = 1, safetyMode = true){
      this.x = x
      this.y = y
      this.speed = speed;
      this.mode;
      this.focus;
      this.safetyMode = safetyMode;
  
      console.log("Camera set up")
      console.log("*Camera* x: " + this.x + ", y: " + this.y + ", speed: " + this.speed + ", safetyMode: " + this.safetyMode)
    }
  
  
    focusOn(obj){
      this.mode = "focusOn";
      this.focus = obj;
      objectsScrolling.splice(objectsScrolling.indexOf(obj), 1);
      this.x = obj.x; this. y = obj.y;
    }
  
  
    freeWalk(controlKeys = {left:65, right:68, up:87, down:83}){
      if(this.focus) objectsScrolling.push(this.focus);
      this.focus = undefined;
      this.mode = "freeWalk";
  
      if(isElemInArr(keyListener_downKeys, controlKeys.left)) mapScrolling(objectsScrolling, "x", this.speed, this.safetyMode);
      if(isElemInArr(keyListener_downKeys, controlKeys.right)) mapScrolling(objectsScrolling, "x", -this.speed, this.safetyMode);
      if(isElemInArr(keyListener_downKeys, controlKeys.up)) mapScrolling(objectsScrolling, "y", this.speed, this.safetyMode);
      if(isElemInArr(keyListener_downKeys, controlKeys.down)) mapScrolling(objectsScrolling, "y", -this.speed, this.safetyMode);
    }
  
  
    goToCoord(x, y){
      if(this.focus) objectsScrolling.push(this.focus);
      this.focus = undefined;
      this.mode = "goToCoord";
      var deltaX = this.x - x; this.x = deltaX;
      var deltaY = this.y - y; this.y = deltaY;
      mapScrolling(objectsScrolling, 'x', deltaX, this.safetyMode);
      mapScrolling(objectsScrolling, 'y', deltaY, this.safetyMode);
    }
  }
  
function mapScrolling(objects, sideScroll, interval, fieldsCheck = true){
    if(fieldsCheck){
      for(var obj = 0; obj < objects.length; ++obj){
        if(!objects[obj].x == undefined && !objects[obj].y == undefined){
          console.log("Object:" + obj + " dont have an 'x' or 'y' field");
          return false;
        }
      }
    }
  
    for(var obj = 0; obj < objects.length; ++obj){
      switch(sideScroll){
        case "x": objects[obj].x += interval; break;
        case "y": objects[obj].y += interval; break;
      }
    }
  }
window.onload = init;

//-----------------------DECLARATIONS---------------------//
var canvas;
var screen;

//TODO add the dictionary of image path's for models
var player;
var enemy; 
var background;



//^^^^^^^^^^^^^^^^^^^^^^^DECLARATIONS^^^^^^^^^^^^^^^^^^^^^//

//------------------------DIFINITION----------------------//
function init(){
  canvas = document.getElementById("canvas"); //конвенция
  screen = canvas.getContext("2d");
  
  background = new Background(0, 0, "./img/bg.jpg"); 
  enemy = new Enemy(); 
  player = new Player(canvas.width/2-25, canvas.height/2-25)
  camera = new Camera(undefined, undefined, 2, false);
  
  objectsMap.push(background, enemy, player);
  objectsRender = objectsMap;
  objectsScrolling = objectsMap;


  game();       //игровой цикл
}
//^^^^^^^^^^^^^^^^^^^^^^^^DIFINITION^^^^^^^^^^^^^^^^^^^^^^//

//-----GAMELOOP-----//
function game(){
  screen.clearRect(0, 0, canvas.width, canvas.height);

  render(objectsRender);
  player.move();
  //enemy.process();

  //\/\/\/TEST\/\/\/
  //console.log(keyListener_downKeys);
  //console.log(window.mouseDown_x +" : "+ window.mouseDown_y + "   r: " + window.mouseDown_button["right"] + " m:" + window.mouseDown_button["middle"] + " l:" + window.mouseDown_button["left"])
  //console.log(window.mouseCanvasPosition_x + " : " + window.mouseCanvasPosition_y);

  requestAnimationFrame(game);  //ограничивает fps
}





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

  // process(){
  //   if(hasCollisionComplex(player, this))
  //     this.swapToSprite("./img/enemyRed.jpg")
  //   else
  //     this.swapToSprite("./img/enemy.jpg")
      
  // }

  // swapToSprite(sprite){
  //   if(!this.sprite.src == sprite)
  //       this.sprite.src = sprite;
  // }

}


  class Background{
      x; y;
      backgroundImage = new Image();
    
      constructor(x, y, image){
        this.x = x;
        this.y = y;
        this.backgroundImage.src = image;

      }

      draw(){
        screen.drawImage(this.backgroundImage, 0, 0, 1024, 1024, this.x, this.y, 1024, 1024);
      }
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
      mapScrolling(objectsScrolling, "x", this.speed, false);
      this.x -= this.speed;
    }
    if(isElemInArr(keyListener_downKeys, controlKeys.right)){
      mapScrolling(objectsScrolling, "x", -this.speed, false);
      this.x += this.speed;
    }
    if(isElemInArr(keyListener_downKeys, controlKeys.up)){
      mapScrolling(objectsScrolling, "y", this.speed, false);
      this.y -= this.speed;
    }
    if(isElemInArr(keyListener_downKeys, controlKeys.down)){
      mapScrolling(objectsScrolling, "y", -this.speed, false);
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

