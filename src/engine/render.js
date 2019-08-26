function render(objects){
    for(var i = 0; i < objects.length; i++){
      objects[i].draw();
    }
    player.draw(); //TODO debag: player dont draw without this string from the Camera.focusOn
  }
  