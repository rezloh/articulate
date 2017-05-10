// REACT/REDUX
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div>
    <Link to="/">All Articles</Link>
    <Link to="/submit">Submit an Article</Link>
  </div>
);

export default Nav;
