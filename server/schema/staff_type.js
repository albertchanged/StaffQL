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
    role: { type: GraphQLString },
    department: { type: GraphQLString }
  })
});

module.exports = StaffType;
