import HeaderView from "./screens/header-view";
import GameFirstView from "./screens/game1-view";
import GameSecondView from "./screens/game2-view";
import GameThirdView from "./screens/game3-view";
import Application from './application';

export default class GamePresenter {
  constructor(model) {
    this.model = model;
    this.model.updateType(this.model.level[`type`]);
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

  init() {
    this.startGame();
  }

  // Start the game
  startGame() {
    const timeUpdate = 1000;
    this.changeLevel();
    this.model.initTimer();
    this._interval = setInterval(() => {
      this.model.tick();
      this.updateHeader();
      this.checkTimer();
    }, timeUpdate);
  }

  // Stop the game and stop the timer
  stopGame() {
    clearInterval(this._interval);
  }

  // Actions at the user's answer
  answer(mistake) {
    this.stopGame();
    this.updateLives(mistake);
    // Checking mistake status and pushing an answer to answers array
    this.collectAnswer();
    this.updateGameStatus();
    this.checkResult();
  }

  // Actions to change the level
  changeLevel() {
    this.updateHeader();
    let level = this.defineScreenContent();
    level.onAnswer = this.answer.bind(this);
    level.resizeImages = this.model.optimizeImgSize;
    level.resizeImages();
    this.changeContentView(level);
  }

  // Updating the content
  changeContentView(view) {
    this.root.replaceChild(view.element, this.content.element);
    this.content = view;
  }

  // Updating state's mistake and lives status
  updateLives(mistake = true) {
    if (mistake) {
      this.model.reduceLives();
      this.model.setMistake();
    }
  }

  // Saving answers
  collectAnswer() {
    this.model.saveAnswer(this.model.state, this.model.answers);
  }

  // Define next step
  updateGameStatus() {
    // Upading current level to the next one, updating the type for presenter
    if (this.model.hasNextLevel) {
      this.model.updateLevel(this.model.level[`next-level`]);
      this.model.updateType(this.model.level[`type`]);
    } else {
      this.renderStats();
    }
    this.model.undoMistake();
  }

  // Initialize the timer
  checkTimer() {
    if (this.model.state.time === 0) {
      this.answer();
    }
  }

  // Checking if there is less than 0 lives
  checkResult() {
    const maxAnswersLength = 10;
    if (this.model.isDead()) {
      this.loose();
    } else if (this.model.defineAnswersLength() === maxAnswersLength) {
      this.win();
    } else {
      this.startGame();
    }
  }

  // Actions when win
  win() {
    this.renderStats();
  }

  // Actions when loose
  loose() {
    this.model.state.lives++;
    this.model.addLoose();
    this.renderStats();
  }

  // Restart the game
  restart() {
    this.model.reset();
  }

  // Rendering stats
  renderStats() {
    const bar = this.model.drawProgress(this.model.answers);
    const score = this.model.countPoints(this.model.answers, this.model.state.lives);
    Application.showStats(this.model.state, bar, score);
  }

  // Updating the header for timer andnext level
  updateHeader() {
    const header = new HeaderView(this.model.state);
    this.root.replaceChild(header.element, this.header.element);
    this.header = header;
    this.header.updateTimer = this.model.modifyTimer;
    this.header.updateTimer(header.element);
  }

  // Defining right screen for right question
  defineScreenContent() {
    let levelType;
    switch (this.model.type) {
      case `two-of-two`:
        levelType = new GameFirstView(this.model.state, this.model.level, this.model.questions, this.model.drawProgress());
        break;
      case `tinder-like`:
        levelType = new GameSecondView(this.model.state, this.model.level, this.model.questions, this.model.drawProgress());
        break;
      case `one-of-three`:
        levelType = new GameThirdView(this.model.state, this.model.level, this.model.questions, this.model.drawProgress());
        break;
      default:
        throw new Error(`Unknown type: ${this.model.type}`);
    }

    return levelType;
  }
}
