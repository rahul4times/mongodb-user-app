const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name: 'Joe' });
    joe.save()
      .then(() => { done() });
  });

  // Model Instance method
  it('Model instance remove', (done) => {
    joe.remove()
      .then(() => User.findOne({ name: 'Joe' }))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

  it('Class method remove', (done) => {
    // Remove bunch of records with given criteria
    // This will be a Model Class method, we will be using User not joe
    User.remove()
    .then(() => User.findOne({ name: 'Joe' }))
    .then((user) => {
      assert(user === null);
      done();
    });
  });

  it('Class method findOneAndRemove', (done) => {
    // This will be a class method, we will be using User
    User.findOneAndRemove()
      .then(() => User.findOne({ name: 'Joe' }))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

  it('Class method findByIdAndRemove', (done) => {
    // This will be a class method, we will be using User
    User.findByIdAndRemove(joe._id)
      .then(() => User.findOne({ name: 'Joe' }))
      .then((user) => {
        assert(user === null);
        done();
      })
  });


});
