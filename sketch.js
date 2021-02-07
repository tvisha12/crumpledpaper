
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin;
var paperObject;



function setup() {
	createCanvas(900, 700);
    rectMode(CENTER);
    engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.
	
	paperObject = new Paper(100,100,25);
	ground = new Ground(400,670,1200,20);
	
	boxsprite = createSprite(width/1.2,height-45,135,20);
	boxsprite2 = createSprite(width/1.3,height=615,20,100);
	boxsprite3 = createSprite(width/1.1,height=615,20,100);

	
	
    Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  //paperObject.x= paperObject.position.x 
  //paperObject.y= paperObject.position.y 
  drawSprites();
  paperObject.display();
  ground.display();

  Engine.update(engine);
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:75,y:-75});
		Matter.Body.setStatic(paperObject,false);
		
	}
}