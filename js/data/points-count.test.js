import {assert} from 'chai';

const answers = [
  {
    answer: true,
    time: 10
  },

  {
    answer: true,
    time: 25
  },

  {
    answer: true,
    time: 19
  },

  {
    answer: true,
    time: 29
  },

  {
    answer: true,
    time: 10
  },

  {
    answer: false,
    time: 24
  },

  {
    answer: true,
    time: 17
  },

  {
    answer: false,
    time: 22
  },

  {
    answer: true,
    time: 24
  },

  {
    answer: true,
    time: 13
  }
];

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
    assert.equal(-1, countPoints(answers, 0));
  });

  it(`should should not allow to set the number of lives less than 0 and more than 3`, () => {
    assert.throws(() => countPoints(answers, -1));
    assert.throws(() => countPoints(answers, 5));
    assert.throws(() => countPoints(answers, 10));
  });

  it(`should return 1150 points when the player answered 10 questions with mid speed and 3 lives`, () => {
    assert.notEqual(1150, countPoints(answers, 3));
  });

  it(`should return 600 points when the player answered 10 questions with 5 slow and 0 fast and 1 life`, () => {
    assert.equal(600, countPoints(answers, 1));
  });
});
