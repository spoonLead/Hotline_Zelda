function Enemy(){
  this.x = 500;
  this.y = 300;
  this.width = 50;
  this.height = 50;
}

Enemy.prototype.draw = function(){
  screen.drawImage(enemySp, 0, 0, 50, 50, this.x, this.y, this.width, this.height);
}
