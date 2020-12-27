const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1, bin2, bin3;
var ground;
var ball;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground();

	bin1 = new Bin(575, 600, 10, 100);
	bin2 = new Bin(670, 655, 200, 10);
	bin3 = new Bin(765, 600, 10, 100);

	ball = new Waste();

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
}





