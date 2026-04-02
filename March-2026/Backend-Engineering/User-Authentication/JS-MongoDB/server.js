import "dotenv/config"
import app from "./src/app.js";
import connectDB from "./src/common/config/db.js";

const PORT = process.env.PORT || 3001

const start = async () => {
    // Connect to database
    await connectDB()
    app.listen(PORT, () => {
        console.log(`Server is running at ${PORT} in ${process.env.NODE_ENV} mode`)
    })
    
}

start().catch((err) => {
    console.log("Failed to start server", err);
    process.exit(1)
})