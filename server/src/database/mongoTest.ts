import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

export const testDbConnect = async () => {
  const mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  await mongoose.connect(uri);

  console.log("connected to mongoose memory server");
};

export const dbDisconnect = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  //   await mongo.stop();
};