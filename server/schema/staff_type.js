const mongoose = require('mongoose');
const Staff = mongoose.model('staff');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const RoleType = require('./role_type');

const StaffType = new GraphQLObjectType({
  name:  'StaffType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    role: {
      type: GraphQLString,
      // resolve(parentValue) {
      //   console.log('In role', parentValue);
      //   return Staff.findRole(parentValue.id);
      // }
    },
    department: {
      type: GraphQLString,
      // resolve(parentValue) {
      //   console.log('In department', parentValue);
      //   return Staff.findDepartment(parentValue.id);
      // }
    }
  })
});

module.exports = StaffType;
