import config from './config';
import direction from './directions';
import Paddle from './Paddle';
import settings from './settings';

const cpuPaddle = {
  // Initialize CPU paddle:
  init() {
    config.aiPlayer = new Paddle(settings.game.directions.labels.right);
  },

  // Speed to set for CPU paddle:
  speed: {
    set() {
      config.aiPlayer.speed = settings.game.element.ball.aiPlayerSpeed;
    }
  },

  // Check movement and adjust speed according to paddle position:
  check: {
    movement() {
      if (config.aiPlayer.y > config.ball.y - config.aiPlayer.height / 2) {
        if (config.ball.moveX === direction.right) {
          config.aiPlayer.y -= config.aiPlayer.speed;
        } else {
          config.aiPlayer.y -= config.aiPlayer.speed;
        }
      }
      if (config.aiPlayer.y < config.ball.y - config.aiPlayer.height / 2) {
        if (config.ball.moveX === direction.right) {
          config.aiPlayer.y += config.aiPlayer.speed;
        } else {
          config.aiPlayer.y += config.aiPlayer.speed;
        }
      }

      // If AI tries to move off the board handle that
      if (config.aiPlayer.y < 0) {
        config.aiPlayer.y = 0;
      } else if (
        config.aiPlayer.y >=
        config.canvas.height - config.aiPlayer.height
      ) {
        config.aiPlayer.y = config.canvas.height - config.aiPlayer.height;
      }

      if (
        config.ball.x - config.ball.width <= config.player.x &&
        config.ball.x >= config.player.x - config.player.width
      ) {
        if (
          config.ball.y <= config.player.y + config.player.height &&
          config.ball.y + config.ball.height >= config.player.y
        ) {
          config.ball.x = config.player.x + config.ball.width;
          config.ball.moveX = direction.right;
          //beepSound.play();
        }
      }

      // Handle ball collison with AI paddle
      if (
        config.ball.x - config.ball.width <= config.aiPlayer.x &&
        config.ball.x >= config.aiPlayer.x - config.aiPlayer.width
      ) {
        if (
          config.ball.y <= config.aiPlayer.y + config.aiPlayer.height &&
          config.ball.y + config.ball.height >= config.aiPlayer.y
        ) {
          config.ball.x = config.aiPlayer.x - config.ball.width;
          config.ball.moveX = direction.left;
          //beepSound.play();
        }
      }
    }
  }
};

export default cpuPaddle;
