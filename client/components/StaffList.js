import React, { Component } from 'react';
import StaffMember from './StaffMember';

class StaffList extends Component {
  renderStaffMembers() {
    // return (
    //   this.props
    // )
  }
  render() {
    return (
      <div>
        <h3>Staff List</h3>
        <StaffMember />
      </div>
    );
  }
}

export default StaffList;