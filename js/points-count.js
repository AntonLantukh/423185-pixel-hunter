// Функция подсчета очков
const countPoints = (results, attempts) => {

  // Если пользователь не ответил на 10 вопросов - вернуть -1
  if (attempts < 1 && attempts >= 0) {
    return -1;
  } else if (attempts > 3) {
    throw new Error(`There should be no more than 3 lives`);
  } else if (attempts < 0) {
    throw new Error(`There can be less than 0 lives`);
  }

  // Подсчет бонуса за время и за правильный ответ
  let pointsForTime = 0;
  let pointsForAnswer = 0;

  const fastTimeValue = 50;
  const leftAttemptValue = 50;
  const rightAnswerValue = 100;

  // Временные границы
  const timeFastBorder = 10;
  const timeSlowBorder = 20;
  const timeMaxBorder = 30;

  results.forEach((item) => {

    if (item.time < timeFastBorder) {
      pointsForTime += fastTimeValue;

    } else if (item.time > timeSlowBorder && item.time < timeMaxBorder) {
      pointsForTime -= fastTimeValue;
    }

    if (item.answer) {
      pointsForAnswer += rightAnswerValue;
    }
  });

  const pointsForLives = leftAttemptValue * attempts;
  const pointsTotal = pointsForLives + pointsForTime + pointsForAnswer;

  const pointsObject = {
    lives: pointsForLives,
    answers: pointsForAnswer,
    time: pointsForTime,
    total: pointsTotal
  };

  return pointsObject;
};

export default countPoints;
