const Product=require('../models/Products')
  module.exports = {
    createProduct: async (req, res) => {
      const newProduct = new Product(req.body);
      try {
        await newProduct.save();
        res.status(201).json({ message: "Product created successfully", product: newProduct });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to create product" });
      }
    },
    getAllProduct: async (req, res) => {
      try {
        const products = await Product.find().sort({ createdAt: -1 });
        res.status(200).json(products);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to get products" });
      }
    },
    getProduct: async (req, res) => {
      try {
        const product = await Product.findById(req.params.id);
        if (!product) {
          return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json(product);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to get product" });
      }
    },
    searchProduct: async (req, res) => {
      try {
        const result = await Product.aggregate([
          {
            $search: {
              index: "art",
              text: {
                query: req.params.key,
                path: {
                  wildcard: "*"
                }
              }
            }
          }
        ]);
        res.status(200).json(result);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to search product" });
      }
    },
  };
  