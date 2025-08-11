import React, { useState } from 'react';
import Header from '../components/Header'; // Reuse header component
import Footer from '../components/Footer'; // Reuse footer component

const brand = '#e63631';

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(''); // Error state to show validation messages

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value, // Dynamically update the specific field (name, email, or password)
    }));
  };

  // Handle form submission with validation
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    // Validation checks
    if (!formData.name || !formData.email || !formData.password) {
      setError('All fields are required.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    //  log data
    console.log('Form submitted:', formData);
    setError(''); // Clear any previous errors
  };

  return (
    <div>
      <Header /> {/* Include header for consistency */}

      <section style={{ padding: '2rem', backgroundColor: '#f5f5f5' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: brand }}>
          Register for StreamHub
        </h2>

        {/* Registration form */}
        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: '500px',
            margin: '0 auto',
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Error message box */}
          {error && (
            <div
              style={{
                backgroundColor: '#f8d7da',
                color: '#721c24',
                padding: '1rem',
                borderRadius: '5px',
                marginBottom: '1rem',
              }}
            >
              {error}
            </div>
          )}

          {/* Name input */}
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              style={{
                width: '100%',
                padding: '0.8rem',
                fontSize: '1rem',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </div>

          {/* Email input */}
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              style={{
                width: '100%',
                padding: '0.8rem',
                fontSize: '1rem',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </div>

          {/* Password input */}
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

          {/* Submit button */}
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
              Register
            </button>
          </div>
        </form>
      </section>

      <Footer /> {/* Include footer for consistency */}
    </div>
  );
}
