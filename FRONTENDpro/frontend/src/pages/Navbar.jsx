import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>My App</h2>

      <div className="nav-links">
        <Link to="/create-post">Create Post</Link>
        <Link to="/feed">Feed</Link>
      </div>
    </nav>
  );
};

export default Navbar;