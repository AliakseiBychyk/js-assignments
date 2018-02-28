import assert from 'assert';
import {
  getRectangleArea,
  getCicleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelipidedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber
} from '../task/02-numbers-tasks';

it.optional = require('../extensions/it-optional');

describe('02-numbers-tasks', () => {
  it.optional('getRectangleArea should return a square of rectangle', () => {
    assert.equal(getRectangleArea(5, 10), 50);
    assert.equal(getRectangleArea(5, 5), 25);
  });

  it.optional('getCicleCircumference should return a circumference of cicle', () => {
    assert.equal(getCicleCircumference(5), 31.41592653589793);
    assert.equal(getCicleCircumference(3.14), 19.729201864543903);
    assert.equal(getCicleCircumference(0), 0);
  });

  it.optional('getAverage should return an average of two numbers', () => {
    assert.equal(getAverage(5, 5), 5);
    assert.equal(getAverage(10, 0), 5);
    assert.equal(getAverage(-3, 3), 0);
    assert.equal(getAverage(Number.MAX_VALUE - 2, Number.MAX_VALUE), Number.MAX_VALUE - 1);
    assert.equal(getAverage(Number.MAX_VALUE, -Number.MAX_VALUE / 2), Number.MAX_VALUE / 4);
  });

  it.optional('getDistanceBetweenPoints should return a distance between points', () => {
    assert.equal(getDistanceBetweenPoints(0, 0, 0, 1), 1);
    assert.equal(getDistanceBetweenPoints(0, 0, 1, 0), 1);
    assert.equal(getDistanceBetweenPoints(-5, 0, 10, -10), 18.027756377319946);
  });

  it.optional('getLinearEquationRoot should return a root of linear equation', () => {
    assert.equal(getLinearEquationRoot(5, -10), 2);
    assert.equal(getLinearEquationRoot(1, 8), -8);
    assert.equal(getLinearEquationRoot(5, 0), 0);
  });

  it.optional('getAngleBetweenVectors should return a angle (in radians) between two linear vectors', () => {
    assert.equal(getAngleBetweenVectors(1, 0, 0, 1), Math.PI / 2);
    assert.equal(getAngleBetweenVectors(0, 1, 0, -1), Math.PI);
    assert.equal(getAngleBetweenVectors(0, -1, 1, 0), Math.PI / 2);
    assert.equal(getAngleBetweenVectors(0, 1, 0, 1), 0);
  });

  it.optional('getLastDigit should return a last digit of the number', () => {
    assert.equal(getLastDigit(100), 0);
    assert.equal(getLastDigit(37), 7);
    assert.equal(getLastDigit(5), 5);
    assert.equal(getLastDigit(0), 0);
  });

  it.optional('parseNumberFromString should return a number from the given string representation', () => {
    assert.equal(parseNumberFromString('100'), 100);
    assert.equal(parseNumberFromString('37'), 37);
    assert.equal(parseNumberFromString('-525.5'), -525.5);
  });

  it.optional('getParallelipidedDiagonal should return a diagonal length of the rectagular parallepiped', () => {
    assert.equal(getParallelipidedDiagonal(1, 1, 1), Math.sqrt(3));
    assert.equal(getParallelipidedDiagonal(3, 3, 3), Math.sqrt(27));
    assert.equal(
      Math.round(getParallelipidedDiagonal(1, 2, 3), 15),
      Math.round(Math.sqrt(14), 15)
    );
  });

  it.optional('roundToPowerOfTen should return an number rounded to specified power of 10', () => {
    assert.equal(roundToPowerOfTen(1234, 0), 1234);
    assert.equal(roundToPowerOfTen(1234, 1), 1230);
    assert.equal(roundToPowerOfTen(1234, 2), 1200);
    assert.equal(roundToPowerOfTen(1234, 3), 1000);

    assert.equal(roundToPowerOfTen(9678, 0), 9678);
    assert.equal(roundToPowerOfTen(9678, 1), 9680);
    assert.equal(roundToPowerOfTen(9678, 2), 9700);
    assert.equal(roundToPowerOfTen(9678, 3), 10000);
  });

  it.optional('isPrime should return true if specified number is prime', () => {
    assert.equal(isPrime(2), true, '2');
    assert.equal(isPrime(3), true, '3');
    assert.equal(isPrime(4), false, '4');
    assert.equal(isPrime(5), true, '5');
    assert.equal(isPrime(6), false, '6');
    assert.equal(isPrime(7), true, '7');
    assert.equal(isPrime(8), false, '8');
    assert.equal(isPrime(9), false, '9');
    assert.equal(isPrime(10), false, '10');
    assert.equal(isPrime(11), true, '11');
    assert.equal(isPrime(12), false, '12');
    assert.equal(isPrime(13), true, '13');
    assert.equal(isPrime(113), true, '113');
    assert.equal(isPrime(119), false, '119');
  });

  it.optional('toNumber should convert any value to number or return the default', () => {
    assert.equal(toNumber(null, 0), 0);
    assert.equal(toNumber('test', 0), 0);
    assert.equal(toNumber('1', 0), 1);
    assert.equal(toNumber(42, 0), 42);
    assert.equal(toNumber(new Number(42), 0), 42);
    assert.equal(toNumber(undefined, -1), -1);
  });
});
