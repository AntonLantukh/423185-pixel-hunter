// Collecting answers to array
const collectAnswers = (state, answersArray) => {
  // Time borders
  const timeFastBorder = 20;
  const timeSlowBorder = 10;
  // Checkin whetehe a user made a mistake and push an answer to answers array
  if (state.mistake) {
    answersArray.push(`wrong`);
  } else if (state.time < timeSlowBorder) {
    answersArray.push(`slow`);
  } else if (state.time > timeFastBorder) {
    answersArray.push(`fast`);
  } else {
    answersArray.push(`correct`);
  }
};

export default collectAnswers;
