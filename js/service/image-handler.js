// Function to resize given pictures
const resizeImages = (blockSize, imageSize) => {
  const ratioArr = [blockSize.width / imageSize.width, blockSize.height / imageSize.height];
  const ratio = Math.min(ratioArr[0], ratioArr[1]);

  return {width: imageSize.width * ratio, height: imageSize.height * ratio};
};

export default resizeImages;
