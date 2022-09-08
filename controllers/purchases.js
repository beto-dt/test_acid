const { purchasesModel } = require('../models');

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
        console.log(e)
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
            res.send("no existe la compra");
        }else{
            res.send({data});
        }
    }catch(e){
        console.log(e);
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
        const data = await purchasesModel.create(body);
        res.send({data});
    }catch(e){
        console.log(e);
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
        const data = await purchasesModel.update(body,{ where: { id: id}});
        res.send({data});
    }catch(e){
        console.log(e);
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
        console.log(e);
    }
}


module.exports = { getPurchases, getPurchase, createPurchase, updatePurchase, deletePurchase };