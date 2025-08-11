import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const brand = '#e63631'; 

export default function ListPage() {
  const [items, setItems] = useState([]); // State to store all movies and TV shows

  useEffect(() => {
    // Fetch both movies and TV shows from the API simultaneously
    Promise.all([
      fetch('http://localhost:5001/movies').then(r => r.json()), // Fetch movies data
      fetch('http://localhost:5001/tvshows').then(r => r.json()) // Fetch TV shows data
    ])
      .then(([movies, tvshows]) => {
        // Combine movies and TV shows into a single array and add a "type" property to distinguish them
        const withType = [
          ...movies.map(m => ({ ...m, type: 'movie' })),
          ...tvshows.map(t => ({ ...t, type: 'tvshow' }))
        ];

        // Sort the items alphabetically by title for better organization
        withType.sort((a, b) => a.title.localeCompare(b.title));

        // Set the items state to the combined and sorted list
        setItems(withType);
      })
      .catch(err => console.error('List fetch error:', err)); // Log any fetch errors
  }, []); // The empty array means this effect runs only once when the component mounts

  return (
    <section style={{ padding: '2rem' }}>
      {/* Header Section */}
      <header style={{ marginBottom: '1.25rem' }}>
        <h2 style={{ margin: 0, color: brand }}>Browse Movies & TV</h2>
        <p style={{ margin: '6px 0 0', color: '#555' }}>
          Click any poster to see details.
        </p>
      </header>

      {/* Grid Layout for Movies and TV Shows */}
      <div
        style={{
          display: 'grid',
          gap: '1.25rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', // Responsive grid layout
        }}
      >
        {/* Map through each item (movie or TV show) */}
        {items.map(item => (
          <Link
            key={`${item.type}-${item.id}`} // Unique key based on type and id
            to={`/details/${item.type}/${item.id}`} // Navigate to the details page when the item is clicked
            style={{ textDecoration: 'none', color: 'inherit' }} // Remove default link styles
            aria-label={`${item.title} details`} // Accessibility: descriptive label for screen readers
          >
            {/* Movie/TV Show Card */}
            <div
              style={{
                border: `3px solid ${brand}`, // Red border to match the brand color
                borderRadius: 12, 
                background: '#fff',
                overflow: 'hidden', 
                boxShadow: '0 4px 12px rgba(0,0,0,.12)', 
                transition: 'transform .18s ease, box-shadow .18s ease',
                height: '460px', 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,.12)';
              }}
            >
              {/* Poster Image of the Movie or TV Show */}
              <img
                src={item.poster} // Use the poster image from the item
                alt={item.title} // Alt text for accessibility
                style={{
                  width: '100%', // Make the image fill the width of the container
                  height: '350px',
                  objectFit: 'cover', // Ensure the image covers the entire area without distortion
                  borderRadius: '8px 8px 0 0', // Rounded top corners for the image
                }}
              />
              {/* Movie/TV Show Title */}
              <div style={{ padding: '.6rem .8rem' }}>
                <div style={{ fontWeight: 700 }}>{item.title}</div> {/* Bold title for visibility */}
                {/* Display the type (Movie or TV Show) */}
                <div style={{ fontSize: 12, color: '#777', marginTop: 2 }}>
                  {item.type === 'movie' ? 'Movie' : 'TV Show'} {/* Show the type (either movie or TV show) */}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
