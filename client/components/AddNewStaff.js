import React, { Component } from 'react';
import Form from './Form';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link, hashHistory } from 'react-router';
import query from '../queries/fetchStaff';

class AddNewStaff extends Component {
  addStaff(name, role, department) {
    this.props.mutate({
      variables: {
        title: name,
        role, department
      },
      refetchQueries: [{ query }]
    }).then(() => hashHistory.push('/'));
  }
  render() {
    return (
      <div className="formContainer">
        <br />
        <h4>Add New Staff Member</h4>
        <br />
        <Form addStaff={this.addStaff.bind(this)}/>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddStaff($title: String, $role: String, $department: String) {
    addStaff(title: $title, role: $role, department: $department) {
      id
      title
      role
      department
    }
  }
`;

export default graphql(mutation)(AddNewStaff);