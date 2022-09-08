const { sequelize } = require("../config/mysql");
const { DataTypes } = require('sequelize');

const Users = sequelize.define(
    "users",
    {
        name:{
            type: DataTypes.STRING,
        },
        lastname:{
            type: DataTypes.STRING,
        },
        email:{
            type: DataTypes.STRING,
        },
        password:{
            type: DataTypes.STRING,
        },
        phone:{
            type: DataTypes.STRING,
        },
        ci:{
            type: DataTypes.STRING,
        },
        status:{
            type: DataTypes.BOOLEAN,
        }
    },
    {
        timestamps: true,
    }
);

Users.find = Users.findAll;
Users.findById = Users.findByPk;

module.exports = Users;