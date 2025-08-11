import React, { useState } from 'react';
import Header from '../components/Header'; // Reusing the Header component for consistency across pages
import Footer from '../components/Footer'; // Reusing the Footer component

const brand = '#e63631';

export default function LoginPage() {
  // State to store form data (email and password) and error message
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(''); // State to store any error messages

  // Handle form input changes (email and password fields)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value, // Dynamically update either email or password based on the field name
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    // Simple validation to ensure both fields are filled
    if (!formData.email || !formData.password) {
      setError('Both fields are required.');
      return; // Exit the function if validation fails
    }

    // Validate email format using a regular expression
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Ensure password is at least 6 characters long
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    //  log data
    console.log('Logged in with:', formData);
    setError(''); // Clear any previous errors upon successful login
  };

  return (
    <div>
      <Header /> {/* Reusing the Header component for the same header across pages */}

      {/* Login Page Section */}
      <section style={{ padding: '2rem', backgroundColor: '#f5f5f5' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: brand }}>
          Login to StreamHub
        </h2>

        {/* Login Form */}
        <form
          onSubmit={handleSubmit} // Trigger the handleSubmit function when the form is submitted
          style={{
            maxWidth: '500px', // Limit form width for better design
            margin: '0 auto', // Center the form horizontally
            backgroundColor: '#fff', // White background for the form
            padding: '2rem', // Padding inside the form
            borderRadius: '10px', // Rounded corners for the form
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Light shadow for a soft elevation effect
          }}
        >
          {/* Display error message if validation fails */}
          {error && (
            <div
              style={{
                backgroundColor: '#f8d7da', // Light red background for error message
                color: '#721c24', // Dark red text for error message
                padding: '1rem',
                borderRadius: '5px',
                marginBottom: '1rem',
              }}
            >
              {error} {/* Show the error message */}
            </div>
          )}

          {/* Email Input */}
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email" // Nsme attribute to identify the field
              value={formData.email}
              onChange={handleChange} // Handle the change when user types in the fiel
              placeholder="Enter your email"
              style={{
                width: '100%', // Full width input field
                padding: '0.8rem', // Padding for the input field
                fontSize: '1rem', // Standard font size
                borderRadius: '5px', // Rounded corners for input
                border: '1px solid #ccc', // Light border for the input field
              }}
            />
          </div>

          {/* Password Input */}
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              style={{
                width: '100%',
                padding: '0.8rem',
                fontSize: '1rem',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </div>

          {/* Submit Button */}
          <div style={{ textAlign: 'center' }}>
            <button
              type="submit"
              style={{
                backgroundColor: brand,
                color: '#fff',
                padding: '0.8rem 2rem',
                border: 'none',
                fontSize: '1rem',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Login
            </button>
          </div>
        </form>
      </section>

      <Footer /> {/* Reusing the Footer component for the same footer across pages */}
    </div>
  );
}
