import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import pizzaRoute from "./routes/pizzas.js";
import authRoute from "./routes/auth.js";
import ingredientRoute from "./routes/ingredients.js";
import cookieParser from "cookie-parser";
import adminRoute from "./routes/admins.js";
import orderRoute from "./routes/orders.js";

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // lub '*'
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

//middlewares
app.use(cookieParser());

app.use(express.json());
app.use("/admin", adminRoute);
app.use("/auth", authRoute);
app.use("/pizza", pizzaRoute);
app.use("/ingredient", ingredientRoute);
app.use("/order", orderRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    succes: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log("Connected to backend.");
});
