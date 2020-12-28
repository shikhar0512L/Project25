class Paper{
    constructor(x, y,radius) {
        var options = {
            'isStatic': false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            
        }
        this.body = Bodies.circle(x, y, radius, options);
        //this.height = width;
       // this.width = height;
       this.radius = radius;
       this.image=loadImage("IMAGES/paper.png");
        World.add(world, this.body);
      } 
      display(){
       var crc=this.body.position;
       fill ("green");
        
       
        image(this.image, crc.x, crc.y, 70, 70);
      
       
      }
}