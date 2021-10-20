const mongoose = require('mongoose');

const connectDB = async () => {
  const URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ort';
  try {
    const conn = await mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`Database connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error ${error}`);
  }
};

module.exports = connectDB;
