const Student = require('../models/studentModel');
const College = require('../models/collegeModel');
global.ortSing = '';
// On the first time change state to true and after it to false
const state = false;
const init = async () => {
  const name = 'אורט סינגלובסקי';
  const address = 'דרך הטייסים 28, תל אביב יפו';
  const s = new College({ name, address });
  try {
    await s.save();
    ortSing = s;
  } catch (error) {
    console.log(error);
  }
};

if (state) {
  init();
} else {
  College.findOne({}).then(college => (ortSing = college));
}

const registerUser = async (req, res) => {
  const student = new Student({ ...req.body, college_id: ortSing._id });
  try {
    await student.save();
    res.status(201).json({ message: 'Success', data: student });
  } catch (error) {
    console.log(error);

    res.status(201).json({ message: 'Error' });
  }
};

module.exports = registerUser;
