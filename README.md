A simple container for MongoDB with support for async await using Promises

Usage:

```
import { MongoContainer, createRepository } from 'mongo-container';

const mongoContainer = new MongoContainer(
    {
        database : {
            uri : 'mongodb://127.0.0.1:27017',
            name : 'my-database'
        }
    }
);

(async function() {
    const myRepository = await createRepository(
        mongoContainer,
        'my-collection'
    );

    let item = await myRepository.addOne({
        test : 'test'
    });

    let foundItem = await myRepository.findOne({
        test : 'test'
    });

    myRepository.deleteOne({
        test : 'test'
    });
})();

```