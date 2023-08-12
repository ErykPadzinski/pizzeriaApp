import mongoose from "mongoose";

const IngredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  isMeat: {
    type: Boolean,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Ingredient", IngredientSchema);
