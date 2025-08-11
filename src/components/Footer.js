import React from 'react';

function Footer() {
  // Style for spacing out list items in the footer
  const listItemStyle = { marginBottom: '10px' };

  return (
    <footer style={{ backgroundColor: '#e63631', color: '#fff', padding: '2rem 0' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between', // Distribute space evenly between sections
        flexWrap: 'wrap', // Ensure items wrap on smaller screens
        padding: '0 2rem', // Padding on the left and right
      }}>
        {/* Left Section: Menu Items (e.g., Watch, Movies, TV, Free) */}
        <div style={{ flex: 1, minWidth: '200px' }}>
          <h3>Watch</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {/* List items for the 'Watch' section */}
            <li style={listItemStyle}>Spotlight</li>
            <li style={listItemStyle}>Movies</li>
            <li style={listItemStyle}>TV</li>
            <li style={listItemStyle}>Free</li>
          </ul>
        </div>

        {/* Middle Section: Account Settings */}
        <div style={{ flex: 1, minWidth: '200px' }}>
          <h3>My Account</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {/* List items for the 'My Account' section */}
            <li style={listItemStyle}>My Hub</li>
            <li style={listItemStyle}>Account</li>
            <li style={listItemStyle}>Settings</li>
            <li style={listItemStyle}>Manage Devices</li>
          </ul>
        </div>

        {/* Right Section: Features */}
        <div style={{ flex: 1, minWidth: '200px' }}>
          <h3>Features</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {/* List items for the 'Features' section */}
            <li style={listItemStyle}>Lists</li>
            <li style={listItemStyle}>Family</li>
            <li style={listItemStyle}>Disc to Digital</li>
            <li style={listItemStyle}>Instawatch</li>
            <li style={listItemStyle}>Movies Anywhere</li>
          </ul>
        </div>
      </div>

      {/* Social Media Links */}
      <div style={{
        display: 'flex',
        justifyContent: 'center', // Center the social media icons horizontally
        gap: '1.5rem', // Space between the icons
        padding: '1rem 0', // Padding above and below the icons
      }}>
        {/* LinkedIn Icon */}
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/500px-LinkedIn_logo_initials.png" alt="LinkedIn" style={{ width: '30px', height: '30px' }} />
        </a>

        {/* Twitter Icon */}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1200px-Logo_of_Twitter.svg.png" alt="Twitter" style={{ width: '30px', height: '30px' }} />
        </a>

        {/* Facebook Icon */}
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="Facebook" style={{ width: '30px', height: '30px' }} />
        </a>

        {/* YouTube Icon */}
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png" alt="YouTube" style={{ width: '30px', height: '30px' }} />
        </a>
      </div>

      {/* Copyright Notice */}
      <div style={{ textAlign: 'center', padding: '1rem', fontSize: '0.9rem' }}>
        <p>© 2025 StreamHub. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;