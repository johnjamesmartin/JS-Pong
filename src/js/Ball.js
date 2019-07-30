import config from './config';
import direction from './directions';
import settings from './settings';

class Ball {
  constructor(newSpeed) {
    this.width = settings.game.element.ball.width;
    this.height = settings.game.element.ball.height;
    this.x = config.canvas.width / 2;
    this.y = config.canvas.height / 2;
    this.moveX = direction.stopped;
    this.moveY = direction.stopped;
    this.speed = newSpeed;
  }
}

export default Ball;
