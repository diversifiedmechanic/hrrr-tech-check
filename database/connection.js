const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost/tech_check', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
  .then(() => console.log('Mongoose connected!'))
  .catch((error) => console.error(error));
