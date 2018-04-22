// Function-constructor to generate timer
function Timer(time) {
  let count = time;

  this.tick = function () {
    const value = count - 1;
    if (count <= 0) {
      throw new Error(`The timer expired`);
    } else {
      count -= 1;
    }
    return value;
  };
}

const expireTimer = (element) => {
  const timer = element.querySelector(`.game__timer`);
  const value = parseInt(timer.textContent, 10);
  if (value <= 5) {
    timer.classList.add(`blink-timer`);
  }
};

export {Timer, expireTimer};
