var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var border1S,border2S,border3S,border1,border2,border3

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
	
	

	border1S=createSprite(335,620,20,100)
	border1S.shapeColor=color("red")
	border2S=createSprite(385,650,100,20)
	border2S.shapeColor=color("red")
	border3S=createSprite(435,620,20,100)
	border3S.shapeColor=color("red")

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	border1 = Bodies.rectangle(335,620,20,100, {isStatic:true} )
	World.add(world, border1)
	border2 = Bodies.rectangle(385,650,20,100, {isStatic:true} )
	World.add(world, border2)
	border3 = Bodies.rectangle(435,620,20,100, {isStatic:true} )
	World.add(world, border3)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false)
  }
}



