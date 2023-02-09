import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

mongoose.connect(`mongodb+srv://${process.env.MONGODB_URI}`)

module.exports = mongoose.connection;