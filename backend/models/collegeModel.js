const mongoose = require('mongoose');

const collegeSchema = mongoose.Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
});

const College = mongoose.model('College', collegeSchema);

module.exports = College;
