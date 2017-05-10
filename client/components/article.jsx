// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

const Article = ({ current }) => (
  <div>
    <h2>{current.title}</h2>
    <p>{current.body}</p>
  </div>
);

const mapStateToProps = (state) => {
  return {
    current: state.current
  };
};

export default connect(mapStateToProps)(Article);
