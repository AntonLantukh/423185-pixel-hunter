import GameThirdView from "./game3-view.js";
import HeaderView from "./header-view.js";
import stats from './stats-screen.js';
import changeScreens from './../service/render.js';
import {gameState, questions, answers} from './../data/data.js';
import drawProgressbar from './../service/progress-bar.js';
import refreshLevel from './../service/level-refresh.js';
import collectAnswers from './../service/answers-collect.js';
import reduceLives from './../service/lives-check.js';

export default () => {
  const gameThree = new GameThirdView(questions[gameState.level], answers, gameState);
  gameThree.drawBar = drawProgressbar;

  // Function to check correct div click on the third ame scrren
  gameThree.onImageClick = (evt) => {
    // Setting variables
    const levelAnswers = questions[gameState.level][`answers`];
    const levelImages = evt.target.children;

    // Checking if a user ckicked correct div item
    if (evt.target.tagName !== `DIV` && !evt.target.classList.contains(`game__option`)) {
      return;
    }
    // Looping through answers set to check which src equals to the chosen src
    const chosenElement = levelAnswers.filter((item) => levelImages[0].src === item.image.url);
    // If chosen element equals to the right answer
    if (chosenElement[0].type === `paint`) {
      refreshLevel(gameState, questions, answers);
      // If not, -1 live, and setting mistake status
    } else {
      reduceLives(gameState);
      changeScreens(gameThree.element, new HeaderView(gameState).element);
      // If there is no more lives => draw results
      if (gameState.lives === 0) {
        gameState[`fail`] = true;
        collectAnswers(gameState, answers);
        changeScreens(stats(), new HeaderView().element);
      }
    }
  };

  return gameThree.element;
};
