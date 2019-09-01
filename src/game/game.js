window.onload = init;

//-----------------------DECLARATIONS---------------------//

let player;
let enemy;
let background;
let camera;

//^^^^^^^^^^^^^^^^^^^^^^^DECLARATIONS^^^^^^^^^^^^^^^^^^^^^//

//------------------------DIFINITION----------------------//
function init(){
  canvas = document.getElementById("canvas"); //конвенция
  screen = canvas.getContext("2d");

  background = new Background(0, 0, "./img/bg.jpg");
  enemy = new Enemy();
  player = new Player(canvas.width/2-25, canvas.height/2-25)
  camera = new Camera(undefined, undefined, 2, false);

  // TODO: refactoring
  objectsMap.push(background, enemy, player);
  objectsRender.push(background, enemy);
  objectsScrolling = objectsMap;

  gameLoopStart();       //игровой цикл
}
//^^^^^^^^^^^^^^^^^^^^^^^^DIFINITION^^^^^^^^^^^^^^^^^^^^^^//

//-----GAMELOOP-----//
function game(){
  // screen.clearRect(0, 0, canvas.width, canvas.height);

  clearCanvas();

  render(objectsRender);
  player.move();
  enemy.process();
  camera.focusOn(player);


  //\/\/\/TEST\/\/\/
  //console.log(player.state)
  //console.log(keyListener_downKeys);
  //console.log(window.mouseDown_x +" : "+ window.mouseDown_y + "   r: " + window.mouseDown_button["right"] + " m:" + window.mouseDown_button["middle"] + " l:" + window.mouseDown_button["left"])
  //console.log(window.mouseCanvasPosition_x + " : " + window.mouseCanvasPosition_y);

}
