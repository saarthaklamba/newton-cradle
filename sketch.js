var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var bob1,bob2,bob3,bo4,bob5;
var chain1,chain2,chain3,chain4,chain5;
function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);
    ground=new Ground(width/2,10,width,10)
	 bob1=new Bob(320,200,20)
	 bob2=new Bob(360,200,20)
	 bob3=new Bob(400,200,20)
	 bob4=new Bob(440,200,20)
	 bob5=new Bob(480,200,20)
	 chain1=new Chain(bob1.body,{x:320,y:10})
	 chain2=new Chain(bob2.body,{x:360,y:10})
	 chain3=new Chain(bob3.body,{x:400,y:10})
	chain4=new Chain(bob4.body,{x:440,y:10})
	chain5=new Chain(bob5.body,{x:480,y:10})
	Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  background(400);
  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
 chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();
 
}
function keyPressed(){
	

	
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-20,y:-20})
	
	}
	if(Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-20,y:-20})){
		if(keyCode===UP_ARROW){
			Matter.Body.applyForce(bob5.body,bob5.body.position,{x:20,y:-20})	
		}	
	}
}





