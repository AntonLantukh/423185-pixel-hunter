import getElementFromTemplate from './util.js';
import {headerIntroTemplate, headerGameTemplate} from './header.js';
import gameScreen from './gameScreen.js';
import changeScreens from './render.js';
import {gameState, questions, answers} from './data.js';
import {templateStatsFail} from './stats.js';
import collectAnswers from './answers-collect.js';
import drawProgressbar from './progress-bar.js';


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

// Функция проверки инпутов для смены первого экрана
const onSecondFormChange = (evt) => {
  // Находим все отмеченные инпуты
  if (evt.target.tagName === `INPUT`) {

    // Провреяем корректность ответа пользователя со списком ответов
    if ((evt.target.value === questions[gameState.level][`answers`][0][`type`])) {

      // Обновляем базу актуального уровня
      if (gameState.level !== `level_9`) {
        gameState.level = questions[gameState.level][`next-level`];
        gameState.type = questions[gameState.level][`type`];

        // Проверяем на наличие ошибки и вносим в ответы
        collectAnswers(gameState, answers);

        gameState.mistake = false;

      } else {
        gameState.level = `level_10`;
        collectAnswers(gameState, answers);
        gameScreen(gameState);
      }

      // Меняем экран
      gameScreen(gameState);

    // Отнимаем жизнь при неправильном ответе
    } else {
      gameState.lives--;
      gameState.mistake = true;
      createElement(gameState);

      // Если жизней не осталось, отрисовываем результаты
      if (gameState.lives === 0) {
        changeScreens(getElementFromTemplate(templateStatsFail()), headerIntroTemplate);
      }
    }
  }
};

// Результирующая функция для передачи ноды на отрисовку в управлятор
const createElement = (state) => {
  // Создаем шаблон
  const gameSecond = getElementFromTemplate(templateGameSecond(questions[state.level]));

  // Отрисовываем на страницу
  changeScreens(gameSecond, getElementFromTemplate(headerGameTemplate(state)));
  const gameFirstForm = gameSecond.querySelector(`.game__content`);

  // Вешаем событие на форму
  gameFirstForm.addEventListener(`change`, onSecondFormChange);
};

export default createElement;
