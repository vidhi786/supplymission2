var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var boxl,boxr,boxb;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	/*packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2*/

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	/*groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)*/


	engine = Engine.create();
	world = engine.world;


	boxb=new Box(width/2,640,100,20);
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});

	boxl=new Box(width/2-60,590,20,100);
	World.add(world, packageBody);

	boxr=new Box(width/2+60,590,20,100);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  
  background(0);
 /* packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y */
  imageMode(CENTER);
  image(packageIMG,packageBody.position.x,packageBody.position.y,50,50);
  rectMode(CENTER);
  boxb.display();
  boxl.display();
  boxr.display();

  rect(ground.position.x,ground.position.y,width,10)
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	
Matter.Body.setStatic(packageBody,false);
    
  }
}



