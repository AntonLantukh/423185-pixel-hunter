// Function-constructor to generate timer
export default class Timer {
  constructor(time) {
    this.count = time;
  }

  tick() {
    const value = this.count - 1;
    if (this.count <= 0) {
      throw new Error(`The timer expired`);
    } else {
      this.count -= 1;
    }
    return value;
  }
}

const TIME_ALERT = 5;

const expireTimer = (element) => {
  const timer = element.querySelector(`.game__timer`);
  const value = parseInt(timer.textContent, 10);
  if (value <= TIME_ALERT) {
    timer.classList.add(`blink-timer`);
  }
};

export {Timer, expireTimer};
