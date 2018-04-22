import IntroView from './screens/intro-view';
import GreetingView from './screens/greeting-view';
import RulesView from './screens/rules-view';
import HeaderView from './screens/header-view';
import FooterView from './screens/footer-view';
import GamePresenter from './game-screen';
import QuestModel from './data/game-model';
import StatsView from './screens/stats-view';

const footer = new FooterView().element;
const header = new HeaderView().element;
const main = document.querySelector(`.central`);

// Function to change screens
const changeView = (element) => {
  main.innerHTML = ``;
  main.nextSibling.remove();
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
    const gameScreen = new GamePresenter(new QuestModel());
    const greeting = new GreetingView();
    changeView(greeting.element);
    gameScreen.stopGame();
    gameScreen.restart();
  }

  static showRules() {
    const rules = new RulesView().element;
    changeView(rules);
    main.insertAdjacentElement(`afterBegin`, header);
  }

  static showGame(playerName) {
    const gameScreen = new GamePresenter(new QuestModel(playerName));
    changeView(gameScreen.element);
    gameScreen.startGame();
  }

  static showStats(state, bar, score) {
    const statistics = new StatsView(state, bar, score).element;
    changeView(statistics);
    statistics.insertAdjacentElement(`afterBegin`, header);
  }
}
