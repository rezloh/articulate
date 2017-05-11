// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrent } from '../actions/actions.jsx';
import { loadArticles } from '../actions/actions.jsx';
import axios from 'axios';

class ArticleList extends React.Component {

  componentWillMount() {
    axios.get('/api/article')
    .then(response => {
      this.props.dispatch(loadArticles(response.data));
    })
    .catch(err => {
      console.error(err);
    });
  };

  renderArticles () {
    return this.props.articles.map((article, index) => (
      <tr key={index}>
        <td>{article.createdAt}</td>
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
            <th>Article Title</th>
          </tr>
          {this.renderArticles()}
        </tbody>
      </table>
    ) : (
      <h3>There aren't any articles yet. Click the link above to add one.</h3>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    articles: state.articles
  };
};

export default connect(mapStateToProps)(ArticleList);
