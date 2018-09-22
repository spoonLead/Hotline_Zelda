//--------------ENGINE--(RENDER--KEYLISTENER--MAPSCROLLING)----------//


function render(objects){
  for(var i = 0; i < objects.length; i++){
    objects[i].draw();
  }
  player.draw();
}

//TODO realisation
class Camera{
  constructor(){
    this.x = canvas.width/2;
    this.y = canvas.height/2;
    this.speed;
    this.mode;
    this.focus;
  }

  //TODO this is the old mapScrolling func; add more arguments
  focusOn(obj){
    this.mode = "focusOn";
    objectsScrolling.splice(objectsScrolling.indexOf(obj))
    this.x = obj.x; this. y = obj.y;
  }

  //TODO control the camera from keyListener
  freeWalk(){
    if(this.focus) objectsScrolling.push(this.focus);


  }

  //TODO moving camera to input coordinates
  goToCoord(x, y){
    var deltaX = this.x - x;
    var deltaY = this.y - y;
    mapScrolling(objectsScrolling, 'x', deltaX);
    mapScrolling(objectsScrolling, 'y', deltaY);
  }
}


//TODO method. checking thefiels 'x' and 'y' in object
function mapScrolling(objects, sideScroll, interval){
  for(var obj = 0; obj < objects.length; ++obj){
    switch(sideScroll){
      case "x": objects[obj].x += interval; break;
      case "y": objects[obj].y += interval; break;
    }
  }
}

//OLD FUNCTION
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
