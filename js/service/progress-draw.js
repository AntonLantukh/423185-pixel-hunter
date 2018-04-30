const drawProgressbar = (answers) => {
  // Setting variables
  const results = [];
  const maxAnswersLength = 10;

  let resultsString;

  // Passing through answers list
  answers.forEach((item) => {
    if (item === `fast`) {
      results.push(`<li class="stats__result stats__result--fast"></li>`);
    } else if (item === `slow`) {
      results.push(`<li class="stats__result stats__result--slow"></li>`);
    } else if (item === `correct`) {
      results.push(`<li class="stats__result stats__result--correct"></li>`);
    } else if (item === `wrong`) {
      results.push(`<li class="stats__result stats__result--wrong"></li>`);
    }
  });

  while (results.length < maxAnswersLength) {
    results.push(`<li class="stats__result stats__result--unknown"></li>`);
  }

  // Transforming array to string to push into markup
  resultsString = results.join(` `);
  return resultsString;
};

export default drawProgressbar;
