import changeScreens from './service/render.js';
import greeting from './screens/greeting-screen.js';
import IntroView from './screens/intro-view.js';

// By default = showing first intro screen
const intro = new IntroView();

changeScreens(intro.element);

intro.onButtonClick = () => {
  changeScreens(greeting());
};
