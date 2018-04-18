import getElementFromTemplate from './../service/util.js';
import HeaderView from "./header-view.js";
import changeScreens from './../service/render.js';
import {gameState, questions, answers} from './../data/data.js';
import {templateStats} from './stats.js';
import refreshLevel from './../service/level-refresh.js';
import drawProgressbar from './../service/progress-bar.js';
import reduceLives from './../service/lives-check.js';

const templateGameThird = (level) =>
  `<div class="game">
    <p class="game__task">${level.question}</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="${level.answers[0].image.url}" alt="Option 1" width="${level.answers[0].image.width}" height="${level.answers[0].image.height}">
      </div>
      <div class="game__option  game__option--selected">
        <img src="${level.answers[1].image.url}" alt="Option 1" width="${level.answers[1].image.width}" height="${level.answers[1].image.height}">
      </div>
      <div class="game__option">
        <img src="${level.answers[2].image.url}" alt="Option 1" width="${level.answers[2].image.width}" height="${level.answers[2].image.height}">
      </div>
    </form>
    <div class="stats">
      <ul class="stats">
        ${drawProgressbar(answers)}
      </ul>
    </div>
  </div>`;

// Function to check correct div click on the third ame scrren
const onThirdFormChange = (evt) => {
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
    createElement(gameState);

    // If there is no more lives => draw results
    if (gameState.lives === 0) {
      gameState[`fail`] = true;
      changeScreens(getElementFromTemplate(templateStats()), headerIntroTemplate);
    }
  }
};

// Function to render the screen and ad listeners
const createElement = (state) => {
  // Creating a template
  const gameSecond = getElementFromTemplate(templateGameThird(questions[state.level]));
  const gameThirdForm = gameSecond.querySelector(`.game__content`);

  // Draw a template on the screen
  changeScreens(gameSecond, getElementFromTemplate(headerGameTemplate(state)));

  // Add a listener
  gameThirdForm.addEventListener(`click`, onThirdFormChange);
};

export default createElement;
