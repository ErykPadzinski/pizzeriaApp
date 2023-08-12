import Ingredient from "../models/Ingredient.js";
import Pizza from "../models/Pizza.js";

//CREATE
export const createIngredient = async (req, res, next) => {
  const pizzaId = req.params.pizzaid;
  const newIngredient = new Ingredient(req.body);

  try {
    const savedIngredient = await newIngredient.save();
    try {
      await Pizza.findByIdAndUpdate(pizzaId, {
        $push: { ingredients: savedIngredient._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedIngredient);
  } catch (err) {
    next(err);
  }
};
//DELETE
export const deleteIngredient = async (req, res, next) => {
  const pizzaId = req.params.pizzaid;

  try {
    await Ingredient.findByIdAndDelete(req.params.id);
    try {
      await Pizza.findByIdAndUpdate(pizzaId, {
        $pull: { ingredients: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Ingredient has been deleted");
  } catch (err) {
    next(err);
  }
};
//GET
export const getIngredient = async (req, res, next) => {
  try {
    const ingredient = await Ingredient.findById(req.params.id);
    res.status(200).json(ingredient);
  } catch (err) {
    next(err);
  }
};
//GET ALL
export const getAllIngredients = async (req, res, next) => {
  try {
    const allIngredients = await Ingredient.find();
    res.status(200).json(allIngredients);
  } catch (err) {
    next(err);
  }
};
