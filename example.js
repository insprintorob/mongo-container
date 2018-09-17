"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongo_container_1 = require("mongo-container");
const mongoContainer = new mongo_container_1.default({
    database: {
        uri: 'mongodb://127.0.0.1:27017',
        name: 'my-database'
    }
});
(async function () {
    const db = await mongoContainer.getDb(); // Will return the db object so you can call db.insert() and the other mongodb functions
})();
//# sourceMappingURL=example.js.map