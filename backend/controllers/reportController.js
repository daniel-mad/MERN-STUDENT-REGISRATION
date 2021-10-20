const { Parser } = require('json2csv');
const Student = require('../models/studentModel');

const exportStudendsToCsv = async (req, res) => {
  const fields = [
    'id_num',
    'last_name',
    'first_name',
    'gender',
    'homephone',
    'mobilephone',
    'email',
    'dob',
    'origin_country',
    'nation',
    'college_id',
  ];
  const opts = { fields };

  try {
    const myData = await Student.find().select(
      '-_id -__v -createdAt -updatedAt'
    );

    const parser = new Parser(opts);
    const csv = parser.parse(myData);
    res.attachment('reports.csv');
    res.status(200).send(csv);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = exportStudendsToCsv;
