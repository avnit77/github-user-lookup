
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import UserForm from './form/UserForm'
import UserDetail from './detail/UserDetail';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={UserForm} />
        <Route path="/:id" component={UserDetail} />
      </Switch>
    </Router>
  );
}