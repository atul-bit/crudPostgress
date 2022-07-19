
const DB = require('../config/database');
const testTable = DB.testTable;
const Op = DB.Sequelize.Op;

const getAll = async () => {
    try {
        let result =  await testTable.findAll();
        return { statusCode : 200, success : true , msg : result }
    } catch(err) {
        console.log("error is ==>", err);
        return {statusCode : 404, success : false, msg : err}
    }
}

const create = async (data) => {
    try {
        console.log("inside create ==>", data);
        if(data && data.admin){
            data['admin'] = "yes";
        } else {
            data['admin'] = "no";
        }
        let result =  await testTable.create(data);
        console.log("result ==>", result);
        return { statusCode : 200, success : true , msg : result }
    } catch(err) {
        console.log("error is ==>", err);
        return {statusCode : 404, success : false, msg : err}
    }
}

const update = async (id,data) => {
    try {
        console.log("inside update ==>", id);

        let condition = { where : {id : id}}
        if(data && data.admin){
            data['admin'] = "yes";
        } else {
            data['admin'] = "no";
        }
        let result =  await testTable.update(data, condition);
        console.log("result ==>", result);
        return { statusCode : 200, success : true , msg : result }
    } catch(err) {
        console.log("error is ==>", err);
        return {statusCode : 404, success : false, msg : err}
    }
}

const deleteById = async (id) => {
    try {
        console.log("inside update ==>", id);

        let condition = { where : {id : id}}
        let result =  await testTable.destroy(condition);
        console.log("result of delete ==>", result);
        if(result){

            return { statusCode : 200, success : true , msg : result }
        } else {
            return { statusCode : 400, success : false , msg : "something bad haappened while deleting" }
        }
    } catch(err) {
        console.log("error is ==>", err);
        return {statusCode : 404, success : false, msg : err}
    }
}

const findOne = async ( data ) => {
    try {
        const { name , lastName, age, location} = data;
        let condition = {};
        if(name && name !== '' && name !== null){
            condition["name"] = { [Op.iLike]: `%${name}%` }
        }
        if(lastName && lastName !== '' && lastName !== null){
            condition["lastName"] = { [Op.iLike]: `%${lastName}%` }
        }
        if(location && location !== '' && location !== null){
            condition["location"] = { [Op.iLike]: `%${location}%` }
        }
        console.log("condition ==>", condition)
        let result =  await testTable.findAll({where : condition});
        console.log("result ==>", result);
        return { statusCode : 200, success : true , msg : result }
    } catch(err) {
        console.log("error is ==>", err);
        return {statusCode : 404, success : false, msg : err}
    }
}



module.exports = {
    getAll,
    create,
    update,
    deleteById,
    findOne
}