import MongoContainer from 'mongo-container';

const mongoContainer = new MongoContainer(
    {
        database : {
            uri : 'mongodb://127.0.0.1:27017',
            name : 'my-database'
        }
    }
);

(async function() {
    const db = await mongoContainer.getDb(); // Will return the db object so you can call db.insert() and the other mongodb functions
    
})();