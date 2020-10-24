
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(13000, 700);


	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.

	paper = new Paper(200,450);
	ground = new Ground(400,700,13000,20);
	dustbin1=new DustBin(1500,610,20,200);
	dustbin2=new DustBin(1300,610,20,200);
	dustbin3=new DustBin(1400,700,200,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
	

  drawSprites();
  
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}

}

