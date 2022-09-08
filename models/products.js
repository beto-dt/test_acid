const { sequelize } = require("../config/mysql");
const { DataTypes } = require('sequelize');

const Products = sequelize.define(
    "products",
    {
        name:{
            type: DataTypes.STRING,
        },
        description:{
            type: DataTypes.STRING,
        },
        price:{
            type: DataTypes.DOUBLE,
        },
        status:{
            type: DataTypes.STRING,
        }
    },
    {
        timestamps: true,
    }
);

Products.find = Products.findAll;
Products.findById = Products.findByPk;

module.exports = Products;