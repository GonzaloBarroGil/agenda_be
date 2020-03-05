const head = require('lodash/head');
const isEmpty = require('lodash/isEmpty');

const { Assignment } = include('models');

class AssignmentController{
    static async create(req, res, next) {
        try {
            const result = await Assignment.insertOne(req.body);
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

            const assignments = await Assignment.findAll();

            res.send(assignments);
        }catch(err){
            next(err);
        }
    }

    static async fetchOne(req, res, next){
        try{
            const contact = await Assignment.findById(req.params.id);

            if(isEmpty(contact)){
                return res.status(404).send({code: 'ASSIGNMENT_NOT_FOUND'});

            }

            res.send(head(contact));
        }catch(err){
            next(err);
        }
    }

    static async save(req, res, next) {
        try {
            const result = await Assignment.updateOne({id: req.params.id}, req.body);
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
            const result = await Assignment.deletedOne({id: req.params.id});
            res.send({
                success: true,
                result

            });

        } catch(err){
            next(err);
        }
    }
}

module.exports = AssignmentController;
