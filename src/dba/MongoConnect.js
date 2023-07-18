const { MongoClient, ServerApiVersion } = require('mongodb')

const client = new MongoClient("mongodb+srv://DanielLeite:Dan%40549216895@database.to2xi.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, serverApi: ServerApiVersion.v1 });
const dbName = 'people';

async function Main() {

    await client.connect()
    console.log('Connected successfully to server');
    const db = await client.db(dbName);
    const collection = await db.collection('people');

    return collection
}

module.exports = Main