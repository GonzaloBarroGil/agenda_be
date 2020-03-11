const createModel = include('helpers/modelCreate');

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
    'assignment.deleted',
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

    fetchEagerLoaded (filters = {'assignment.deleted': 0}) {
        return this.knex
            .select(innerProps)
            .from(this.tableName)
            .innerJoin('contact', 'assignment.contact', 'contact.id')
            .innerJoin('department', 'assignment.department', 'department.id')
            .where(filters)
            .timeout(this.timeout);
    }
}

module.exports = knex => new AssignmentModel({knex});
