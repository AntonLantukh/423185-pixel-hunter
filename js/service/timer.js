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

export default Timer;

const timer = new Timer(30);
setInterval(timer.tick, 1000);
