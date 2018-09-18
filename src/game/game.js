window.onload = init;

//-----------------------DECLARATIONS---------------------//
var canvas;
var screen;

//TODO add the dictionary of image path's for models
var player; var playerSp = new Image(); playerSp.src = "./img/player.jpg";
var enemy; var enemySp = new Image(); enemySp.src = "./img/enemy.jpg";
var background; var backgroundSp = new Image(); backgroundSp.src = "./img/bg.jpg";
var dic

var objects = [];

//^^^^^^^^^^^^^^^^^^^^^^^DECLARATIONS^^^^^^^^^^^^^^^^^^^^^//

//----------------------INITIALISATION--------------------//
function init(){
  canvas = document.getElementById("canvas"); //конвенция
  screen = canvas.getContext("2d");
  player = new Player(canvas.width/2-25, canvas.height/2-25);
  objects.push(background = new background(), enemy = new Enemy());

  game();       //игровой цикл
}
//^^^^^^^^^^^^^^^^^^^^^^INITIALISATION^^^^^^^^^^^^^^^^^^^^//

//-----GAMELOOP-----//
function game(){
  screen.clearRect(0, 0, canvas.width, canvas.height);
  document.getElementById("canvas").onmousehover = keyListener;

  render();
  //keyListener(player);
  //mapScrolling(player);
  console.log(window.keydown)
  //keyListener3(dict);
  requestAnimationFrame(game);  //ограничивает fps
}



function background() {
  this.x = 0;
  this.y = 0;
}

background.prototype.draw = function() {
  screen.drawImage(backgroundSp, 0, 0, 1024, 1024, this.x, this.y, 1024, 1024);
}
