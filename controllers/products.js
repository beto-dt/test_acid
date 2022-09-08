const { productsModel } = require('../models');
const handleHttpError = require('../utils/handleError');

/**
 * Get List of all the Products
 * @param {*} req
 * @param {*} res
 */
const getProducts =  async (req, res) => {
    try{
        const data = await productsModel.find();
        res.send({data});
    }catch(e){
        handleHttpError(res,"ERROR_GET_PRODUCTS")
    }
}

/**
 * Get product por ID
 * @param {*} req
 * @param {*} res
 */
const getProduct = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await productsModel.findOne({where:{id:id}});
        if(data == null){
            handleHttpError(res,"NOT_PRODUCT_EXITS")
        }else{
            res.send({data});
        }
    }catch(e){
        handleHttpError(res,"ERROR_GET_PRODUCT")
    }
}

/**
 * Create new User
 * @param {*} req
 * @param {*} res
 */
const createProduct = async (req, res) => {
    try{
        const body = req.body;
        const data = await productsModel.create(body);
        res.send({data});
    }catch(e){
        handleHttpError(res,"ERROR_POST_PRODUCT")
    }
}

/**
 * Update Product por ID
 * @param {*} req
 * @param {*} res
 */
const updateProduct = async (req, res) => {
    try{
        const body = req.body;
        const id = req.params.id;
        const data = await productsModel.update(body,{ where: { id: id}});
        res.send({data});
    }catch(e){
        handleHttpError(res,"ERROR_PUT_PRODUCT")
    }
}

/**
 * Delete Product por ID
 * @param {*} req
 * @param {*} res
 */
const deleteProduct = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await productsModel.destroy({where:{id: id}})
        res.send({data})
    }catch(e){
        handleHttpError(res,"ERROR_DELETE_PRODUCT")
    }
}


module.exports = { getProducts, getProduct, createProduct, updateProduct, deleteProduct };