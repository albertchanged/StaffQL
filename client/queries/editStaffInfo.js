import gql from 'graphql-tag';

export default gql`
  mutation EditStaffInfo($id: ID!, $title: String, $role: String, $department: String) {
    editInfo(id: $id, title: $title, role: $role, department: $department) {
      id
      title
      role
      department
    }
  }
`;