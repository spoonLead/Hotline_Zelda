//--------------ENGINE--(RENDER--KEYLISTENER--MAPSCROLLING--INIT)----------//


function render(){
  for(var i = 0; i < objects.length; i++){
    objects[i].draw();
  }
  player.draw();
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
      case 37, 65:
        obj.side.left = true;
        obj.side.right = false;
      break;
      case 38, 87:
        obj.side.up = true;
        obj.side.down = false;
      break;
      case 39, 68:
        obj.side.right = true;
        obj.side.left = false;
      break;
      case 40, 83:
        obj.side.down = true;
        obj.side.up = false;
      break;
      case 16:  //shift - speedboost
        obj.speed += obj.speedBoost;
      break;
      case 32:
          jump = true;
          obj.side.down = obj.side.up = obj.side.right = obj.side.left = true
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
//^^^^^^^^^^^^^^ENGINE--(RENDER--KEYLISTENER--MAPSCROLLING!--INIT)^^^^^^^^^^//
