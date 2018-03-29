// Константы с ключами клавиш
const keyCode = {
  ARROW_LEFT: 37,
  ARROW_RIGHT: 39
};

// Константы с кол-вом страниц
const screensArray = {
  MAX_NUMBER: 6,
  MIN_NUMBER: 0
};

// Переменные под смену экранов
const screenMain = document.querySelector(`.central`);
const currentScreen = document.createDocumentFragment();
const templatesPack = document.querySelectorAll(`template`);
let screenFullPack = [];

// Сораняем стартовый экран
Array.from(screenMain.cloneNode(true).children).forEach((item) => currentScreen.appendChild(item));

// Собираем все содержимое шаблонов в массив
const screenTemplates = Array.from(templatesPack).map((item) => item.content.cloneNode(true));
screenFullPack.push(currentScreen.cloneNode(true));
screenFullPack = screenFullPack.concat(screenTemplates);

// Функция смены экрана
const changeScreens = (screenNumber) => {
  screenMain.innerHTML = ``;
  screenMain.appendChild(screenFullPack[screenNumber].cloneNode(true));
};

// Функция обработки переключения экранов
let screenNumber = 0;
const onArrowPress = () => {
  if (!event.altKey) {
    return;
  }

  if (event.keyCode === keyCode.ARROW_LEFT) {
    if (screenNumber <= screensArray.MIN_NUMBER) {
      screenNumber = screensArray.MIN_NUMBER;
    } else {
      screenNumber--;
    }
    changeScreens(screenNumber);

  } else if (event.keyCode === keyCode.ARROW_RIGHT) {
    if (screenNumber >= screensArray.MAX_NUMBER) {
      screenNumber = screensArray.MAX_NUMBER;
    } else {
      screenNumber++;
    }
    changeScreens(screenNumber);
  }
};

// Обработчик переключений экранов при нажатии на клавиши
document.addEventListener(`keydown`, onArrowPress);
