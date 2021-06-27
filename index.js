//importing modules
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

//setting up server
const app = express();

//middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

dotenv.config();

//Importing Routes
import userRoute from "./routes/user.js";

//Routes MiddleWare
app.use("/api/user", userRoute);

//connecting to mongodb
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to mongodb..."))
  .catch(() => console.log("Something went wrong!!"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

// //setting port
const PORT = process.env.PORT || 8000;
//Listening app
app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
