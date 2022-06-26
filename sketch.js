

function preload(){
    //  board = loadImage("asset/board.png");
    
      
    }
    
    function setup() {
    createCanvas(1600,800);

    
    //strokeWeight(2);
        stroke("white")
    

    block1 = createSprite(100,100,10,10);
    block2 = createSprite(100,700,10,10);
    
    block3 = createSprite(700,100,10,10);
    block4 = createSprite(700,700,10,10);

    line1 = createSprite(250,100,300,2);
    line2 = createSprite(550,100,300,2);

    line3 = createSprite(250,700,300,2);
    line4 = createSprite(550,700,300,2);
    
    block5 = createSprite(200,200,10,10);
    block6 = createSprite(200,600,10,10);
    
    block7 = createSprite(600,200,10,10);
    block8 = createSprite(600,600,10,10);

    line5 = createSprite(100,250,2,300);
    line6 = createSprite(100,550,2,300);

    line7 = createSprite(700,250,2,300);
    line8 = createSprite(700,550,2,300);
    
    block9 = createSprite(300,300,10,10);
    block10 = createSprite(300,500,10,10);

    line9 = createSprite(600,400,2,400);
    line10 = createSprite(200,400,2,400);

    line11 = createSprite(400,200,400,2);
    line12 = createSprite(400,600,400,2);
    
    block11 = createSprite(500,300,10,10);
    block12 = createSprite(500,500,10,10);

    line13 = createSprite(400,300,200,2);
    line14 = createSprite(400,500,200,2);

    line13 = createSprite(300,400,2,200);
    line14 = createSprite(500,400,2,200);

    
    block13 = createSprite(400,100,10,10);
    block14 = createSprite(100,400,10,10);
    
    block15 = createSprite(700,400,10,10);
    block16 = createSprite(400,700,10,10);

    
    
    
    //board =createSprite(400,400,100,100)
    
    
    }
    
    function draw() {
      background(0); 
    
      line(700,100,600,200);
      line(100,100,200,200);
      line(100,700,200,600);
      line(700,700,600,600);

      line(700,100,500,300);
      line(300,300,200,200);
      line(200,600,300,500);
      line(500,500,600,600);

    
      drawSprites();
      //moving the player up and down and making the game mobile compatible using touches
    }
