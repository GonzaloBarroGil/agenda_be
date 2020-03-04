const fetch = require('node-fetch');
const {stringify} = require('querystring');
const {Department} = include('models');

class DepartmentService{
    async fetchDepartments(){
        try {
            const fetchResponse = await Department.findAll();
            return fetchResponse.json();
        } catch(err) {
            throw Error(err);
        }
    }
}

module.exports = new DepartmentService();
