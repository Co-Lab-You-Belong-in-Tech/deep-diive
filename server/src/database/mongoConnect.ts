import mongoose from "mongoose";
import colors from "colors";

// connect to mongoDB
const connectDB = async () => {
  const dbURI =
    "mongodb+srv://dimola:morgan27@jada-db.4am7c.mongodb.net/jada-card-DB?retryWrites=true&w=majority";

  try {
    await mongoose.connect(dbURI || process.env.MONGODB_URI);
    console.log(colors.bold.green("connected to database"));
  } catch (error) {
    console.log(error);
    console.log(
      colors.bold.red("an error occurred, couldn't connect to the database")
    );
  }
};

export default connectDB;
