const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const supermarketSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
    coordinates: {
      type: [Number],
      index: "2dsphere", // Indexado para búsquedas geoespaciales
    },
  },
  openingHours: {
    type: Map,
    of: {
      from: String,
      to: String,
    },
  },
  contact: {
    phone: String,
    email: String,
    website: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  logo: {
    type: String,
    default: '../images/market-default-edit.png'
  },
});

const Supermarket = model("Supermarket", supermarketSchema);

module.exports = Supermarket;
