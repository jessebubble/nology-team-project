import { MongoClient, ServerApiVersion } from 'mongodb';

let db;
let collection;

const uri = `mongodb+srv://${process.env.MONGODB_URI}`;
const client = new MongoClient(uri, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        serverApi: ServerApiVersion.v1 
    });

const dbConnect = () => {
    client.connect()
    .then(() => {
        db = client.db("texas-triangle");
        collection = db.collection("cities");

    })
    .catch((err) => {
        console.log(err);
    });
};

const getDb = () => {
    return db;
};

const getCollection = () => {
    return collection;
};

export { dbConnect, getDb, getCollection };