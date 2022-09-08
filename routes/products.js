const express = require("express");
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/products");
const { validatorCreateProduct } = require("../validators/products");
const router = express.Router();

router.get("/",getProducts);
router.get("/:id",getProduct);
router.post("/", validatorCreateProduct , createProduct);
router.put("/:id",updateProduct);
router.delete("/:id",deleteProduct);

module.exports = router;