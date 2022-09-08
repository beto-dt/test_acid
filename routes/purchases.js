const express = require("express");
const { getPurchases, getPurchase, createPurchase, updatePurchase, deletePurchase } = require("../controllers/purchases");
const router = express.Router();

router.get("/",getPurchases);
router.get("/:id",getPurchase);
router.post("/",createPurchase);
router.put("/:id",updatePurchase);
router.delete("/:id",deletePurchase);

module.exports = router;