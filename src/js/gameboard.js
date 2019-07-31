import config from './config';
import playerPaddle from './playerPaddle';
import settings from './settings';
import labels from './labels';

const gameboard = {
  // Initialize canvas element:
  init() {
    config.canvas = document.getElementById('my-canvas');
    config.ctx = config.canvas.getContext('2d');
    config.canvas.width = settings.game.element.canvas.width;
    config.canvas.height = settings.game.element.canvas.height;
  },

  // Add listeners to canvas element (in this case key up & key down):
  listeners: {
    set() {
      document.addEventListener('keydown', playerPaddle.move);
      document.addEventListener('keyup', playerPaddle.stop);
    }
  },

  // Add delay amount to be used between plays:
  delay: {
    set() {
      config.delayAmount = new Date().getTime();
    }
  },

  // Draw/redraw canvas (on loop):
  draw() {
    config.ctx.clearRect(0, 0, config.canvas.width, config.canvas.height);
    config.ctx.fillStyle = '#000';
    config.ctx.fillRect(0, 0, config.canvas.width, config.canvas.height);
    config.ctx.fillStyle = '#FFF';
    config.ctx.fillRect(
      config.player.x,
      config.player.y,
      config.player.width,
      config.player.height
    );
    config.ctx.fillRect(
      config.cpuPlayer.x,
      config.cpuPlayer.y,
      config.cpuPlayer.width,
      config.cpuPlayer.height
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
      config.cpuPlayer.score.toString(),
      config.canvas.width / 2 + 300,
      100
    );

    config.ctx.beginPath();
    config.ctx.setLineDash([10, 10]);
    config.ctx.moveTo(config.canvas.width / 2, config.canvas.height);
    config.ctx.lineTo(config.canvas.width / 2, 0);
    config.ctx.strokeStyle = '#FFF';
    config.ctx.stroke();
  },

  // Check if we have a winner:
  check: {
    hasWinner() {
      if (config.player.score === settings.game.score.win) {
        config.ctx.fillText(labels.playerWins, config.canvas.width / 2, 300);
        config.gameOver = true;
      }
      if (config.cpuPlayer.score === settings.game.score.win) {
        config.ctx.fillText(labels.cpuPlayerWins, config.canvas.width / 2, 300);
        config.gameOver = true;
      }
    }
  },

  // Update canvas to redraw and check for a winner:
  update() {
    gameboard.draw();
    gameboard.check.hasWinner();
  }
};

export default gameboard;
