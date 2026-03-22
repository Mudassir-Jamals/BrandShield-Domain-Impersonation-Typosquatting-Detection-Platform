import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
dotenv.config();
const app = express();

//middleware
app.use(express.json());

//database connection
connectDB();

//server start
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server connected on ${PORT}`));
