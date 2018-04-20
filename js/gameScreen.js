import HeaderView from "./screens/header-view";
import {gameState} from './data/data';
import gameOneScreen from './screens/game1-screen';
import gameSecondScreen from './screens/game2-screen';
import gmeThirdScreen from './screens/game3-screen';
import stats from './screens/stats-screen';
import changeScreens from './service/render';

// Function to choose and render a game screen
const gameRender = (state) => {
  const gameMaxLevel = `level_10`;
  const header = new HeaderView(gameState).element;
  // If the level is max => drawing stats on the screen
  if (state.level === gameMaxLevel) {
    changeScreens(stats(), new HeaderView().element);
  } else {
    // If the level is not max => choosing a correct screen depending on the type
    switch (state.type) {
      case `two-of-two`:
        changeScreens(gameOneScreen(), header);
        break;

      case `tinder-like`:
        changeScreens(gameSecondScreen(), header);
        break;

      case `one-of-three`:
        changeScreens(gmeThirdScreen(), header);
        break;
    }
  }
};

export default gameRender;
