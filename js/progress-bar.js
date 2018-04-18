const drawProgressbar = (answers) => {

  // Setting variables
  const resultsArray = [];
  const timeSlowBorder = 20;
  const timeFastBorder = 10;
  const maxAnswersLength = 10;
  let resultsString;

  // If empty answers array
  if (!answers.length) {
    resultsArray.push(`<li class="stats__result stats__result--unknown"></li>`);
  } else {
    // Passing through answers list
    answers.forEach(({time, answer}) => {
      if (time > timeSlowBorder && answer) {
        resultsArray.push(`<li class="stats__result stats__result--slow"></li>`);
      } else if (time < timeFastBorder && answer) {
        resultsArray.push(`<li class="stats__result stats__result--fast"></li>`);
      } else if (answer === true && (time >= timeFastBorder && time <= timeSlowBorder)) {
        resultsArray.push(`<li class="stats__result stats__result--correct"></li>`);
      } else if (answer === false) {
        resultsArray.push(`<li class="stats__result stats__result--wrong"></li>`);
      }
    });

    // If answers length is less than max value
    if (answers.length < maxAnswersLength) {
      resultsArray.push(`<li class="stats__result stats__result--unknown"></li>`);
    }
  }
  // Transforming array to string to push into markup
  resultsString = resultsArray.join(` `);
  return resultsString;
};

export default drawProgressbar;
