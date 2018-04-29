const drawProgressbar = (answers) => {
  // Setting variables
  const resultsArray = [];
  const maxAnswersLength = 10;

  let resultsString;

  // Passing through answers list
  answers.forEach((item) => {
    if (item === `fast`) {
      resultsArray.push(`<li class="stats__result stats__result--fast"></li>`);
    } else if (item === `slow`) {
      resultsArray.push(`<li class="stats__result stats__result--slow"></li>`);
    } else if (item === `correct`) {
      resultsArray.push(`<li class="stats__result stats__result--correct"></li>`);
    } else if (item === `wrong`) {
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
