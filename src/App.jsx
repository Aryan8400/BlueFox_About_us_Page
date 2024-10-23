import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import BusinessInfo from './components/BusinessInfo';
import StatsSection from './components/StatsSection';
import SmeSection from './components/SmeSection';
import QuoteSection from './components/QuoteSection';
import FeaturesSection from './components/FeaturesSection';
import BusinessSection from './components/BusinessSection';
import DownloadSection from './components/DownloadSection';
import Rating from './components/Rating';
import Footer from './components/Footer';
import Blog from './components/Blog'; // Import the Blog component
import GstNews from './components/GstNews'; // Import the GstNews component

const App = () => {
  const location = useLocation(); // Hook to get the current route

  return (
    <>
      <Header />
      <Routes>
        {/* Home route */}
        <Route path="/" element={
          <>
            <Hero />
            <BusinessInfo />
            <StatsSection />
            <SmeSection />
            <QuoteSection />
            <FeaturesSection />
            <BusinessSection />
            <DownloadSection />
            <Rating />
          </>
        } />
        
        {/* About Us route - show all sections as in the home route */}
        <Route path="/about-us" element={
          <>
            <Hero />
            <BusinessInfo />
            <StatsSection />
            <SmeSection />
            <QuoteSection />
            <FeaturesSection />
            <BusinessSection />
            <DownloadSection />
            <Rating />
          </>
        } />

        {/* Blog route */}
        <Route path="/blog" element={<Blog />} />

        {/* GST News route */}
        <Route path="/gst-news" element={<GstNews />} />
      </Routes>

      {/* Conditionally render Footer, hide on Blog and GST News pages */}
      {location.pathname !== '/blog' && location.pathname !== '/gst-news' && <Footer />}
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;