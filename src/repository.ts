import { MongoContainer } from "./mongo-container";
import { Db, Collection } from "mongodb";

/**
 * Create a new instance of this class for each collection
 * must always be created with createLinkRepository()
 */
export class Repository {
    private collection : Collection;

    constructor(
        protected mongoContainer : MongoContainer,
        protected collectionName : string
    ) {}

    private async getCollection() : Promise<Collection>{
        if ( ! this.collection ) {
            const db : Db = await this.mongoContainer.getDb();
            this.collection = db.collection(this.collectionName);
        }

        return Promise.resolve(this.collection);
    }

    async findOne(args : any) : Promise<void> {
        let collection = await this.getCollection();
        let result = collection.findOne(args);
        return Promise.resolve(result);
    }

    async updateOne(query : any, document : any, options : any) : Promise<void> {
        let collection = await this.getCollection();
        collection.updateOne(
            query,
            { $set : document },
            options
        );

        return Promise.resolve();
    }

    async upsert(query : any, document : any) : Promise<void> {
        await this.updateOne(
          query,
          document,
          {
            upsert : true
          }
        )
    }

    async deleteOne(query : any) : Promise<void> {
        let collection = await this.getCollection();
        collection.deleteOne(query);
    }

    async find(query : any = null) : Promise<Array<any>> {
        let result : any = [];
        let collection = await this.getCollection();

        if (query !== null) {
            result = collection.find(query).toArray();
        } else {
            result = collection.find(); // will return everything
        }

        return Promise.resolve(result);
    }

    async addOne(document : Object) : Promise<void> {
        let collection = await this.getCollection();
        await collection.insertOne(document);
        return Promise.resolve();
    }
}

export function createRepository(
    mongoContainer : MongoContainer,
    collectionName : string
) : Repository {
    const repository = new Repository(
        mongoContainer,
        collectionName
    );

    return repository;
}