import canvasElement from './canvasElement';
import config from './config';
import cpuPaddle from './cpuPaddle';
import gameBall from './gameBall';
import playerPaddle from './playerPaddle';

const game = {
  // Initialize game:
  init() {
    canvasElement.init();
    playerPaddle.init();
    cpuPaddle.init();
    gameBall.init();
    cpuPaddle.speed.set();
    gameBall.target.set();
    canvasElement.delay.set();
    canvasElement.listeners.set();
    canvasElement.update();
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
    canvasElement.update();
    if (!config.gameOver) requestAnimationFrame(game.loop);
  }
};

export default game;
