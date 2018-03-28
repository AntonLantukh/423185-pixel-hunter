(function () {

  // Функция обработки события загрузки страницы
  const onDocumentLoad = () => {
    const screenMain = document.querySelector(`.central`);
    const bodyElement = document.querySelector(`body`);
    const currentScreen = document.createDocumentFragment();
    Array.from(screenMain.cloneNode(true).children).forEach((item) => {
      currentScreen.appendChild(item);
    });

    bodyElement.datashare = currentScreen;
  };

  // Функция смены экрана
  const changeScreens = (screenNumber) => {
    const bodyElement = document.querySelector(`body`);
    const screenMain = document.querySelector(`.central`);
    let screenFullPack = [];
    // Собираем все содержимое шаблонов в массив
    const screenTemplates = Array.from(document.querySelectorAll(`template`)).map((item) => {
      return item.content.cloneNode(true);
    });

    // Объединяем в общий массив
    screenFullPack.push(bodyElement.datashare.cloneNode(true));
    screenFullPack = screenFullPack.concat(screenTemplates);

    // Чистим содежримое тега main
    screenMain.innerHTML = ``;
    screenMain.appendChild(screenFullPack[screenNumber]);
  };

  // Функция обработки переключения экранов
  let screenNumber = 0;
  const onArrowPress = () => {
    const leftCode = 37;
    const rightCode = 39;
    if (event.keyCode === leftCode && event.altKey) {
      if (screenNumber <= 0) {
        screenNumber = 0;
      } else {
        screenNumber--;
      }
      changeScreens(screenNumber);
    } else if (event.keyCode === rightCode && event.altKey) {
      if (screenNumber >= 6) {
        screenNumber = 6;
      } else {
        screenNumber++;
      }
      changeScreens(screenNumber);
    } else {
      return;
    }
  };

  // Событие первой загрузки страницы для записи содержимого начального экрана
  document.addEventListener(`DOMContentLoaded`, onDocumentLoad);

  // Обработчик переключений экранов при нажатии на клавиши
  document.addEventListener(`keydown`, onArrowPress);
})();
