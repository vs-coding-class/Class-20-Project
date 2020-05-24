var car,wall;

var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);

  wall.shapeColor = color(80,80,80);
  car.shapeColor = color(255,255,255);

  }

function draw() {
  background(0,0,0);

  car.velocityX = speed;

  if(wall.x - car.x < wall.width/2 + car.width/2){
    car.velocityX = 0;

    var deformation = 0.5 * weight * speed * speed/22500;
    if(deformation > 180){
      car.shapeColor = color(255,0,0);
    }
    if(deformation < 80){
      car.shapeColor = color(0,255,0);
    }
    if(deformation <= 180 && deformation >= 80){
      car.shapeColor = color(230,230,0);
    }
  }

  drawSprites();
}