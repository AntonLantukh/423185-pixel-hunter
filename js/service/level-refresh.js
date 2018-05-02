import collectAnswers from './answers-collect';
import gameRender from '../gameScreen';

// Setting variables
const GAME_LAST_LEVEL = `level_9`;

// Refreshing the base of actual level
const refreshLevel = (state, questions, answers) => {
  let currentQuestionSet = questions[state.level];

  // Upading current level to the next one, updating the type for controller
  if (state.level !== GAME_LAST_LEVEL) {
    state.level = currentQuestionSet[`next-level`];
    state.type = questions[state.level][`type`];
    // Checking mistake status and pushing an answer to answers array
    collectAnswers(state, answers);
    if (state.mistake) {
      state.lives--;
    }
  } else {
    // if this one is last level => tell to the controller
    collectAnswers(state, answers);
  }
  state.mistake = false;
  gameRender(state);
};

export default refreshLevel;
