import config from './config';
import cpuPaddle from './cpuPaddle';
import gameBall from './gameBall';
import gameboard from './gameboard';
import playerPaddle from './playerPaddle';

const game = {
  // Initialize game:
  init() {
    gameboard.init();
    gameboard.delay.set();
    gameboard.listeners.set();
    gameboard.update();
    gameBall.init();
    gameBall.target.set();
    playerPaddle.init();
    cpuPaddle.init();
    cpuPaddle.speed.set();
  },

  // Update game:
  update() {
    if (!config.gameOver) {
      gameBall.check.collisions();
      gameBall.move();
      gameBall.check.movement();
      playerPaddle.constrainToBoard();
      cpuPaddle.check.movement();
    }
  },

  // Loop game:
  loop() {
    game.update();
    gameboard.update();
    if (!config.gameOver) requestAnimationFrame(game.loop);
  }
};

export default game;
