import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import App from './components/App';
import StaffList from './components/StaffList';
import AddNewStaff from './components/AddNewStaff';
import EditStaff from './components/EditStaff';

const client = new ApolloClient({
  dataIdFromObject: object => object.id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={StaffList} />
          <Route path="staff/new" component={AddNewStaff} />
          <Route path="staff/edit/:id" component={EditStaff} />
        </Route>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);