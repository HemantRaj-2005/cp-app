// src/server.js

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const cors = require('cors');
const User = require('./models/User'); // Import User model

dotenv.config();
connectDB();

const app = express();
let PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use('/api/auth', require('./routes/authRoutes'));

const startServer = (port) => {
  app.listen(port, async () => {
    console.log(`Server running on port ${port}`);

    try {
      // Drop googleId index if it exists
      const indexes = await User.collection.indexes();
      const googleIdIndex = indexes.find((index) => index.key.googleId !== undefined);

      if (googleIdIndex) {
        await User.collection.dropIndex('googleId_1');
        console.log('Dropped googleId index');
      }
    } catch (error) {
      console.error('Error dropping googleId index:', error);
    }
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is in use, trying another port...`);
      startServer(port + 1);
    } else {
      console.error(err);
      process.exit(1);
    }
  });
};

startServer(PORT);
