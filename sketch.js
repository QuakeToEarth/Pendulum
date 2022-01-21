
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground
var ball
var connect

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400,690,800,10)
	roof = new Ground(410,150,470,20)

	ball1 = new Ball(200,350,100,100)
	ball2 = new Ball(305,350,100,100)
	ball3 = new Ball(410,350,100,100)
	ball4 = new Ball(515,350,100,100)
	ball5 = new Ball(620,350,100,100)

	connect1 = new Connection({x:210,y:150},ball1.body)
	connect2 = new Connection({x:310,y:150},ball2.body)
	connect3 = new Connection({x:410,y:150},ball3.body)
	connect4 = new Connection({x:510,y:150},ball4.body)
	connect5 = new Connection({x:610,y:150},ball5.body)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('#ADD8E6');
  ground.display()
  roof.display()
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  connect1.display()
  connect2.display()
  connect3.display()
  connect4.display()
  connect5.display()
 
}



