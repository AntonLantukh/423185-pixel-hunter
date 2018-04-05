// Функция-конструктор для генерации объекта таймера
function CountSeconds(time) {
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

export default CountSeconds;
