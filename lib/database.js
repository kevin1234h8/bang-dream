import mongoose from "mongoose";

const databaseConnect = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log("connected");
  } catch (err) {
    console.log(err);
  }
};

export default databaseConnect;
