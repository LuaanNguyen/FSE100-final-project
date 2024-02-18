//let alienImage;
game1Score = 0;
game1Started = false;
game1Win = false;
game1Time = 30;

//default text 
//text(`Score : ${game1Score}`, 65, 17);
//textStyle(BOLD);

function game1Preload(){
   game1BackgroundImage =loadImage("images/MoonSurface.jpg")
  spaceshipImage = loadImage("images/alien3.png")
}

function game1Setup(){
  currentActivity = 1;
  // Hide the Game 1 button, show all the other navigation buttons
  menuButton.show();
  game1Button.hide();
  game2Button.hide();
  game3Button.hide();
  game1StartButton.show()
  //game4Button.hide();

 
  
  aliensArray = [] // creating array
  
  for (var i = 0; i < 10; i++) {
    aliensArray.push(new alien())//adding new aliens in the arraylist
  }
  
  //this is start button but temporarily displayed as home on top left 
  game1StartButton.mousePressed(() => {
    game1Score = 0;
    game1Started = true
    game1Time = 30;
    timer()
    
  });
  
  
  //creating a score box
  fill("white")
   text(`Score : ${score}`, 0, 300);
  
}

class alien {
  constructor(){
    this.x = randomx();
    this.y = randomy(); 
    this.color = "red";
    this.size = randomSize();
    this.direction = -1;
  }
  clicked()
  {
    this.x = randomx();
    this.y = randomy();
    this.display()
    game1Score += 10;
  }
  display()
  {
    fill(this.color);
    //ellipse(this.x,this.y, this.size);
    image(spaceshipImage, this.x - 25, this.y - 25);
    spaceshipImage.resize(50,50)
    
    //image(scoreButtonImage, this.x, this.y); // alien 
    
    // image(obsX, obsY)
  }
  check()
  {
    let distance = dist(this.x, this.y, mouseX, mouseY);
    if (distance <= this.size/2) //calculate the distance between mouse and target, if it is lesser or equal to the size/2 then it will call clicked
      {
        this.clicked();
      }
  }
  move()
  {
    if (this.x >= windowWidth)
      {
        this.direction = -1;
      }
    if ( this.x <0 )
      {
        this.direction = 1;
      }
    this.x += this.direction;
    this.display();
    
  }
}

function randomx() {
  return Math.floor(Math.random() * windowWidth)
  //make random x position
}

function randomy()
{
  return Math.floor(Math.random() * (windowHeight * 0.5) + 100); //make random y position in the bottom half
}


function randomSize()
{
  return  Math.floor(Math.random() * 50 + 20)
}


function mousePressed()
{
  if (game1Started) //check if you click it before it got started 
    {
      aliensArray.forEach(alien => {
        alien.check()
  })
    }
  
}

function updateScore()
{
  fill("yellow")
   text(`Score : ${game1Score}`, 65, 17);
  textStyle(BOLD);
  
}

function timer()
{
      var timerID = setInterval(() => {
      game1Time--;
      if (game1Time <= 0)
        {    
          game1Started = false;
          clearInterval(timerID); 
        }
    
  },1000)
  
}

function game1Draw(){
  background(100)
  stroke(0)
  
  image(game1BackgroundImage, 0, 0)
  game1BackgroundImage.resize(600, 400);
  
  image(scoreButtonImage, 60, 0);
  
  scoreButtonImage.resize(80, 26);
  
  image(timeButtonImage, 140, 0);
  timeButtonImage.resize(100, 26);
  text(`Time Left : ${game1Time}s`, 144, 17);
  
  
  
  if (game1Started) {
      aliensArray.forEach(alien => {
        alien.move()
        
        }) // go over all the aliens
  }
  
  if (!game1Win)
          {
            fill("yellow")
            instruction = "ELIMINATE 20 ALIENS BEFORE THE TIME GOES OFF! 👽"
            text(instruction, 145, 380)
            //fill("red")
            if (game1Time <= 0)
              {
                    fill("red")
                    textSize(30);
                  instruction = "YOU LOST! 😿" 
                  text(instruction, 245, 200)
                  textSize(12);
                  game1Win = false;
      
              }
          }
       else
          {
            fill("#29E731")
            textSize(30);
            instruction = "YOU WIN! 🎉" 
            text(instruction, 245, 200)
            textSize(12);
            //fill("red")
             game1Win = false;
          }
  
  
  
  
  
  
  updateScore()
  
  if (game1Score >= 200)
    {
      game1Started = false;
      game1Win = true;
    }
  
  
  
}

//Next time: Timer (losing ), Instruction, Winning, alien Image 
