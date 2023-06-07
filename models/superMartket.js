const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const supermarketSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  location: {
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    coordinates: {
      type: [Number],
      index: '2dsphere' // Indexado para búsquedas geoespaciales
    }
  },
  openingHours: {
    type: Map,
    of: {
      from: String,
      to: String
    }
  },
  contact: {
    phone: String,
    email: String,
    website: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = model('Supermarket', supermarketSchema);