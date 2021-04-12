var bird, tube1, tube2, bg;
var t;

function preload(){
bird = loadImage("images/bird.png");
bg = loadImage("images/bg.png");
tube1 = loadImage("images/tubes.png");
tube2 = loadImage("images/tubes2.png");
}

function setup(){
  createCanvas(1100,900);
  bgimg = createSprite(400, 200, 1200, 400);
  bgimg.addImage(bg);
  birdimg = createSprite(70,300,30,30);
  birdimg.addImage(bird);
  birdimg.scale = 0.5
  t = createSprite(400,265,30,30);  
  t.addImage(tube2);
  t.scale = 0.7;
}

function draw() {
  background(255,255,255);  
  bgimg.velocityX = -3;

  if(bgimg.x < 450){
    bgimg.x = 1100/2;
    console.log("hi");
  }

  if(keyDown('space')){
    birdimg.velocityY = -7 ;
  }

  if(bird.isTouching(t)){
    bird.velocityX = 0;
    
  }

  birdimg.velocityY = birdimg.velocityY + 0.5
  //tube();

  drawSprites();
}
 
function tube(){
  if(frameCount%137 === 0){
    var t = createSprite(400,265,30,30);  
    t.addImage(tube2);
    t.scale = 0.7;
    t.velocityX = -2;
    /*/switch(t){
      case 1: t.addImage(tube1);
              break;
      case 2: t.addImage(tube2);
              break;
    }*/
  }
}  