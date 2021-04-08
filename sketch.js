function preload(){
  pinkIMG = loadImage("pinkB.png");
  orangeIMG = loadImage("orangeB.png");
  yellowIMG = loadImage("yellowB.png");
  backgroundIMG = loadImage("background.jpg");
}

function setup() {
  createCanvas(1360,790);

  P1=new Group();
  for(var i=25;i<400;i=i+50){
    pinkB = createSprite(i,300, 10, 10);
    pinkB.addImage(pinkIMG);
    pinkB.scale = 0.1;
    P1.add(pinkB)
    P1.visible=true;
  }
  O1=new Group();
  for(var i=958;i<1360;i=i+53){
    orangeB = createSprite(i,300, 10, 10);
    orangeB.addImage(orangeIMG);
    orangeB.scale = 0.1;
    O1.add(orangeB)
    O1.visible=true;
  }
  Y1=new Group();
  for(var i=430;i<920;i=i+53){
    yellowB = createSprite(i,300, 10, 10);
    yellowB.addImage(yellowIMG);
    yellowB.scale = 0.05;
    Y1.add(yellowB)
    Y1.visible=true;
  }

 

  var rend=Math.round(random(1,1)) ;
    if (rend==1){
      pink = createSprite(300,500, 10, 10);
      pink.scale = 0.1
      pink.addImage(pinkIMG);
      pink.velocityY=-2;
    }
 
  
  
//red balloon
  for(var i=490;i<590;i=i+20){
  orangeB = createSprite(i,50, 1, 1);
  orangeB.addImage(orangeIMG);
  orangeB.scale = 0.1
}

for(var i=100;i<200;i=i+20){
    pinkB1 = createSprite(i,50, 1, 1);
    pinkB1.addImage(pinkIMG);
    pinkB1.scale = 0.1
  }

  for(var i=120;i<180;i=i+20){
    pinkB2 = createSprite(i,100, 1, 1);
    pinkB2.addImage(pinkIMG);
    pinkB2.scale = 0.1
  }

for(var i=230;i<470;i=i+20){
  
  yellowB = createSprite(i,50, 10, 10);
  yellowB.addImage(yellowIMG);
  yellowB.scale = 0.05;
} 
}

function draw() {

  
background(backgroundIMG);

if(pink.isTouching( P1)){
  //P1.destroyEach();
  pink.velocityY=0;
}
drawSprites();

}

function keyPressed(){
  if(keyCode==32){
    setup();
    }
      }



  
