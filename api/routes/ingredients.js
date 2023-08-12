import express from "express";
import {
  createIngredient,
  deleteIngredient,
  getAllIngredients,
  getIngredient,
} from "../controllers/ingredient.js";

const router = express.Router();

//CREATE
router.post("/", createIngredient);
//DELETE
router.delete("/:id/:pizzaid", deleteIngredient);
//GET
router.get("/:id", getIngredient);
//GET ALL
router.get("/", getAllIngredients);

export default router;
