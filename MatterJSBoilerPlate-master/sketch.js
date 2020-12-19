
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var block1;
var bob1;

function preload()
{
	
}

function setup() {
	createCanvas(900, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    block1 = new Roof(400,50,600,20);
    bob1 = new Bob(200,200);
    bob2 = new Bob(300,200);
    bob3 = new Bob(400,200);
    bob4 = new Bob(500,200);
    bob5 = new Bob(600,200);
  
  var options_chain = {
    bodyA: bob1.body,
    bodyB: Block.body,
    stiffness = 0.4,
    length = 10
  }
  var chain = Constraint.create(options_chain);
  World.add(world,chain);
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  
  block1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 // chain.dislay();

}


