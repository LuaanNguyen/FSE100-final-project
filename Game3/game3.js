let rocketimg;
let asteroidimg;
let spaceimg;
function game4Preload(){
  rocketimg = loadImage('RocketImageFSE_small.png');
  asteroidimg = loadImage('asteroid.png');
  spaceimg = loadImage('SpaceBackground4_3_600x400_Revised.webp');
   
}





// Base position for player
let x = 300;
let y = 350;

// Coordinates for the square object
let obsX = 100; //x2
let obsY = 100; //y2
//
let w = 40
let lives = 3;
let xpos, ypos; // Starting position of shape
let xspeed = 2.8; // Speed of the shape
let yspeed = 2.2; // Speed of the shape
let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom
let score1 = 0;
// everytime the object goes to the top of the screen increase the velocity of the obstacle
let message = 'Asteroid Maze';


function game4Setup(){ // called once
  background('grey');
  //infoButton = createButton('i');
  //infoButton.position(580,30);
  //if (button.mousePressed) {
    //infoButton = createButton('information')
    //infoButton.position()
  //}
  currentActivity = 4;
  // Hide the Activity 3 button, show all the other buttons
 menuButton.show();
  game1Button.hide();
  game2Button.hide();
  game3Button.hide();
 
  x = 300;
  y = 350;

// Coordinates for the square object
  obsX = 40; //x2
  obsY = 40; //y2
 
w = 40
lives = 3;
xpos = 400;
ypos = 400; // Starting position of shape
xspeed = 2.8; // Speed of the shape
yspeed = 2.2; // Speed of the shape
xdirection = 1; // Left or Right
ydirection = 1; // Top to Bottom
score1 = 0;
isGameOver = false;

message = 'Navigate the rocket across the screen vertically.';
fill('white');
}
let a = 600;
let b = 400;
function game4Draw(){ // called every frame
  fill('white');
  background('grey');
  //ellipse(x,y,20 );
  //image()
  image(spaceimg, 0, 0)
  spaceimg.resize(600,400);
  image(rocketimg, x, y);
 
  text(message, 105, 200);
  playerMove();
  image(asteroidimg, obsX, obsY);
  //square(obsX,obsY,w);
  //image()
//print(setInterval(message, 1000));
  //setTimeout(function, milliseconds)
// Update the position of the shape
obsX = obsX + (xspeed + score1) * xdirection;
obsY = obsY + yspeed * ydirection;
// Test to see if the shape exceeds the boundaries of the screen
// If it does, reverse its direction by multiplying by -1
  if (obsX + w > 600 || obsX < 0) {
    xdirection *= -1;
  }
  if (obsY < 0  || obsY + w > 400) {
    ydirection *= -1;
  }
textSize(20);
fill(0, 102, 153);
fill('white');
text('Lives: ' + lives, 15, 30);



  checkObstacleCollision(obsX, obsY);
  checkGoalCollision();
  text('Score : ' + score1, 500, 30);
  
  fill(0, 102, 153);
 
}

function checkObstacleCollision(otherX, otherY){ // check if distance is 0
let d = dist(x+25,y+39,otherX+(w/2.0),otherY+(w/2.0));
  // x = x1, y = y1, obsX = x2, obsY = y2
  if (d < 50){
   x = 300; //x base player position
   y = 350; //y base
   lives--;
    obsX = random(0,600);
    obsY = random(0,400);
   if (lives == 0) {
    isGameOver = true;
    xdirection = 0;
    ydirection = 0;
   
    message = '                             Game Over';
    x = 1000;
    y = 1000;
     // randomize obs x and obs y
   }
  // lives-- and print the new amount of lives.
  }
}

function checkGoalCollision(){ // check if distance is 0

  if (y < 0){
   x = 300; //x
   y = 350; //y
   score1++;
   
   //change to new screen / level
  }
}
isGameOver = false;

function playerMove() {
  if (isGameOver)
    return;
  if (keyIsDown(LEFT_ARROW) && x>=30)
    x -= 5;
 
  if (keyIsDown(RIGHT_ARROW) && x<=630)
    x += 5;

  if (keyIsDown(UP_ARROW))
    y -= 5;
 

  if (keyIsDown(DOWN_ARROW) && y<=370)
    y += 5;
 
  //ellipse(x, y, 50, 50);
  image(rocketimg, x, y);


}

function game4MousePressed(){
 
}