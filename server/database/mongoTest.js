const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

export const testDbConnect = async () => {
  const mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  const mongooseOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  };

  await mongoose.connect(uri, mongooseOptions);

  console.log("connected to mongoose memory server");
};

export const dbDisconnect = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  //   await mongo.stop();
};