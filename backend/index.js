import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js";
import cors from 'cors'

const app = express();

app.use(cors())

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI

//connect to MongoDB
try {
    mongoose.connect('mongodb://127.0.0.1:27017/bookStore', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
    console.log("Connected to MongoDB")
} catch (error) {
    console.log("Error: ", error)
}

//defining routes
app.use("/book", bookRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})