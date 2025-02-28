const express = require("express");
const mongoose = require("mongoose");
const Product = require("../models/Product"); // Import Product model
const router = express.Router();

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single product by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Check if ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid product ID" });
    }

    // Convert string ID to ObjectId
    const product = await Product.findById(new mongoose.Types.ObjectId(id));

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Send response with _id converted to string
    res.json({ ...product._doc, id: product._id.toString() });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
