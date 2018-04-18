import getElementFromTemplate from './util.js';
import {headerIntroTemplate, headerGameTemplate} from './header.js';
import changeScreens from './render.js';
import {gameState, questions, answers} from './data.js';
import {templateStats} from './stats.js';
import drawProgressbar from './progress-bar.js';
import refreshLevel from './level-refresh.js';
import reduceLives from './lives-check.js';

const templateGameSecond = (level) =>
  `<div class="game">
    <p class="game__task">${level.question}</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${level.answers[0].image.url}" alt="Option 1" width="${level.answers[0].image.width}" height="${level.answers[0].image.height}">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="paint">
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
const onSecondFormChange = (evt) => {
  // Setting variables
  const levelAnswers = questions[gameState.level][`answers`];

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
    createElement(gameState);

    // Если жизней не осталось, отрисовываем результаты
    if (gameState.lives === 0) {
      gameState[`fail`] = true;
      changeScreens(getElementFromTemplate(templateStats()), headerIntroTemplate);
    }
  }
};

// Function to render the screen and ad listeners
const createElement = (state) => {
  // Creating a template
  const gameSecond = getElementFromTemplate(templateGameSecond(questions[state.level]));
  const gameSecondForm = gameSecond.querySelector(`.game__content`);

  // Draw a template on the screen
  changeScreens(gameSecond, getElementFromTemplate(headerGameTemplate(state)));

  // Add a listener
  gameSecondForm.addEventListener(`change`, onSecondFormChange);
};

export default createElement;
