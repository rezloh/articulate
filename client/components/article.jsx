// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { editArticle, clearCurrent } from '../actions/actions.jsx';
import { history } from 'history';
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
    current._id ? (
      <div>
        <h2>{current.title}</h2>
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
