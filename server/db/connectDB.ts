import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        console.log("Database connection established");
    }
    catch (error) {
        console.log(error, "Error connecting to the database");
    }
}

export default connectDB;
