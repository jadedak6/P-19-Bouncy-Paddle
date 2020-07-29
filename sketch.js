var ball, img, paddle;

function preload() {
  ballImage = loadImage("ball.png");
  paddleImage = loadImage("paddle.png");
}

function setup() {
  createCanvas(400, 400);

  ball = createSprite(50, 200, 20, 20);
  ball.addImage("ball", ballImage);
  ball.velocityX = 9;
  ball.velocityY = 1;  
  
  paddle = createSprite(380, 200, 8, 60);
  paddle.addImage("paddle", paddleImage);

}

function draw() {
  background(205,153,0);
  edges = createEdgeSprites;
 edges=createEdgeSprites();
  ball.bounceOff(paddle);
  ball.bounceOff(edges[0]); 
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  paddle.collide(edges);

  if (keyDown(UP_ARROW)) {
    paddle.y  = paddle.y- 20;
  }

  if (keyDown(DOWN_ARROW)) {
    paddle.y  = paddle.y+ 20;
  }
  
  drawSprites();
  randomVelocity();
}

function randomVelocity() {
  if(ball.bounceOff(paddle))
  ball.velocityY=random(-8,8);
}