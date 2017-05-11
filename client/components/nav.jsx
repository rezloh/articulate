// REACT/REDUX
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div>
    <Link to="/">All Articles</Link>&emsp;
    <Link to="/submit">Submit an Article</Link>
    <br />
    <br />
  </div>
);

export default Nav;
