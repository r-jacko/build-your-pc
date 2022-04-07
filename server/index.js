import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import listRoutes from './routes/list.js'

dotenv.config();
const app = express();

app.use(listRoutes);


const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;




mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on port: http://localhost:${PORT}`)
    )
  )
  .catch((err) => console.log(err.message));
