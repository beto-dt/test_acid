const { sequelize } = require("../config/mysql");
const { DataTypes } = require('sequelize');

const Purchases = sequelize.define(
    "purchases",
    {
        products_id:{
            type: DataTypes.STRING,
        },
        user_id:{
            type: DataTypes.STRING,
        },
        status:{
            type: DataTypes.STRING,
        }
    },
    {
        timestamps: true,
    }
);

Purchases.find = Purchases.findAll;
Purchases.findById = Purchases.findByPk;

module.exports = Purchases;