const express = require("express");
const { getPurchases, getPurchase, createPurchase, updatePurchase, deletePurchase, totalPurchasesPerUser, totalPurchasesPerPayUser } = require("../controllers/purchases");
const { validatorCreatePurchase } = require("../validators/purchases");
const router = express.Router();

router.get("/",getPurchases);
router.get("/:id",getPurchase);
router.get("/users/:id",totalPurchasesPerUser);
router.get("/total/:id",totalPurchasesPerPayUser);
router.post("/", validatorCreatePurchase , createPurchase);
router.put("/:id",updatePurchase);
router.delete("/:id",deletePurchase);

module.exports = router;