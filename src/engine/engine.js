//--------------ENGINE--(RENDER--CAMERA--MAPSCROLLING)----------//



function render(objects){
  for(var i = 0; i < objects.length; i++){
    objects[i].draw();
  }
  player.draw(); //TODO debag: player dont draw without this string from the Camera.focusOn
}


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

//^^^^^^^^^^^^^^ENGINE--(RENDER--CAMERA--MAPSCROLLING!)^^^^^^^^^^//
