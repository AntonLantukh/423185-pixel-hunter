import GameOneView from "./game1-view";
import HeaderView from "./header-view";
import stats from './stats-screen';
import changeScreens from '../service/render';
import {gameState, questions, answers} from '../data/data';
import drawProgressbar from '../service/progress-bar';
import refreshLevel from '../service/level-refresh';
import collectAnswers from '../service/answers-collect';

export default () => {
  const gameOne = new GameOneView(questions[gameState.level], answers, gameState);
  gameOne.drawBar = drawProgressbar;

  // Function to check inputs on the first screen
  gameOne.onFormChange = (evt) => {
    // Setting variables
    const inputsNumber = 2;
    const levelAnswers = questions[gameState.level][`answers`];
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
    if (!checkAnswer(checkedInputs, levelAnswers)) {
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

  // Function to check whether the answer is correct
  const checkAnswer = (checkedItem, answersItem) => {
    return (checkedItem[0].value === answersItem[0][`type`]) && (checkedItem[1].value === answersItem[1][`type`]);
  };

  return gameOne.element;
};
