import mongoose from 'mongoose';

const dbConnect = async (res) => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }
    catch(error){
        console.log("Error in Connection to MONGODB: ",error);
        process.exit(1);
    }
}

export default dbConnect;