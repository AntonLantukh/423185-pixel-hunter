import {assert} from 'chai';
import countPoints from '../service/points-count';

// Array of right fast answers
const answersSetAllFast = new Array(10);
answersSetAllFast.fill({answer: true, time: 26});

// Array of right normal speed answers
const answersSetAllMedium = new Array(10);
answersSetAllMedium.fill({answer: true, time: 15});

// Array of right slow answers
const answersSetAllSlow = new Array(10);
answersSetAllSlow.fill({answer: true, time: 8});

// Array of right 8 answers
const answersSetNotFull = new Array(8);
answersSetAllSlow.fill({answer: true, time: 8});

let expectedValue;
let attemptsNumber;

describe(`Function to count results at the end of the game`, () => {

  it(`should return 0 when when the player answered less than 10 answers`, () => {
    expectedValue = 0;
    attemptsNumber = 0;
    assert.equal(expectedValue, countPoints(answersSetNotFull, attemptsNumber));
  });

  it(`should not allow to set the number of lives less than 0 and more than 3`, () => {
    attemptsNumber = -1;
    assert.throws(() => countPoints(answersSetAllFast, attemptsNumber));

    attemptsNumber = 5;
    assert.throws(() => countPoints(answersSetAllFast, attemptsNumber));

    attemptsNumber = 10;
    assert.throws(() => countPoints(answersSetAllFast, attemptsNumber));
  });

  it(`should count points correctly`, () => {
    expectedValue = 1650;
    attemptsNumber = 3;
    assert.equal(expectedValue, countPoints(answersSetAllFast, attemptsNumber).total);

    expectedValue = 650;
    attemptsNumber = 3;
    assert.equal(expectedValue, countPoints(answersSetAllSlow, attemptsNumber).total);

    expectedValue = 1150;
    attemptsNumber = 3;
    assert.equal(expectedValue, countPoints(answersSetAllMedium, attemptsNumber).total);
  });
});
