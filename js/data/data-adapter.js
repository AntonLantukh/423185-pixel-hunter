const adaptServerData = (questions) => {
  let count = 0;
  let dataObject = {};

  const PRE_LAST_LEVEL = 9;
  const paintType = {
    PAINT: `paint`,
    PAINTING: `painting`
  };

  questions.forEach((item) => {
    dataObject[`level_${count}`] = item;
    if (count !== PRE_LAST_LEVEL) {
      dataObject[`level_${count}`][`next-level`] = `level_${++count}`;
    }
    item.answers.forEach((element) => {
      if (element.type === paintType.PAINTING) {
        element.type = paintType.PAINT;
      }
    });
  });

  return dataObject;
};

export default adaptServerData;
