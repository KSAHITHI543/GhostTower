var ghost,ghostImg;
var climber,climberImg;
var tower,towerImg;
var door,doorImg;
var gameState="play";

function preload(){
 towerImg =loadImage("tower.png");
 ghostImg=loadImage("ghost-standing.png");
 climberImg=loadImage("climber.png") ;
  doorImg=loadImage("door.png");
}




function setup(){
 createCanvas(600,600);
 tower=createSprite(300,250) ;
  tower.addImage("tower",towerImg);
  tower.velocityY=0.5;
  
ghost=createSprite(200,200,10,10);
  ghost.addImage("ghost",ghostImg);
  ghost.scale=0.3;
  
  doorsGroup=new Group();
  climberGroup=new Group();
  invisiblegroup=new Group();
}




function draw()
{
 background(0) ;
 if(gameState=="play")
 {
   if(tower.y>400)
   {
     tower.y=300;
   }
   if(keyDown("right_arrow"))
   {
     ghost.x=ghost.x+3;
   }
   if(keyDown("left_arrow"))
   {
     ghost.x=ghost.x-3;
   }
   if(keyDown("space"))
   {
     ghost.velocityY=-12 ;
   }
   ghost.velocityY=ghost.velocityY+0.3;
   
   
   spwanDoors();
    } 
 if(climberGroup.isTouching(ghost)){
  ghost.velocityY=0;
   ghost.destroy();
   gameState="end";
 }
  
 
     
  drawSprites(); 
  
}
if(gameState=="end"){
    text("GAMEOVER",150,150);
    
  }
function spwanDoors(){
if(frameCount%200==0) {
 var door =createSprite(200,-50) ;
  door.addImage(doorImg);
  
  var climber=createSprite(200,10); 
  climber.addImage(climberImg);
   
  door.x=Math.round(random(400,450));
   door.velocityY=6;
  
var invisibleground =createSprite(200,5);
  invisibleground.velocityY=6;
  
  climber.x=door.x;
  climber.velocityY=6;
  invisibleground.x=door.x;
  
  var invisibleclimber=createSprite(200,5);
  invisibleclimber.addImage=(climberImg);
  invisibleclimber.velocity=6;
 invisibleclimber.x=door.x;
  
  ghost.depth=door.depth;
  ghost.depth+=1;
  door.lifetime=750;
  climber.lifetime=750;
  doorsGroup.add(door);
  climberGroup.add(climber);
  invisiblegroup.add(invisibleground);
  invisibleground.lifetime=750;
  
  
  
}
}
