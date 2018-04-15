// Проверяем на наличие ошибки и вносим в ответы
const collectAnswers = (state, answersArray) => {
  if (state.mistake) {
    answersArray.push({answer: false, time: state.time});
  } else {
    answersArray.push({answer: true, time: state.time});
  }
  state.mistake = false;
};

export default collectAnswers;
