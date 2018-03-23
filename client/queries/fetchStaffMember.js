import gql from 'graphql-tag';

export default gql`
  query StaffQuery($id: ID!) {
    staff(id: $id) {
      id
      title
      role
      department
    }
  }
`;