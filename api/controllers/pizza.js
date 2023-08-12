import Ingredient from "../models/Ingredient.js";
import Pizza from "../models/Pizza.js";

//CREATE
export const createPizza = async (req, res, next) => {
  const newPizza = new Pizza(req.body);

  try {
    const savedPizza = await newPizza.save();
    res.status(200).json(savedPizza);
  } catch (err) {
    next(err);
  }
};
//UPDATE
export const updatePizza = async (req, res, next) => {
  try {
    const updatedPizza = await Pizza.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedPizza);
  } catch (err) {
    next(err);
  }
};
//DELETE
export const deletePizza = async (req, res, next) => {
  try {
    await Pizza.findByIdAndDelete(req.params.id);
    res.status(200).json("Pizza has been deleted");
  } catch (err) {
    next(err);
  }
};
//GET
export const getPizza = async (req, res, next) => {
  try {
    const pizza = await Pizza.findById(req.params.id);
    res.status(200).json(pizza);
  } catch (err) {
    next(err);
  }
};
//GET ALL
export const getAllPizzas = async (req, res, next) => {
  try {
    const allPizzas = await Pizza.find();
    res.status(200).json(allPizzas);
  } catch (err) {
    next(err);
  }
};
