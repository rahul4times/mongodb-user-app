const assert = require('assert');
const User = require('../src/user');

describe('Updating user', () => {
  let joe;

  beforeEach((done)=>{
    joe = new User({ name: 'Joe'});
    joe.save()
      .then(() => done());
  });

  // promise part in assertTest function
  function assertTest(ourTest, done){
    ourTest
      .then(() => User.find({}))
      .then((user) => {
        assert(user.length === 1);
        assert(user[0].name === 'Alex');
        done();
      })
  }

  it('Instance type using set n save', (done) => {
    joe.set('name', 'Alex');
    assertTest(joe.save(), done)
  });

  it('Model instance using update', (done)=>{
    assertTest(joe.update({name: 'Alex'}), done);
  });

  it('A model class update', (done) => {
    // update function takes two arguments
    // 1 - record you are looking for
    // 2 - record you want to replace with
    assertTest(
      User.update({ name: 'Joe'}, {name: 'Alex' }),
      done
    );
  });

  it('A model class update one record', (done) => {
    assertTest(
      User.findOneAndUpdate({ name: 'Joe' }, { name: 'Alex' }),
      done
    );
  });

  it('A model class can find a record with an id and update', (done) => {
    assertTest(
      User.findByIdAndUpdate(joe._id, { name: 'Alex' }),
      done
    );
  });

});
