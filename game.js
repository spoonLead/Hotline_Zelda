window.onload = init;

var canvas;
var screen;
var x = 380;
var y = 300;
var up,down,left,right;   //flags for control

//todo UNIT BUFFER
var units = [];

function init(){
  canvas = document.getElementById("canvas");
  screen = canvas.getContext("2d");
  randCoord();
  tick();
}

function drawRect(x,y,w,h) {
  screen.fillStyle = "#E4E4E4"
  screen.fillRect(x,y,w,h);
}


//TODO проверка на выход за границы поля
function moveRect(e){
  if(up == true & y>0){
    y -= 10;
  }
  if(down == true & y<550){
    y += 10;
  }
  if(left == true & x>0){
    x -= 15;
  }
  if(right == true & x<750){
    x += 15;
  }
}

function keyListener(){
  window.onkeydown = function(e){
    switch(e.keyCode){
      case 37:
        left = true;
      break;
      case 38:
        up = true;
      break;
      case 39:
        right = true;
      break;
      case 40:
        down = true;
      break;
    }
  }

  window.onkeyup = function(e){
    switch(e.keyCode){
      case 37:
        left = false;
      break;
      case 38:
        up = false;
      break;
      case 39:
        right = false;
      break;
      case 40:
        down = false;
      break;
    }
  }
}

function tick(){
  screen.clearRect(0, 0, canvas.width, canvas.height);

  drawRect(x,y,50,50);
  moveRect("keydown");
  keyListener();
  step1();
  requestAnimationFrame(tick);
}

function step1(){
//
  for (var i = 1; i < 100; i+=2){

    if((units[i - 1] <= (x + 50) & units[i - 1] >= x-10)
     &                                                           //проверка на столкновение
     (units[i] <= (y + 50) & units[i] >= y-10))
     {

       units[i - 1] = Math.floor(Math.random() * 800);
       units[i] = Math.floor(Math.random() * -3000);
       console.log("Столкновение");
     }

    if(units[i] > 600) {units[i] = Math.floor(Math.random() * -3000)}    //проверка на исчезновение

    units[i] += 10;    //движение точек
    drawRect(units[i - 1], units[i], 10,10);    //отрисовка
  }
}

function randCoord(){
  // add units with random coordinates to massive
  for (var i = 0; i < 100; i++){
    if (i % 2 == 0){units[i] = Math.floor(Math.random() * 800);}
    else {units[i] = Math.floor(Math.random() * -3000)}
  }
}
