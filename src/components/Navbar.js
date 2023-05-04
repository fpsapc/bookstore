import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div>
      <h2>Bookstore CMS</h2>
      <ul>
        <li><Link to="/">Books</Link></li>
        <li><Link to="categories">Categories</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
