window.onload = init;

//-----------------------DECLARATIONS---------------------//
var canvas;
var screen;

//TODO add the dictionary of image path's for models
var player;
var enemy;
var background;



//^^^^^^^^^^^^^^^^^^^^^^^DECLARATIONS^^^^^^^^^^^^^^^^^^^^^//

//------------------------DIFINITION----------------------//
function init(){
  canvas = document.getElementById("canvas"); //конвенция
  screen = canvas.getContext("2d");

  background = new Background(0, 0, "./img/bg.jpg");
  enemy = new Enemy();
  player = new Player(canvas.width/2-25, canvas.height/2-25)
  camera = new Camera(undefined, undefined, 2, false);

  objectsMap.push(background, enemy, player);
  objectsRender = objectsMap;
  objectsScrolling = objectsMap;


  game();       //игровой цикл
}
//^^^^^^^^^^^^^^^^^^^^^^^^DIFINITION^^^^^^^^^^^^^^^^^^^^^^//

//-----GAMELOOP-----//
function game(){
  screen.clearRect(0, 0, canvas.width, canvas.height);

  render(objectsRender);
  player.move();
  enemy.process();
  camera.focusOn(player);

  //\/\/\/TEST\/\/\/
  //console.log(keyListener_downKeys);
  //console.log(window.mouseDown_x +" : "+ window.mouseDown_y + "   r: " + window.mouseDown_button["right"] + " m:" + window.mouseDown_button["middle"] + " l:" + window.mouseDown_button["left"])
  //console.log(window.mouseCanvasPosition_x + " : " + window.mouseCanvasPosition_y);

  requestAnimationFrame(game);  //ограничивает fps
}
