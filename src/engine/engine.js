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
