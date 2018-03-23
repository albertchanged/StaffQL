import React, { Component } from 'react';
import { Link } from 'react-router';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import fetchStaffMember from '../queries/fetchStaffMember';

class StaffMember extends Component {
  deleteStaff(id) {
    this.props.deleteStaff(id);
  }
  render() {
    return (
      <div>
        <div className="staffContainer collection-item">
          <h5 className="staffMemberTitle"><strong>{this.props.title}</strong></h5>
          <h6 className="staffMemberInfo"><strong><span className="staffInfo">Role:</span></strong>&nbsp;&nbsp;{this.props.role}</h6>
          <h6 className="staffMemberInfo"><strong><span className="staffInfo">Department:</span></strong>&nbsp;&nbsp;{this.props.department}</h6>
        </div>
        <div className="staffButtons">
        <Link 
          to={{ pathname: `/staff/edit/${this.props.id}`, 
          state: { 
            name: this.props.title, role: this.props.role, department: this.props.department }
          }}
          className="editInfoButton"
        >
          Edit Info
        </Link>
        <br />
        <i
          className="material-icons deleteButton"
          onClick={() => this.deleteStaff(this.props.id)}
        >
          delete
        </i>
        </div>
      </div>
    );
  }
}

export default StaffMember;