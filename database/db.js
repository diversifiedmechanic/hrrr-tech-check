const User = require('./User');

module.exports = {
  addUser(firstName, lastName) {
    const newUser = new User({
      firstName,
      lastName,
    });
    // console.log();
    return newUser.save();
  },
  updateUser({ id, update }) {
    return User.findByIdAndUpdate(id, update);
  },
};
