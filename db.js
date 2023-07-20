import mongoose from "mongoose"

export const connectDB = async ()=>{
    try {
        await mongoose.connect('mongodb://localhost/crud')
        console.log("Db connection successful");
    } catch (error) {
        console.log(error);
    }
}