import changeScreens from './render.js';
import greeting from './greeting.js';
import intro from './intro.js';

changeScreens(intro);

const introContinue = intro.querySelector(`.intro__asterisk`);

// Событие переключения на следующий экран
introContinue.addEventListener(`click`, function () {
  changeScreens(greeting);
});
