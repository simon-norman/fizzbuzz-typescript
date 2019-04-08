import { expect } from 'chai';
import fizzbuzz from '../src/fizzbuzz';

describe('Fizzbuzz', function() {
  it('should return fizzbuzz when number is divisible by 3 and 5', function () {
    expect(fizzbuzz(15)).equals('fizzbuzz');
  })

  it('should return fizz when number is divisible by 3 only', function () {
    expect(fizzbuzz(6)).equals('fizz');
  })

  it('should return buzz when number is divisible by 5 only', function () {
    expect(fizzbuzz(10)).equals('buzz');
  })

  it('should return number when not divisible by 3 or 5', function () {
    expect(fizzbuzz(17)).equals(17);
  })
})