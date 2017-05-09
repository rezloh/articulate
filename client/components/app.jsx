// REACT/REDUX
import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { connect } from 'react-redux';

// COMPONENTS
import Nav from './nav.jsx';
import Article from './article.jsx';
import Submit from './submit.jsx';

const routes = (
  <div>
    <Route path="/" component={Nav} />
    <Route path="/article/:id" component={Article} />
    <Route path="/submit" component={Submit} />
  </div>
);

const App = () => {
  return (
    <Router history={hashHistory} />
      <div>
        <Nav />
      { routes }
      </div>
    </Router>
  );
};

export default connect(App);
