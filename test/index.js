const {expect} = require('chai');
const assert = require('assert');

beforeEach('Setting up the userList', () => {
  console.log('beforeEach');
});

describe('test init', () => {
  it ('should init', () => {
    assert.equal("hello".length, 5);
  })
});

describe('should send a text', () => {
  it ('composes a text in twilio', () => {
    //...
  });
  it ('composes a text in twilio', () => {
    //...
  });
  it('should return true if valid user id', function(){
    var isValid = true;
    expect(isValid).to.be.true;
  });
})

// function isValidUserIdAsync(userList, user, callback) {
//   setTimeout(function(){
//     callback(userList.indexOf(user) >= 0)
//   }, 1);
// }
// Note: setTimeout has been used to simulate the async behavior.
// /* Test */
// it('should return true if valid user id', function(done){
// loginController.isValidUserIdAsync(['abc123','xyz321'], 'abc123',
//    function(isValid){
//     assert.equal(isValid, true);
//     done();
// });
// });
