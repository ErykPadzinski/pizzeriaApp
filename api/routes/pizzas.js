import express from "express";
import Pizza from "../models/Pizza.js";
import { createError } from "../utils/error.js";
import {
  createPizza,
  deletePizza,
  getAllPizzas,
  getPizza,
  getPizzaIngredients,
  updatePizza,
} from "../controllers/pizza.js";

const router = express.Router();

//CREATE
router.post("/", createPizza);
//UPDATE
router.put("/:id", updatePizza);
//DELETE
router.delete("/:id", deletePizza);
//GET
router.get("/:id", getPizza);
//GET ALL
router.get("/", getAllPizzas);

export default router;
