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
  goToCoord(x, y, speed){
    if(this.focus) objectsScrolling.push(this.focus);

    steps = stepsForShortestRoute(this.x, this.y, x, y, speed);

    for(var i = 0; i < steps[2]; ++i){
      this.x += steps[0];
      mapScrolling(objectsScrolling, x, steps[0]);
      this.y += steps[1];
      mapScrolling(objectsScrolling, x, steps[1]);
    }
    this.x = x;
    this.y = y;
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
