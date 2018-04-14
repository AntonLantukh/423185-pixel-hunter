import {gameState} from './data.js';
import gameFirst from './game-1.js';
import gameSecond from './game-2.js';
import gameThird from './game-3.js';
import {headerIntroTemplate} from './header.js';
import stats from './stats.js';
import changeScreens from './render.js';

// Функция рендера экрана игры
const gameRender = (state) => {

  if (state.level === `level_10`) {
    // Отрисовываем результаты
    changeScreens(stats, headerIntroTemplate);
  } else {

    switch (state.type) {
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
  }
};

export default gameRender;
