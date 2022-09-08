const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator');

const validatorCreatePurchase = [
    check("products_id").exists().notEmpty(),
    check("user_id").exists().notEmpty(),
    check("status").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
];


module.exports = { validatorCreatePurchase }