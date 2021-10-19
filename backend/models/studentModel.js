const mongoose = require('mongoose');

const studentSchema = mongoose.Schema(
  {
    id_num: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      maxLen: 7,
    },
    last_name: {
      type: String,
      required: true,
      trim: true,
    },
    first_name: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      required: true,
      trim: true,
    },
    homephone: {
      type: String,
      trim: true,
    },
    mobilephone: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    origin_country: {
      type: String,
      required: true,
      trim: true,
    },
    aliyah_date: {
      type: Date,
    },
    nation: {
      type: String,
      required: true,
    },
    college_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'College',
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
