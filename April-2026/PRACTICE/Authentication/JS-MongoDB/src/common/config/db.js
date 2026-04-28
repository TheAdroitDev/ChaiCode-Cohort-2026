import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        const connection = mongoose.connection

        connection.on("connected", () => {
            console.log("MongoDB connected successfully");
        })

        connection.on("error", () => {
            console.log("Error connecting to the database", error);
            process.exit()
        })
    } catch (error) {
        console.log("Connection to the database failed", error)
    }
}