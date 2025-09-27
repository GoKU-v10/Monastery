import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const InteractiveMap = ({ onLocationSelect, selectedLocation }) => {
  const [mapView, setMapView] = useState('world'); // world, region, monastery
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);

  const monasteryLocations = [
    {
      id: 'potala-palace',
      name: 'Potala Palace',
      country: 'Tibet',
      region: 'Asia',
      coordinates: { lat: 29.6558, lng: 91.1170 },
      type: 'Palace Monastery',
      established: '7th century',
      significance: 'Former residence of the Dalai Lama',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop',
      virtualTour: true,
      audioGuide: true,
      difficulty: 'Advanced',
      duration: '3-4 hours',
      highlights: ['Throne Room', 'Sacred Chapels', 'Panoramic Views']
    },
    {
      id: 'shaolin-temple',
      name: 'Shaolin Temple',
      country: 'China',
      region: 'Asia',
      coordinates: { lat: 34.5086, lng: 112.9353 },
      type: 'Zen Monastery',
      established: '495 AD',
      significance: 'Birthplace of Zen Buddhism and Kung Fu',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      virtualTour: true,
      audioGuide: true,
      difficulty: 'Intermediate',
      duration: '2-3 hours',
      highlights: ['Martial Arts Hall', 'Ancient Pagoda', 'Training Grounds']
    },
    {
      id: 'borobudur',
      name: 'Borobudur Temple',
      country: 'Indonesia',
      region: 'Asia',
      coordinates: { lat: -7.6079, lng: 110.2038 },
      type: 'Mahayana Temple',
      established: '8th century',
      significance: 'Largest Buddhist temple in the world',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
      virtualTour: true,
      audioGuide: true,
      difficulty: 'Beginner',
      duration: '1-2 hours',
      highlights: ['Stone Reliefs', 'Buddha Statues', 'Sunrise Views']
    },
    {
      id: 'hemis-monastery',
      name: 'Hemis Monastery',
      country: 'India',
      region: 'Asia',
      coordinates: { lat: 34.0151, lng: 77.6066 },
      type: 'Tibetan Monastery',
      established: '1630 AD',
      significance: 'Largest monastery in Ladakh',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      virtualTour: true,
      audioGuide: true,
      difficulty: 'Intermediate',
      duration: '2-3 hours',
      highlights: ['Festival Courtyard', 'Ancient Thangkas', 'Mountain Views']
    },
    {
      id: 'wat-pho',
      name: 'Wat Pho Temple',
      country: 'Thailand',
      region: 'Asia',
      coordinates: { lat: 13.7465, lng: 100.4927 },
      type: 'Theravada Temple',
      established: '16th century',
      significance: 'Temple of the Reclining Buddha',
      image: 'https://images.unsplash.com/photo-1563492065-1a5a3e6b8e8e?w=400&h=300&fit=crop',
      virtualTour: true,
      audioGuide: true,
      difficulty: 'Beginner',
      duration: '1-2 hours',
      highlights: ['Reclining Buddha', 'Traditional Massage', 'Golden Stupas']
    },
    {
      id: 'tashilhunpo',
      name: 'Tashilhunpo Monastery',
      country: 'Tibet',
      region: 'Asia',
      coordinates: { lat: 29.2675, lng: 88.8747 },
      type: 'Gelug Monastery',
      established: '1447 AD',
      significance: 'Seat of the Panchen Lama',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop',
      virtualTour: true,
      audioGuide: true,
      difficulty: 'Advanced',
      duration: '3-4 hours',
      highlights: ['Giant Buddha Statue', 'Assembly Hall', 'Monastery Walls']
    }
  ];

  const filterOptions = [
    { id: 'all', label: 'All Monasteries', icon: 'Globe' },
    { id: 'beginner', label: 'Beginner Friendly', icon: 'Star' },
    { id: 'virtual-tour', label: 'Virtual Tours', icon: 'Camera' },
    { id: 'audio-guide', label: 'Audio Guides', icon: 'Headphones' },
    { id: 'tibet', label: 'Tibetan', icon: 'Mountain' },
    { id: 'zen', label: 'Zen', icon: 'Leaf' }
  ];

  useEffect(() => {
    let filtered = monasteryLocations;

    if (searchQuery) {
      filtered = filtered?.filter(location =>
        location?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        location?.country?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        location?.type?.toLowerCase()?.includes(searchQuery?.toLowerCase())
      );
    }

    if (activeFilters?.length > 0 && !activeFilters?.includes('all')) {
      filtered = filtered?.filter(location => {
        return activeFilters?.some(filter => {
          switch (filter) {
            case 'beginner':
              return location?.difficulty === 'Beginner';
            case 'virtual-tour':
              return location?.virtualTour;
            case 'audio-guide':
              return location?.audioGuide;
            case 'tibet':
              return location?.country === 'Tibet' || location?.type?.includes('Tibetan');
            case 'zen':
              return location?.type?.includes('Zen');
            default:
              return true;
          }
        });
      });
    }

    setFilteredLocations(filtered);
  }, [searchQuery, activeFilters]);

  const handleFilterToggle = (filterId) => {
    if (filterId === 'all') {
      setActiveFilters(['all']);
    } else {
      setActiveFilters(prev => {
        const newFilters = prev?.filter(f => f !== 'all');
        if (newFilters?.includes(filterId)) {
          return newFilters?.filter(f => f !== filterId);
        } else {
          return [...newFilters, filterId];
        }
      });
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return 'text-success bg-success/10';
      case 'Intermediate':
        return 'text-warning bg-warning/10';
      case 'Advanced':
        return 'text-error bg-error/10';
      default:
        return 'text-muted-foreground bg-muted/10';
    }
  };

  return (
    <div className="bg-card rounded-lg shadow-medium overflow-hidden">
      {/* Map Header */}
      <div className="p-4 border-b border-border bg-gradient-to-r from-secondary/5 to-accent/5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="font-sans font-semibold text-lg text-foreground">
              Global Monastery Network
            </h3>
            <p className="text-sm text-muted-foreground">
              Discover sacred spaces across the world
            </p>
          </div>
          
          {/* Search */}
          <div className="relative">
            <Icon 
              name="Search" 
              size={16} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
            />
            <input
              type="text"
              placeholder="Search monasteries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e?.target?.value)}
              className="pl-10 pr-4 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mt-4">
          {filterOptions?.map((filter) => (
            <button
              key={filter?.id}
              onClick={() => handleFilterToggle(filter?.id)}
              className={`flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                activeFilters?.includes(filter?.id) || (activeFilters?.length === 0 && filter?.id === 'all')
                  ? 'bg-primary text-primary-foreground shadow-soft' :'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <Icon name={filter?.icon} size={12} />
              <span>{filter?.label}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Interactive Map */}
      <div className="relative h-96 bg-muted overflow-hidden">
        {/* World Map Background */}
        <div className="absolute inset-0">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            title="Global Monastery Map"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=29.6558,91.1170&z=3&output=embed"
            className="border-0"
          />
        </div>

        {/* Map Overlay with Monastery Markers */}
        <div className="absolute inset-0 pointer-events-none">
          {filteredLocations?.map((location, index) => (
            <div
              key={location?.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
              style={{
                left: `${20 + (index % 3) * 25}%`,
                top: `${30 + Math.floor(index / 3) * 20}%`
              }}
            >
              <button
                onClick={() => onLocationSelect(location)}
                className={`group relative w-8 h-8 rounded-full border-2 border-white shadow-medium transition-all duration-300 hover:scale-125 ${
                  selectedLocation?.id === location?.id
                    ? 'bg-primary animate-pulse' :'bg-accent hover:bg-primary'
                }`}
              >
                <Icon 
                  name="MapPin" 
                  size={16} 
                  className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
                />
                
                {/* Marker Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                  <div className="bg-popover border border-border rounded-lg shadow-medium p-2 min-w-32">
                    <p className="text-xs font-medium text-popover-foreground">
                      {location?.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {location?.country}
                    </p>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <Button
            variant="secondary"
            size="sm"
            iconName="ZoomIn"
            className="bg-background/80 backdrop-blur-sm hover:bg-background/90"
          />
          <Button
            variant="secondary"
            size="sm"
            iconName="ZoomOut"
            className="bg-background/80 backdrop-blur-sm hover:bg-background/90"
          />
          <Button
            variant="secondary"
            size="sm"
            iconName="RotateCcw"
            className="bg-background/80 backdrop-blur-sm hover:bg-background/90"
          />
        </div>
      </div>
      {/* Location List */}
      <div className="p-4 max-h-80 overflow-y-auto">
        <div className="grid gap-4 sm:grid-cols-2">
          {filteredLocations?.map((location) => (
            <div
              key={location?.id}
              onClick={() => onLocationSelect(location)}
              className={`group cursor-pointer p-4 rounded-lg border transition-all duration-200 hover:shadow-soft ${
                selectedLocation?.id === location?.id
                  ? 'border-primary bg-primary/5 shadow-soft'
                  : 'border-border bg-background hover:border-primary/30'
              }`}
            >
              <div className="flex space-x-3">
                <div className="flex-shrink-0 w-16 h-12 rounded overflow-hidden">
                  <Image
                    src={location?.image}
                    alt={location?.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium text-sm text-foreground truncate">
                        {location?.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {location?.country} • {location?.established}
                      </p>
                    </div>
                    
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(location?.difficulty)}`}>
                      {location?.difficulty}
                    </span>
                  </div>
                  
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {location?.significance}
                  </p>
                  
                  <div className="flex items-center space-x-3 mt-2">
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Icon name="Clock" size={12} />
                      <span>{location?.duration}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {location?.virtualTour && (
                        <Icon name="Camera" size={12} className="text-primary" title="Virtual Tour Available" />
                      )}
                      {location?.audioGuide && (
                        <Icon name="Headphones" size={12} className="text-secondary" title="Audio Guide Available" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredLocations?.length === 0 && (
          <div className="text-center py-8">
            <Icon name="Search" size={48} className="text-muted-foreground/50 mx-auto mb-3" />
            <p className="text-muted-foreground">No monasteries found matching your criteria</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchQuery('');
                setActiveFilters(['all']);
              }}
              className="mt-3"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveMap;