import {gameState} from './data/data.js';
import createElementGameFirst from './screens/game-1.js';
import createElementGameSecond from './screens/game-2.js';
import createElementGameThird from './screens/game-3.js';
import HeaderView from "./screens/header-view.js";
import {templateStats} from './screens/stats.js';
import changeScreens from './service/render.js';
import getElementFromTemplate from './service/util.js';

// Function to choose and render a game screen
const gameRender = (state) => {
  const gameMaxLevel = `level_10`;
  // If the level is max => drawing stats on the screen
  if (state.level === gameMaxLevel) {

    changeScreens(getElementFromTemplate(templateStats()), headerIntroTemplate);

  } else {

    // If the level is not max => choosing a correct screen depending on the type
    switch (state.type) {
      case `two-of-two`:
        createElementGameFirst(gameState);
        break;

      case `tinder-like`:
        createElementGameSecond(gameState);
        break;

      case `one-of-three`:
        createElementGameThird(gameState);
        break;
    }
  }
};

export default gameRender;
