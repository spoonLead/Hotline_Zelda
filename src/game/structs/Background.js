  class Background{
      x;
      y;
      backgroundImage = new Image();

      constructor(x, y, image){
        this.x = x;
        this.y = y;
        this.backgroundImage.src = image;
      }

      draw(){
        screen.drawImage(this.backgroundImage, 0, 0, 1024, 1024, this.x, this.y, 1024, 1024);
      }
  }
