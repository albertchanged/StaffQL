import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import Form from './Form';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import query from '../queries/fetchStaff';

class EditStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  editInfo(id, name, role, department) {
    this.props.mutate({
      variables: {
        id: id,
        title: name,
        role, department
      },
      refetchQueries: [{ query }]
    }).then(() => hashHistory.push('/'));
  }
  render() {
    return (
      <div>
        <h3>Edit Staff Information</h3>
        <Form id={this.props.routeParams.id} editInfo={this.editInfo.bind(this)} />
      </div>
    )
  }
}

const mutation = gql`
  mutation EditStaffInfo($id: ID!, $title: String, $role: String, $department: String) {
    editInfo(id: $id, title: $title, role: $role, department: $department) {
      id
      title
      role
      department
    }
  }
`;

export default graphql(mutation)(EditStaff);