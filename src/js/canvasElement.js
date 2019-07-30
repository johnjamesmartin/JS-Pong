import config from './config';
import playerPaddle from './playerPaddle';
import settings from './settings';

const canvasElement = {
  init() {
    config.canvas = document.getElementById('my-canvas');
    config.ctx = config.canvas.getContext('2d');
    config.canvas.width = settings.game.element.canvas.width;
    config.canvas.height = settings.game.element.canvas.height;
  },
  listeners: {
    set() {
      document.addEventListener('keydown', playerPaddle.move);
      document.addEventListener('keyup', playerPaddle.stop);
    }
  },
  delay: {
    set() {
      config.delayAmount = new Date().getTime();
    }
  },
  draw() {
    config.ctx.clearRect(0, 0, config.canvas.width, config.canvas.height);
    config.ctx.fillStyle = 'black';
    config.ctx.fillRect(0, 0, config.canvas.width, config.canvas.height);
    config.ctx.fillStyle = 'white';
    config.ctx.fillRect(
      config.player.x,
      config.player.y,
      config.player.width,
      config.player.height
    );
    config.ctx.fillRect(
      config.aiPlayer.x,
      config.aiPlayer.y,
      config.aiPlayer.width,
      config.aiPlayer.height
    );
    config.ctx.fillRect(
      config.ball.x,
      config.ball.y,
      config.ball.width,
      config.ball.height
    );
    config.ctx.font = '80px Arial';
    config.ctx.textAlign = 'center';
    config.ctx.fillText(
      config.player.score.toString(),
      config.canvas.width / 2 - 300,
      100
    );
    config.ctx.fillText(
      config.aiPlayer.score.toString(),
      config.canvas.width / 2 + 300,
      100
    );
  },
  check: {
    hasWinner() {
      if (config.player.score === settings.game.score.win) {
        config.ctx.fillText('Player Wins', config.canvas.width / 2, 300);
        config.gameOver = true;
      }
      if (config.aiPlayer.score === settings.game.score.win) {
        config.ctx.fillText('AI Wins', config.canvas.width / 2, 300);
        config.gameOver = true;
      }
    }
  },
  update() {
    canvasElement.draw();
    canvasElement.check.hasWinner();
  }
};

export default canvasElement;
