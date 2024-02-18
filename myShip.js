
class MyShip {
  constructor() {
    this.x = width / 2
    this.y = height - 20;
    this.shipWidth = 26;
    this.shipHeight = 8;
    this.cannonWidth = 5;
    this.direction = 'none';
    this.lives = 3;
    this.shotInterval = 4;
    this.lastShotFiredTimestamp = -this.shotInterval;
    this.color = green;
  }

  drawPlayer() {
    fill(this.color);
    rectMode(CENTER);
    noStroke();
    this.drawShip(this.x, this.y);
  }

  drawExtraLives() {
    fill(green);
    let x = width - 105;
    for (let i = 0; i < this.lives; i++) {
      this.drawShip(x, 25);
      x += 40;
    }
  }
  drawShip(x, y) {
    rect(x, y, this.shipWidth, this.shipHeight, 2);
    rect(x, y - this.shipHeight / 2 - this.cannonWidth / 2, this.cannonWidth, this.cannonWidth);
    rect(x, y - this.shipHeight / 2 - this.cannonWidth - 1, 2, 2);
  }

  move() {
    if(!pauseMode && currentActivity == 3){
      if (this.direction === 'left' && this.x > this.shipWidth/2) {
        this.x -= 10;
      }
      if (this.direction === 'right' && this.x < width - this.shipWidth/2 && currentActivity == 3) {
        this.x += 10;
      }
    }
  }

  changeDirection(direction) {
    this.direction = direction;
  }

  fire() {
    if (frameCount - this.lastShotFiredTimestamp > this.shotInterval && currentActivity == 3) {
      shots.push(new Shot(this.x, this.y - (this.shipHeight), 1));
      this.lastShotFiredTimestamp = frameCount; 
    }
  }
}