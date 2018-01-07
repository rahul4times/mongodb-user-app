const mongoose = require('mongoose');

// Here telling to mongoose that whenever you need to create promise
// just use ES6 implementation
mongoose.Promise = global.Promise;

// before runs only once. We want connection with database only once
// also we want mocha to wait if database connection takes little time
before((done) => {
  // if there is no database then mongoose/mongodb will create it automatic
  mongoose.connect('mongodb://localhost/user_test');

  //.once and .on is event listener
  mongoose.connection
    .once('open', () => { done(); })
    .on('error', (error) => {
      console.warn('Warning', error);
  });
});


// when everytime test will run following will clear out the data
beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    done();
  });
});
