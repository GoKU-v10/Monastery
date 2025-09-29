import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import MonasteriesSection from './components/MonasteriesSection';
import FeaturesGrid from './components/FeaturesGrid';
import LiveEnvironmentalData from './components/LiveEnvironmentalData';
import PersonalizedJourneys from './components/PersonalizedJourneys';
import Footer from './components/Footer';

const Homepage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);

    // Initialize scroll reveal animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observe all scroll-reveal elements
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements?.forEach((el) => observer?.observe(el));

    return () => {
      observer?.disconnect();
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Monastery Digital Heritage - Sacred Innovation Platform</title>
        <meta 
          name="description" 
          content="Experience the harmonious fusion of timeless monastery traditions with cutting-edge AI and AR technologies. Discover, learn, and participate in heritage preservation through immersive storytelling, community engagement, and environmental stewardship." 
        />
        <meta name="keywords" content="monastery, digital heritage, Buddhist culture, AI manuscripts, virtual pilgrimage, environmental conservation, cultural preservation, meditation, spiritual technology" />
        <meta property="og:title" content="Monastery Digital Heritage - Sacred Innovation Platform" />
        <meta property="og:description" content="Bridge ancient wisdom with modern technology through our comprehensive digital ecosystem for monastery heritage preservation and spiritual growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://monastery-heritage.com/homepage" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&h=630&fit=crop" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Monastery Digital Heritage - Sacred Innovation Platform" />
        <meta name="twitter:description" content="Experience ancient monastery wisdom through cutting-edge AI, AR, and immersive technologies." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&h=630&fit=crop" />
        <link rel="canonical" href="https://monastery-heritage.com/homepage" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8B7355" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="pt-16">
          {/* Hero Section */}
          <HeroSection />

          {/* Monasteries Section */}
          <div className="scroll-reveal">
            <MonasteriesSection />
          </div>

          {/* Features Grid */}
          <div className="scroll-reveal delay-1">
            <FeaturesGrid />
          </div>

          {/* Live Environmental Data */}
          <div className="scroll-reveal delay-2">
            <LiveEnvironmentalData />
          </div>

          {/* Personalized Journeys */}
          <div className="scroll-reveal delay-3">
            <PersonalizedJourneys />
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Floating Meditation Timer */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="w-14 h-14 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-medium hover:shadow-strong transition-all duration-300 breathe group">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary-foreground group-hover:scale-110 transition-transform"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        </button>
      </div>

      {/* Background Sacred Geometry */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 800"
          className="text-primary"
        >
          <defs>
            <pattern id="sacred-bg-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.1" />
              <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
              <circle cx="100" cy="100" r="10" fill="currentColor" opacity="0.1" />
              <path
                d="M100 40v20M100 140v20M40 100h20M140 100h20"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.15"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sacred-bg-pattern)" />
        </svg>
      </div>

      {/* Custom Styles for Scroll Animations */}
      <style jsx>{`
        .scroll-reveal {
          transform: translateY(30px);
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .scroll-reveal.revealed {
          transform: translateY(0);
          opacity: 1;
        }

        .scroll-reveal.delay-1 {
          transition-delay: 0.1s;
        }

        .scroll-reveal.delay-2 {
          transition-delay: 0.2s;
        }

        .scroll-reveal.delay-3 {
          transition-delay: 0.3s;
        }

        .breathe {
          animation: breathe 4s ease-in-out infinite;
        }

        @keyframes breathe {
          0%, 100% { 
            transform: scale(1); 
            opacity: 0.9; 
          }
          50% { 
            transform: scale(1.05); 
            opacity: 1; 
          }
        }

        .candlelight-glow {
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
          transition: box-shadow 0.3s ease;
        }

        .candlelight-glow:hover {
          box-shadow: 0 0 30px rgba(212, 175, 55, 0.5);
        }

        .backdrop-blur-monastery {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
      `}</style>
    </>
  );
};

export default Homepage;