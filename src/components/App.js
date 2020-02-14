
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import PostsPage from './posts/PostsPage';
import PostDetail from './detail/PostDetail';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PostsPage} />
        <Route path="/:id" component={PostDetail} />
      </Switch>
    </Router>
  );
}