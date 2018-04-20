import GameSecondView from "./game2-view";
import HeaderView from "./header-view";
import stats from './stats-screen';
import changeScreens from '../service/render';
import {gameState, questions, answers} from '../data/data';
import drawProgressbar from '../service/progress-bar';
import refreshLevel from '../service/level-refresh';
import collectAnswers from '../service/answers-collect';
import reduceLives from '../service/lives-check';

export default () => {
  const gameTwo = new GameSecondView(questions[gameState.level], answers, gameState);
  gameTwo.drawBar = drawProgressbar;

  // Function to check inputs on the first screen
  gameTwo.onFormChange = (evt) => {
  // Setting variables
    const levelAnswers = questions[gameState.level][`answers`];
    const gameForm = gameTwo.element.querySelector(`.game__content`);

    // If a user chose input
    if (!evt.target.tagName === `INPUT`) {
      return;
    }

    // We check the input value to equal the value in answers
    if ((evt.target.value === levelAnswers[0][`type`])) {
      refreshLevel(gameState, questions, answers);
    // If not, -1 live, and setting mistake status
    } else {
      reduceLives(gameState);
      changeScreens(gameTwo.element, new HeaderView(gameState).element);
      gameForm.reset();

      // Если жизней не осталось, отрисовываем результаты
      if (gameState.lives === 0) {
        gameState[`fail`] = true;
        collectAnswers(gameState, answers);
        changeScreens(stats(), new HeaderView().element);
      }
    }
  };
  return gameTwo.element;
};
