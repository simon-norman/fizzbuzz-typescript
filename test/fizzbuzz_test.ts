import { expect } from 'chai';
import fizzbuzz from '../src/fizzbuzz';

describe('Fizzbuzz', function() {
  it('should return fizzbuzz when number is divisible by 3 and 5', function () {
    expect(fizzbuzz(15)).equals('fizzbuzz');
  })
})