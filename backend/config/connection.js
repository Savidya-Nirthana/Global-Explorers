import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const uri = `mongodb+srv://admin:${process.env.DB_PASS}@nodecluster.fc8vm.mongodb.net/global_explorers?retryWrites=true&w=majority&appName=NodeCluster`;

const conn = mongoose.connect(uri);

export default conn;
