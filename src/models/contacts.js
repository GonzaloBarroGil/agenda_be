const createModel = include('helpers/modelCreate');

const name = 'Contact';
const tableName = 'Contact';

const selectableProps = [
    'id',
    'firstName',
    'lastName',
    'email',
    'gender',
    'birthDate',
    'phoneNumber',
    'address',
    'role',
    'notes',
    'createdAt',
    'updatedAt',
    'deletedAt',
    'deleted'
];

class ContactModel extends createModel {
    constructor (props) {
        super({
            ...props,
            name,
            tableName,
            selectableProps
        });
    }
}

module.exports = knex => new ContactModel({knex});
