import React, { useEffect, useState } from 'react';

function FeaturedMovies() {
  // State to store the list of movies fetched from the API
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch the movie data from the API (running on port 5001)
    fetch('http://localhost:5001/movies')
      .then(res => res.json())  // Parse the response as JSON
      .then(data => setMovies(data))  // Store the fetched movies in the state
      .catch(err => console.error("Error fetching movies:", err));  // Log any errors
  }, []);  // Empty array means this effect runs only once when the component mounts

  return (
    <section style={{ padding: '2rem' }}>
      <h2
        style={{
          marginBottom: '1rem',
          color: '#e63631', // Set the color to match the brand
        }}
      >
        Featured Movies
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', // Make the grid responsive
          gap: '1.5rem', // Space between the grid items
        }}
      >
        {/* Map through the first 5 movies in the list and display them */}
        {movies.slice(0, 5).map(movie => (
          <div
            key={movie.id}
            style={{
              border: '3px solid #e63631', // Add a red border to each movie card
              borderRadius: '10px', // Rounded corners for a smooth look
              overflow: 'hidden', // Ensure no content overflows the border
              background: '#fff', // White background for the movie cards
              textAlign: 'center', // Center the text
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)', // Add a subtle shadow for depth
              transition: 'transform 0.2s ease, box-shadow 0.2s ease', // Smooth transitions for hover effects
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.03)'; // Slightly enlarge the card on hover
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.2)'; // Enhance the shadow on hover
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)'; // Reset the scale when mouse leaves
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'; // Reset the shadow when mouse leaves
            }}
          >
            <img
              src={movie.poster}
              alt={movie.title} // Add an alt attribute for accessibility
              style={{
                width: '100%', //  image fill the container width
                height: '350px', // height for the image
                objectFit: 'cover', // Ensure the image covers the area properly
                borderRadius: '8px 8px 0 0', // Rounded top corners
              }}
            />
            <h3 style={{ padding: '0.5rem', color: '#333' }}>{movie.title}</h3> {/* Display the movie title */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedMovies;