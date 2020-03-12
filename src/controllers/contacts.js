const head = require('lodash/head');
const isEmpty = require('lodash/isEmpty');

const { Contact } = include('models');

class ContactController{
    static async create(req, res, next) {
        try {
            const result = await Contact.insertOne(req.body);

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
            console.log(req.query);
            const contacts = isEmpty(req.query)
                ? await Contact.findAll()
                : await Contact.find(req.query);
            res.send(contacts);
        }catch(err){
            next(err);
        }
    }

    static async fetchOne(req, res, next){
        try{
            const contact = await Contact.findById(req.params.id);

            if(isEmpty(contact)){
                return res.status(404).send({code: 'CONTACT_NOT_FOUND'});

            }

            res.send(head(contact));
        }catch(err){
            next(err);
        }
    }

    static async fetchWithFilters(req, res, next){
        try{
            const contacts = await Contact.findAll({firstName: req.query.firstName});
            console.log(req.params);
            res.send(contacts);
        }catch(err){
            next(err);
        }
    }

    static async save(req, res, next) {
        try {
            const result = await Contact.updateOne({id: req.params.id}, req.body);
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
            const result = await Contact.deletedOne({id: req.params.id});
            res.send({
                success: true,
                result

            });

        } catch(err){
            next(err);
        }
    }
}

module.exports = ContactController;
