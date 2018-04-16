// Проверяем на наличие ошибки и вносим в ответы
const collectAnswers = (state, answersArray) => {

  if (state.mistake) {
    answersArray.push({answer: false, time: state.time});
  } else {
    answersArray.push({answer: true, time: state.time});
  }
  state.mistake = false;

  // Если время быстрое или медленное => рисуем экран полных статов
  if (state.time <= 10 || state.time >= 20) {
    state[`full-stats`] = true;
  }
};

export default collectAnswers;
