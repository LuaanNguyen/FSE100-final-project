
//Initialize variables
let currentActivity = 0;
let menuButton, game1Button, game2Button, game3Button, game4Button;
let backgroundImage;



function preload(){ 
//preload games, this is very useful because you can preload images
//Preload image: https://p5js.org/reference/#/p5/preload
  menuPreload();
  game1Preload();
  preload2();
  game4Preload();
  //game4Preload();
}

//drawing image
function menuPreload(){
  backgroundImage = loadImage("images/menuBackground.png");
  scoreButtonImage = loadImage("images/EmptyButton.png");
  timeButtonImage = loadImage("images/EmptyButton.png");
  menuGif = loadImage("images/UFO.gif");
}


// Hide the home page button, show the activity buttons
function switchToMM(){
  currentActivity = 0;
  menuButton.hide();
  game1StartButton.hide();
  game1Button.show();
  game2Button.show();
  game3Button.show();
  frameRate(60);
  textSize(12);
  //game4Button.show();
  
}

//Setting the position of buttons, top left corner is 0,0
function setup() {
  createCanvas(600, 400);
  background(220);
  
  //Create home page button
  menuButton = createImg('images/homeImage.png', "Capturing Aliens");
  menuButton.position(545, 370); 
  menuButton.mousePressed(switchToMM);
  menuButton.hide();
  
  //game 1 button
  game1Button = createImg('images/DefeatingAliens.png', "Defeating Aliens");
  game1Button.position(60, 230);
  game1Button.mousePressed(game1Setup);
  game1Button.show();
  
  game1StartButton = createImg('images/StartButton.png', "Capturing Aliens");
  game1StartButton.position(0, 0);
  game1StartButton.hide();
  
  //game 2 button
  game2Button = createImg('images/TargetingAsteroids.png', "Targeting Asteroids");
  game2Button.position(210, 320);
  game2Button.mousePressed(setup2);
  game2Button.show();
  
  //game 3 button
  game3Button = createImg('images/SpaceshipMaze.png',"Spaceship Maze");     
  game3Button.position(390, 230);
  game3Button.show();
  game3Button.mousePressed(game4Setup);
  
  //game 4 button
  /*
   game4Button = createImg('images/spaceshipMaze.png', "Spaceship Maze"); 
  game4Button.position(120, 320);
  //game4Button.style('padding', '2em');
  game4Button.mousePressed(game4Setup);
  game4Button.show();
  */
  
  
}


//calling the draw function to draw
function draw() {  
  switch(currentActivity){
    case 0: 
      mainMenu();
      break;
    case 1: 
      game1Draw();
      break;
    case 2: 
      game2Draw();
      break;
    case 3: 
      game3Draw();
      break;
    case 4: 
      game4Draw();
      break;
  }
}



//This is where you customize your main menu 
function mainMenu(){ 
  background(180);
  //Inserting images
  image(backgroundImage, 0, 0)
  backgroundImage.resize(600, 400);
  //image(menuGif, 230, 150)
  //menuGif.resize(150,150)
  
  
/*
}
function mainMenu2(){ 
  background(180);
  //Inserting images
  image(backgroundImage, 300, 200)
  backgroundImage.resize(600, 400);
  
  
}



function mousePressed(){
  switch(currentActivity){
    case 2: 
      game2MousePressed();
      break;
    case 4: 
      game3MousePressed();
      break;
    
  }*/
} 