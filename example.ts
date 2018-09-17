import MongoContainer from 'mongo-container';

let mongoContainer = new MongoContainer(
    {
        database : {
            uri : 'mongodb://127.0.0.1:27017',
            name : 'my-database'
        }
    }
);