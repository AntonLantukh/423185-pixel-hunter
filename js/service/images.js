const renderImages = (level, widthBlock, heightBlock, resize) => {
  debugger;
  let counter = 0;
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
};

const resize = (imgsArray, widthBlock, heightBlock) => {
  const blockWidth = widthBlock;
  const blockHeight = heightBlock;
  const blockData = {width: blockWidth, height: blockHeight};
  let resultingArray = [];

  imgsArray.forEach((item, i) => {
    resultingArray.push({width: item.naturalWidth, height: item.naturalHeight});
    let data = resizeImages(blockData, resultingArray[i]);
    item.setAttribute(`height`, data.height);
    item.setAttribute(`width`, data.width);
  });

  return imgsArray;
};

// Function to resize given pictures
const resizeImages = (blockSize, imageSize) => {
  const ratioArr = [blockSize.width / imageSize.width, blockSize.height / imageSize.height];
  const ratio = Math.min(ratioArr[0], ratioArr[1]);

  return {width: imageSize.width * ratio, height: imageSize.height * ratio};
};

export {renderImages, resize};
