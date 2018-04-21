import GameSecondView from "./game2-view";
import HeaderView from "./header-view";
import stats from './stats-screen';
import changeScreens from '../service/render';
import {gameState, questions, answers} from '../data/data';
import drawProgressbar from '../service/progress-bar';
import refreshLevel from '../service/level-refresh';
import collectAnswers from '../service/answers-collect';

export default () => {
  const gameTwo = new GameSecondView(questions[gameState.level], answers, gameState);
  gameTwo.drawBar = drawProgressbar;

  // Function to check inputs on the first screen
  gameTwo.onFormChange = (evt) => {
  // Setting variables
    const levelAnswers = questions[gameState.level][`answers`];

    // If a user chose input
    if (!evt.target.tagName === `INPUT`) {
      return;
    }

    // We check the input value to equal the value in answers
    if ((evt.target.value !== levelAnswers[0][`type`])) {
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
  return gameTwo.element;
};
