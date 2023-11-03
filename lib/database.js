import mongoose from "mongoose";

const databaseConnect = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
  } catch (err) {
    console.log(err);
  }
};

export default databaseConnect;
