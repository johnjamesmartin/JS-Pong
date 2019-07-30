import canvasElement from './canvasElement';
import config from './config';
import cpuPaddle from './cpuPaddle';
import gameBall from './gameBall';
import playerPaddle from './playerPaddle';

const game = {
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
  update() {
    if (!config.gameOver) {
      gameBall.check.collisions();
      gameBall.move();
      gameBall.check.movement();
      playerPaddle.constrainToBoard();
      cpuPaddle.check.movement();
    }
  },
  loop() {
    game.update();
    canvasElement.update();
    if (!config.gameOver) requestAnimationFrame(game.loop);
  }
};

export default game;
