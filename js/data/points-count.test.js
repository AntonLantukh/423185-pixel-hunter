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

let expectedValue;
let attemptsNumber;

describe(`Function to count results at the end of the game`, () => {

  it(`should return -1 when when the player answered less than 10 answers`, () => {
    expectedValue = -1;
    attemptsNumber = 0;
    assert.equal(expectedValue, countPoints(answersSetAllFast, attemptsNumber));
  });

  it(`should should not allow to set the number of lives less than 0 and more than 3`, () => {
    attemptsNumber = -1;
    assert.throws(() => countPoints(answersSetAllFast, attemptsNumber));

    attemptsNumber = 5;
    assert.throws(() => countPoints(answersSetAllFast, 5));

    attemptsNumber = 10;
    assert.throws(() => countPoints(answersSetAllFast, 10));
  });

  it(`should count points correctly`, () => {
    expectedValue = 1650;
    attemptsNumber = 3;
    assert.equal(expectedValue, countPoints(answersSetAllFast, attemptsNumber));

    expectedValue = 650;
    attemptsNumber = 3;
    assert.equal(expectedValue, countPoints(answersSetAllSlow, attemptsNumber));

    expectedValue = 1150;
    attemptsNumber = 3;
    assert.equal(expectedValue, countPoints(answersSetAllMedium, attemptsNumber));
  });
});
