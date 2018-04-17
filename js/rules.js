import getElementFromTemplate from './util.js';
import gameRender from './gameScreen.js';
import {gameState} from './data.js';

const templateRules = `
  <div class="rules">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>`;

const rules = getElementFromTemplate(templateRules);

const rulesInput = rules.querySelector(`.rules__input`);
const rulesSubmit = rules.querySelector(`.rules__button`);

// Adding listener to the text input
rulesInput.addEventListener(`input`, function () {
  // If not empty value => show the button to change the screen
  if (rulesInput.value !== ``) {
    rulesSubmit.removeAttribute(`disabled`);
  } else {
    // Or add disabled status
    rulesSubmit.setAttribute(`disabled`, true);
  }
});

// Coming the next screen with game screens controller
rulesSubmit.addEventListener(`click`, function () {
  gameRender(gameState);
});

export default rules;
