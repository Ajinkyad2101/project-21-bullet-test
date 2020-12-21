var bullet,wall;
var speed,weight,thickness;

function setup(){
  createCanvas(1600,400);

speed=random(55,90);
thickness=random(22,200);
weight=random(30,50);

wall=createSprite(1500,200,thickness,200);

bullet=createSprite(50,200,80,20);
bullet.velocityX=speed;


damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

}

function draw(){
background("black");

console.log(damage);
  
if(wall.x-bullet.x<0&&damage<10){

  bullet.velocityX=0;
  wall.shapeColor="green";

  }

  if(wall.x-bullet.x<0&&damage>10){

    bullet.velocityX=0;
    wall.shapeColor="red";
      
      
   }

drawSprites();
}
