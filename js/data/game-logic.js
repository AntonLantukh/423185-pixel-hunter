const drawProgressbar = (answers) => {
  // Setting variables
  const resultsArray = [];
  const timeFastBorder = 20;
  const timeSlowBorder = 10;
  const maxAnswersLength = 10;

  let resultsString;

  // Passing through answers list
  answers.forEach(({time, answer}) => {
    if (time > timeFastBorder && answer) {
      resultsArray.push(`<li class="stats__result stats__result--fast"></li>`);
    } else if (time < timeSlowBorder && answer) {
      resultsArray.push(`<li class="stats__result stats__result--slow"></li>`);
    } else if (answer && (time <= timeFastBorder && time >= timeSlowBorder)) {
      resultsArray.push(`<li class="stats__result stats__result--correct"></li>`);
    } else if (!answer) {
      resultsArray.push(`<li class="stats__result stats__result--wrong"></li>`);
    }
  });

  while (resultsArray.length < maxAnswersLength) {
    resultsArray.push(`<li class="stats__result stats__result--unknown"></li>`);
  }

  // Transforming array to string to push into markup
  resultsString = resultsArray.join(` `);
  return resultsString;
};

// Function-constructor to generate timer
function Timer(time) {
  let count = time;
  this.tick = function () {
    const value = count - 1;

    if (count <= 0) {
      throw new Error(`The timer expired`);
    } else {
      count -= 1;
    }

    return value;
  };
}

// Function to count the number of points
const countPoints = (results, attempts) => {
  // If a user answered less than 10 question => return -1
  if (results.length < 10) {
    return 0;
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
  const timeFastBorder = 20;
  const timeSlowBorder = 10;

  // Looping through results array we got in arguments and counting points
  results.forEach(({time, answer}) => {
    if (time > timeFastBorder & answer) {
      pointsForTime += fastTimeValue;
      pointsFastAnswer += fastTimeValue;

    } else if (time < timeSlowBorder & answer) {
      pointsForTime += slowTimeValue;
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

// Collecting answers to array
const collectAnswers = (state, answersArray) => {
  // Checkin whetehe a user made a mistake and push an answer to answers array
  if (state.mistake) {
    answersArray.push({answer: false, time: state.time});
  } else {
    answersArray.push({answer: true, time: state.time});
  }
};

const expireTimer = (element) => {
  const timer = element.querySelector(`.game__timer`);
  const value = parseInt(timer.textContent, 10);
  if (value <= 5) {
    timer.classList.add(`blink-timer`);
  }
};

export {drawProgressbar, Timer, expireTimer, countPoints, collectAnswers};
