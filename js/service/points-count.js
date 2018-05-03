// Setting variables for points counting
const value = {
  FAST_TIME: 50,
  SLOW_TIME: -50,
  LEFT_ATTEMPT: 50,
  RIGHT_ANSWER: 100
};

const MAX_ANSWERS_LENGTH = 10;
const MAX_ATTEMPTS_LENGTH = 3;

const answerType = {
  FAST: `fast`,
  SLOW: `slow`,
  CORRECT: `correct`,
  WRONG: `wrong`
};

// Function to count the number of points
const countPoints = (results, attempts) => {

  let pointsForTime = 0;
  let pointsForAnswer = 0;
  let pointsSlowAnswer = 0;
  let pointsFastAnswer = 0;

  // If a user answered less than 10 question => return -1
  if (results.length < MAX_ANSWERS_LENGTH) {
    return 0;
  } else if (attempts > MAX_ATTEMPTS_LENGTH) {
    throw new Error(`There should be no more than 3 lives`);
  } else if (attempts < 0) {
    throw new Error(`There can be less than 0 lives`);
  }

  // Looping through results array we got in arguments and counting points
  results.forEach((item) => {
    if (item === answerType.FAST) {
      pointsForTime += value.FAST_TIME;
      pointsFastAnswer += value.FAST_TIME;
      pointsForAnswer += value.RIGHT_ANSWER;
    } else if (item === answerType.SLOW) {
      pointsForTime += value.SLOW_TIME;
      pointsSlowAnswer += value.SLOW_TIME;
      pointsForAnswer += value.RIGHT_ANSWER;
    } else if (item === answerType.CORRECT) {
      pointsForAnswer += value.RIGHT_ANSWER;
    }
  });

  let pointsForLives = value.LEFT_ATTEMPT * attempts;

  const pointsTotal = pointsForLives + pointsForTime + pointsForAnswer;
  // Setting an object to return from the function
  const pointsObject = {
    lives: attempts,
    livesPoints: pointsForLives,
    answers: pointsForAnswer,
    timeSlow: pointsSlowAnswer,
    timeSlowCount: pointsSlowAnswer / value.SLOW_TIME,
    timeFast: pointsFastAnswer,
    timeFastCount: pointsFastAnswer / value.FAST_TIME,
    total: pointsTotal
  };

  return pointsObject;
};

export default countPoints;
