const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const registerRoutes = require('./routes/registerRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api', registerRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
