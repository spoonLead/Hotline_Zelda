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