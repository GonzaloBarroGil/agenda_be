const createModel = include('helpers/modelCreate');

const name = 'Department';
const tableName = 'department';

const selectableProps = [
    'id',
    'name',
    'phoneNumber',
    'address',
    'description',
    'createdAt',
    'updatedAt',
    'deletedAt',
    'deleted'
];

class DepartmentModel extends createModel {
    constructor (props) {
        super({
            ...props,
            name,
            tableName,
            selectableProps
        });
    }
}

module.exports = knex => new DepartmentModel({knex});
