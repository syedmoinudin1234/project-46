var backgroundImage
var doremon,doremonImg
var doracake,doracakeImg
var iceblock,iceblockImg

function preload(){
backgroundImage=loadImage("assets/nobita house.jpg")
doremonImg=loadImage("assets/doremon.png")
doracakeImg=loadImage("assets/doracake.png")
iceblockImg=loadImage("assets/ice block.png")

}
function setup(){
createCanvas(windowWidth,windowHeight)
doremon=createSprite(250,height-280)
doremon.addImage("standing",doremonImg)
doremon.scale=1.1

}
function draw(){
background(backgroundImage)
drawSprites()
if (keyDown(RIGHT_ARROW)){
    doremon.x+=20
}
if (keyDown(LEFT_ARROW)){
    doremon.x-=20
}
if (keyDown(UP_ARROW)){
    doremon.y-=20
}
if (keyDown(DOWN_ARROW)){
    doremon.y+=20
}

}
