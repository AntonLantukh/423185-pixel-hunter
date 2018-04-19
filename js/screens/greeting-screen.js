import GreetingView from "./greeting-view.js";
import rules from "./rules-screen.js";
import changeScreens from './../service/render.js';
import HeaderView from "./header-view.js";

export default () => {
  const greeting = new GreetingView();
  const header = new HeaderView().element;

  // Changing the screen
  greeting.onButtonClick = () => {
    changeScreens(rules(), header);
  };

  return greeting.element;
};
