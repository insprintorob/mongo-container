"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
class MongoContainer {
    constructor(config) {
        this.config = config;
    }
    async getMongoClient() {
        if (!this.mongoClient) {
            this.mongoClient = await mongodb_1.MongoClient.connect(this.config.database.uri);
        }
        return Promise.resolve(this.mongoClient);
    }
    async getDb() {
        let client = await this.getMongoClient();
        let db = client.db(this.config.database.name);
        return Promise.resolve(db);
    }
}
exports.MongoContainer = MongoContainer;
//# sourceMappingURL=mongo-container.js.map