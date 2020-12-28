
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1600, 700);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	dustbin1=createSprite(1400,650,200,20);
	dustbin2=createSprite(1300,600,20,100);
	dustbin3=createSprite(1500,600,20,100);
	

	paper=createSprite(200,650,40,40);
	


	engine = Engine.create();
	world = engine.world;

	paperBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:false});
	World.add(world, paperBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  function keyPressed(){
	if(keyCode === "UP_ARROW")
	Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
}

}



