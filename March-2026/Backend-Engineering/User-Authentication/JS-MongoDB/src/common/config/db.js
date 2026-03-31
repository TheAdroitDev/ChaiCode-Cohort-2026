import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        const connection = mongoose.connection

        connection.on("connected", () => {
            console.log("MongoDB connection Successfully");
        })
        connection.on("error",(error)=>{
            console.log("Error connecting to MongoDB",error);
            process.exit()
        })
        
    } catch (error) {
        console.log("Connection to the database failed", error, error.message);
        
    }
}

export default connectDB;