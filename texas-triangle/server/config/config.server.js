import dotenv from 'dotenv';

dotenv.config();

const database = `mongodb://localhost:27017/texas-triangle`;

export { database };