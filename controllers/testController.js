
const testModel = require('../models/testModels');

const getAll = async (req, res) => {
    // console.log("getAll detail");
    const result = await testModel.getAll();
    // console.log("result ==>", result);
    res.status(result.statusCode).send(result);

}

const create = async (req, res) => {
    // console.log("getAll detail");
    if(Object.keys(req.body).length < 1 || req.body === null){
        res.status(400).send({
            statusCode : 400,
            msg : "please enter data ",
            success : false
        })
    }
    let requestData = {...req.body};
     
    const result = await testModel.create(requestData);
    // console.log("result ==>", result);
    res.status(result.statusCode).send(result);

}

const update = async (req, res) => {
    // console.log("getAll detail");
    if(req.params.id === undefined || req.params.id === null || req.params.id === ''){
        res.status(400).send({
            statusCode : 400,
            msg : "id not found ",
            success : false
        })
    }
    if(Object.keys(req.body).length < 1 || req.body === null){
        res.status(400).send({
            statusCode : 400,
            msg : "please enter data ",
            success : false
        })
    }
    let requestData = {...req.body};
    const result = await testModel.update(req.params.id, requestData);
    // console.log("result ==>", result);
    res.status(result.statusCode).send(result);

}

const deleteById = async (req, res) => {
    // console.log("getAll detail");
    if(req.params.id === undefined || req.params.id === null || req.params.id === ''){
        res.status(400).send({
            statusCode : 400,
            msg : "id not found ",
            success : false
        })
    }

    const result = await testModel.deleteById(req.params.id);
    console.log("result ==>", result);
    res.status(result.statusCode).send(result);

}

const findOne = async (req, res) => {
    // console.log("getAll detail");
    // if(Object.keys(req.body).length < 1 || req.body === null){
    //     res.status(400).send({
    //         statusCode : 400,
    //         msg : "please enter data for findOne ",
    //         success : false
    //     })
    // }
    let requestData = {...req.body}
    const result = await testModel.findOne(requestData);
    // console.log("result f ==>", result);
    res.status(result.statusCode).send(result);

}

module.exports = {
    getAll,
    create,
    update,
    deleteById,
    findOne
}