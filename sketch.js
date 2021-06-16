var iss,spacecraft,hasDocked=false;
var bgImage,issImage,spacecraftImage1,spacecraftImage2,spacecraftImage3,spacecraftImage4;

function preload(){
  bgImage=loadImage("spacebg.jpg");
  issImage=loadImage("iss.png");
  spacecraftImage1=loadImage("spacecraft1.png");
  spacecraftImage2=loadImage("spacecraft2.png");
  spacecraftImage3=loadImage("spacecraft3.png");
  spacecraftImage4=loadImage("spacecraft4.png");
}
function setup() {
  createCanvas(600,300);

  iss=createSprite(330,130);
  iss.addImage(issImage);
  iss.scale=0.5;

  spacecraft=createSprite(258,240);
  spacecraft.addImage(spacecraftImage1);
  spacecraft.scale=0.15;
}

function draw() {
  background(bgImage); 
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1);
    if (keyDown(RIGHT_ARROW)){
      spacecraft.addImage(spacecraftImage4);
      spacecraft.x=spacecraft.x+5;
    }
    else if (keyDown(LEFT_ARROW)){
      spacecraft.addImage(spacecraftImage3);
      spacecraft.x=spacecraft.x-5;
    }
    else if (keyDown(DOWN_ARROW)){
      spacecraft.addImage(spacecraftImage2);
    }
    else if (keyDown(UP_ARROW)){
      spacecraft.y=spacecraft.y-5;
    }
  }
  if(spacecraft.y<=(iss.y+70)&& spacecraft.x<= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white");
    text("Docking Successfull",200,300);
  }
  iss.display();
  spacecraft.display();
  drawSprites();
}