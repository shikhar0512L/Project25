class Dustbin{
    constructor(x, y, width, height) {
        var options = {
            
            "isStatic":true
          }
this.body = Bodies.rectangle(x, y, width, height, options);
this.image=loadImage("IMAGES/dustbingreen.png");
this.width = width;
this.height = height;

        World.add(world, this.body);
      }
      display(){
       
       
       var pos=this.body.position;
      rectMode(CENTER);
        imageMode(CENTER);
        fill ("white");
        rect(pos.x,pos.y,this.width,this.height);
        image(this.image, 1000, 500, 185, 187);
       
      
       
    }
}