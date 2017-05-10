// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

const ArticleList = ({ articles }) => {

  const renderArticles = () => articles.map((article, index) => (
    <tr>
      <td>{article.createdAt}</td>
      <td>{article.title}</td>
    </tr>
  ));

  return articles.length ? (
    <table>
      <tr>
        <th>Date Added</th>
        <th>Article Title</th>
      </tr>
      {renderArticles()}
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
