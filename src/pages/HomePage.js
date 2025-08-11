import React from 'react';
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import FeaturedMovies from '../components/FeaturedMovies';
import FeaturedTVShows from '../components/FeaturedTVShows';
import ContentSection from '../components/ContentSection';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div>
      <Header />
      <HeroSlider />
      <FeaturedMovies />
      <FeaturedTVShows />
      <ContentSection />
      <Footer />
    </div>
  );
}

export default HomePage;
