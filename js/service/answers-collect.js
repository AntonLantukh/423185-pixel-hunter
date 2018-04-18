// Collecting answers to array
const collectAnswers = (state, answersArray) => {

  // Checkin whetehe a user made a mistake and push an answer to answers array
  if (state.mistake) {
    answersArray.push({answer: false, time: state.time});
  } else {
    answersArray.push({answer: true, time: state.time});
  }
  state.mistake = false;
};

export default collectAnswers;
