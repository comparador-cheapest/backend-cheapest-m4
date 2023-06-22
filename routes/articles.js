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


// @desc    Get one article
// @route   GET /articles/:articlesId
// @access  Public
router.get("/:articlesId", async (req, res, next) => {
  console.log("ruta")
    const { articlesId } = req.params;
    try {
      const article = await Article.findById(articlesId).populate('product').populate('supermarket')
      res.status(200).json(article);
    } catch (error) {
      next(error);
    }
  });


module.exports = router;
