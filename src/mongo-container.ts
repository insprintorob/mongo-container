import { MongoClient, Db, Cursor } from 'mongodb';

export class MongoContainer {
    public mongoClient : MongoClient

    constructor(
        private config : any
    ) {}

    async getMongoClient() : Promise<MongoClient> {
        if ( !this.mongoClient ) {
            this.mongoClient = await MongoClient.connect(this.config.database.uri)
        }

        return Promise.resolve(this.mongoClient);
    }

    async getDb() : Promise<Db> {
        let client = await this.getMongoClient();
        let db = client.db(this.config.database.name);

        return Promise.resolve(db);
    }
}