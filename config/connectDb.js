const mongoose = require("mongoose");
const colors = require("colors");
const connectDb = async () => {
  try {
    await mongoose.connect('Enter your Mongo URI');
    console.log(`Server Running On ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDb;
