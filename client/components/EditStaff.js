import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import Form from './Form';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import query from '../queries/fetchStaff';

class EditStaff extends Component {
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
        <h4 className="editStaffTitle">Edit Staff Information for <span className="headerStaff">{this.props.location.state.name}</span></h4>
        <br />
        <Form 
          id={this.props.routeParams.id} 
          title={this.props.location.state.name}
          role={this.props.location.state.role}
          department={this.props.location.state.department}
          editInfo={this.editInfo.bind(this)} 
        />
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