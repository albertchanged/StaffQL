const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull } = graphql;
const mongoose = require('mongoose');
const Staff = mongoose.model('staff');
const Role = mongoose.model('role');
const Department = mongoose.model('department');
const StaffType = require('./staff_type');
const RoleType = require('./role_type');
const DepartmentType = require('./department_type');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addStaff: {
      type: StaffType,
      args: {
        title: { type: GraphQLString },
        role: { type: GraphQLString },
        department: { type: GraphQLString }
      },
      resolve(parentValue, { title, role, department }) {
        return (new Staff({ title, role, department })).save()
      }
    },
    editInfo: {
      type: StaffType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        title: { type: GraphQLString },
        role: { type: GraphQLString },
        department: { type: GraphQLString }
      },
      resolve(parentValue, { id, title, role, department }) {
        return Staff.editStaffInfo(id, title, role, department);
      }
    },
    deleteStaff: {
      type: StaffType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Staff.remove({ _id: id });
      }
    }
  }
});

module.exports = mutation;
