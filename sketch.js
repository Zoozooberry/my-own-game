

//var board
//var boardImage



function preload(){
//  board = loadImage("asset/board.png");

  
}

function setup() {
createCanvas(1600,800);
block1 = createSprite(100,100,10,10);
block2 = createSprite(100,700,10,10);

block3 = createSprite(700,100,10,10);
block4 = createSprite(700,700,10,10);

block5 = createSprite(200,200,10,10);
block6 = createSprite(200,600,10,10);

block7 = createSprite(600,200,10,10);
block8 = createSprite(600,600,10,10);

block9 = createSprite(300,300,10,10);
block10 = createSprite(300,500,10,10);

block11 = createSprite(500,300,10,10);
block12 = createSprite(500,500,10,10);

block13 = createSprite(400,100,10,10);
block14 = createSprite(100,400,10,10);

block15 = createSprite(700,400,10,10);
block16 = createSprite(400,700,10,10);



//board =createSprite(400,400,100,100)


}

function draw() {
  background(0); 



  drawSprites();
  //moving the player up and down and making the game mobile compatible using touches
}