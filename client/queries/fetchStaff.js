import gql from 'graphql-tag';

export default gql`
  {
    staff {
      id
      title
      role
      department
    }
  }
`;
