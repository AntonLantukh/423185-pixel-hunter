// Setting variables for points counting
const VALUE = {
  FAST_TIME: 50,
  SLOW_TIME: -50,
  LEFT_ATTEMPT: 50,
  RIGHT_ANSWER: 100
};

// Function to count the number of points
const countPoints = (results, attempts) => {

  let pointsForTime = 0;
  let pointsForAnswer = 0;
  let pointsSlowAnswer = 0;
  let pointsFastAnswer = 0;

  // If a user answered less than 10 question => return -1
  if (results.length < 10) {
    return 0;
  } else if (attempts > 3) {
    throw new Error(`There should be no more than 3 lives`);
  } else if (attempts < 0) {
    throw new Error(`There can be less than 0 lives`);
  }

  // Looping through results array we got in arguments and counting points
  results.forEach((item) => {
    if (item === `fast`) {
      pointsForTime += VALUE.FAST_TIME;
      pointsFastAnswer += VALUE.FAST_TIME;
      pointsForAnswer += VALUE.RIGHT_ANSWER;
    } else if (item === `slow`) {
      pointsForTime += VALUE.SLOW_TIME;
      pointsSlowAnswer += VALUE.SLOW_TIME;
      pointsForAnswer += VALUE.RIGHT_ANSWER;
    } else if (item === `correct`) {
      pointsForAnswer += VALUE.RIGHT_ANSWER;
    }
  });

  let pointsForLives = VALUE.LEFT_ATTEMPT * attempts;

  const pointsTotal = pointsForLives + pointsForTime + pointsForAnswer;
  // Setting an object to return from the function
  const pointsObject = {
    lives: attempts,
    livesPoints: pointsForLives,
    answers: pointsForAnswer,
    timeSlow: pointsSlowAnswer,
    timeSlowCount: pointsSlowAnswer / VALUE.SLOW_TIME,
    timeFast: pointsFastAnswer,
    timeFastCount: pointsFastAnswer / VALUE.FAST_TIME,
    total: pointsTotal
  };

  return pointsObject;
};

export default countPoints;
