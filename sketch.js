var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,score, survivalTime


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 monkey=createSprite(80,315,20,20) 
 monkey.addAnimation("moving",monkey_running)
 monkey.scale=0.1
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2
  console.log(ground.x)
  
  
  
  FoodGroup=new Group()
  obstacleGroup=new Group()
}


function draw() {
background(0)
  createCanvas(600,400)
  console.log(monkey.y)
  if (keyDown("space")&&monkey.y>200){
  monkey.velocityY=-10
     
  }
 monkey.velocityY = monkey.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
   monkey.collide(ground);
  
  food()
  obstacle()
drawSprites()
  
  stroke("white")
  textSize(20)
  fill("white")
  text("Score:"+score,500,50)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50)
} 

function food(){
 if (frameCount%80===0){ 
   banana=createSprite(400,80,20,20)
  banana.y=Math.round(random(120,200))
  banana.addImage(bananaImage)
   banana.velocityX=-5
   banana.lifetime=100
   FoodGroup.add(banana)
   banana.scale=0.1
}
}

function obstacle(){
 if(frameCount% 300===0){
  var obstacle=createSprite(600,325,10,40) 
  obstacle.addImage(obstacleImage)
   obstacle.lifetime=200
   obstacle.velocityX=-3
   obstacle.scale=0.1
   obstacleGroup.add(obstacle)
}
}


