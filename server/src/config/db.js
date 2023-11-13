const mongoose = require('mongoose');
const DB_URI = process.env.MONGO_URI;

async function connectMongoDB() {
  try {
    await mongoose.connect(DB_URI);
    console.log('MongoDB connection successful!');
  } catch (error) {
    console.error('Failed to connect to mongodb!', error);
  }
}

module.exports = {
  connectMongoDB,
};