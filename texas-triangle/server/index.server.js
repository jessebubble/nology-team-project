import express from 'express';
import router from './routes/routes.server.js';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3020;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/cities", router);

app.get("/api", (req, res) => {
    res.send('Hello World!, from the server');
});
app.get("*", (req, res) => {
    res.status(404).send("404 - Page not found");
});

mongoose.connect("mongodb://localhost:27017/texas-triangle");

const db = mongoose.connection;
db.once('open', () => {
    console.log("Connected to database");
});

app.listen(port, () => console.log(`Server is running on port ${port}`));

export default app;