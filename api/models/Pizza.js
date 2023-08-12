import mongoose from "mongoose";

const PizzaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  photos: {
    type: String,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  includedMeat: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model("Pizza", PizzaSchema);
