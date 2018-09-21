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


  render();
  //keyListener(player);
  //mapScrolling_old(player);
  mapScrolling(objects, "up", 5);

  //console.log(window.mouseDown_x +" : "+ window.mouseDown_y + "   r: " + window.mouseDown_button["right"] + " m:" + window.mouseDown_button["middle"] + " l:" + window.mouseDown_button["left"])
  //console.log(window.mouseCanvasPosition_x + " : " + window.mouseCanvasPosition_y);
  requestAnimationFrame(game);  //ограничивает fps
}



function background() {
  this.x = 0;
  this.y = 0;
}

background.prototype.draw = function() {
  screen.drawImage(backgroundSp, 0, 0, 1024, 1024, this.x, this.y, 1024, 1024);
}
