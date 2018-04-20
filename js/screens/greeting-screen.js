import GreetingView from "./greeting-view";
import rules from "./rules-screen";
import changeScreens from './../service/render';
import HeaderView from "./header-view";

export default () => {
  const greeting = new GreetingView();
  const header = new HeaderView().element;

  // Changing the screen
  greeting.onButtonClick = () => {
    changeScreens(rules(), header);
  };

  return greeting.element;
};
