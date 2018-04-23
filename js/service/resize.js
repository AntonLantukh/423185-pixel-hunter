// Function to resize given pictures
const resizeImages = (blockSize, imageSize) => {
  const ratioArr = [blockSize.width / imageSize.width, blockSize.height / imageSize.height];
  const ratio = Math.min(ratioArr[0], ratioArr[1]);

  return {width: imageSize.width * ratio, height: imageSize.height * ratio};
};

// Function to find elements to resize in template
const optimizeImages = (element, width, height) => {
  const blockWidth = width;
  const blockHeight = height;
  const blockData = {width: blockWidth, height: blockHeight};

  const imgs = element.querySelectorAll(`img`);
  let imgsArray = [];
  imgs.forEach((item) => {
    imgsArray.push({width: item.naturalWidth, height: item.naturalHeight});
  });

  imgs.forEach((item, i) => {
    let data = resizeImages(blockData, imgsArray[i]);
    item.setAttribute(`height`, data.height);
    item.setAttribute(`width`, data.width);
  });
};

export {resizeImages, optimizeImages};
