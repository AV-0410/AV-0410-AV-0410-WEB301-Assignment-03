import React from 'react';

function ContentSection() {
  // Style for the individual cards that display the actors and movies
  const cardStyle = {
    border: '3px solid #e63631', // Red border 
    borderRadius: '10px', // Rounded corners 
    overflow: 'hidden',
    textAlign: 'center', // Centering content
    background: '#fff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)', // Subtle shadow
    transition: 'transform 0.2s ease, box-shadow 0.2s ease', // Smooth transition on hover
  };

  // Mouse hover effect: scale the card and increase the shadow
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.03)'; // Slightly zoom in
    e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.2)'; // Increase shadow on hover
  };

  // Reset the style when the mouse leaves the card
  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
  };

  // Style for the title of each section
  const titleStyle = {
    textAlign: 'center',
    marginBottom: '1rem', // Space below the title
    color: '#e63631', // Red color to match the theme
    fontSize: '1.8rem', // Larger font size for prominence
    fontWeight: 'bold',
    position: 'relative',
    display: 'inline-block',
  };

  // Underline style for the section titles
  const underlineStyle = {
    position: 'absolute',
    left: 0,
    bottom: '-5px', // Position the underline just below the title
    width: '100%',
    height: '4px',
    backgroundColor: '#e63631', // Red underline
    borderRadius: '2px', // Rounded edges for the underline
  };

  return (
    <section style={{ padding: '2rem 0', backgroundColor: '#f8b5b3' }}>

      {/* Actor's Spotlight Section */}
      <div style={{ textAlign: 'center' }}>
        <h2 style={titleStyle}>
          Actor's Spotlight
          <span style={underlineStyle}></span> {/* Add underline below the title */}
        </h2>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', // Responsive grid layout
        gap: '1.5rem', // Space between the cards
        justifyItems: 'center',
        marginTop: '1rem',
      }}>
        {/* Map over a list of actors and display their images and names */}
        {[
          { name: 'Will Smith', img: 'https://upload.wikimedia.org/wikipedia/commons/5/55/TechCrunch_Disrupt_San_Francisco_2019_-_Day_1_%2848834070763%29_%28cropped%29.jpg' },
          { name: 'Emma Watson', img: 'https://i.pinimg.com/736x/a2/f0/ee/a2f0ee903aab30fb82504daf3b8fbc21.jpg' },
          { name: 'Dwayne Johnson', img: 'https://i.pinimg.com/474x/3a/47/e6/3a47e6762ba8c997f132af94f3a02d12.jpg' }
        ].map((actor, index) => (
          <div
            key={index}
            style={cardStyle} // Apply the card style
            onMouseEnter={handleMouseEnter} // Mouse hover effects
            onMouseLeave={handleMouseLeave} // Reset effects when mouse leaves
          >
            <img
              src={actor.img} // Actor's image
              alt={actor.name} // Alt text for the image
              style={{ width: '100%', height: '350px', objectFit: 'cover' }} // Ensure image covers the space
            />
            <p style={{ padding: '0.5rem', fontWeight: 'bold', color: '#333' }}>{actor.name}</p> {/* Actor's name */}
          </div>
        ))}
      </div>

      {/* Cinema Spotlight Section */}
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h2 style={titleStyle}>
          $3.99 Cinema Spotlight
          <span style={underlineStyle}></span> {/* Underline for the title */}
        </h2>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', // Responsive grid layout
        gap: '1.5rem', // Space between the cards
        justifyItems: 'center',
        marginTop: '1rem',
      }}>
        {/* Map over a list of movies and display their posters and names */}
        {[
          { name: 'Jumanji', img: 'https://m.media-amazon.com/images/I/A1hFzTczzJL.jpg' },
          { name: "Harry Potter and the Sorcerer's Stone", img: 'https://m.media-amazon.com/images/M/MV5BNTU1MzgyMDMtMzBlZS00YzczLThmYWEtMjU3YmFlOWEyMjE1XkEyXkFqcGc@._V1_.jpg' },
          { name: 'Home Alone', img: 'https://m.media-amazon.com/images/I/51OT6SZVnKL._UF894,1000_QL80_.jpg' }
        ].map((movie, index) => (
          <div
            key={index}
            style={cardStyle} // Apply the card style
            onMouseEnter={handleMouseEnter} // Mouse hover effects
            onMouseLeave={handleMouseLeave} // Reset effects when mouse leaves
          >
            <img
              src={movie.img} // Movie poster
              alt={movie.name} // Alt text for the image
              style={{ width: '100%', height: '350px', objectFit: 'cover' }} // Ensure image covers the space
            />
            <p style={{ padding: '0.5rem', fontWeight: 'bold', color: '#333' }}>{movie.name}</p> {/* Movie name */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContentSection;