import collectAnswers from './answers-collect.js';
import gameRender from './../gameScreen.js';

// Refreshing the base of actual level
const refreshLevel = (state, questions, answers) => {

  // Setting variables
  const gameMaxLevel = `level_10`;
  const gameLastLevel = `level_9`;
  let currentQuestionSet = questions[state.level];

  // Upading current level to the next one, updating the type for controller
  if (state.level !== gameLastLevel) {
    state.level = currentQuestionSet[`next-level`];
    state.type = questions[state.level][`type`];

    // Checking mistake status and pushing an answer to answers array
    collectAnswers(state, answers);
    state.mistake = false;

  } else {
    // if this one is kast level => tell to the controller
    state.level = gameMaxLevel;
    collectAnswers(state, answers);
  }
  gameRender(state);
};

export default refreshLevel;
