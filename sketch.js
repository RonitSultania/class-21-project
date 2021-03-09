var canvas;
var sound_op;
var block1;
var block2;
var block3;
var box;

function preload(){
    sound_op = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
block1 = createSprite(620, 550, 200, 20);
block1.shapeColor = "red";

block2 = createSprite(380, 550, 200, 20);
block2.shapeColor = "blue";

block3 = createSprite(150, 550, 200, 20);
block3.shapeColor = "green";

box =  createSprite(400, 300,50, 50);
box.shapeColor = "white";
box.velocityX = -10;
box.velocityY = -5;

}

function draw() {
    background("black");
   edges =  createEdgeSprites();
   box.bounceOff(edges);

   if(box.isTouching(block1)){
       box.shapeColor = "red";
      box.bounceOff(block1);
       sound_op.play();
   }
   if(box.isTouching(block2)){
    box.shapeColor = "blue";
    box.bounceOff(block2);
    sound_op.play();
    
}
if(box.isTouching(block3)){
    box.shapeColor = "green";
    box.bounceOff(block3);
    sound_op.play();
    
}

    
    



    //add condition to check if box touching surface and make it box
    drawSprites();
}
