import React, { Component } from 'react';
import { Link } from 'react-router';
import fetchStaffMember from '../queries/fetchStaffMember';

class StaffMember extends Component {
  render() {
    console.log('Staff member', this.props);
    return (
      <div>
        <h4>{this.props.title}</h4>
        <h6>{this.props.role}</h6>
        <h6>{this.props.department}</h6>
        <Link to={`/staff/edit/${this.props.id}`}>Edit Info</Link>
      </div>
    );
  }
}

export default StaffMember;