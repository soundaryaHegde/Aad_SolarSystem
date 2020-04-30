var sun,mercury,venus,Earth,mars,jupiter,saturn,uranus,neptune
var sun1,mercury1,venus1,Earth1,mars1,jupiter1,saturn1,uranus1,neptune1
function preload(){
sun1=loadImage("sun.png")
mercury1=loadImage("mercury.png")
Earth1=loadImage("earth.png")
venus1=loadImage("venus.png")
mars1=loadImage("download.png")
}







function setup() {
  createCanvas(400,400);
sun=createSprite(200,200,50,50)
sun.addImage(sun1);
mercury=createSprite(160,200,20,20)
mercury.addImage(mercury1);
venus=createSprite(130,200,20,20)
venus.addImage(Earth1);
earth=createSprite(100,200,20,20)
earth.addImage(venus1);
mars=createSprite(70,200,20,20)
mars.addImage(mars1);
}


function draw() {
  background(0);  
 
  
  drawSprites();
}