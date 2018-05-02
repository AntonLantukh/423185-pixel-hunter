// Time borders
const TIME_BORDER = {
  FAST: 20,
  SLOW: 10
};

// Collecting answers to array
const collectAnswers = (state, answers) => {
  // Checkin whetehe a user made a mistake and push an answer to answers array
  if (state.mistake) {
    answers.push(`wrong`);
  } else if (state.time < TIME_BORDER.SLOW) {
    answers.push(`slow`);
  } else if (state.time > TIME_BORDER.FAST) {
    answers.push(`fast`);
  } else {
    answers.push(`correct`);
  }
};

export default collectAnswers;
