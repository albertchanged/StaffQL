import React, { Component } from 'react';
import StaffMember from './StaffMember';
import { Link } from 'react-router';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import query from '../queries/fetchStaff';

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  deleteStaff(id) {
    if (confirm('Remove this staff member?') === true) {
      this.props.mutate({
        variables: { id }
      }).then(() => this.props.data.refetch());
    }
  }
  renderStaffMembers() {
    if (this.state.text.length === 0) {
      return this.props.data.staff && this.props.data.staff.map(({ id, title, role, department }) => {
        return (
          <StaffMember 
            key={id} 
            id={id} 
            title={title} 
            role={role} 
            department={department} 
            deleteStaff={this.deleteStaff.bind(this)}
          />
        );
      });
    }
  }
  filterStaffMembers() {
    return this.props.data.staff.filter(staff => {
      if (staff.title.toLowerCase().includes(this.state.text.toLowerCase()) || 
          staff.role.toLowerCase().includes(this.state.text.toLowerCase()) || 
          staff.department.toLowerCase().includes(this.state.text.toLowerCase())
      ) {
        return staff;
      }
    }).map((staff) => {
      return (
        <StaffMember 
          key={staff.id} 
          id={staff.id} 
          title={staff.title} 
          role={staff.role} 
          department={staff.department} 
          deleteStaff={this.deleteStaff.bind(this)}
        />
      );
    });
  }
  render() {
    if (!this.props.data.staff) {
      return <div />;
    }
    return (
      <div>
        <div>
          <h3 className="headerTitle"><strong><span className="headerStaff">Staff</span><strong>QL</strong></strong></h3>
          <div className="header">
          <h5 className="searchBar">Search by name, role, or department!</h5>
          <input 
            placeholder="Name, Role, or Department"
            type="text" 
            className="searchInput" 
            onChange={event => this.setState({ text: event.target.value })} 
          />
          </div>
        </div>
        <h5 className="showingResults">
          Showing results for:&nbsp;&nbsp;<span className="searchText">{this.state.text}</span>
        </h5>
        <Link to="staff/new"><h5 className="addNewStaff"><strong>Add New Staff Member</strong></h5></Link>
        {(this.state.text.length === 0) ? this.renderStaffMembers() : this.filterStaffMembers()}
      </div>
    );
  }
}

const mutation = gql`
  mutation DeleteStaff($id: ID!) {
    deleteStaff(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(
  graphql(query)(StaffList)
);