import express from "express"
import dotenv from 'dotenv';
import connectToMongo from "./config/db"
import dataRoutes from "./routes/data.route"
import cors from 'cors';

dotenv.config();


const app=express()


connectToMongo()

app.use(cors());

app.use("/", dataRoutes);



const PORT = parseInt(process.env.PORT || '8000', 10);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});