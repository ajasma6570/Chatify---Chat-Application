import express from "express";
import { chats } from "./data.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRouter from "./Routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import chatRouter from "./Routes/chatRoutes.js";
dotenv.config();


connectDB()
const app = express();

app.use(express.json())


const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use('/api/user',userRouter)
app.use('/api/chat',chatRouter)

app.use(notFound)
app.use(errorHandler)


app.listen(PORT, console.log(`server started on ${PORT}`));
