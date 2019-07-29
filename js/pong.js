let canvas;
let ctx;

// rename DIR later?
let DIRECTION = {
  STOPPED: 0,
  UP: 1,
  DOWN: 2,
  LEFT: 3,
  RIGHT: 4
};

class Paddle {
  constructor(side) {
    this.width = 15;
    this.height = 65;
    this.x = side === 'left' ? 150 : canvas.width - 150;
    this.y = canvas.height / 2;
    this.score = 0;
    this.move = DIRECTION.STOPPED;
    this.speed = 11;
  }
}

class Ball {
  constructor(newSpeed) {
    this.width = 15;
    this.height = 15;
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.moveX = DIRECTION.STOPPED;
    this.moveY = DIRECTION.STOPPED;
    this.speed = newSpeed;
  }
}
