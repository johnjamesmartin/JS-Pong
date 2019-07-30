import config from './config';
import direction from './directions';
import settings from './settings';

class Paddle {
  constructor(side) {
    this.width = settings.game.element.paddle.width;
    this.height = settings.game.element.paddle.height;
    this.x =
      side === settings.game.directions.labels.left
        ? 150
        : config.canvas.width - 150;
    this.y = config.canvas.height / 2;
    this.score = 0;
    this.move = direction.stopped;
    this.speed = settings.game.element.paddle.speed;
  }
}

export default Paddle;
