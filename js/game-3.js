import getElementFromTemplate from './util.js';
import {headerGameNode} from './header.js';
import footer from './footer.js';
import gameScreen from './gameScreen.js';
import changeScreens from './render.js';
import {gameState, questions} from './data.js';
import stats from './stats.js';


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
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
  </div>`;

// Функция проверки инпутов для смены первого экрана
const onThirdFormChange = (evt, state) => {

  // Находим все отмеченные инпуты
  if (evt.target.tagName === `DIV`) {
    // Провреяем корректность ответа пользователя со списком ответов
    if (evt.target.tagName) {

      // Обновляем базу актуального уровня
      state.level = questions[state][`next-level`];
      // Меняем экран
      gameScreen();

      // Отнимаем жизнь при неправильном ответе
    } else {
      gameState.lives--;

      // Если жизней не осталось, отрисовываем результаты
      if (gameState.lives === 0) {
        changeScreens(stats);
      }
    }
  }
};

// Результирующая функция для передачи ноды на отрисовку в управлятор
const createElement = (state) => {
  const gameSecond = getElementFromTemplate(templateGameThird(questions[state])).insertAdjacentElement(`beforeEnd`, footer);
  // Находим ноды
  const gameSecondForm = gameSecond.querySelector(`.game__content`);
  // Вешаем событие на форму
  gameSecondForm.addEventListener(`change`, onThirdFormChange);
};


export default createElement;
