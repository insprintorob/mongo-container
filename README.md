A simple container for MongoDB with support for async await using Promises

Usage:

```
import MongoContainer from 'mongo-container';

const mongoContainer = new MongoContainer(
    {
        database : {
            uri : 'mongodb://127.0.0.1:27017',
            name : 'my-database'
        }
    }
);

const db = mongoContainer.getDb(); // Will return the db object so you can call db.insert() and the other mongodb functions
```

See example.ts for the full example which will work with both TypeScript and ES2018 JavaScript