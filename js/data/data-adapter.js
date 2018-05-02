const PRE_LAST_LEVEL = 9;
const PAINTING_TYPE = `painting`;

const adaptServerData = (questions) => {
  let count = 0;
  let dataObject = {};

  questions.forEach((item) => {
    dataObject[`level_${count}`] = item;
    if (count !== PRE_LAST_LEVEL) {
      dataObject[`level_${count}`][`next-level`] = `level_${++count}`;
    }
    item.answers.forEach(({type}) => {
      if (type === PAINTING_TYPE) {
        type = PAINTING_TYPE.substr(0, 5);
      }
    });
  });

  return dataObject;
};

export default adaptServerData;
