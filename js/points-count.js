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

  results.forEach((item) => {

    if (item.time < 10) {
      pointsForTime += 50;

    } else if (item.time > 20 && item.time < 30) {
      pointsForTime -= 50;

    } else if (item.time > 30) {
      pointsForTime += 0;
    }

    if (item.answer) {
      pointsForAnswer += 100;
    }
  });

  const pointsForLives = 50 * attempts;
  const pointsTotal = pointsForLives + pointsForTime + pointsForAnswer;

  return pointsTotal;
};

export default countPoints;
