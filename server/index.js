import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import bookingRoutes from "./routes/booking.js";


dotenv.config();

const port = 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth',authRoutes)
app.use('/api/booking',bookingRoutes)

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Database connected");
})


app.listen(port, () => {
  console.log(`Backend is listening on port http://localhost:${port}`);
});


