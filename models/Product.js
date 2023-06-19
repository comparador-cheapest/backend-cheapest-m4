const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    brand: String,
    category: String,
    unit: {
      type: String,
      default: "unit",
    },
    image: {
      type: String,
      default: "",
    }
  },
  {
    timestamps: true,
  }
);

const Product = model("Product", productSchema);

module.exports = Product;
