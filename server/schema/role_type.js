const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;
const Role = mongoose.model('role');

const RoleType = new GraphQLObjectType({
  name:  'RoleType',
  fields: () => ({
    id: { type: GraphQLID },
    content: { type: GraphQLString },
    staff: {
      type: require('./staff_type'),
      resolve(parentValue) {
        return Role.findById(parentValue).populate('staff')
          .then(role => {
            return role.staff
          });
      }
    }
  })
});

module.exports = RoleType;
