const {expect} = require('chai');
const assert = require('assert');

beforeEach('setup the test env', () => {
  console.log('beforeEach');
});

describe('test init', () => {
  it ('test1', () => {
    assert.equal("hello".length, 5);
  });
  it('test2', () => {
    var isValid = true;
    expect(isValid).to.be.true;
  });
});

describe('should send a text', () => {
  it ('composes a text', () => {
    //...
  });
  it ('sends a text', () => {
    //...
  });
  it ('sent at the right time', () => {
    //...
  });
  it ('updates the DB', () => {
    //...
  });
})
