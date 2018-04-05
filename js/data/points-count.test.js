import {assert} from 'chai';
import countPoints from './../points-count.js';

// Массив правильных быстрах ответов
const answersSetAllFast = new Array(10);
answersSetAllFast.fill({answer: true, time: 9});

// Массив правильных обычных ответов
const answersSetAllMedium = new Array(10);
answersSetAllMedium.fill({answer: true, time: 15});

// Массив правильных медленных ответов
const answersSetAllSlow = new Array(10);
answersSetAllSlow.fill({answer: true, time: 27});

describe(`Function to count results at the end of the game`, () => {

  it(`should return -1 when when the player answered less than 10 answers`, () => {
    assert.equal(-1, countPoints(answersSetAllFast, 0));
  });

  it(`should should not allow to set the number of lives less than 0 and more than 3`, () => {
    assert.throws(() => countPoints(answersSetAllFast, -1));
    assert.throws(() => countPoints(answersSetAllFast, 5));
    assert.throws(() => countPoints(answersSetAllFast, 10));
  });

  it(`should count points correctly`, () => {
    assert.equal(1650, countPoints(answersSetAllFast, 3));
    assert.equal(650, countPoints(answersSetAllSlow, 3));
    assert.equal(1150, countPoints(answersSetAllMedium, 3));
  });
});
