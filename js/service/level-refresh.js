import collectAnswers from './answers-collect';
import gameRender from '../gameScreen';

// Setting variables
const gameMaxLevel = `level_10`;
const gameLastLevel = `level_9`;

// Refreshing the base of actual level
const refreshLevel = (state, questions, answers) => {
  let currentQuestionSet = questions[state.level];

  // Upading current level to the next one, updating the type for controller
  if (state.level !== gameLastLevel) {
    state.level = currentQuestionSet[`next-level`];
    state.type = questions[state.level][`type`];
    // Checking mistake status and pushing an answer to answers array
    collectAnswers(state, answers);
    if (state.mistake) {
      state.lives--;
    }
  } else {
    // if this one is kast level => tell to the controller
    state.level = gameMaxLevel;
    collectAnswers(state, answers);
  }
  state.mistake = false;
  gameRender(state);
};

export default refreshLevel;
