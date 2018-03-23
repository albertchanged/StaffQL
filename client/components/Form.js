import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link, hashHistory } from 'react-router';
import fetchStaff from '../queries/fetchStaff';

class Form extends Component {
  constructor(props) {
    super(props);
    console.log('In Form', this.props.id);
    this.state = {
      role: '',
      department: '',
      name: ''
    }
  }
  onSubmit(event) {
    event.preventDefault();
    (this.props.addStaff && !this.props.editInfo) ?  
    this.props.addStaff(this.state.name, this.state.role, this.state.department)
    : this.props.editInfo(this.props.id, this.state.name, this.state.role, this.state.department);
  }
  render() {
    console.log('In Form render', this.props);
    return (
      <div>
        <Link to="/">Cancel</Link>
        <h3>Information for someone</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <h5>Name</h5>
          <input 
            onChange={event => this.setState({ name: event.target.value })}
            defaultValue={(this.props.title) ? this.props.title : this.state.name}
          />
          <h5>Role</h5>
          <input 
            onChange={event => this.setState({ role: event.target.value })}
            defaultValue={(this.props.role) ? this.props.role : this.state.role}
          />
          <h5>Department</h5>
          <input 
            onChange={event => this.setState({ department: event.target.value })}
            defaultValue={(this.props.department) ? this.props.department : this.state.department}
          />
          <button onClick={this.onSubmit.bind(this)}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form;