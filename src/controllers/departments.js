const head = require('lodash/head');
const map = require('lodash/map');
const pick = require('lodash/pick');

const { Department } = include('models');

class DepartmentController{
    static async create(req, res, next) {
        try {
            const result = await Department.insertOne(req.body);
            res.send({
                success: true,
                result
            });
        } catch (err) {
            next(err);
        }
    }

    static async fetch(req, res, next){
        try{

            const Department = Department.findAll();

            res.send(Department);
        }catch(err){
            next(err);
        }
    }

    static async save(req, res, next){
        try {
            const result = await Department.updateOne({id: req.params.id}, req.body);
            res.send({
                success: true,
                result
            });
        } catch (err) {
            next(err);
        }
            
    }

    static async delete(req, res, next){
        try{
            const result = await Department.deletedOne({id: req.params.id});
            res.send({
                success: true,
                result

            });

        } catch(err){
            next(err);
        }
    }


}

module.exports = DepartmentController;
