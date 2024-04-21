const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config();

const mongoURI = 'mongodb+srv://dsb0912:Dnyanesh%400912@cluster0.zwrggeq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async()=> {
  // try {
  mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
  // } catch (error) {
  //   console.error(error);
  //   process.exit(1); // Exit process with failure
  // }
}



module.exports = connectDB;

