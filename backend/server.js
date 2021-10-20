const path = require('path');
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

app.use('/api', registerRoutes);
app.use('/api/reports', reportsRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
