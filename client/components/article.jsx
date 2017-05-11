// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';
import { editArticle } from '../actions/actions.jsx';
import axios from 'axios';

const Article = ({ current, dispatch }) => {

  return current.editing ? (
    <div>
      <input
        type="text"
        name="title"
        value={current.title}
        onChange={(e) => dispatch(editArticle({ title: e.target.value }))}
      />
      <textarea
        name="body"
        value={current.body}
        onChange={(e) => dispatch(editArticle({ body: e.target.value }))}
      />
      <button
        type="button"
        name="Save"
        onClick={() => submitEdit(current, dispatch)}
      >Save</button>
    </div>

  ) : (
    <div>
      <h2>{current.title}</h2>
      <p>{current.body}</p>
      <br />
      <button
        type="button"
        name="Edit"
        onClick={() => dispatch(editArticle({ editing: true }))}
      >Edit Article</button>
    </div>
  )
};

const submitEdit = (current, dispatch) => {
  axios.put(`/api/article/${current._id}`, current)
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.error(err);
    });
};

const mapStateToProps = (state) => {
  return {
    current: state.current
  };
};

export default connect(mapStateToProps)(Article);
