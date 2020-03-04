const {Contact} = include('models');

class ContactService{
    async fetchContacts(){
        try {
            const fetchResponse = await Contact.findAll();
            return fetchResponse.json();
        } catch(err) {
            throw Error(err);
        }
    }
}

module.exports = new ContactService();
