const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var dustbin1,dustbin2,dustbin3,ground1,ground2,ground3,ground4,ball;
var packageBody;
function setup()
 {
	createCanvas(1330, 630);
 engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  dustbin1 = new Dustbin(1000,590,170,30);
  dustbin2 = new Dustbin(925,515,20,180);
  dustbin3 = new Dustbin(1075,515,20,180);
   ground1 = new Ground(400,600,1900,15);
   ground2 = new Ground(400,50,1900,15);
   ground3 = new Ground(50,400,15,1900);
   ground4 = new Ground(1300,400,15,1900);
  ball = new Paper(100,100,33);
  }

function draw()
 {
  rectMode(CENTER);
  background("White");
  
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();

  ball.display();
  keyPressed();
 }

function keyPressed()
{
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:215,y:-260});
  }
  
}
