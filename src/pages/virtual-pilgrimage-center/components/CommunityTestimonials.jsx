import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CommunityTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [filter, setFilter] = useState('all');

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      location: 'San Francisco, USA',
      role: 'Meditation Practitioner',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      rating: 5,
      category: 'spiritual',
      date: '2025-01-15',
      experience: 'Virtual Pilgrimage',
      testimonial: `The virtual pilgrimage to Potala Palace was absolutely transformative. I felt a deep connection to the sacred space even from my living room.\n\nThe 360° tour combined with the guided meditation created an authentic spiritual experience that I'll treasure forever.`,
      highlights: ['Authentic Experience', 'Spiritual Connection', 'Guided Meditation'],
      verified: true,
      helpful: 47
    },
    {
      id: 2,
      name: 'Dr. Michael Rodriguez',location: 'Oxford, UK',role: 'Buddhist Studies Professor',avatar: 'https://randomuser.me/api/portraits/men/45.jpg',rating: 5,category: 'academic',date: '2025-01-10',experience: 'AR Navigation',
      testimonial: `As an academic studying Buddhist architecture, the AR overlays provided incredible insights into monastery design and symbolism.\n\nThe level of historical detail and cultural context exceeded my expectations. This is the future of cultural education.`,
      highlights: ['Historical Accuracy', 'Educational Value', 'Cultural Context'],
      verified: true,
      helpful: 62
    },
    {
      id: 3,
      name: 'Yuki Tanaka',location: 'Kyoto, Japan',role: 'Cultural Tourist',avatar: 'https://randomuser.me/api/portraits/women/28.jpg',rating: 4,category: 'tourism',date: '2025-01-08',experience: 'Interactive Map',
      testimonial: `Planning my monastery visits became so much easier with the interactive map and offline audio guides.\n\nThe multi-language support in Japanese was perfect, and the cultural etiquette tips helped me show proper respect during my actual visits.`,
      highlights: ['Travel Planning', 'Multi-language', 'Cultural Guidance'],
      verified: true,
      helpful: 35
    },
    {
      id: 4,
      name: 'Tenzin Norbu',location: 'Dharamshala, India',role: 'Monastery Guide',avatar: 'https://randomuser.me/api/portraits/men/38.jpg',rating: 5,category: 'community',date: '2025-01-05',experience: 'Community Platform',testimonial: `As someone who guides pilgrims daily, I'm amazed by how accurately this platform captures the essence of our sacred spaces.\n\nThe virtual experience helps people prepare spiritually before their physical pilgrimage, making their actual visit more meaningful.`,
      highlights: ['Authentic Representation', 'Spiritual Preparation', 'Cultural Accuracy'],
      verified: true,
      helpful: 89
    },
    {
      id: 5,
      name: 'Emma Thompson',
      location: 'Melbourne, Australia',
      role: 'Mindfulness Coach',
      avatar: 'https://randomuser.me/api/portraits/women/42.jpg',
      rating: 5,
      category: 'spiritual',
      date: '2025-01-03',
      experience: 'Digital Meditation',
      testimonial: `I use the virtual monastery spaces for my meditation practice daily. The ambient sounds and visual beauty create the perfect environment for deep contemplation.\n\nMy clients love the guided spiritual journeys - they're accessible yet profoundly moving.`,
      highlights: ['Daily Practice', 'Professional Use', 'Client Satisfaction'],
      verified: true,
      helpful: 53
    },
    {
      id: 6,
      name: 'Carlos Mendoza',location: 'Mexico City, Mexico',role: 'Heritage Photographer',avatar: 'https://randomuser.me/api/portraits/men/35.jpg',rating: 4,category: 'tourism',date: '2024-12-28',experience: 'Virtual Tours',
      testimonial: `The photographic quality of the 360° tours is exceptional. As a professional photographer, I appreciate the attention to lighting and composition.\n\nThis platform inspired me to plan a photography expedition to document these sacred spaces in person.`,
      highlights: ['Visual Quality', 'Professional Standard', 'Inspiration'],
      verified: true,
      helpful: 41
    }
  ];

  const categories = [
    { id: 'all', label: 'All Reviews', icon: 'Star' },
    { id: 'spiritual', label: 'Spiritual Journey', icon: 'Heart' },
    { id: 'academic', label: 'Academic Research', icon: 'BookOpen' },
    { id: 'tourism', label: 'Cultural Tourism', icon: 'Camera' },
    { id: 'community', label: 'Community', icon: 'Users' }
  ];

  const filteredTestimonials = filter === 'all' 
    ? testimonials 
    : testimonials?.filter(t => t?.category === filter);

  useEffect(() => {
    if (isAutoPlay && filteredTestimonials?.length > 1) {
      const interval = setInterval(() => {
        setCurrentTestimonial(prev => 
          prev >= filteredTestimonials?.length - 1 ? 0 : prev + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, filteredTestimonials?.length]);

  const currentReview = filteredTestimonials?.[currentTestimonial] || filteredTestimonials?.[0];

  const handleNext = () => {
    setCurrentTestimonial(prev => 
      prev >= filteredTestimonials?.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevious = () => {
    setCurrentTestimonial(prev => 
      prev <= 0 ? filteredTestimonials?.length - 1 : prev - 1
    );
  };

  const formatDate = (dateString) => {
    return new Date(dateString)?.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={i < rating ? 'text-accent fill-current' : 'text-muted-foreground/30'}
      />
    ));
  };

  return (
    <div className="bg-card rounded-lg shadow-medium overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-border bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="font-sans font-semibold text-xl text-foreground">
              Community Testimonials
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Authentic experiences from our global community
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant={isAutoPlay ? 'default' : 'outline'}
              size="sm"
              iconName={isAutoPlay ? 'Pause' : 'Play'}
              onClick={() => setIsAutoPlay(!isAutoPlay)}
            >
              {isAutoPlay ? 'Pause' : 'Auto'}
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              iconName="MessageSquare"
            >
              Share Story
            </Button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mt-4">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => {
                setFilter(category?.id);
                setCurrentTestimonial(0);
              }}
              className={`flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                filter === category?.id
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <Icon name={category?.icon} size={12} />
              <span>{category?.label}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Main Testimonial */}
      <div className="p-6">
        {currentReview && (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Reviewer Info */}
            <div className="lg:col-span-1">
              <div className="text-center lg:text-left">
                <div className="relative inline-block">
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto lg:mx-0 mb-4">
                    <Image
                      src={currentReview?.avatar}
                      alt={currentReview?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {currentReview?.verified && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                      <Icon name="Check" size={12} className="text-white" />
                    </div>
                  )}
                </div>
                
                <h4 className="font-sans font-semibold text-lg text-foreground">
                  {currentReview?.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {currentReview?.role}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {currentReview?.location}
                </p>
                
                {/* Rating */}
                <div className="flex items-center justify-center lg:justify-start space-x-1 mt-3">
                  {renderStars(currentReview?.rating)}
                </div>
                
                {/* Experience Badge */}
                <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium mt-3">
                  {currentReview?.experience}
                </div>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Icon 
                  name="Quote" 
                  size={32} 
                  className="text-primary/20 absolute -top-2 -left-2" 
                />
                
                <div className="pl-6">
                  <div className="prose prose-sm max-w-none mb-4">
                    <p className="text-foreground leading-relaxed whitespace-pre-line">
                      {currentReview?.testimonial}
                    </p>
                  </div>
                  
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {currentReview?.highlights?.map((highlight, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                    <span>{formatDate(currentReview?.date)}</span>
                    
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 hover:text-foreground transition-colors">
                        <Icon name="ThumbsUp" size={12} />
                        <span>{currentReview?.helpful}</span>
                      </button>
                      
                      <button className="flex items-center space-x-1 hover:text-foreground transition-colors">
                        <Icon name="Share" size={12} />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Navigation */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            iconName="ChevronLeft"
            onClick={handlePrevious}
            disabled={filteredTestimonials?.length <= 1}
          >
            Previous
          </Button>
          
          {/* Dots Indicator */}
          <div className="flex items-center space-x-2">
            {filteredTestimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentTestimonial
                    ? 'bg-primary scale-125' :'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            iconName="ChevronRight"
            onClick={handleNext}
            disabled={filteredTestimonials?.length <= 1}
          >
            Next
          </Button>
        </div>
      </div>
      {/* Stats Summary */}
      <div className="px-6 pb-6 border-t border-border bg-muted/20">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">4.9</div>
            <div className="text-xs text-muted-foreground">Average Rating</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary">2.3K</div>
            <div className="text-xs text-muted-foreground">Total Reviews</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">98%</div>
            <div className="text-xs text-muted-foreground">Recommend</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-success">45K</div>
            <div className="text-xs text-muted-foreground">Pilgrims</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityTestimonials;