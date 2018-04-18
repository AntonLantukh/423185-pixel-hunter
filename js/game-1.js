import getElementFromTemplate from './util.js';
import {headerIntroTemplate, headerGameTemplate} from './header.js';
import changeScreens from './render.js';
import {gameState, questions, answers} from './data.js';
import {templateStats} from './stats.js';
import drawProgressbar from './progress-bar.js';
import refreshLevel from './level-refresh.js';
import reduceLives from './lives-check.js';

const templateGameFirst = (level) =>
  `<div class="game">
    <p class="game__task">${level[`question`]}</p>
    <form class="game__content">
      <div class="game__option">
        <img src="${level.answers[0].image.url}" alt="Option 1" width="${level.answers[0].image.width}" height="${level.answers[0].image.height}">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src="${level.answers[1].image.url}" alt="Option 2" width="${level.answers[1].image.width}" height="${level.answers[1].image.height}">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    <div class="stats">
      <ul class="stats">
        ${drawProgressbar(answers)}
      </ul>
    </div>
  </div>`;

// Function to check inputs on the first screen
const onFirstFormChange = (evt) => {
  // Setting variables
  const inputsNumber = 2;
  const levelAnswers = questions[gameState.level][`answers`];

  // Finding all inputs on the scrren and returning checked ones
  if (!evt.target.tagName === `INPUT`) {
    return;
  }

  const checkedInputs = Array.from(evt.currentTarget).filter((element) => element.checked);

  // If checked inputs equal to the number of inputs on the page
  if (!checkedInputs.length === inputsNumber) {
    return;
  }

  // Check correctness of the user's answer
  if (checkAnswer(checkedInputs, levelAnswers)) {
    refreshLevel(gameState, questions, answers);
  // If not, -1 live, and setting mistake status
  } else {
    reduceLives(gameState);
    createElement(gameState);

    // If there is no more lives => draw results
    if (gameState.lives === 0) {
      gameState[`fail`] = true;
      changeScreens(getElementFromTemplate(templateStats()), headerIntroTemplate);
    }
  }
};

// Function to check whether the answer is correct
const checkAnswer = (checkedItem, answersItem) => {
  return (checkedItem[0].value === answersItem[0][`type`]) && (checkedItem[1].value === answersItem[1][`type`]);
};

// Function to render the screen and ad listeners
const createElement = (state) => {
  // Creating a template
  const gameFirst = getElementFromTemplate(templateGameFirst(questions[state.level]));
  const gameFirstForm = gameFirst.querySelector(`.game__content`);

  // Draw a template on the screen
  changeScreens(gameFirst, getElementFromTemplate(headerGameTemplate(state)));

  // Add a listener
  gameFirstForm.addEventListener(`change`, onFirstFormChange);
};

export default createElement;
