const assert = require('assert');
const User = require('../src/user');


// describe() & it() function takes two arguments
// -- 1st 'string' name of test
// -- 2nd fat arrow function

// in test_helper.js done was passed in beforeEach function
describe('Creating records', () => {
  it('Saves a user', (done) => {
    const joe = new User({ name: 'Joe' });

    // whenever mongoose touches our database it returns a promise and
    // that promise can be resolve or reject depends on operation
    joe.save()
      .then(() => {
        // if data is in mongoose that means not inserted yet in mongodb then
        // isNew comes as True. If it's inserted in mongodb then it's False
        // assert is running test if data is insterted then we reach to done statement
        assert(!joe.isNew);
        done();
      });
  });
});
