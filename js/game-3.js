import getElementFromTemplate from './util.js';
import {headerIntroTemplate, headerGameTemplate} from './header.js';
import gameScreen from './gameScreen.js';
import changeScreens from './render.js';
import {gameState, questions, answers} from './data.js';
import {templateStatsFail} from './stats.js';
import collectAnswers from './answers-collect.js';
import drawProgressbar from './progress-bar.js';


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

// Функция проверки инпутов для смены первого экрана
const onThirdFormChange = (evt) => {

  // Находим все отмеченные инпуты
  if (evt.target.tagName === `DIV`) {

    // Провреяем корректность ответа пользователя со списком ответов
    const chosenElement = questions[gameState.level][`answers`].filter((item) => {
      return (evt.target.children[0].src === item.image.url);
    });

    if (chosenElement[0].type === `paint`) {
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
  const gameSecond = getElementFromTemplate(templateGameThird(questions[state.level]));

  // Отрисовываем на страницу
  changeScreens(gameSecond, getElementFromTemplate(headerGameTemplate(state)));
  const gameFirstForm = gameSecond.querySelector(`.game__content`);

  // Вешаем событие на форму
  gameFirstForm.addEventListener(`click`, onThirdFormChange);
};


export default createElement;
