var cat,catImg1,catImg2,catImg3,catImg4;
var rat,ratImg1,ratImg2,ratImg3,ratImg4;
var bg,bgImg;


function preload() {
    //load the images here
bgImg=loadImage("images/garden.png");
catImg1=loadAnimation("images/cat1.png");
catImg2=loadAnimation("images/cat2.png","images/cat3.png");
catImg4=loadAnimation("images/cat4.png");
ratImg1=loadImage("images/mouse1.png");
ratImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
ratImg4=loadAnimation("images/mouse4.png");



}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprite
    cat=createSprite(800,700);
    cat.addAnimation("catSleeping",catImg1);
    catImg1.scale=0.5;
    rat=createSprite(200,700);
    rat.addAnimation("ratStanding",ratImg1);
    ratImg1.scale=0.5;



}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-rat.x<(cat.width-rat.width)/2){
 cat.velocityX=0;
 cat.addAnimation("catStanding",catImg3) ; 
 cat.x=300;
 cat.scale=0.01;
 cat.changeAnimation("catStanding") ;
rat.addAnimation("ratStanding",ratImg3);
rat.scale=0.01;
rat.changeAnimation("ratStanding");

}
    drawSprites();

}


function keyPressed(){
if(keyCode===LEFT_ARROW){
cat.velocityX=-5;
cat.addAnimation("catRunning",catImg2);
cat.changeAnimation("catRunning");

rat.addAnimation("ratTeasing", ratImg2); 
rat.frameDelay = 25;
 jerat.changeAnimation("ratTeasing");
}
 


}
