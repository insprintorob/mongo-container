"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Create a new instance of this class for each collection
 * must always be created with createLinkRepository()
 */
class Repository {
    constructor(mongoContainer, collectionName) {
        this.mongoContainer = mongoContainer;
        this.collectionName = collectionName;
    }
    async getCollection() {
        if (!this.collection) {
            const db = await this.mongoContainer.getDb();
            this.collection = db.collection(this.collectionName);
        }
        return Promise.resolve(this.collection);
    }
    async findOne(args) {
        let collection = await this.getCollection();
        let result = collection.findOne(args);
        return Promise.resolve(result);
    }
    async deleteOne(args) {
        let collection = await this.getCollection();
        collection.deleteOne(args);
    }
    async find(args = null) {
        let result = [];
        let collection = await this.getCollection();
        if (args !== null) {
            result = collection.find(args).toArray();
        }
        else {
            result = collection.find(); // will return everything
        }
        return Promise.resolve(result);
    }
    async addOne(document) {
        let collection = await this.getCollection();
        await collection.insertOne(document);
        return Promise.resolve();
    }
}
exports.Repository = Repository;
async function createRepository(mongoContainer, collectionName) {
    const repository = new Repository(mongoContainer, collectionName);
    return Promise.resolve(repository);
}
exports.createRepository = createRepository;
//# sourceMappingURL=repository.js.map