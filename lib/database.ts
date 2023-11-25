import mongoose from "mongoose";

const databaseConnect = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI_PRODUCTION as string);
  } catch (err) {
    console.log(err);
  }
};

export default databaseConnect;
