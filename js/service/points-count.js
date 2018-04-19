// Function to count the number of points
const countPoints = (results, attempts) => {

  // If a user answered less than 10 question => return -1
  if (attempts < 1 && attempts >= 0) {
    return -1;
  } else if (attempts > 3) {
    throw new Error(`There should be no more than 3 lives`);
  } else if (attempts < 0) {
    throw new Error(`There can be less than 0 lives`);
  }

  // Setting variables for points counting
  let pointsForTime = 0;
  let pointsForAnswer = 0;
  let pointsSlowAnswer = 0;
  let pointsFastAnswer = 0;

  const fastTimeValue = 50;
  const slowTimeValue = -50;
  const leftAttemptValue = 50;
  const rightAnswerValue = 100;

  // Time borders
  const timeFastBorder = 10;
  const timeSlowBorder = 20;
  const timeMaxBorder = 30;

  // Looping through results array we got in arguments and counting points
  results.forEach(({time, answer}) => {

    if (time < timeFastBorder) {
      pointsForTime += fastTimeValue;
      pointsFastAnswer += fastTimeValue;

    } else if (time > timeSlowBorder && time < timeMaxBorder) {
      pointsForTime -= fastTimeValue;
      pointsSlowAnswer += slowTimeValue;

    }

    if (answer) {
      pointsForAnswer += rightAnswerValue;
    }
  });

  const pointsForLives = leftAttemptValue * attempts;
  const pointsTotal = pointsForLives + pointsForTime + pointsForAnswer;

  // Setting an object to return from the function
  const pointsObject = {
    lives: pointsForLives,
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
