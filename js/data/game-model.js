import {INITIAL_STATE, TYPE_CORRESPONDER, questions, answers} from './data';
import {drawProgressbar, Timer, countPoints, collectAnswers} from './game-logic';

const timer = new Timer(30);

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
  get getType() {
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
  set updateType(type) {
    this._state.type = type;
    return this._state.type;
  }

  // Whether there is another level in questions
  get hasNextLevel() {
    return (questions[`level_${this._state.level}`] + 1);
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

  // Reduce live
  reduceLives() {
    this._state.lives--;
  }

  // Update current time
  tick() {
    this._state.time = timer.tick;
  }

  // Reset current game set to initial
  restart() {
    this._state = INITIAL_STATE;
  }
}
