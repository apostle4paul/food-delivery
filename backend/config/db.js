import mongoose from "mongoose";

/**
 * DB connection using standard (non-SRV) connection string
 * 
 * ⚠️ IMPORTANT:
 * Replace 'atlas-xxxx-shard-0' with your actual replica set name
 * from MongoDB Atlas (Cluster → Overview → Replica Set Name)
 */

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://melekete25_db_user:iKsKf9ShBNFHXjtN@" +
      "cluster0-shard-00-00.si0qggh.mongodb.net:27017," +
      "cluster0-shard-00-01.si0qggh.mongodb.net:27017," +
      "cluster0-shard-00-02.si0qggh.mongodb.net:27017/" +
      "food-del?ssl=true&replicaSet=atlas-xxxx-shard-0&authSource=admin&retryWrites=true&w=majority"
    );

    console.log("✅ DB Connected Successfully!");
  } catch (err) {
    console.error("❌ DB Connection Error:", err.message);
    console.error(err);
  }
};
