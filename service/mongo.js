import mongoose from "mongoose";

export async function dbConnect(){
    try{
        const conn = await mongoose.connent(String(process.env.MONGOBD_CONNECTION_STRING))
    return conn;
    }catch(err){
        console.log(err);
    }
}