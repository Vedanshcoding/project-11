var track,runner
var trackimg,runnerimg
var leftwall,rightwall

function preload(){
  //pre-load images
  
  runnerimg = loadImage("Runner-1.png","Runner-2.png")
  
  trackimg=loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  
  //create sprites here
  runner = createSprite(180,340,30,30)
  
  runner.scale = 0.2
  runner.addAnimation("running",runnerimg)
 
  track = createSprite(200,200)
  track.addImage(trackimg)
  track.scale = 1.2
  track.velocityY=4

  leftwall = createSprite(0,0,100,800)
  leftwall.visible = false

  rightwall = createSprite(410,0,100,800)
  rightwall.visible = false




 

  

}

function draw() {
  background(0)
  
  if(track.y>400){
    track.y = height/2 
   }
  runner.x = World.mouseX

  runner.collide(rightwall)
  runner.collide(leftwall)
  
 

  track.velocityY = 4

  
  
  background(0);
  
  drawSprites()
}
