const createModel = include('helpers/modelCreate');

const ORDER_BY = [];
const name = 'Assignment';
const tableName = 'assignment';

const selectableProps = [
    'id',
    'contact',
    'department',
    'createdAt',
    'updatedAt',
    'deletedAt',
    'deleted'
];

const innerProps = [
    'assignment.id',
    'firstName',
    'lastName',
    'contact.address',
    'role',
    'name',
    'department.address as departmentAddress',
    'description'
];

class AssignmentModel extends createModel {
    constructor (props) {
        super({
            ...props,
            name,
            tableName,
            selectableProps
        });
    }

    fetchEagerLoaded (columns = innerProps, orderBy = ORDER_BY) {
        return this.knex
            .select(columns)
            .from(this.tableName)
            .innerJoin('contact', 'assignment.contact', 'contact.id')
            .innerJoin('department', 'assignment.department', 'department.id')
            .orderBy(orderBy)
            .timeout(this.timeout);
    }
}

module.exports = knex => new AssignmentModel({knex});
