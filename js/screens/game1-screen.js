import GameOneView from "./game1-view.js";
import HeaderView from "./header-view.js";
import stats from './stats-screen.js';
import changeScreens from './../service/render.js';
import {gameState, questions, answers} from './../data/data.js';
import drawProgressbar from './../service/progress-bar.js';
import refreshLevel from './../service/level-refresh.js';
import collectAnswers from './../service/answers-collect.js';
import reduceLives from './../service/lives-check.js';

export default () => {
  const gameOne = new GameOneView(questions[gameState.level], answers, gameState);
  gameOne.drawBar = drawProgressbar;

  // Function to check inputs on the first screen
  gameOne.onFormChange = (evt) => {
    // Setting variables
    const inputsNumber = 2;
    const levelAnswers = questions[gameState.level][`answers`];
    const gameForm = gameOne.element.querySelector(`.game__content`);
    let checkedInputs;

    // Finding all inputs on the scrren and returning checked ones
    if (evt.target.tagName === `INPUT`) {
      checkedInputs = Array.from(evt.currentTarget).filter((element) => element.checked);
    }

    // If checked inputs equal to the number of inputs on the page
    if (checkedInputs.length !== inputsNumber) {
      return;
    }

    // Check correctness of the user's answer
    if (checkAnswer(checkedInputs, levelAnswers)) {
      refreshLevel(gameState, questions, answers);
      // If not, -1 live, and setting mistake status
    } else {
      reduceLives(gameState);
      changeScreens(gameOne.element, new HeaderView(gameState).element);
      gameForm.reset();

      // If there is no more lives => draw results
      if (gameState.lives === 0) {
        gameState[`fail`] = true;
        collectAnswers(gameState, answers);
        changeScreens(stats(), new HeaderView().element);
      }
    }
  };
  // Function to check whether the answer is correct
  const checkAnswer = (checkedItem, answersItem) => {
    return (checkedItem[0].value === answersItem[0][`type`]) && (checkedItem[1].value === answersItem[1][`type`]);
  };

  return gameOne.element;
};
