import {assert} from 'chai';

// Массив правильных быстрах ответов
const answersSetAllFast = new Array(10);
answersSetAllFast.fill({answer: true, time: 9});

// Массив правильных обычных ответов
const answersSetAllMedium = new Array(10);
answersSetAllMedium.fill({answer: true, time: 15});

// Массив правильных медленных ответов
const answersSetAllSlow = new Array(10);
answersSetAllSlow.fill({answer: true, time: 27});

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

describe(`Function to count results at the end of the game`, () => {

  it(`should return -1 when when the player answered less than 10 answers`, () => {
    assert.equal(-1, countPoints(answersSetAllFast, 0));
  });

  it(`should should not allow to set the number of lives less than 0 and more than 3`, () => {
    assert.throws(() => countPoints(answersSetAllFast, -1));
    assert.throws(() => countPoints(answersSetAllFast, 5));
    assert.throws(() => countPoints(answersSetAllFast, 10));
  });

  it(`should count points correctly`, () => {
    assert.equal(1650, countPoints(answersSetAllFast, 3));
    assert.equal(650, countPoints(answersSetAllSlow, 3));
    assert.equal(1150, countPoints(answersSetAllMedium, 3));
  });
});
