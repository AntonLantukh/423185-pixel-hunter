import {gameState} from './data.js';
import gameFirst from './game-1.js';
import gameSecond from './game-2.js';
import gameThird from './game-3.js';
import stats from './stats.js';
import changeScreens from './render.js';

// Функция рендера экрана игры
const gameRender = () => {

  if (gameState.level === `level-10`) {
    // Отрисовываем результаты
    changeScreens(stats);
  } else {

    switch (gameState.type) {
      case `two-of-two`:
        gameFirst(gameState);
        break;

      case `tinder-like`:
        gameSecond(gameState);
        break;

      case `one-of-three`:
        gameThird(gameState);
        break;
    }

    gameState.level++;
  }
};

gameRender();

export default gameRender;
