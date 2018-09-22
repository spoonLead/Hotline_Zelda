window.onload = init;

//-----------------------DECLARATIONS---------------------//
var canvas;
var screen;

//TODO add the dictionary of image path's for models
var player; var playerSp = new Image(); playerSp.src = "./img/player.jpg";
var enemy; var enemySp = new Image(); enemySp.src = "./img/enemy.jpg";
var background; var backgroundSp = new Image(); backgroundSp.src = "./img/bg.jpg";

var objects = [];

//^^^^^^^^^^^^^^^^^^^^^^^DECLARATIONS^^^^^^^^^^^^^^^^^^^^^//

//------------------------DIFINITION----------------------//
function init(){
  canvas = document.getElementById("canvas"); //конвенция
  screen = canvas.getContext("2d");
  background = new background(); enemy = new Enemy(); player = new Player(canvas.width/2-25, canvas.height/2-25)
  camera = new Camera();
  objectsMap.push(background, enemy, player);
  objectsRender = objectsMap;
  objectsScrolling = objectsMap;


  camera.focusOn(player);
  game();       //игровой цикл
}
//^^^^^^^^^^^^^^^^^^^^^^^^DIFINITION^^^^^^^^^^^^^^^^^^^^^^//

//-----GAMELOOP-----//
function game(){
  screen.clearRect(0, 0, canvas.width, canvas.height);


  render(objectsRender);
  //keyListener(player);
  //mapScrolling_old(player);

  console.log(keyListener_downKeys);
  if(isElemInArr(keyListener_downKeys, '32')){
    camera.goToCoord(100, 100);
  }

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
