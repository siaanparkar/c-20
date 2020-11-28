var moving_rect
var fixed_rect

function setup() {
  createCanvas(800,400);
 fixed_rect = createSprite(400, 200, 50, 50);
 moving_rect = createSprite(200, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  
  moving_rect.x = World.mouseX;
  moving_rect.y = World.mouseY;
  
  console.log(moving_rect.width / 2 + fixed_rect.width / 2)
  console.log( moving_rect.x - fixed_rect.x)

  if(moving_rect.width / 2 + fixed_rect.width / 2 > moving_rect.x - fixed_rect.x && moving_rect.width / 2 + fixed_rect.width / 2 > fixed_rect.x - moving_rect.x && 
    moving_rect.width / 2 + fixed_rect.width / 2 > moving_rect.y - fixed_rect.y && moving_rect.width / 2 + fixed_rect.width / 2 > fixed_rect.y - moving_rect.y)   {

moving_rect.shapeColor="red";
fixed_rect.shapeColor="red";

  }
 else{
  moving_rect.shapeColor="green";
  fixed_rect.shapeColor="green";

 }





  drawSprites();
}