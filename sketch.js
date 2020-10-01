var fixedRect, movingRect;

var o1,o2,o3,o4;




function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  o1 = createSprite(100,100,80,30);
  o1.shapeColor = "yellow";
  
  o2 = createSprite(200,100,80,30);
  o2.shapeColor = "yellow";
  
  o3 = createSprite(300,100,80,30);
  o3.shapeColor = "yellow";
  
  o4 = createSprite(400,100,80,30);
  o4.shapeColor = "yellow";
  

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  fixedRect.velocityX = 3;

  
  //if(isTouching(movingRect,o3)){
    //movingRect.shapeColor = "blue";
    //o3.shapeColor = "blue";

  //}
  //else {
    //movingRect.shapeColor = "green";
    //o3.shapeColor = "yellow";
//}
bounceOff(movingRect,fixedRect)
  drawSprites();

}



