/* function game4Preload(){
  
}

function game4Setup(){ // called once
  background('grey');
  currentActivity = 4;
  // Hide the Activity 3 button, show all the other buttons
 menuButton.show();
  game1Button.hide();
  game2Button.hide();
  game3Button.hide();
  //game4Button.hide();
}




// Base position for player
let x = 300;
let y = 350;

// Coordinates for the square object
let obsX = 40; //x2
let obsY = 40; //y2
// 
let w = 40
let lives = 3;
let xpos, ypos; // Starting position of shape
let xspeed = 2.8; // Speed of the shape
let yspeed = 2.2; // Speed of the shape
let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom
let score = 0;
// everytime the object goes to the top of the screen increase the velocity of the obstacle
let message = 'Asteroid Maze';
function game4Draw(){ // called every frame
  
  background('grey');
  ellipse(x,y,20 );
  fill('black');
  text(message, 205, 200);
  playerMove();
  square(obsX,obsY,w);
  //image()
// Update the position of the shape
obsX = obsX + (xspeed + score) * xdirection;
obsY = obsY + yspeed * ydirection;
// Test to see if the shape exceeds the boundaries of the screen
// If it does, reverse its direction by multiplying by -1
  if (obsX + w > 600 || obsX < 0) {
    xdirection *= -1;
  }
  if (obsY < 0  || obsY + w > 400) {
    ydirection *= -1;
  }
textSize(32);
fill(0, 102, 153);
text('Lives: ' + lives, 15, 30);



  checkObstacleCollision(obsX, obsY);
  checkGoalCollision();
  text('Score : ' + score, 15, 390);
  fill(0, 102, 153);
  
}

function checkObstacleCollision(otherX, otherY){ // check if distance is 0
let d = dist(x,y,otherX+(w/2.0),otherY+(w/2.0));
  // x = x1, y = y1, obsX = x2, obsY = y2
  if (d < 40){
   x = 300; //x base player position
   y = 350; //y base 
   lives--;
   if (lives == 0) {
    isGameOver = true;
    xdirection = 0;
    ydirection = 0;
    message = 'Game Over';
   }
  // lives-- and print the new amount of lives.
  }
}

function checkGoalCollision(){ // check if distance is 0

  if (y < 0){
   x = 300; //x
   y = 350; //y 
   score++;
   
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
  
  ellipse(x, y, 50, 50);
	
}

function game4MousePressed(){ 
  
}
*/