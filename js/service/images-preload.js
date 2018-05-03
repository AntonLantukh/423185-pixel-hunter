const loadImages = (questions) => {
  const links = [];

  // Collecting all links
  questions.map(({answers}) => {
    for (let key of answers) {
      links.push(key.image.url);
    }
  });

  // Collecting all Promises
  const promises = links.map((link) => {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.src = link;
      img.addEventListener(`load`, () => {
        resolve(link);
      });
      img.addEventListener(`error`, (error) => {
        reject(error);
      });
    });
  });

  return Promise.all(promises)
      .then(() => {
        return Promise.resolve(questions);
      });
};

export default loadImages;
