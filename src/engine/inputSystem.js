
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

//MOUSEPOSITION

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


//TODO метод, высчитывающий x, y мыши относительно canvas

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

function keyListener2(obj){
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
  window.onkeydown = function(e){
    switch(e.keyCode){
      case 37, 65:    //'a' '<-'
        obj.side.left = true;
        obj.side.right = false;
      break;
      case 38, 87:    //'w' '/\'
        obj.side.up = true;
        obj.side.down = false;
      break;
      case 39, 68:    //'d' '->'
        obj.side.right = true;
        obj.side.left = false;
      break;
      case 40, 83:    //'s' '\/'
        obj.side.down = true;
        obj.side.up = false;
      break;
      case 16:  //shift - speedboost
        obj.speed += obj.speedBoost;
      break;
    }
  }
  window.onkeyup = function(e){
    switch(e.keyCode){
      case 37, 65:
        obj.side.left = false;
      break;
      case 38, 87:
        obj.side.up = false;
      break;
      case 39, 68:
        obj.side.right = false;
      break;
      case 40, 83:
        obj.side.down = false;
      break;
      case 16:
        obj.speed-= obj.speedBoost;
      break;
      case 32:
        jump = false;
      break;
    }
  }
}
