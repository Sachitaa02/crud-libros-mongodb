import { Collection, Db, MongoClient } from "mongodb";
import { Libro } from "./models/Libro";

const MONGO_URI = "mongodb://127.0.0.1:27017";
const DATABASE_NAME = "biblioteca";
const COLLECTION_NAME = "libros";

const client = new MongoClient(MONGO_URI);

export async function connectToDatabase(): Promise<{
  db: Db;
  librosCollection: Collection<Libro>;
}> {
  await client.connect();

  const db = client.db(DATABASE_NAME);

  await db.command({ ping: 1 });

  const librosCollection = db.collection<Libro>(COLLECTION_NAME);

  return {
    db,
    librosCollection,
  };
}

export async function closeDatabase(): Promise<void> {
  await client.close();
}