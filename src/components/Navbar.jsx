import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaLeaf,
  FaUserPlus,
  FaSignInAlt,
  FaPlusSquare,
  FaHome,
  FaShoppingCart,
  FaSun,
  FaMoon,
  FaSearch
} from 'react-icons/fa';

export const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const totalQty = 3; // Replace with your actual cart logic

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-light');
  };

  return (
    <header className={`shadow-sm border-bottom ${darkMode ? 'bg-dark text-light' : 'bg-light'}`}>
      <nav className="navbar navbar-expand-md container py-2">
        {/* Brand */}
        <Link to="/" className={`navbar-brand fw-bold d-flex align-items-center gap-2 ${darkMode ? 'text-warning' : 'text-success'}`}>
          <FaLeaf className="fs-4" />
          <span>African outfits</span>
        </Link>

        {/* Toggle for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto d-flex align-items-center gap-3">

            {/* Links */}
            <li className="nav-item">
              <Link to="/" className="nav-link d-flex align-items-center gap-1">
                <FaHome /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link d-flex align-items-center gap-1">
                <FaUserPlus /> Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signin" className="nav-link d-flex align-items-center gap-1">
                <FaSignInAlt /> Sign In
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/addproduct" className="nav-link d-flex align-items-center gap-1">
                <FaPlusSquare /> Add Product
              </Link>
            </li>

            {/* Dark Mode Toggle */}
            <li className="nav-item">
              <button className="btn btn-sm btn-outline-secondary" onClick={toggleDarkMode}>
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="d-flex ms-md-3 mt-3 mt-md-0" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              className="form-control me-2"
              placeholder="Search your choice..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="btn btn-success">
              <FaSearch />
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
