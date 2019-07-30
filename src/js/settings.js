// Settings:
const settings = {
  game: {
    score: {
      win: 5
    },
    directions: {
      labels: {
        left: 'left',
        right: 'right'
      }
    },
    element: {
      ball: {
        height: 15,
        width: 15,
        playerSpeed: 7,
        aiPlayerSpeed: 6.8
      },
      canvas: {
        width: 1400,
        height: 800
      },
      paddle: {
        width: 15,
        height: 65,
        speed: 11
      }
    }
  }
};

export default settings;
