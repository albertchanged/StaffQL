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
      <div className="formContainer">
        <br />
        <h4 className="editStaffTitle">Editing Staff Information for: <br /><span className="headerStaff"><strong>{this.props.location.state.name}</strong></span></h4>
        <br />
        <Form 
          id={this.props.routeParams.id} 
          title={this.props.location.state.name}
          role={this.props.location.state.role}
          department={this.props.location.state.department}
          editInfo={this.editInfo.bind(this)} 
        />
      </div>
    );
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