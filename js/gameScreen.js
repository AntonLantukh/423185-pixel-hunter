import {gameState} from './data.js';
import createElementGameFirst from './game-1.js';
import createElementGameSecond from './game-2.js';
import createElementGameThird from './game-3.js';
import {headerIntroTemplate} from './header.js';
import {templateStatsWin, templateStatsWinNoBonus} from './stats.js';
import changeScreens from './render.js';
import getElementFromTemplate from './util.js';

// Function to choose and render a game screen
const gameRender = (state) => {
  const gameMaxLevel = `level_10`;
  // If the level is max => drawing stats on the screen
  if (state.level === gameMaxLevel) {

    // Checking if we should draw full or reduced stats screen
    if (state[`full-stats`]) {
      changeScreens(getElementFromTemplate(templateStatsWin()), headerIntroTemplate);
    } else {
      changeScreens(getElementFromTemplate(templateStatsWinNoBonus()), headerIntroTemplate);
    }
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
