const { Schema, model } = require('mongoose');
 
const articleSchema = new Schema(
  {
    price: {
      type: Number,
    },
    supermarket: {
      type: Schema.Types.ObjectId,
      ref: 'SuperMarket'
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  },
  {
    timestamps: true
  }
);
 
const Article = model('Article', articleSchema);

module.exports = Article;