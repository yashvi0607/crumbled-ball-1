
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var options = {
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:0.2
	}
ls = createSprite(250,620,10,80);
ls.shapeColor = "red";
rs = createSprite(450,620,10,80);
rs.shapeColor = "red";
bs= createSprite(350,655,190,10);
bs.shapeColor="red";

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ball=	Matter.Bodies.circle(50,655,10);
World.add(world,ball);
 
 ground = Matter.Bodies.rectangle(200,500,20);
 world.add(world,ground);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,10,10);
  drawSprites();
 
}
function keyPressed() {
 if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball.body,ball.body.position,{x:10,y:-10});
}
}


