// Collecting answers to array
const collectAnswers = (state, answersArray) => {

  // Setting time borders
  const timeFastBorder = 10;
  const timeSlowBorder = 20;

  // Checkin whetehe a user made a mistake and push an answer to answers array
  if (state.mistake) {
    answersArray.push({answer: false, time: state.time});
  } else {
    answersArray.push({answer: true, time: state.time});
  }
  state.mistake = false;

  // If the time was slow or fast => draw full stats screen
  if (state.time <= timeFastBorder || state.time >= timeSlowBorder) {
    state[`full-stats`] = true;
  }
};

export default collectAnswers;
