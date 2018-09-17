"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongo_container_1 = require("mongo-container");
const mongoContainer = new mongo_container_1.MongoContainer({
    database: {
        uri: 'mongodb://127.0.0.1:27017',
        name: 'my-database'
    }
});
(async function () {
    const myRepository = await mongo_container_1.createRepository(mongoContainer, 'my-collection');
    let item = await myRepository.addOne({
        test: 'test'
    });
    let foundItem = await myRepository.findOne({
        test: 'test'
    });
    myRepository.deleteOne({
        test: 'test'
    });
})();
//# sourceMappingURL=example.js.map