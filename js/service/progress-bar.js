const drawProgressbar = (answers) => {

  // Setting variables
  const resultsArray = [];
  const timeFastBorder = 20;
  const timeSlowBorder = 10;
  const maxAnswersLength = 10;

  let resultsString;

  // Passing through answers list
  answers.forEach(({time, answer}) => {
    if (time > timeSlowBorder && answer) {
      resultsArray.push(`<li class="stats__result stats__result--fast"></li>`);
    } else if (time < timeFastBorder && answer) {
      resultsArray.push(`<li class="stats__result stats__result--slow"></li>`);
    } else if (answer === true && (time >= timeFastBorder && time <= timeSlowBorder)) {
      resultsArray.push(`<li class="stats__result stats__result--correct"></li>`);
    } else if (answer === false) {
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

export default drawProgressbar;
