import config from './config';
import direction from './directions';
import Paddle from './Paddle';
import settings from './settings';

const cpuPaddle = {
  // Initialize CPU paddle:
  init() {
    config.cpuPlayer = new Paddle(settings.game.directions.labels.right);
  },

  // Speed to set for CPU paddle:
  speed: {
    set() {
      config.cpuPlayer.speed = settings.game.element.ball.aiPlayerSpeed;
    }
  },

  // Check movement and adjust speed according to paddle position:
  check: {
    movement() {
      if (config.cpuPlayer.y > config.ball.y - config.cpuPlayer.height / 2) {
        if (config.ball.moveX === direction.right) {
          config.cpuPlayer.y -= config.cpuPlayer.speed;
        } else {
          config.cpuPlayer.y -= config.cpuPlayer.speed;
        }
      }
      if (config.cpuPlayer.y < config.ball.y - config.cpuPlayer.height / 2) {
        if (config.ball.moveX === direction.right) {
          config.cpuPlayer.y += config.cpuPlayer.speed;
        } else {
          config.cpuPlayer.y += config.cpuPlayer.speed;
        }
      }

      // If AI tries to move off the board handle that
      if (config.cpuPlayer.y < 0) {
        config.cpuPlayer.y = 0;
      } else if (
        config.cpuPlayer.y >=
        config.canvas.height - config.cpuPlayer.height
      ) {
        config.cpuPlayer.y = config.canvas.height - config.cpuPlayer.height;
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
          document.getElementById('beep-paddle').play();
        }
      }

      // Handle ball collison with AI paddle
      if (
        config.ball.x - config.ball.width <= config.cpuPlayer.x &&
        config.ball.x >= config.cpuPlayer.x - config.cpuPlayer.width
      ) {
        if (
          config.ball.y <= config.cpuPlayer.y + config.cpuPlayer.height &&
          config.ball.y + config.ball.height >= config.cpuPlayer.y
        ) {
          config.ball.x = config.cpuPlayer.x - config.ball.width;
          config.ball.moveX = direction.left;
          document.getElementById('beep-paddle').play();
        }
      }
    }
  }
};

export default cpuPaddle;
