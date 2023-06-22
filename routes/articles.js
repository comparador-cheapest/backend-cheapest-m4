const router = require("express").Router();
const Article = require("../models/Article.js")
const SuperMarket = require('../models/SuperMarket');
const Product = require('../models/Product');


// @desc    Displays all articles
// @route   GET /articles
// @access  Public
router.get('/', async function (req, res, next) {
  try {
    const articles = await Article.find({}).populate('product').populate('supermarket')
      console.log(articles)
      res.status(200).json(articles)
  } catch (error) {
      next(error)
  }
});


// @desc    Get one products
// @route   GET /dress/:productsId
// @access  Public
router.get("/:productsId", async (req, res, next) => {
    const { productsId } = req.params;
    try {
      const dress = await Product.findById(productsId)
      res.status(200).json(dress);
    } catch (error) {
      next(error);
    }
  });


module.exports = router;
