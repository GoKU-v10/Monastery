import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';

// Import components
import VirtualTourViewer from './components/VirtualTourViewer';
import InteractiveMap from './components/InteractiveMap';
import PilgrimageJourney from './components/PilgrimageJourney';
import ARExperience from './components/ARExperience';
import CommunityTestimonials from './components/CommunityTestimonials';

const VirtualPilgrimageCenter = () => {
  const [selectedLocation, setSelectedLocation] = useState('main-hall');
  const [activeTab, setActiveTab] = useState('tour');
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  const tabs = [
    { id: 'tour', label: '360° Virtual Tour', icon: 'Camera', component: VirtualTourViewer },
    { id: 'map', label: 'Interactive Map', icon: 'Map', component: InteractiveMap },
    { id: 'journey', label: 'Guided Journey', icon: 'Compass', component: PilgrimageJourney },
    { id: 'ar', label: 'AR Experience', icon: 'Glasses', component: ARExperience },
    { id: 'community', label: 'Community', icon: 'Users', component: CommunityTestimonials }
  ];

  const quickActions = [
    {
      id: 'bookmark',
      label: 'Bookmark Location',
      icon: 'Bookmark',
      action: () => setIsBookmarked(!isBookmarked),
      active: isBookmarked
    },
    {
      id: 'share',
      label: 'Share Experience',
      icon: 'Share',
      action: () => navigator.share?.({ title: 'Virtual Pilgrimage', url: window.location?.href })
    },
    {
      id: 'calendar',
      label: 'Plan Visit',
      icon: 'Calendar',
      action: () => console.log('Opening calendar integration')
    },
    {
      id: 'download',
      label: 'Download Guide',
      icon: 'Download',
      action: handleDownload
    }
  ];

  const featuredLocations = [
    {
      id: 'potala-palace',
      name: 'Potala Palace',
      country: 'Tibet',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop',
      description: 'Former residence of the Dalai Lama with stunning architecture',
      difficulty: 'Advanced',
      duration: '3-4 hours',
      features: ['360° Tour', 'AR Navigation', 'Audio Guide']
    },
    {
      id: 'shaolin-temple',
      name: 'Shaolin Temple',
      country: 'China',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      description: 'Birthplace of Zen Buddhism and Kung Fu martial arts',
      difficulty: 'Intermediate',
      duration: '2-3 hours',
      features: ['Virtual Tour', 'Meditation Space', 'Cultural Learning']
    },
    {
      id: 'borobudur',
      name: 'Borobudur Temple',
      country: 'Indonesia',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
      description: 'Largest Buddhist temple complex in the world',
      difficulty: 'Beginner',
      duration: '1-2 hours',
      features: ['Sunrise Tour', 'Stone Reliefs', 'Historical Context']
    }
  ];

  const stats = [
    { label: 'Sacred Locations', value: '150+', icon: 'MapPin' },
    { label: 'Virtual Pilgrims', value: '45K+', icon: 'Users' },
    { label: 'Hours of Content', value: '500+', icon: 'Clock' },
    { label: 'Languages', value: '12', icon: 'Languages' }
  ];

  function handleDownload() {
    setIsDownloading(true);
    setDownloadProgress(0);
    
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDownloading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  }

  const handleLocationSelect = (location) => {
    setSelectedLocation(location?.id || location);
  };

  const ActiveComponent = tabs?.find(tab => tab?.id === activeTab)?.component;

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      // Update any real-time data here
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-16 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10"></div>
        <div className="absolute inset-0 stone-texture"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Sparkles" size={16} />
              <span>Immersive Sacred Experiences</span>
            </div>
            
            <h1 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Virtual Pilgrimage
              <span className="block text-primary">Center</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              Embark on transformative spiritual journeys through 360° virtual tours, 
              AR experiences, and guided meditation practices from sacred monasteries worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                variant="default"
                size="lg"
                iconName="Play"
                iconPosition="left"
                className="candlelight-glow"
                onClick={() => setActiveTab('tour')}
              >
                Start Virtual Tour
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                iconName="Map"
                iconPosition="left"
                onClick={() => setActiveTab('map')}
              >
                Explore Locations
              </Button>
              
              <Button
                variant="secondary"
                size="lg"
                iconName="Glasses"
                iconPosition="left"
                onClick={() => setActiveTab('ar')}
              >
                Try AR Experience
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats?.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                    <Icon name={stat?.icon} size={20} className="text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat?.value}</div>
                  <div className="text-sm text-muted-foreground">{stat?.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Quick Actions Bar */}
      <section className="py-4 border-b border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 overflow-x-auto">
              {quickActions?.map((action) => (
                <button
                  key={action?.id}
                  onClick={action?.action}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    action?.active
                      ? 'bg-primary text-primary-foreground shadow-soft'
                      : 'bg-background hover:bg-muted text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name={action?.icon} size={16} />
                  <span>{action?.label}</span>
                  {action?.id === 'download' && isDownloading && (
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin ml-1"></div>
                  )}
                </button>
              ))}
            </div>
            
            <div className="hidden sm:flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="Wifi" size={16} />
              <span>Online • Real-time updates</span>
            </div>
          </div>
          
          {/* Download Progress */}
          {isDownloading && (
            <div className="mt-3">
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                <span>Downloading offline guide...</span>
                <span>{downloadProgress}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-1">
                <div 
                  className="bg-primary h-1 rounded-full transition-all duration-200"
                  style={{ width: `${downloadProgress}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </section>
      {/* Main Content Tabs */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex items-center space-x-1 mb-8 overflow-x-auto bg-muted/30 rounded-lg p-1">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab?.id
                    ? 'bg-background text-foreground shadow-soft'
                    : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                }`}
              >
                <Icon name={tab?.icon} size={16} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="mb-12">
            {ActiveComponent && (
              <ActiveComponent
                selectedLocation={selectedLocation}
                onLocationSelect={handleLocationSelect}
                onLocationChange={handleLocationSelect}
              />
            )}
          </div>
        </div>
      </section>
      {/* Featured Locations */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-foreground mb-4">
              Featured Sacred Locations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the most popular monastery destinations chosen by our global community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredLocations?.map((location) => (
              <div
                key={location?.id}
                className="group bg-card rounded-lg shadow-medium overflow-hidden hover:shadow-strong transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setSelectedLocation(location?.id);
                  setActiveTab('tour');
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={location?.image}
                    alt={location?.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      location?.difficulty === 'Beginner' ? 'bg-success/80 text-white' :
                      location?.difficulty === 'Intermediate'? 'bg-warning/80 text-white' : 'bg-error/80 text-white'
                    }`}>
                      {location?.difficulty}
                    </span>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-sans font-semibold text-lg text-white mb-1">
                      {location?.name}
                    </h3>
                    <p className="text-sm text-white/80">{location?.country}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {location?.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Icon name="Clock" size={14} />
                      <span>{location?.duration}</span>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={14} className="text-accent fill-current" />
                      <span className="text-sm font-medium">4.9</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {location?.features?.map((feature, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="Play"
                    iconPosition="left"
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Start Virtual Tour
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              iconName="Map"
              iconPosition="left"
              onClick={() => setActiveTab('map')}
            >
              View All Locations
            </Button>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Heart" size={16} />
            <span>Join Our Community</span>
          </div>
          
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-foreground mb-6">
            Begin Your Spiritual Journey Today
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Connect with sacred spaces, learn from ancient wisdom, and join a global community 
            dedicated to preserving and sharing monastery heritage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              iconName="Compass"
              iconPosition="left"
              className="breathe"
              onClick={() => setActiveTab('journey')}
            >
              Start Guided Journey
            </Button>
            
            <Link to="/heritage-community">
              <Button
                variant="outline"
                size="lg"
                iconName="Users"
                iconPosition="left"
              >
                Join Community
              </Button>
            </Link>
            
            <Link to="/audio-wisdom-library">
              <Button
                variant="secondary"
                size="lg"
                iconName="Headphones"
                iconPosition="left"
              >
                Explore Audio Library
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-12 border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-sans font-semibold text-lg text-foreground mb-4">
                Virtual Experiences
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="#" className="hover:text-foreground transition-colors">360° Virtual Tours</Link></li>
                <li><Link to="#" className="hover:text-foreground transition-colors">AR Navigation</Link></li>
                <li><Link to="#" className="hover:text-foreground transition-colors">Guided Meditations</Link></li>
                <li><Link to="#" className="hover:text-foreground transition-colors">Cultural Learning</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-sans font-semibold text-lg text-foreground mb-4">
                Sacred Locations
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="#" className="hover:text-foreground transition-colors">Tibetan Monasteries</Link></li>
                <li><Link to="#" className="hover:text-foreground transition-colors">Zen Temples</Link></li>
                <li><Link to="#" className="hover:text-foreground transition-colors">Buddhist Heritage Sites</Link></li>
                <li><Link to="#" className="hover:text-foreground transition-colors">Meditation Centers</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-sans font-semibold text-lg text-foreground mb-4">
                Community
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/heritage-community" className="hover:text-foreground transition-colors">Discussion Forums</Link></li>
                <li><Link to="#" className="hover:text-foreground transition-colors">Share Experiences</Link></li>
                <li><Link to="#" className="hover:text-foreground transition-colors">Expert Q&A</Link></li>
                <li><Link to="#" className="hover:text-foreground transition-colors">Cultural Events</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-sans font-semibold text-lg text-foreground mb-4">
                Support
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="#" className="hover:text-foreground transition-colors">Technical Help</Link></li>
                <li><Link to="#" className="hover:text-foreground transition-colors">VR Setup Guide</Link></li>
                <li><Link to="#" className="hover:text-foreground transition-colors">Accessibility</Link></li>
                <li><Link to="/environmental-stewardship" className="hover:text-foreground transition-colors">Preservation</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date()?.getFullYear()} Monastery Digital Heritage. Preserving sacred wisdom through technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VirtualPilgrimageCenter;