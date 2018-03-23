const mongoose = require('mongoose');
require('../models/staff');
require('../models/role');
require('../models/department');
const Staff = mongoose.model('staff');
const Role = mongoose.model('role');
const Department = mongoose.model('department');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const StaffType = require('./staff_type');
const RoleType = require('./role_type');
const DepartmentType = require('./department_type');


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    staff: {
      type: new GraphQLList(StaffType),
      resolve() {
        return Staff.find({});
      }
    },
    staffMember: {
      type: StaffType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Staff.findById(id);
      }
    },
    role: {
      type: RoleType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
    },
    department: {
      type: DepartmentType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
    }
  })
});

module.exports = RootQuery;
