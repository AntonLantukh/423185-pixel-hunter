import Loader from "./loader";
import IntroView from './screens/intro-view';
import GreetingView from './screens/greeting-view';
import RulesView from './screens/rules-view';
import HeaderView from './screens/header-view';
import FooterView from './screens/footer-view';
import ModalView from "./screens/modal-view";
import GamePresenter from './game-screen';
import GameModel from './data/game-model';
import StatsView from './screens/stats-view';
import ErrorView from './screens/error-view';


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

let gameData;
let gameScreen;
// Application class
export default class Application {
  static start() {
    Application.showIntro();
    Loader.loadData().
        then(Application.showGreeting).
        catch(Application.showError);
  }

  static showIntro() {
    const intro = new IntroView();
    changeView(intro.element);
  }

  static showGreeting(data) {
    if (!gameData) {
      gameData = JSON.parse(JSON.stringify(data));
    }
    const greeting = new GreetingView();
    changeView(greeting.element);
    if (gameScreen) {
      gameScreen.stopGame();
      gameScreen.restart();
    }
  }

  static showRules() {
    const rules = new RulesView().element;
    changeView(rules);
    main.insertAdjacentElement(`afterBegin`, header);
  }

  static showModal() {
    const modal = new ModalView().element;
    const modalWindow = modal.querySelector(`.modal-window`);
    const modalWindowOver = modal.querySelector(`.modal-window__overlay`);
    modalWindow.classList.remove(`visually-hidden`);
    modalWindowOver.classList.remove(`visually-hidden`);
    main.appendChild(modal);
  }

  static showGame(playerName) {
    gameScreen = new GamePresenter(new GameModel(gameData, playerName));
    changeView(gameScreen.element);
    gameScreen.init();
  }

  static showStats(state, bar, score) {
    const statistics = new StatsView(state, bar, score).element;
    changeView(statistics);
    statistics.insertAdjacentElement(`afterBegin`, header);
  }

  static showError(error) {
    const errorView = new ErrorView(error);
    changeView(errorView.element);
  }
}
