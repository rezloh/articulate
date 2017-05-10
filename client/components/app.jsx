// REACT/REDUX
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

// COMPONENTS
import Nav from './nav.jsx';
import ArticleList from './articleList.jsx';
import Article from './article.jsx';
import Submit from './submit.jsx';
import { loadArticles } from '../actions/actions.jsx';

class App extends React.Component {

  componentWillMount() {
    axios.get('/api/article')
    .then(response => {
      this.props.dispatch(loadArticles(response.data));
    })
    .catch(err => {
      console.error(err);
    });
  };

  render () {
    return (
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
  };
};

export default connect()(App);
