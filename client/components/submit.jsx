// REACT/REDUX/AXIOS
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

// ACTIONS
import { submitArticle } from '../actions/actions.jsx';

const Submit = ({ submission, dispatch }) => (
  <div>
    <input
      type="text"
      name="title"
      placeholder="Article title"
      value={submission.title}
      onChange={(e) => dispatch(submitArticle({ title: e.target.value }))}
    />
    <textarea
      name="body"
      placeholder="Body text goes here"
      value={submission.body}
      onChange={(e) => dispatch(submitArticle({ body: e.target.value }))}
    />
    <button
      type="button"
      name="Submit"
      onClick={() => submit(submission, dispatch)}
    >Submit Article</button>

  </div>
);

const submit = (article, dispatch) => {
  axios.post('/api/article', article)
    .then(response => {
      dispatch(submitArticle({ title: '', body: '' }));
    })
    .catch(err => {
      console.error(err);
    });
};

const mapStateToProps = (state) => {
  return {
    submission: state.submission
  };
};

export default connect(mapStateToProps)(Submit);