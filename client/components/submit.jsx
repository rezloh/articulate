// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

const Submit = ({ submit }) => (
  <div>
    <input type="text" name="title" placeholder="Article title" value={submit.title} />
    <textarea name="body" placeholder="Body text goes here" value={submit.body} />
  </div>
);

const mapStateToProps = (state) => {
  return {
    submit: state.submit
  };
};

export default connect(mapStateToProps)(Submit);
