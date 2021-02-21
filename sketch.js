
function preload() {
    //load the images here
    bg = loadImage("images/garden.png") ;
    catImg1= loadAnimation("images/cat1.png");
    mouseImg1=loadAnimation("images/mouse1.png");
    catImg2= loadAnimation("images/cat2.png");
    mouseImg2=loadAnimation("images/mouse2.png");
    catImg3= loadAnimation("images/cat3.png");
    mouseImg3=loadAnimation("images/mouse3.png");
    catImg4= loadAnimation("images/cat4.png");
    mouseImg4=loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat= createSprite(900, 600);
    cat.addAnimation("sleep", catImg1);
    cat.scale = 0.3;

    mouse= createSprite(200, 600);
    mouse.addAnimation("play", mouseImg1);
    mouse.scale = 0.3;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("cat2", catImg2);
        cat.changeAnimation("cat2");
        }
        

    drawSprites();
}

