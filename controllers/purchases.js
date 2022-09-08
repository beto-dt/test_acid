const { purchasesModel, productsModel, usersModel } = require('../models');
const handleHttpError = require('../utils/handleError');
const { QueryTypes } = require('sequelize');

/**
 * Get List of all the Purchases
 * @param {*} req
 * @param {*} res
 */
const getPurchases =  async (req, res) => {
    try{
        const data = await purchasesModel.find();
        res.send({data});
    }catch(e){
        handleHttpError(res,"ERROR_GET_PURCHASES")
    }
}

/**
 * Get Purchase por ID
 * @param {*} req
 * @param {*} res
 */
const getPurchase = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await purchasesModel.findOne({where:{id:id}});
        if(data == null){
            handleHttpError(res,"NOT_PURCHASE_EXISTS")
        }else{
            res.send({data});
        }
    }catch(e){
        handleHttpError(res,"ERROR_GET_PURCHASE")
    }
}

/**
 * Create new Purchase
 * @param {*} req
 * @param {*} res
 */
const createPurchase = async (req, res) => {
    try{
        const body = req.body;
        const user_id = await usersModel.findOne({where: {id:body.user_id}})
        const product_id = await productsModel.findOne({where: {id:body.products_id}})
        if(user_id == null){
            handleHttpError(res,"NOT_USER_EXITS")
        }else{
            if( product_id == null ){
                handleHttpError(res,"NOT_PRODUCT_EXITS")
            }else{
                const data = await purchasesModel.create(body);
                res.send({data});
            }
        }
    }catch(e){
        handleHttpError(res,"ERROR_POST_PURCHASE")
    }
}

/**
 * Update Purchase por ID
 * @param {*} req
 * @param {*} res
 */
const updatePurchase = async (req, res) => {
    try{
        const body = req.body;
        const id = req.params.id;
        const user_id = await usersModel.findOne({where: {id:body.user_id}})
        const product_id = await productsModel.findOne({where: {id:body.products_id}})
        if(user_id == null){
            handleHttpError(res,"NOT_USER_EXITS")
        }else{
            if( product_id == null ){
                handleHttpError(res,"NOT_PRODUCT_EXITS")
            }else{
                const data = await purchasesModel.update(body,{ where: { id: id}});
                res.send({data});
            }
        }
    }catch(e){
        handleHttpError(res,"ERROR_PUT_PURCHASE")
    }
}

/**
 * Delete Purchases por ID
 * @param {*} req
 * @param {*} res
 */
const deletePurchase = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await purchasesModel.destroy({where:{id: id}})
        res.send({data})
    }catch(e){
        handleHttpError(res,"ERROR_DELETE_PURCHASE")
    }
}

/**
 * Total of Purchases per user
 * @param {*} req
 * @param {*} res
 */
const totalPurchasesPerUser = async (req, res) => {
    try{
        const user_id = req.params.id;
        const data = await purchasesModel.sequelize.query(`SELECT concat( users.name,'', users.lastname) as cliente, products.name , products.price FROM users INNER JOIN purchases ON users.id = purchases.user_id INNER JOIN products ON purchases.products_id = products.id WHERE users.id = ${user_id} `,{ type: QueryTypes.SELECT })
        res.send({data})
    }catch(e){
        handleHttpError(res,"ERROR_TOTAL_PER_PURCHASE")
    }
}

const totalPurchasesPerPayUser = async (req, res) => {
    try{
        const user_id = req.params.id;
        const data = await purchasesModel.sequelize.query(`SELECT SUM(products.price) as Total FROM users INNER JOIN purchases ON users.id = purchases.user_id INNER JOIN products ON purchases.products_id = products.id WHERE users.id = ${user_id}`,{ type: QueryTypes.SELECT })
        res.send({data})
    }catch(e){
        handleHttpError(res,"ERROR_TOTAL_PER_PAY_PURCHASE")
    }
}


module.exports = { getPurchases, getPurchase, createPurchase, updatePurchase, deletePurchase,totalPurchasesPerUser,totalPurchasesPerPayUser };