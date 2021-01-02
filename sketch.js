const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1, bin2, bin3;
var ground;
var ball;

function setup() {
	createCanvas(windowWidth, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground();

	bin1 = new Bin(800, 600, 10, 100);
	bin2 = new Bin(895, 655, 200, 10);
	bin3 = new Bin(990, 600, 10, 100);

	ball = new Waste(50, 550, 15, 15);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  console.log(ball)

  ground.display();

  bin1.display();
  bin2.display();
  bin3.display();

  ball.display(); 
  
  if(keyCode === UP_ARROW) {
	  Body.applyForce(ball.body, {x: ball.body.position.x, y: ball.body.position.y}, {x: 0, y: -2});
  }
}





