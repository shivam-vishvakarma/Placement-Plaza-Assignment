import mongoose from "mongoose";

const connectDb = async () => {
    console.log("Connecting to database");
  try {
    await mongoose.connect("mongodb://localhost:27017/pp_assignment");
    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting to database", error);
  }
};

export default connectDb;
