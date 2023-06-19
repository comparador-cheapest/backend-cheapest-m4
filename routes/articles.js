const router = require("express").Router();
const SuperMarket = require("../models/superMartket");
const Article = require("../models/Article.js")

// @desc    Displays all articles
// @route   GET /articles
// @access  Public
router.get('/', async function (req, res, next) {
  try {
      const articles = await Article.find({}).populate('product').populate('SuperMarket');
      res.render('articles', {articles});
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
      const dress = await Products.findById(productsId)
      res.status(200).json(dress);
    } catch (error) {
      next(error);
    }
  });


module.exports = router;
