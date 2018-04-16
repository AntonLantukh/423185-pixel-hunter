const drawProgressbar = (answers) => {
  // Задаем шаблонную строку и массив для ответов
  const resultsArray = [];
  let resultsString;

  // Если массив пустой
  if (!answers.length) {
    resultsArray.push(`<li class="stats__result stats__result--unknown"></li>`);
  } else {

    // Проходимся по списку ответов
    answers.forEach((item) => {
      if (item.time > 20 && item.answer === true) {
        resultsArray.push(`<li class="stats__result stats__result--slow"></li>`);
      } else if (item.time < 10 && item.answer === true) {
        resultsArray.push(`<li class="stats__result stats__result--fast"></li>`);
      } else if (item.answer === true && (item.time >= 10 && item.time <= 20)) {
        resultsArray.push(`<li class="stats__result stats__result--correct"></li>`);
      } else if (item.answer === false) {
        resultsArray.push(`<li class="stats__result stats__result--wrong"></li>`);
      }
    });

    // Если длина меньше 10, то добавляем статус текущего ответа
    if (answers.length < 10) {
      resultsArray.push(`<li class="stats__result stats__result--unknown"></li>`);
    }
  }

  resultsString = resultsArray.join(` `);
  return resultsString;

};

export default drawProgressbar;
