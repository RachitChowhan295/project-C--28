
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var dustbin1,dustbin2,dustbin3,dustbinimj;
var string;

function preload()
{
	dustbinImj = loadImage("dustbinimj.png")
}

function setup() {
	createCanvas(800,700);

	dustbinimj = createSprite(650,580,150,150);
	dustbinimj.addImage("dustbinimage",dustbinImj);
	dustbinimj.scale = 0.5;

	engine = Engine.create();
	world = engine.world;

	paper = new Paper();
	ground= new Ground();

	string = new Slingshot(paper.body,{x:150,y:350})

	
	dustbin1 = new Dustbin(650,660,150,15);
	dustbin2 = new Dustbin(590,590,15,150);
	dustbin3 = new Dustbin(710,590,15,150);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  paper.display();
	
	dustbin2.display();
	dustbin3.display();
	dustbin1.display();
	
	ground.display();
	string.display();

  drawSprites();
  
}

function keyPressed(){

if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:35,y:-55})

}
}

function mouseDragged(){
Matter.Body.setPosition(paper.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
string.fly();
}