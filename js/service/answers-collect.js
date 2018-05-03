// Time borders
const TIME_BORDER = {
  FAST: 20,
  SLOW: 10
};

const answerType = {
  FAST: `fast`,
  SLOW: `slow`,
  CORRECT: `correct`,
  WRONG: `wrong`
};


// Collecting answers to array
const collectAnswers = (state, answers) => {
  // Checkin whetehe a user made a mistake and push an answer to answers array
  if (state.mistake) {
    answers.push(answerType.WRONG);
  } else if (state.time < TIME_BORDER.SLOW) {
    answers.push(answerType.SLOW);
  } else if (state.time > TIME_BORDER.FAST) {
    answers.push(answerType.FAST);
  } else {
    answers.push(answerType.CORRECT);
  }
};

export default collectAnswers;
