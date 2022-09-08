const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator');

const validatorCreateProduct = [
    check("name").exists().notEmpty(),
    check("description").exists().notEmpty(),
    check("price").exists().notEmpty(),
    check("status").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
];


module.exports = { validatorCreateProduct }