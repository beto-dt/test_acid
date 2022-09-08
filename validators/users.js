const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator');

const validatorCreateUser = [
    check("name").exists().notEmpty(),
    check("lastname").exists().notEmpty(),
    check("email").exists().notEmpty(),
    check("password").exists().notEmpty(),
    check("phone").exists().notEmpty(),
    check("ci").exists().notEmpty(),
    check("status").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
];


module.exports = { validatorCreateUser }