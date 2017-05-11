// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// DEPENDENCIES
import axios from 'axios';
// ACTIONS
import { editArticle, clearCurrent } from '../actions/actions.jsx';

const Article = ({ current, dispatch }) => {

  return current.editing ? (
    <div>
      <input
        type="text"
        name="title"
        size="80"
        value={current.title}
        onChange={(e) => dispatch(editArticle({ title: e.target.value }))}
      />
      <br />
      <br />
      <textarea
        name="body"
        rows="20"
        cols="80"
        value={current.body}
        onChange={(e) => dispatch(editArticle({ body: e.target.value }))}
      />
      <br />
      <br />
      <button
        type="button"
        name="Cancel"
        onClick={() => dispatch(editArticle({ editing: false }))}
      >Cancel
      </button>
      <button
        type="button"
        name="Save"
        onClick={() => submitEdit(current, dispatch)}
      >Save</button>
    </div>
  ) : (
    current._id ? (
      <div>
        <h4>{current.title}</h4>
        <p>{current.body}</p>
        <br />
        <button
          type="button"
          name="Edit"
          onClick={() => dispatch(editArticle({ editing: true }))}
        >Edit Article</button>
      <button
        type="button"
        name="Delete"
        onClick={() => deleteArticle(current._id, dispatch)}
      >Delete Article</button>
      </div>
    ) : <Redirect to='/' />
  );
};

const submitEdit = (current, dispatch) => {
  axios.put(`/api/article/${current._id}`, current)
    .then(response => {
      dispatch(editArticle({ editing: false }));
    })
    .catch(err => {
      console.error(err);
    });
};

const deleteArticle = (id, dispatch) => {
  axios.delete(`/api/article/${id}`)
    .then(response => {
      dispatch(clearCurrent());
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
