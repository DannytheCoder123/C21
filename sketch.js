
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball ;
var groundObj ;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var ball_options={
        
	isStatic : false,
	restitution:0.3,
    friction:0,
	density:1.2	

	}


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  groundObj.display() ;
 
  Matter.Bodies.circle(185,180,75,ball)
  World.add(world,ball)


  function keyPressed() {

  if (keyCode === UP_ARROW) {

Matter.Body.applyForce(ball,175,5)

	
  }


  }

  drawSprites();
 
}



