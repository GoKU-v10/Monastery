import React, { useState, useRef, useEffect } from 'react';

import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const VirtualTourViewer = ({ selectedLocation, onLocationChange }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isVRMode, setIsVRMode] = useState(false);
  const [viewAngle, setViewAngle] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const viewerRef = useRef(null);

  const tourLocations = [
    {
      id: 'main-hall',
      name: 'Main Prayer Hall',
      description: 'The heart of spiritual practice with ancient murals and golden Buddha statues',
      panoramaUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=2000&h=1000&fit=crop',
      audioGuide: 'main-hall-guide.mp3',
      hotspots: [
        { x: 30, y: 45, title: 'Golden Buddha', description: 'Dating back to 14th century' },
        { x: 70, y: 60, title: 'Ancient Murals', description: 'Stories of enlightenment' }
      ]
    },
    {
      id: 'meditation-garden',
      name: 'Meditation Garden',
      description: 'Peaceful outdoor space for contemplation and mindfulness practice',
      panoramaUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2000&h=1000&fit=crop',
      audioGuide: 'garden-guide.mp3',
      hotspots: [
        { x: 50, y: 70, title: 'Lotus Pond', description: 'Symbol of purity and enlightenment' },
        { x: 25, y: 40, title: 'Prayer Flags', description: 'Carrying mantras on the wind' }
      ]
    },
    {
      id: 'library',
      name: 'Ancient Library',
      description: 'Repository of sacred texts and manuscripts spanning centuries',
      panoramaUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=2000&h=1000&fit=crop',
      audioGuide: 'library-guide.mp3',
      hotspots: [
        { x: 40, y: 35, title: 'Manuscript Collection', description: 'Over 10,000 ancient texts' },
        { x: 80, y: 50, title: 'Reading Area', description: 'Scholars study here daily' }
      ]
    }
  ];

  const currentLocation = tourLocations?.find(loc => loc?.id === selectedLocation) || tourLocations?.[0];

  const handleFullscreen = () => {
    if (!isFullscreen) {
      if (viewerRef?.current?.requestFullscreen) {
        viewerRef?.current?.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  const handleVRToggle = () => {
    setIsVRMode(!isVRMode);
  };

  const handleLocationSwitch = (locationId) => {
    setIsLoading(true);
    setTimeout(() => {
      onLocationChange(locationId);
      setIsLoading(false);
    }, 800);
  };

  const handleMouseMove = (e) => {
    if (viewerRef?.current) {
      const rect = viewerRef?.current?.getBoundingClientRect();
      const x = ((e?.clientX - rect?.left) / rect?.width) * 100;
      const y = ((e?.clientY - rect?.top) / rect?.height) * 100;
      setViewAngle({ x, y });
    }
  };

  return (
    <div className="bg-card rounded-lg shadow-medium overflow-hidden">
      {/* Viewer Header */}
      <div className="p-4 border-b border-border bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-sans font-semibold text-lg text-foreground">
              {currentLocation?.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {currentLocation?.description}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              iconName="Maximize"
              onClick={handleFullscreen}
              className="hidden sm:flex"
            >
              {isFullscreen ? 'Exit' : 'Fullscreen'}
            </Button>
            <Button
              variant={isVRMode ? 'default' : 'outline'}
              size="sm"
              iconName="Glasses"
              onClick={handleVRToggle}
            >
              VR
            </Button>
          </div>
        </div>
      </div>
      {/* 360° Viewer */}
      <div 
        ref={viewerRef}
        className={`relative ${isVRMode ? 'h-96' : 'h-80'} bg-muted overflow-hidden cursor-move`}
        onMouseMove={handleMouseMove}
      >
        {isLoading && (
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-20">
            <div className="text-center">
              <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-3"></div>
              <p className="text-sm text-muted-foreground">Loading sacred space...</p>
            </div>
          </div>
        )}

        {/* Panoramic Image */}
        <div 
          className="w-full h-full transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${-viewAngle?.x * 0.5}px, ${-viewAngle?.y * 0.3}px) scale(${isVRMode ? 1.2 : 1.1})`
          }}
        >
          <Image
            src={currentLocation?.panoramaUrl}
            alt={currentLocation?.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hotspots */}
        {currentLocation?.hotspots?.map((hotspot, index) => (
          <div
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
            style={{ left: `${hotspot?.x}%`, top: `${hotspot?.y}%` }}
          >
            <div className="w-6 h-6 bg-accent rounded-full border-2 border-white shadow-medium animate-pulse hover:animate-none transition-all duration-300 hover:scale-125">
              <div className="w-full h-full bg-accent/20 rounded-full animate-ping"></div>
            </div>
            
            {/* Hotspot Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
              <div className="bg-popover border border-border rounded-lg shadow-medium p-3 min-w-48">
                <h4 className="font-medium text-sm text-popover-foreground mb-1">
                  {hotspot?.title}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {hotspot?.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* VR Split View Overlay */}
        {isVRMode && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-full h-full border-r-2 border-white/30" style={{ width: '50%' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 border-2 border-white/50 rounded-full"></div>
            </div>
          </div>
        )}

        {/* Navigation Controls */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2">
          {tourLocations?.map((location) => (
            <button
              key={location?.id}
              onClick={() => handleLocationSwitch(location?.id)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                location?.id === selectedLocation
                  ? 'bg-primary scale-125' :'bg-muted-foreground/40 hover:bg-muted-foreground/60'
              }`}
              title={location?.name}
            />
          ))}
        </div>

        {/* Audio Guide Button */}
        <div className="absolute top-4 right-4">
          <Button
            variant="secondary"
            size="sm"
            iconName="Headphones"
            className="bg-background/80 backdrop-blur-sm hover:bg-background/90"
          >
            Audio Guide
          </Button>
        </div>
      </div>
      {/* Location Selector */}
      <div className="p-4 bg-muted/30">
        <div className="flex items-center space-x-4 overflow-x-auto pb-2">
          {tourLocations?.map((location) => (
            <button
              key={location?.id}
              onClick={() => handleLocationSwitch(location?.id)}
              className={`flex-shrink-0 flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                location?.id === selectedLocation
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : 'bg-background hover:bg-muted/50 text-muted-foreground hover:text-foreground'
              }`}
            >
              <div className="w-12 h-8 rounded overflow-hidden">
                <Image
                  src={location?.panoramaUrl}
                  alt={location?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium">{location?.name}</p>
                <p className="text-xs opacity-80 max-w-32 truncate">
                  {location?.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualTourViewer;