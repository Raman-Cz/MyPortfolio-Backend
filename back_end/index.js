import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './db/db.js';
import messageRoutes from "./routes/message.route.js";
import cors from 'cors';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors({
    origin:"https://my-portfolio-website-gmcm.vercel.app",
    credentials:true
}));

app.use("/api",messageRoutes);

app.listen(PORT,() => {
    console.log("Current port = ",PORT);
    dbConnect();
});
