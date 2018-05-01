// Setting variables for points counting
const fastTimeValue = 50;
const slowTimeValue = -50;
const leftAttemptValue = 50;
const rightAnswerValue = 100;

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
      pointsForTime += fastTimeValue;
      pointsFastAnswer += fastTimeValue;
      pointsForAnswer += rightAnswerValue;
    } else if (item === `slow`) {
      pointsForTime += slowTimeValue;
      pointsSlowAnswer += slowTimeValue;
      pointsForAnswer += rightAnswerValue;
    } else if (item === `correct`) {
      pointsForAnswer += rightAnswerValue;
    }
  });

  let pointsForLives = leftAttemptValue * attempts;

  const pointsTotal = pointsForLives + pointsForTime + pointsForAnswer;
  // Setting an object to return from the function
  const pointsObject = {
    lives: attempts,
    livesPoints: pointsForLives,
    answers: pointsForAnswer,
    timeSlow: pointsSlowAnswer,
    timeSlowCount: pointsSlowAnswer / slowTimeValue,
    timeFast: pointsFastAnswer,
    timeFastCount: pointsFastAnswer / fastTimeValue,
    total: pointsTotal
  };

  return pointsObject;
};

export default countPoints;
