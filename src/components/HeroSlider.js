import React, { useState } from 'react';

// Define the slides with image URLs and titles
const slides = [
  {
    image: 'https://image.tmdb.org/t/p/original/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg',
    title: 'Cruella (2021)'
  },
  {
    image: 'https://i0.wp.com/thisisfilm.com/wp-content/uploads/2021/12/dune-2021-movie_kqdx.jpeg?fit=1920%2C1080&ssl=1',
    title: 'Dune (2021)'
  },
  {
    image: 'https://image.tmdb.org/t/p/original/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg',
    title: 'Sonic The Hedgehog (2020)'
  },
  {
    image: 'https://cdn.europosters.eu/image/hp/70553.jpg',
    title: 'Loki (2021)'
  }
];

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0); // Set the initial slide to be the first one

  // Go to the next slide, loop back to the first slide after the last one
  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length); // Move to the next slide, loop back at the end
  };

  // Go to the previous slide, loop back to the last one after the first one
  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length); // Move to the previous slide, loop back at the start
  };

  return (
    <section
      style={{
        position: 'relative',
        height: '400px', // Height of the hero section
        margin: '1.5rem 0 2rem', // Add a gap from the header
        border: '4px solid #e63631', // Add a red border to match the brand
        borderRadius: '12px', // Rounded corners for the hero section
        overflow: 'hidden' // Ensure content doesn't overflow the container
      }}
    >
      {/* Loop through the slides and display each one */}
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url(${slide.image})`, // Set the background image of each slide
            backgroundSize: 'cover', // Ensure the image covers the entire area
            backgroundPosition: 'center', // Center the image
            transition: 'opacity 0.5s ease-in-out', // Smooth transition for opacity change
            opacity: currentSlide === index ? 1 : 0, // Only show the current slide
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        >
          {/* Display the title of the current slide */}
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background for readability
            color: 'white', // White text color
            padding: '10px 20px',
            borderRadius: '5px',
            fontSize: '1.2rem'
          }}>
            {slide.title} {/* Title of the movie or TV show */}
          </div>
        </div>
      ))}

      {/* Left Navigation Button (Previous Slide) */}
      <button
        onClick={goToPrev} // Navigate to the previous slide
        style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)', // Vertically center the button
          background: 'rgba(0,0,0,0.5)', // Semi-transparent background
          color: 'white', // White text color
          border: 'none',
          padding: '10px',
          cursor: 'pointer', // Pointer cursor to indicate clickability
          fontSize: '1.5rem', // Larger font size for visibility
          borderRadius: '50%', // Round button shape
        }}
      >
        ‹ {/* Left arrow symbol for previous slide */}
      </button>

      {/* Right Navigation Button (Next Slide) */}
      <button
        onClick={goToNext} // Navigate to the next slide
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)', // Vertically center the button
          background: 'rgba(0,0,0,0.5)', // Semi-transparent background
          color: 'white', // White text color
          border: 'none',
          padding: '10px',
          cursor: 'pointer', // Pointer cursor to indicate clickability
          fontSize: '1.5rem', // Larger font size for visibility
          borderRadius: '50%', // Round button shape
        }}
      >
        › {/* Right arrow symbol for next slide */}
      </button>
    </section>
  );
}

export default HeroSlider;
