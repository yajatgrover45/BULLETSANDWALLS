var wall,thickness;
var bullet,speed,weight;
function setup() {
  createCanvas(1600,400);
 thickness = random(22,83); 
 speed = random(223,321);
 weight = random(30,52);
 wall = createSprite(1000,200,thickness,height/2);
 bullet = createSprite(500,200,30,30);
 wall.shapeColor = "brown";
 bullet.shapeColor = "yellow";
}

function draw() {
  background("green");
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor="red";
    }
    if(damage<10){
      wall.shapeColor="purple";
    }
  }
 drawSprites();
}
