// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ArticleList = ({ articles }) => {

  const renderArticles = () => articles.map((article, index) => (
    <tr key={index}>
      <td>{article.createdAt}</td>
      <td><Link to={`/article/${article._id}`}>{article.title}</Link></td>
    </tr>
  ));

  return articles.length ? (
    <table>
      <tbody>
        <tr>
          <th>Date Added</th>
          <th>Article Title</th>
        </tr>
        {renderArticles()}
      </tbody>
    </table>
  ) : (
    <h3>There aren't any articles yet. Click the link above to add one.</h3>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: state.articles
  };
};

export default connect(mapStateToProps)(ArticleList);
