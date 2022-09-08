const { productsModel } = require('../models');

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
        console.log(e)
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
            res.send("no existe el producto");
        }else{
            res.send({data});
        }
    }catch(e){
        console.log(e);
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
        console.log(e);
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
        console.log(e);
    }
}

const deleteProduct = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await productsModel.destroy({where:{id: id}})
        res.send({data})
    }catch(e){
        console.log(e);
    }
}


module.exports = { getProducts, getProduct, createProduct, updateProduct, deleteProduct };