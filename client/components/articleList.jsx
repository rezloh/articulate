// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// DEPENDENCIES
import axios from 'axios';
// ACTIONS
import { setCurrent, loadArticles } from '../actions/actions.jsx';

class ArticleList extends React.Component {
  constructor() {
    super ()
    this.state = { loading: true }
  };

  componentWillMount() {
    axios.get('/api/article')
    .then(response => {
      this.props.dispatch(loadArticles(response.data));
      this.setState({ loading: false });
    })
    .catch(err => {
      console.error(err);
    });
  };

  renderArticles () {
    return this.props.articles.map((article, index) => (
      <tr key={index}>
        <td>{article.createdAt.slice(0, 10)}</td>
        <td>&emsp;</td>
        <td>
          <Link
            to={`/article/${article._id}`}
            onClick={() => this.props.dispatch(setCurrent(article))}
          >{article.title}
          </Link>
        </td>
      </tr>
    ));
  };

  render () {
    return this.props.articles.length ? (
      <table>
        <tbody>
          <tr>
            <th>Date Added</th>
            <th>&emsp;</th>
            <th style={{textAlign:"left"}}>Article Title</th>
          </tr>
          {this.renderArticles()}
        </tbody>
      </table>
    ) : (
      this.state.loading ? (
        null
      ) : (
        <h4>There aren't any articles yet. Click the link above to add one.</h4>
      )
    );
  };
};

const mapStateToProps = (state) => {
  return {
    articles: state.articles
  };
};

export default connect(mapStateToProps)(ArticleList);
