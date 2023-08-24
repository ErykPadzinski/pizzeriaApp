import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  pizzaId: {
    type: String,
    required: true,
  },
  selectedIngredients: {
    type: [String],
  },
  price: {
    type: Number,
  },
});

export default mongoose.model("Order", OrderSchema);
