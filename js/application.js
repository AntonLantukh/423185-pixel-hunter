import IntroView from './screens/intro-view';
import GreetingView from './screens/greeting-view';
import RulesView from './screens/rules-view';
import HeaderView from './screens/footer-view';
import FooterView from './screens/footer-view';
import GameScreen from './game-screen';
import QuestModel from './data/game-model';
import StatsView from './screens/stats-view';

const footer = new FooterView().element;
const header = new HeaderView().element;

const main = document.querySelector(`.central`);

// Function to change screens
const changeView = (element) => {
  main.innerHTML = ``;
  main.appendChild(element);
  main.insertAdjacentElement(`afterEnd`, footer);
};

// Application class
export default class Application {

  static showWelcome() {
    const intro = new IntroView();
    changeView(intro.element);
  }

  static showGreeting() {
    const greeting = new GreetingView();
    changeView(greeting.element);
  }

  static showRules() {
    const rules = new RulesView();
    changeView(rules.element);

   // rules.insertAdjacentElement(`beforeBegin`, header);
   // rules.querySelector(`.back`).addEventListener(`click`, () => {
      // Start from the very beginning
   //   const gameScreen = new GameScreen(new QuestModel());
    //  gameScreen.restart();
    //  Application.showGreeting();
  //  });
  }

  static showGame(playerName) {
    const gameScreen = new GameScreen(new QuestModel(playerName));
    changeView(gameScreen.element);
    gameScreen.startGame();
  }

  static showStats(model) {
    const statistics = new StatsView(model).element;
    statistics.insertAdjacentElement(`beforeBegin`, header);
    changeView(statistics.element);
  }
}
