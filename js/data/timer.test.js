import {assert} from 'chai';

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

let timer = new CountSeconds(30);

describe(`Function to count the number of seconds`, () => {

  it(`should return Object`, () => {
    assert.isObject(timer);
  });

  it(`should not work with negative value`, () => {
    timer = new CountSeconds(-10);
    assert.throws(() => timer.tick());
  });


  it(`Should reduce the time after new function call`, () => {
    timer = new CountSeconds(30);
    assert.equal(29, timer.tick());

    timer = new CountSeconds(26);
    assert.equal(25, timer.tick());

    timer = new CountSeconds(17);
    assert.equal(16, timer.tick());
  });

  it(`Should report when the value is 0`, () => {
    timer = new CountSeconds(0);
    assert.throws(() => timer.tick());
  });
});
