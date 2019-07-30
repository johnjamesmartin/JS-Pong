import config from './config';
import direction from './directions';
import game from './game';
import Paddle from './Paddle';
import settings from './settings';

const playerPaddle = {
  init() {
    config.player = new Paddle(settings.game.directions.labels.left);
  },
  constrainToBoard() {
    if (config.player.y < 0) {
      config.player.y = 0;
    } else if (config.player.y >= config.canvas.height - config.player.height) {
      config.player.y = config.canvas.height - config.player.height;
    }
  },
  move(key) {
    if (config.running === false) {
      config.running = true;
      window.requestAnimationFrame(game.loop);
    }
    if (key.keyCode === 38 || key.keyCode === 87)
      config.player.move = direction.up;
    if (key.keyCode === 40 || key.keyCode === 83)
      config.player.move = direction.down;
  },
  stop(evt) {
    config.player.move = direction.stopped;
  }
};

export default playerPaddle;
