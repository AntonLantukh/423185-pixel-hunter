import HeaderView from "./screens/header-view";
import GameFirstView from "./screens/game1-view";
import GameSecondView from "./screens/game2-view";
import GameThirdView from "./screens/game3-view";
import Application from './application';

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this.header = new HeaderView(this.model.state);
    this.content = this.defineScreenContent();
    this.root = document.createElement(`div`);
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.content.element);
    this._interval = null;
  }

  // Getting DOM node
  get element() {
    return this.root;
  }

  // Stop the game and stop the timer
  stopGame() {
    clearInterval(this._interval);
  }

  // Start the game
  startGame() {
    this.changeLevel();
    this.model.initTimer();
    this._interval = setInterval(() => {
      this.model.tick();
      this.updateHeader();
    }, 1000);
  }

  // Actions at the user's answer
  answer(answer) {
    this.stopGame();
    this.updateLives(answer);
    // Checking mistake status and pushing an answer to answers array
    this.model.saveAnswer(this.model.state, this.model.answers);
    let currentQuestionSet = this.model.questions[this.model.state.level];

    // Upading current level to the next one, updating the type for presenter
    if (this.model.hasNextLevel) {
      this.model.updateLevel(currentQuestionSet[`next-level`]);
      this.model.updateType(this.model.questions[this.model.state.level][`type`]);
    } else {
      Application.showStats();
    }

    this.model.undoMistake();
    this.checkResult();
  }

  // Updating state's mistake and lives status
  updateLives(answer) {
    if (answer) {
      this.model.reduceLives();
      this.model.setMistake();
    }
  }

  // Checking if there is less than 0 lives
  checkResult() {
    if (this.model.isDead()) {
      this.exit();
    } else {
      this.startGame();
    }
  }

  restart() {
    this.model.restart();
  }

  exit() {
    this.model.addLoose();
    Application.showStats(this.model);
  }

  updateHeader() {
    const header = new HeaderView(this.model.state);
    this.root.replaceChild(header.element, this.header.element);
    this.header = header;
  }

  defineScreenContent() {
    let levelType;
    switch (this.model.type) {
      case `two-of-two`:
        levelType = new GameFirstView(this.model.state, this.model.questions[this.model.state.level], this.model.questions, this.model.drawProgress());
        break;
      case `tinder-like`:
        levelType = new GameSecondView(this.model.state, this.model.questions[this.model.state.level], this.model.questions, this.model.drawProgress());
        break;
      case `one-of-three`:
        levelType = new GameThirdView(this.model.state, this.model.questions[this.model.state.level], this.model.questions, this.model.drawProgress());
        break;
      default:
        throw new Error(`Unknown type: ${this.model.type}`);
    }
    return levelType;
  }

  changeLevel() {
    this.updateHeader();
    let level = this.defineScreenContent();
    level.onAnswer = this.answer.bind(this);
    this.changeContentView(level);
  }

  changeContentView(view) {
    this.root.replaceChild(view.element, this.content.element);
    this.content = view;
  }
}
