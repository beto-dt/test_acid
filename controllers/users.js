const { usersModel } = require('../models');

/**
 * Get List of all the Users
 * @param {*} req 
 * @param {*} res 
 */
const getUsers =  async (req, res) => {
    try{
        const data = await usersModel.find();
        res.send({data});
    }catch(e){
        console.log(e)
    }
}

/**
 * Get User por ID
 * @param {*} req 
 * @param {*} res 
 */
const getUser = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await usersModel.findOne({where:{id:id}});
        if(data == null){
            res.send("no existe usuario");
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
const createUser = async (req, res) => {
    try{
        const body = req.body;
        const data = await usersModel.create(body);
        res.send({data});
    }catch(e){
        console.log(e);
    }
}

/**
 * Update User por ID
 * @param {*} req 
 * @param {*} res 
 */
const updateUser = async (req, res) => {
    try{
        const body = req.body;
        const id = req.params.id;
        const data = await usersModel.update(body,{ where: { id: id}});
        res.send({data});
    }catch(e){
        console.log(e);
    }
}

const deleteUser = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await usersModel.destroy({where:{id: id}})
        res.send({data})
    }catch(e){
        console.log(e);
    }
}


module.exports = { getUsers, createUser, getUser, updateUser, deleteUser }