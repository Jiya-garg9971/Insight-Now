import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const Connection = async() => {
    const url = process.env.MONGODB_URL;
    try {
        await mongoose.connect(url,{useNewUrlParser:true});
        console.log("database connected successfully");
    }
    catch (e) {
        console.log("Error - ",e.message);
    }
}
export default Connection;