import changeScreens from './render.js';
import greeting from './greeting.js';
import intro from './intro.js';

// By default = showing first intro screen
changeScreens(intro);

const introContinue = intro.querySelector(`.intro__asterisk`);

// Listener to change the screen
introContinue.addEventListener(`click`, function () {
  changeScreens(greeting);
});
