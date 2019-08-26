//--------------ENGINE--(RENDER--CAMERA--MAPSCROLLING)----------//



function render(objects){
  for(var i = 0; i < objects.length; i++){
    objects[i].draw();
  }
  player.draw(); //TODO debag: player dont draw without this string from the Camera.focusOn
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
