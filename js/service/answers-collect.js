// Time borders
const timeFastBorder = 20;
const timeSlowBorder = 10;

// Collecting answers to array
const collectAnswers = (state, answers) => {
  // Checkin whetehe a user made a mistake and push an answer to answers array
  if (state.mistake) {
    answers.push(`wrong`);
  } else if (state.time < timeSlowBorder) {
    answers.push(`slow`);
  } else if (state.time > timeFastBorder) {
    answers.push(`fast`);
  } else {
    answers.push(`correct`);
  }
};

export default collectAnswers;
