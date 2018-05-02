const preload = (questions) => {
  let counter = 0;
  questions.forEach((item) => {
    item.answers.forEach
  });
  const urls = level.map((element) => element.image.url);
  let imgsArray = [];

  const onLoad = () => {
    counter++;
    if (counter === urls.length) {
      resize(imgsArray, widthBlock, heightBlock);
    }
  };

  for (let key of urls) {
    let img = new Image();
    imgsArray.push(img);
    img.src = key;
  }
  onLoad();

  return imgsArray;
}
