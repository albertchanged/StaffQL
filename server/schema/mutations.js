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
    }
    // addRoleToStaff: {
    //   type: StaffType,
    //   args: {
    //     content: { type: GraphQLString },
    //     roleId: { type: GraphQLID }
    //   },
    //   resolve(parentValue, { content, roleId }) {
    //     return Staff.addRole(roleId, content);
    //   }
    // },
    // addDepartmentToStaff: {
    //   type: StaffType,
    //   args: {
    //     content: { type: GraphQLString },
    //     departmentId: { type: GraphQLID }
    //   },
    //   resolve(parentValue, { content, departmentId }) {
    //     return Staff.addRole(departmentId, content);
    //   }
    // },
    // likeLyric: {
    //   type: LyricType,
    //   args: { id: { type: GraphQLID } },
    //   resolve(parentValue, { id }) {
    //     return Lyric.like(id);
    //   }
    // },
    // deleteSong: {
    //   type: SongType,
    //   args: { id: { type: GraphQLID } },
    //   resolve(parentValue, { id }) {
    //     return Song.remove({ _id: id });
    //   }
    // }
  }
});

module.exports = mutation;
