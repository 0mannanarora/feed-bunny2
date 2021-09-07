var garden,rabbit;
var gardenImg,rabbitImg;
var apples 
var apples_1
var leaves
var leaves_1

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  apples_1 = loadImage("apple.png");
  leaves_1 = loadImage("leaf.png")
  
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX
  
  




  spawnleaves();
  spawnapples();
  drawSprites();
}

function spawnapples()
{
  
   apple = createSprite(random(50,350),25,10,10)
   apple.velocityY = 5
   apple.addImage(apples_1)
   apple.scale = 0.06
   apple.lifetime = 10
  
   
  }


   

   
   
  
   
}

function spawnleaves ()
{
if (frameCount % 80 == 0) {
leaves = createSprite(random(50,350),25,10,10)
leaves.velocityY = 5
leaves.addImage(leaves_1)
leaves.scale = 0.06
leaves.lifetime = 10
}

}
