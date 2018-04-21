import GameThirdView from "./game3-view";
import HeaderView from "./header-view";
import stats from './stats-screen';
import changeScreens from '../service/render';
import {gameState, questions, answers} from '../data/data';
import drawProgressbar from '../service/progress-bar';
import refreshLevel from '../service/level-refresh';
import collectAnswers from '../service/answers-collect';

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
    if (chosenElement[0].type !== `paint`) {
      gameState.mistake = true;
    }

    refreshLevel(gameState, questions, answers);

    // If there is no more lives => draw results
    if (gameState.lives === 0) {
      gameState[`fail`] = true;
      collectAnswers(gameState, answers);
      changeScreens(stats(), new HeaderView().element);
    }
  };
  return gameThree.element;
};
