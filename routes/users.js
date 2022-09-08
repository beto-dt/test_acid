const express = require("express");
const { getUsers, createUser, getUser, updateUser, deleteUser } = require("../controllers/users");
const { validatorCreateUser } = require("../validators/users");
const router = express.Router();

router.get("/",getUsers);
router.get("/:id",getUser);
router.post("/", validatorCreateUser ,createUser);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);

module.exports = router;