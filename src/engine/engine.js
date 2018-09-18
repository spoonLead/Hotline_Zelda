//--------------ENGINE--(RENDER--KEYLISTENER--MAPSCROLLING)----------//


function render(){
  for(var i = 0; i < objects.length; i++){
    objects[i].draw();
  }
  player.draw();
}

document.addEventListener('keydown', keyListener2)
document.addEventListener('keyup', keyListener2)
function keyListener2(event){
  if(event.type == 'keydown'){
    window.keydown = event.keyCode;
  }else{
    window.keydown = undefined;
  }


  /*
  window.dic = dict;
  console.log(dic)
  window.onkeydown = function(e){
    switch(e.keyCode){
      case 37, 65:    //'a' '<-'
        window.dic["left"] = true;
      break;
      case 38, 87:    //'w' '/\'
        dic["up"] = true;
      break;
      case 39, 68:    //'d' '->'
        this.dic["right"] = true;
      break;
      case 40, 83:    //'s' '\/'
        this.dic["down"] = true;
      break;
    }
  }
  window.onkeyup = function(e){
    switch(e.keyCode){
      case 37, 65:      //'a' '<-'
        dic["left"] = false;
      break;
      case 38, 87:      //'w' '/\'
        dic["up"] = false;
      break;
      case 39, 68:      //'d' '->'
        dic["right"] = false;
      break;
      case 40, 83:      //'s' '\/'
        dic["down"] = false;
      break;
    }
  }
  console.log(dic)
  //console.log(dic)
  //return this.dic;*/
}




function keyListener(obj){
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


function mapScrolling(obj){
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
