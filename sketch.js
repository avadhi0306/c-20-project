var car,wall;
var speed, weight; 
var deformation=0;

function setup() {
  createCanvas(800, 400);
	speed=random(55,90)
	weight=random(400,1500)

	car=createSprite(50, 200, 50,50);   
	car.velocityX = speed;
	car.shapeColor="white";

  	wall=createSprite(700,200, 60, height/2)
  	wall.shapeColor="black";
}


function draw() {
  background("lightblue");

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
	  car.velocityX=0;

	  //formula to calculate deformation
	   0.5 * weight * speed* speed/22509;


	   if(deformation > 180) {
	   car.shapeColor="red";
	  if( deformation < 100){
      car.shapeColor="green"
    }
     }









  }  

  drawSprites();
  text("Deformation"+deformation,300,50);
}
