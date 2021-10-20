const express = require('express');
require('dotenv').config();
const cors = require('cors');
const connectDB = require('./config/db');
const registerRoutes = require('./routes/registerRoutes');
const reportsRoutes = require('./routes/reportsRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api', registerRoutes);
app.use('/api/reports', reportsRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
