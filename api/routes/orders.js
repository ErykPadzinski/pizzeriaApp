import express from "express";
import { createOrder } from "../controllers/order.js";

const router = express.Router();

//CREATE
router.post("/", createOrder);

export default router;
