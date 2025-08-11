import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const brand = '#e63631'; // Brand color for consistent styling

export default function DetailsPage() {
  const { type, id } = useParams(); // Extract the type (movie or tv) and ID from URL params
  const [item, setItem] = useState(null); // State to store the movie or tv show details

  useEffect(() => {
    // Fetch the details of the selected item (either a movie or tv show)
    fetch(`http://localhost:5001/${type}s/${id}`) // Dynamic API endpoint based on type (movies or tv shows)
      .then(res => res.json()) // Parse the response as JSON
      .then(data => setItem(data)) // Store the fetched data in the state
      .catch(err => {
        console.error("Error fetching details:", err); // Handle any errors while fetching data
        setItem(null); // If fetch fails, set item to null and show loading message
      });
  }, [type, id]); // Re-fetch when the type or id in the URL changes

  if (!item) return <div>Loading...</div>; // Show a loading message while data is being fetched

  return (
    <section style={{ padding: '2rem', backgroundColor: '#f5f5f5' }}>
      <div style={{ display: 'flex', gap: '2rem', flexDirection: 'row', marginBottom: '2rem' }}>

        {/* Small Poster on the Left */}
        <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
          <img
            src={item.poster} // Use the poster from the fetched data
            alt={item.title} // Alt text for accessibility
            style={{
              width: '100%', // Full width of the container
              maxWidth: '200px', // Limit the width to 200px
              objectFit: 'cover', // Ensure the image covers the area without distortion
              borderRadius: '10px', // Rounded corners for a smooth look
              border: `3px solid ${brand}`,
            }}
          />
          <h3 style={{ marginTop: '1rem', fontWeight: 'bold', color: '#333' }}>{item.title}</h3> {/* Display the title of the movie/tv show */}
        </div>

        {/* Content (Large Landscape Poster, Synopsis, Rent/Buy prices) */}
        <div style={{ flex: '2 1 600px' }}>
          {/* Use landscape version of the poster (ensure it's available in db.json) */}
          <img
            src={item.landscapePoster} // Use the landscape poster for a larger view
            alt={item.title} // Alt text for accessibility
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '500px',
              objectFit: 'cover',
              borderRadius: '10px',
              border: `3px solid ${brand}`,
            }}
          />

          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{ color: brand, fontWeight: 'bold' }}>Synopsis:</h4>
            <p>{item.synopsis}</p> {/* Display the movie/tv show synopsis */}

            <div style={{ marginTop: '2rem' }}>
              <h4 style={{ color: brand, fontWeight: 'bold' }}>Pricing:</h4>
              <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <div>
                  <span style={{ fontWeight: 'bold', color: '#333' }}>Rent: </span>
                  <span style={{ color: '#333' }}>${item.rentPrice}</span> {/* Display the rent price */}
                </div>
                <div>
                  <span style={{ fontWeight: 'bold', color: '#333' }}>Buy: </span>
                  <span style={{ color: '#333' }}>${item.buyPrice}</span> {/* Display the buy price */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Link to go back to the movie/tv show listings */}
      <a href="/list" style={{ color: brand, textDecoration: 'none', fontWeight: 'bold' }}>Back to Browse</a>
    </section>
  );
}
