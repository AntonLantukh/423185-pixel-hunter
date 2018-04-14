import getElementFromTemplate from './util.js';
import {headerGameNode} from './header.js';
import footer from './footer.js';
import gameScreen from './gameScreen.js';
import changeScreens from './render.js';
import {gameState, questions} from './data.js';
import stats from './stats.js';

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
        <img src="${level.answers[1].image.url}" alt="Option 2" width="${level.answers[0].image.width}" height="${level.answers[0].image.height}">
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
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
  </div>`;

// Функция проверки инпутов для смены первого экрана
const onFirstFormChange = (evt, state, gameFirstForm) => {

  // Находим все инпуты на странице
  const inputs = gameFirstForm.querySelectorAll(`input`);

  // Находим все отмеченные инпуты
  if (evt.target.tagName === `INPUT`) {
    const checkedInputs = Array.from(evt.currentTarget).filter((element) => {
      return element.checked;
    });

    // Если количество отмеченных равно кол-ву инпутов всего, то
    if (checkedInputs.length === inputs.length) {

      // Провреяем корректность ответа пользователя со списком ответов
      if (checkedInputs[0].value === questions[state].answers[0].type && checkedInputs[1].value === questions[state].answers[1].type) {

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
  }
};

// Результирующая функция для передачи ноды на отрисовку в управлятор
const createElement = (state) => {
  const gameFirst = getElementFromTemplate(templateGameFirst(questions[state.level]));
  // Находим ноды
  const gameFirstForm = gameFirst.querySelector(`.game__content`);

  const centralElement = document.querySelector(`.central`);

  centralElement.innerHTML = ``;
  centralElement.appendChild(gameFirst);
  // Вешаем событие на форму
  gameFirstForm.addEventListener(`change`, onFirstFormChange);
};


export default createElement;
