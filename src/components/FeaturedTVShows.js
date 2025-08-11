import React, { useEffect, useState } from 'react';

function FeaturedTVShows() {
  // State to store the list of TV shows fetched from the API
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    // Fetch the TV shows data from the API hosted at localhost:5001
    fetch('http://localhost:5001/tvshows')
      .then(res => res.json())  // Parse the response as JSON
      .then(data => setTvShows(data))  // Store the fetched TV shows in the state
      .catch(err => console.error("Error fetching TV shows:", err));  // Log any fetch errors
  }, []);  // The empty array ensures this effect runs only once when the component mounts

  return (
    <section style={{ padding: '2rem' }}>
      { }
      <h2
        style={{
          marginBottom: '1rem',
          color: '#e63631',  // Set the color to match the brand
        }}
      >
        Featured TV Shows
      </h2>

      {/* Grid Layout for the TV shows */}
      <div
        style={{
          display: 'grid',  // Enable grid layout
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', // Create responsive grid columns
          gap: '1.5rem', // Space between the grid items
        }}
      >
        {/* Loop through the first 5 TV shows in the state and display them */}
        {tvShows.slice(0, 5).map(show => (
          <div
            key={show.id}  // Unique key for each TV show (helps React efficiently re-render)
            style={{
              border: '3px solid #e63631',
              borderRadius: '10px',
              overflow: 'hidden',  // Ensure content doesn't overflow the card
              textAlign: 'center',  // Center-align the content inside the card
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',  // Light shadow for card depth
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',  // Smooth transition for hover effect
            }}
            onMouseEnter={e => {
              // Increase the size and shadow of the card when the mouse hovers over it
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={e => {
              // Reset the size and shadow when the mouse leaves the card
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
            }}
          >
            {/* Image of the TV show */}
            <img
              src={show.poster}  // Display the TV show's poster image
              alt={show.title}  // Alt text for the image (accessibility)
              style={{
                width: '100%',  // Make the image fill the width of the card
                height: '350px',
                objectFit: 'cover',
                borderRadius: '8px 8px 0 0',
              }}
            />
            {/* TV show title */}
            <h3 style={{ padding: '0.5rem', color: '#333' }}>{show.title}</h3>  {/* Display the show’s title */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedTVShows;
