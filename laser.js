class Laser {
  constructor(x, y, s, c) {
    this.x = x;
    this.y = y;
    this.sign = 1; 
    this.used = false;
    this.speed = s;
    this.c = c;
  }

  draw() {
    if (!this.used && currentActivity == 3) {
      noFill();
      stroke(this.c);
      strokeWeight(1);
      if(this.c == red && currentActivity == 3){
        strokeWeight(2);
      }
      beginShape();
      vertex(this.x, this.y);
      vertex(this.x + (2 * this.sign), this.y + 2);
      vertex(this.x - (2 * this.sign), this.y + 6);
      vertex(this.x, this.y + 8);
      endShape();
      if(!pauseMode && currentActivity == 3){
        this.sign *= -1;
      }
    }
  }

  move() {
    this.y += this.speed;
  }
}