import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../../components/ui/Header';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';
import GoogleMap from '../../../components/GoogleMap';

const MonasteryDetail = ({ monastery, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedMonastery, setSelectedMonastery] = useState(monastery);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Info' },
    { id: 'map', label: 'Location & Street View', icon: 'Map' },
    { id: 'tours', label: 'Virtual Tours', icon: 'Camera' },
    { id: 'events', label: 'Events', icon: 'Calendar' }
  ];

  const handleMonasterySelect = (monasteryData) => {
    setSelectedMonastery(monasteryData);
  };

  return (
    <>
      <Helmet>
        <title>{monastery?.name} - Monastery Digital Heritage</title>
        <meta name="description" content={monastery?.description} />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="relative h-96 overflow-hidden">
            <Image
              src={monastery?.images?.[0]}
              alt={monastery?.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            
            <div className="absolute inset-0 flex items-end">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
                <Button
                  variant="ghost"
                  iconName="ArrowLeft"
                  iconPosition="left"
                  onClick={onBack}
                  className="text-white hover:bg-white/20 mb-4"
                >
                  Back to Monasteries
                </Button>
                
                <div className="text-white">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">{monastery?.name}</h1>
                  <div className="flex items-center space-x-4 text-lg">
                    <div className="flex items-center space-x-2">
                      <Icon name="MapPin" size={20} />
                      <span>{monastery?.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Mountain" size={20} />
                      <span>{monastery?.altitude}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={20} />
                      <span>{monastery?.established}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Navigation Tabs */}
          <section className="border-b border-border sticky top-16 z-40 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex space-x-8 overflow-x-auto">
                {tabs?.map((tab) => (
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                      activeTab === tab?.id
                        ? 'border-primary text-primary'
                        : 'border-transparent text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Icon name={tab?.icon} size={16} />
                    <span>{tab?.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Tab Content */}
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {activeTab === 'overview' && (
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-4">About {monastery?.name}</h2>
                      <p className="text-muted-foreground leading-relaxed">{monastery?.history}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Impact & Significance</h3>
                      <p className="text-muted-foreground">{monastery?.impact}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-card border border-border rounded-lg p-6">
                      <h3 className="font-semibold text-foreground mb-4">Quick Facts</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Type:</span>
                          <span className="text-foreground">{monastery?.type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Established:</span>
                          <span className="text-foreground">{monastery?.established}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Altitude:</span>
                          <span className="text-foreground">{monastery?.altitude}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Urgency:</span>
                          <span className="text-foreground">{monastery?.urgency}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'map' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Location & Street View</h2>
                    <p className="text-muted-foreground mb-6">
                      Explore {monastery?.name} through interactive maps and Street View. Click on monastery markers to view different locations.
                    </p>
                  </div>
                  
                  <GoogleMap
                    monasteries={[monastery]}
                    onMonasterySelect={handleMonasterySelect}
                    selectedMonastery={selectedMonastery}
                  />
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-card border border-border rounded-lg p-6">
                      <h3 className="font-semibold text-foreground mb-3">Getting There</h3>
                      <p className="text-sm text-muted-foreground">
                        Coordinates: {monastery?.coordinates?.lat}, {monastery?.coordinates?.lng}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {monastery?.location}
                      </p>
                    </div>
                    
                    <div className="bg-card border border-border rounded-lg p-6">
                      <h3 className="font-semibold text-foreground mb-3">Best Time to Visit</h3>
                      <p className="text-sm text-muted-foreground">
                        Plan your pilgrimage during optimal weather conditions for the best experience.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'tours' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Virtual Pilgrimage Tours</h2>
                    <p className="text-muted-foreground mb-6">
                      Experience {monastery?.name} through immersive virtual tours with Google Street View integration.
                    </p>
                  </div>
                  
                  <div className="bg-card border border-border rounded-lg p-6 mb-6">
                    <h3 className="font-semibold text-foreground mb-4 flex items-center">
                      <Icon name="Camera" size={20} className="mr-2" />
                      Interactive Street View Experience
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Explore the monastery grounds and surrounding areas through Google Street View. Click and drag to look around, use controls to move through the virtual environment.
                        </p>
                        <Button 
                          variant="default" 
                          iconName="Play"
                          onClick={() => {
                            if (window.google && selectedMonastery) {
                              const streetViewDiv = document.getElementById('virtual-tour-street-view');
                              if (streetViewDiv) {
                                new window.google.maps.StreetViewPanorama(streetViewDiv, {
                                  position: selectedMonastery.coordinates,
                                  pov: { heading: 34, pitch: 10 },
                                  zoom: 1
                                });
                              }
                            }
                          }}
                        >
                          Start Virtual Tour
                        </Button>
                      </div>
                      <div id="virtual-tour-street-view" className="h-64 rounded-lg bg-muted flex items-center justify-center">
                        <div className="text-center text-muted-foreground">
                          <Icon name="Camera" size={48} className="mx-auto mb-2" />
                          <p>Click "Start Virtual Tour" to begin</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {monastery?.tours?.map((tour, index) => (
                      <div key={index} className="bg-card border border-border rounded-lg p-6">
                        <h3 className="font-semibold text-foreground mb-2">{tour?.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                          <span>{tour?.duration}</span>
                          <span>{tour?.price}</span>
                        </div>
                        <Button 
                          variant="outline" 
                          fullWidth
                          iconName="MapPin"
                          onClick={() => {
                            if (window.google && selectedMonastery) {
                              const streetViewDiv = document.getElementById('virtual-tour-street-view');
                              if (streetViewDiv) {
                                new window.google.maps.StreetViewPanorama(streetViewDiv, {
                                  position: selectedMonastery.coordinates,
                                  pov: { heading: Math.random() * 360, pitch: 10 },
                                  zoom: 1
                                });
                              }
                            }
                          }}
                        >
                          Start This Tour
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'events' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">Upcoming Events</h2>
                  <div className="space-y-4">
                    {monastery?.events?.map((event, index) => (
                      <div key={index} className="bg-card border border-border rounded-lg p-6">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-foreground mb-2">{event?.name}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{event?.description}</p>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <Icon name="Calendar" size={16} />
                              <span>{event?.date}</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">Learn More</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default MonasteryDetail;