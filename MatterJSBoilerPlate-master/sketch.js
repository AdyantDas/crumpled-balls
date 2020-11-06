var ball,t1,t2,t3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 ball=new Paper(50,400,20,20);
	 t1=new Bin(700,600,20,100);
	 t2=new Bin(635,640,150,20);
	 t3=new Bin(550,600,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  t1.display();
  t2.display();
  t3.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyDown(UP_ARROW)){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:35,y:-14})
	}
}



