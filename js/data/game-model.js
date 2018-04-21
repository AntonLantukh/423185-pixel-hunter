import {INITIAL_STATE, questions, answers} from './data';
import {drawProgressbar, Timer, countPoints, collectAnswers} from './game-logic';

export default class QuestModel {
  constructor(playerName) {
    this.playerName = playerName;
    this.restart();
    this._state = Object.assign({}, INITIAL_STATE);
    this._answers = answers.slice(0);
    this._questions = Object.assign({}, questions);
  }

  // Get current game state
  get state() {
    return this._state;
  }

  // Get current game questions
  get questions() {
    return this._questions;
  }

  // Get current game questions
  get answers() {
    return this._answers;
  }

  // Get current level from questions
  get level() {
    return this._questions[`level_${this._state.level}`];
  }

  // Get current level from questions
  get type() {
    return this._state.type;
  }

  // Get current answers list
  get answers() {
    return this._answers;
  }

  // Get current answers list
  drawProgress() {
    return drawProgressbar(this._answers);
  }

  // Get current level from State
  getCurrentLevel() {
    return this._state.level;
  }

  // Update current level
  updateLevel(value) {
    this._state.level = value;
    return this._state.level;
  }

  // Update current level
  updateType(type) {
    this._state.type = type;
  }

  // Whether there is another level in questions
  get hasNextLevel() {
    const level = this._state.level;
    const levelNumber = parseInt(level.substr(6, 1), 10) + 1;
    return (this._questions[`level_${levelNumber}`]);
  }

  // Push answer to an array
  saveAnswer() {
    collectAnswers(this._state, this._answers);
  }

  // Set mistake
  setMistake() {
    this._state.mistake = true;
  }

  // Undo mistake
  undoMistake() {
    this._state.mistake = false;
  }

  // Count points
  countPoints() {
    countPoints(this.answers, this._state.lives);
  }

  // Check dead status
  isDead() {
    return this._state.lives < 0;
  }

  addLoose() {
    this._state.fail = true;
  }

  // Reduce live
  reduceLives() {
    this._state.lives--;
  }

  initTimer() {
    this.timer = new Timer(30);
    return this.timer;
  }

  // Update current time
  tick() {
    this._state.time = this.timer.tick();
  }

  // Reset current game set to initial
  restart() {
    this._state = INITIAL_STATE;
  }
}
