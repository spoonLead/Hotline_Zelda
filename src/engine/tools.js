function isElemInArr(array, element){
  for(var i = 0; i < array.length; i++){
    if(array[i] == element) return true;
  }
  return false;
}

function stepsForShortestRoute(Ax, Ay, Bx, By, step){
  this.ACLen = Bx-Ax;
  this.BCLen = By-Ay;
  this.ABLen = Math.sqrt(Math.pow(this.ACLen, 2)+Math.pow(this.BCLen, 2));
  this.steps = Math.floor(this.ABLen/step);  //округление до меньшего целового числа
  this.stepX = this.ACLen/this.Str;
  this.stepY = this.BCLen/this.Str;
  return([stepX, stepY, steps]);
}
