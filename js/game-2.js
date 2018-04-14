import getElementFromTemplate from './util.js';
import {headerGameNode} from './header.js';
import footer from './footer.js';
import gameScreen from './gameScreen.js';
import changeScreens from './render.js';
import {gameState, questions} from './data.js';
import stats from './stats.js';


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
const onSecondFormChange = (evt, state) => {

  // Находим все отмеченные инпуты
  if (evt.target.tagName === `INPUT`) {
    const checkedInputs = Array.from(evt.currentTarget).some((element) => {
      return element.checked;
    });

    // Если количество отмеченных равно кол-ву инпутов всего, то
    if (checkedInputs) {

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
  const gameSecond = getElementFromTemplate(templateGameSecond(questions[state])).insertAdjacentElement(`beforeEnd`, footer);
  // Находим ноды
  const gameSecondForm = gameSecond.querySelector(`.game__content`);
  // Вешаем событие на форму
  gameSecondForm.addEventListener(`change`, onSecondFormChange);
};


export default createElement;
