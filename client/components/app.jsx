// REACT/REDUX
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
// COMPONENTS
import Nav from './nav.jsx';
import ArticleList from './articleList.jsx';
import Article from './article.jsx';
import Submit from './submit.jsx';

const App = () => (
  <div>
    <BrowserRouter>
      <div>
        <Nav />
        <Route exact path="/" component={ArticleList} />
        <Route path="/article/:id" component={Article} />
        <Route path="/submit" component={Submit} />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
