import React, { Component } from 'react';
import StaffMember from './StaffMember';
import { Link } from 'react-router';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import query from '../queries/fetchStaff';

class StaffList extends Component {

  renderStaffMembers() {
    // console.log(this.props.data.staff);
    return this.props.data.staff && this.props.data.staff.map(({ id, title, role, department }) => {
      return (
        <StaffMember key={id} id={id} title={title} role={role} department={department} />
        // <li key={id} className="collection-item">
        //   <Link to={`/staff/${id}`}>
        //     {title}
        //   </Link>
        //   <h3>{role}</h3>
        //   <h3>{department}</h3>
        //   {/* <i
        //     className="material-icons"
        //     onClick={() => this.onSongDelete(id)}
        //   >
        //     delete
        //   </i> */}
        // </li>
      );
    });
  }
  render() {
    console.log('Data', this.props.data.staff);
    if (!this.props.data.staff) {
      return <div>Fetching staff members</div>;
    }
    return (
      <div>
        <h3>Staff List</h3>
        <Link to="staff/new">Add New Staff</Link>
        {this.renderStaffMembers()}
      </div>
    );
  }
}

export default graphql(query)(StaffList);