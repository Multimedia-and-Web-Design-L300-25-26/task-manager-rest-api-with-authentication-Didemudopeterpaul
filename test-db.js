import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: ".env.test" });

console.log("Checking connection to:", process.env.MONGO_URI);

try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        serverSelectionTimeoutMS: 2000
    });
    console.log("SUCCESS: Connected to:", conn.connection.host);
    await mongoose.connection.close();
    process.exit(0);
} catch (error) {
    console.error("FAILURE: Could not connect to MongoDB.");
    console.error("Error message:", error.message);
    process.exit(1);
}
