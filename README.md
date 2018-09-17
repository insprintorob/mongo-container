A simple container for MongoDB with support for async await using Promises

Usage:

```
import MongoContainer from 'mongo-container';

let mongoContainer = new MongoContainer(
    {
        database : {
            uri : 'mongodb://127.0.0.1:27017',
            name : 'my-database'
        }
    }
);
```

See example.ts for the full example which will work with both TypeScript and ES2018 JavaScript