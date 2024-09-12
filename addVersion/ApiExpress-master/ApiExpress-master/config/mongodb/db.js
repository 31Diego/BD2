
const mongoose = require('mongoose');
const config = require('./mongodb-config.json');

const connectionString = process.env.MONGODB_URI || config.mongodb.connectionString;

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected successfully.'))
  .catch((err) => console.error('MongoDB connection error:', err));

module.exports = mongoose;
