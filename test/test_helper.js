const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/user_test');

mongoose.connection
  .once('open', () => console.log('Connected!'))
  .on('error', (error) => {
    console.log('Warning: ', error);
  });
