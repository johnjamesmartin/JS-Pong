import Ball from './Ball';
import config from './config';
import direction from './directions';
import settings from './settings';

const gameBall = {
  init() {
    config.ball = new Ball(settings.game.element.ball.playerSpeed);
  },
  target: {
    set() {
      config.targetForBall = config.player;
    }
  },
  move() {
    if (config.player.move === direction.down) {
      config.player.y += config.player.speed;
    } else if (config.player.move === direction.up) {
      config.player.y -= config.player.speed;
    }
  },
  reset(whoScored, whoLost) {
    whoScored.score++;
    let newBallSpeed = config.ball.speed + 0.2;
    config.ball = new Ball(newBallSpeed);
    config.targetForBall = whoLost;
    config.delayAmount = new Date().getTime();
  },
  check: {
    movement() {
      if (gameBall.check.delay() && config.targetForBall) {
        config.ball.moveX =
          config.targetForBall === config.player
            ? direction.left
            : direction.right;
        config.ball.moveY = [direction.up, direction.down][
          Math.round(Math.random())
        ];
        config.ball.y = config.canvas.height / 2;
        config.targetForBall = null;
      }
      if (config.ball.moveY === direction.up) {
        config.ball.y -= config.ball.speed;
      } else if (config.ball.moveY === direction.down) {
        config.ball.y += config.ball.speed;
      }
      if (config.ball.moveX === direction.left) {
        config.ball.x -= config.ball.speed;
      } else if (config.ball.moveX === direction.right) {
        config.ball.x += config.ball.speed;
      }
    },
    delay() {
      return new Date().getTime() - config.delayAmount >= 1000;
    },
    collisions() {
      gameBall.check.collision.hasPlayerMissed();
      gameBall.check.collision.hasCpuMissed();
      gameBall.check.collision.hasBoundaryHit();
    },
    collision: {
      hasPlayerMissed() {
        if (config.ball.x <= 0) {
          gameBall.reset(config.aiPlayer, config.player);
        }
      },
      hasCpuMissed() {
        if (config.ball.x >= config.canvas.width - config.ball.width) {
          gameBall.reset(config.player, config.aiPlayer);
        }
      },
      hasBoundaryHit() {
        if (config.ball.y <= 0) {
          config.ball.moveY = direction.down;
        }
        if (config.ball.y >= config.canvas.height - config.ball.height) {
          config.ball.moveY = direction.up;
        }
      }
    }
  }
};

export default gameBall;
