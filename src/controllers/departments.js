const head = require('lodash/head');
const isEmpty = require('lodash/isEmpty');

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

            const departments = await Department.findAll();

            res.send(departments);
        }catch(err){
            next(err);
        }
    }

    static async fetchOne(req, res, next){
        try{
            const department = await Department.findById(req.params.id);

            if(isEmpty(department)){
                return res.status(404).send({code: 'DEPARTMENT_NOT_FOUND'});

            }

            res.send(head(department));
        }catch(err){
            next(err);
        }
    }

    static async save(req, res, next) {
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
