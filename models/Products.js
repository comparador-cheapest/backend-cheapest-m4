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
    price: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      default: "unit",
    },
    supermarket: {
      type: Schema.Types.ObjectId,
      ref: "Supermarket",
      required: true,
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
