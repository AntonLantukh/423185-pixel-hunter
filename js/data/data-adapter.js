export const adaptServerData = (dataArray) => {
  let count = 0;
  let dataObject = {};

  dataArray.forEach((item) => {
    dataObject[`level_${count}`] = item;
    if (count !== 9) {
      dataObject[`level_${count}`][`next-level`] = `level_${++count}`;
    }
    item.answers.forEach((element) => {
      if (element.type === `painting`) {
        element.type = `paint`;
      }
    });
  });

  return dataObject;
};
