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
  componentWillMount() {
    if (this.props.title && this.props.role && this.props.department) {
      this.setState({
        name: this.props.title,
        role: this.props.role,
        department: this.props.department
      });
    }
  }
  onSubmit(event) {
    event.preventDefault();
    (this.props.addStaff && !this.props.editInfo) ?  
    this.props.addStaff(this.state.name, this.state.role, this.state.department)
    : this.props.editInfo(this.props.id, this.state.name, this.state.role, this.state.department);
  }
  render() {
    return (
      <div>
        {/* <Link className="cancelButton" to="/">Cancel</Link> */}
        <form onSubmit={this.onSubmit.bind(this)}>
          <h5 className="tealish"><strong>Name</strong></h5>
          <input
            className="inputStyle"
            placeholder="Winklevoss Twins"
            onChange={event => this.setState({ name: event.target.value })}
            defaultValue={this.state.name}
          />
          <h5 className="tealish"><strong>Role</strong></h5>
          <input 
            className="inputStyle"
            placeholder="Whiners"
            onChange={event => this.setState({ role: event.target.value })}
            defaultValue={this.state.role}
          />
          <h5 className="tealish"><strong>Department</strong></h5>
          <input 
            className="inputStyle"
            placeholder="Harvard Business"
            onChange={event => this.setState({ department: event.target.value })}
            defaultValue={this.state.department}
          />
          <br /><br />
          <button className="submitButton" onClick={this.onSubmit.bind(this)}>Submit</button>
          <Link to="/"><button className="cancelButton">Cancel</button></Link>
        </form>
      </div>
    );
  }
}

export default Form;