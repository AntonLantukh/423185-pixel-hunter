(function () {

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

  // Сохраняем стартовый экран
  const screenMain = document.querySelector(`.central`);
  const currentScreen = document.createDocumentFragment();

  Array.from(screenMain.cloneNode(true).children).forEach((item) => currentScreen.appendChild(item));

  // Функция смены экрана
  const changeScreens = (screenNumber) => {
    let screenFullPack = [];
    // Собираем все содержимое шаблонов в массив
    const screenTemplates = Array.from(document.querySelectorAll(`template`)).map((item) => {
      return item.content.cloneNode(true);
    });

    // Объединяем в общий массив
    screenFullPack.push(currentScreen.cloneNode(true));
    screenFullPack = screenFullPack.concat(screenTemplates);

    // Чистим содежримое тега main
    screenMain.innerHTML = ``;
    screenMain.appendChild(screenFullPack[screenNumber]);
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
})();
