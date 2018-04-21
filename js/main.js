import changeScreens from './service/render';
import greeting from './screens/greeting-screen';
import IntroView from './screens/intro-view';

// By default = showing first intro screen
const intro = new IntroView();

changeScreens(intro.element);

intro.onButtonClick = () => {
  changeScreens(greeting());
};
