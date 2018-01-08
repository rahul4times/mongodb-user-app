const assert = require('assert');
const User = require('../src/user');

describe('Validating recorods', () => {
  it('Requires a user name!', () => {
    const user = new User({ name: undefined });
    const validationResult = user.validateSync();
    const { message } = validationResult.errors.name;
    assert(message === 'Name is required!');
  });
});
