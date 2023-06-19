const router = require("express").Router();
const Products = require("../models/Products");
const Supermarket = require("../models/superMartket");

// @desc    Get all products
// @route   GET /dress
// @access  Public
router.get("/", async (req, res, next) => {
  try {
    const products = await Products.find().populate("supermarket")
    console.log(products)
    res.status(200).json(products);
  } catch (error) {
    next(error);
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
