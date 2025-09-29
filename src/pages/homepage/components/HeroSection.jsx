import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      id: 1,
      title: "Sacred Innovation",
      subtitle: "Where Ancient Wisdom Meets Digital Mindfulness",
      description: "Experience the harmonious fusion of timeless monastery traditions with cutting-edge AI and AR technologies. Discover, learn, and participate in heritage preservation through immersive storytelling.",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&h=800&fit=crop",
      cta: "Begin Your Journey",
      route: "/virtual-pilgrimage-center"
    },
    {
      id: 2,
      title: "Digital Preservation",
      subtitle: "Transforming Ancient Manuscripts with AI",
      description: "Join our mission to digitize and preserve sacred texts using advanced OCR technology and collaborative research. Make ancient knowledge accessible to global audiences.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=800&fit=crop",
      cta: "Explore Manuscripts",
      route: "/ai-manuscript-portal"
    },
    {
      id: 3,
      title: "Environmental Stewardship",
      subtitle: "Protecting Sacred Spaces Through Technology",
      description: "Monitor real-time environmental data, participate in conservation initiatives, and contribute to the preservation of monastery heritage sites worldwide.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
      cta: "Join Conservation",
      route: "/environmental-stewardship"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-secondary/20">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides?.map((slide, index) => (
          <div
            key={slide?.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide?.image}
              alt={slide?.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
          </div>
        ))}
      </div>
      {/* Sacred Geometry Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 800"
          className="text-primary"
        >
          <defs>
            <pattern id="sacred-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
              <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
              <circle cx="50" cy="50" r="5" fill="currentColor" opacity="0.7" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sacred-pattern)" />
        </svg>
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Icon name="Mountain" size={24} className="text-primary" />
                </div>
                <span className="text-sm font-medium text-primary tracking-wide uppercase">
                  Monastery Digital Heritage
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {slides?.[currentSlide]?.title}
              </h1>
              
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                {slides?.[currentSlide]?.subtitle}
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {slides?.[currentSlide]?.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={slides?.[currentSlide]?.route}>
                <Button
                  variant="default"
                  size="lg"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="candlelight-glow w-full sm:w-auto"
                >
                  {slides?.[currentSlide]?.cta}
                </Button>
              </Link>
              
              <Link to="/monasteries">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Mountain"
                  iconPosition="left"
                  className="w-full sm:w-auto"
                >
                  View Monasteries
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Sacred Sites</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Manuscripts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
            </div>
          </div>

          {/* 360° Preview */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glassmorphism Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl">
                <div className="absolute inset-4 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop"
                    alt="360° Monastery Preview"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* 360° Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Interactive Elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 breathe">
                      <Icon name="RotateCcw" size={24} className="text-primary" />
                    </button>
                  </div>
                  
                  {/* Hotspots */}
                  <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-accent rounded-full animate-pulse cursor-pointer" />
                  <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-accent rounded-full animate-pulse cursor-pointer" />
                  <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-accent rounded-full animate-pulse cursor-pointer" />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Icon name="Eye" size={16} className="text-secondary-foreground" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-accent/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Icon name="Compass" size={16} className="text-accent-foreground" />
              </div>
            </div>

            {/* 360° Label */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mt-4">
              <div className="bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/20">
                <span className="text-sm font-medium text-primary">360° Virtual Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides?.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-primary scale-125' :'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;