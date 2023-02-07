import express from 'express';
import router from './routes/routes.server.js';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3020;

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/texas-triangle", { 
    useNewUrlParser: true
});

app.use("/api/cities", router);

app.get("/api", (req, res) => {
    res.send('Hello World!, from the server');
});

app.get("*", (req, res) => {
    res.status(404).send("404 - Page not found");
});

app.listen(port, () => console.log(`Server is running on port ${port}`));


export default app;