import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ backgroundColor: '#e63631', color: '#fff', padding: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        {/* Logo and Title Section */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* StreamHub Logo */}
          <img
            src="/images/streamhub-logo.png"
            alt="StreamHub Logo" // Accessibility: Descriptive alt text for the logo
            style={{ width: '50px', marginRight: '1rem' }} // Style for the logo (width and spacing)
          />
          <h1 style={{ margin: 0 }}>StreamHub</h1> {/* Main title of the website */}
        </div>

        {/* Navigation Links */}
        <nav>
          {/* Home Link */}
          <Link
            to="/" // Navigates to the home page
            style={{ color: 'white', marginRight: '1rem', textDecoration: 'none', fontWeight: '500' }}
          >
            Home
          </Link>

          {/* All Movies and Shows Link */}
          <Link
            to="/list" // Navigates to the all listings page
            style={{ color: 'white', marginRight: '1rem', textDecoration: 'none', fontWeight: '500' }}
          >
            All Listings
          </Link>

          {/* Login Button */}
          <Link to="/login">
            <button
              style={{
                backgroundColor: 'white', // White background for contrast
                color: '#e63631', // Brand color
                border: 'none', // Remove default button border
                padding: '0.4rem 0.8rem', // Padding for the button
                borderRadius: '6px', // Rounded corners for the button
                cursor: 'pointer', // Pointer cursor to indicate it's clickable
                fontWeight: '500', // Medium font weight for a clean look
              }}
            >
              Login
            </button>
          </Link>

          {/* Sign Up Button */}
          <Link to="/register">
            <button
              style={{
                backgroundColor: 'white', // White background for contrast
                color: '#e63631', // Brand color
                border: 'none',
                padding: '0.4rem 0.8rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '500',
                marginLeft: '0.5rem', // Add space between Login and Sign Up buttons
              }}
            >
              Sign Up
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;