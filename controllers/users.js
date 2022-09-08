const { usersModel } = require('../models');
const handleHttpError = require('../utils/handleError');

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
        handleHttpError(res, "ERROR_GET_USERS");
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
            handleHttpError(res, "NO_USER_EXITS");
        }else{
            res.send({data});
        }
    }catch(e){
        handleHttpError(res, "ERROR_GET_USER");
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
        handleHttpError(res, "ERROR_POST_USER");
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
        handleHttpError(res, "ERROR_PUT_USER");
    }
}

/**
 * Delete User por ID
 * @param {*} req
 * @param {*} res
 */
const deleteUser = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await usersModel.destroy({where:{id: id}});
        res.send({data});
    }catch(e){
        handleHttpError(res, "ERROR_DELETE_USER");
    }
}


module.exports = { getUsers, createUser, getUser, updateUser, deleteUser }