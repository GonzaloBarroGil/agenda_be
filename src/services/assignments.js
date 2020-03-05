const {Assignment} = include('models');

class AssignmentService{
    async fetchAssignments(){
        try {
            const fetchResponse = await Assignment.findAll();
            return fetchResponse.json();
        } catch(err) {
            throw Error(err);
        }
    }
}

module.exports = new AssignmentService();
