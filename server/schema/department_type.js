const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;
const Department = mongoose.model('department');

const DepartmentType = new GraphQLObjectType({
  name:  'DepartmentType',
  fields: () => ({
    id: { type: GraphQLID },
    content: { type: GraphQLString },
    staff: {
      type: require('./staff_type'),
      resolve(parentValue) {
        return Department.findById(parentValue).populate('staff')
          .then(department => {
            return Department.staff;
          });
      }
    }
  })
});

module.exports = DepartmentType;
