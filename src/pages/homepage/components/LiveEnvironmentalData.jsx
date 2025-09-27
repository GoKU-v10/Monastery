import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LiveEnvironmentalData = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedSite, setSelectedSite] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const monasteries = [
    {
      id: 1,
      name: "Tashilhunpo Monastery",
      location: "Tibet, China",
      coordinates: "29.2675°N, 88.8739°E",
      elevation: "3,840m",
      temperature: "12°C",
      humidity: "45%",
      airQuality: "Good",
      windSpeed: "8 km/h",
      visibility: "15 km",
      uvIndex: "High",
      status: "Protected",
      lastUpdate: "2 minutes ago",
      threats: ["Climate Change", "Tourism Impact"],
      conservation: 85
    },
    {
      id: 2,
      name: "Hemis Monastery",
      location: "Ladakh, India",
      coordinates: "34.1342°N, 77.6186°E",
      elevation: "3,505m",
      temperature: "8°C",
      humidity: "38%",
      airQuality: "Excellent",
      windSpeed: "12 km/h",
      visibility: "20 km",
      uvIndex: "Very High",
      status: "Monitoring",
      lastUpdate: "5 minutes ago",
      threats: ["Water Scarcity", "Extreme Weather"],
      conservation: 92
    },
    {
      id: 3,
      name: "Rongbuk Monastery",
      location: "Tibet, China",
      coordinates: "28.1211°N, 86.8522°E",
      elevation: "5,009m",
      temperature: "-2°C",
      humidity: "25%",
      airQuality: "Good",
      windSpeed: "25 km/h",
      visibility: "12 km",
      uvIndex: "Extreme",
      status: "Critical",
      lastUpdate: "1 minute ago",
      threats: ["Glacier Melting", "Extreme Altitude"],
      conservation: 78
    }
  ];

  const currentSite = monasteries?.[selectedSite];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Protected': return 'text-success bg-success/10 border-success/20';
      case 'Monitoring': return 'text-warning bg-warning/10 border-warning/20';
      case 'Critical': return 'text-error bg-error/10 border-error/20';
      default: return 'text-muted-foreground bg-muted/10 border-border';
    }
  };

  const getAirQualityColor = (quality) => {
    switch (quality) {
      case 'Excellent': return 'text-success';
      case 'Good': return 'text-primary';
      case 'Moderate': return 'text-warning';
      case 'Poor': return 'text-error';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Icon name="Activity" size={24} className="text-success animate-pulse" />
            </div>
            <span className="text-sm font-medium text-success tracking-wide uppercase">
              Live Environmental Monitoring
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real-Time Sacred Site Protection
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Monitor environmental conditions at monastery sites worldwide through our advanced sensor network. 
            Track conservation efforts and contribute to heritage preservation initiatives.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Site Selector */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Select Monastery Site
            </h3>
            
            {monasteries?.map((site, index) => (
              <button
                key={site?.id}
                onClick={() => setSelectedSite(index)}
                className={`w-full p-4 rounded-xl border text-left transition-all duration-300 ${
                  selectedSite === index
                    ? 'bg-primary/10 border-primary/30 shadow-soft'
                    : 'bg-card/50 border-border/50 hover:bg-muted/30'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-foreground">{site?.name}</h4>
                    <p className="text-sm text-muted-foreground">{site?.location}</p>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(site?.status)}`}>
                    {site?.status}
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Conservation Score</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-success to-primary transition-all duration-500"
                        style={{ width: `${site?.conservation}%` }}
                      />
                    </div>
                    <span className="font-medium text-foreground">{site?.conservation}%</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Live Data Dashboard */}
          <div className="lg:col-span-2">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden">
              {/* Header */}
              <div className="p-6 border-b border-border/50 bg-gradient-to-r from-primary/5 to-secondary/5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{currentSite?.name}</h3>
                    <p className="text-muted-foreground">{currentSite?.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Last Updated</div>
                    <div className="font-medium text-foreground">{currentSite?.lastUpdate}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Icon name="MapPin" size={14} />
                    <span>{currentSite?.coordinates}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Mountain" size={14} />
                    <span>{currentSite?.elevation}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={14} />
                    <span>{currentTime?.toLocaleTimeString()}</span>
                  </div>
                </div>
              </div>

              {/* Environmental Metrics */}
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon name="Thermometer" size={24} className="text-blue-500" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{currentSite?.temperature}</div>
                    <div className="text-sm text-muted-foreground">Temperature</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon name="Droplets" size={24} className="text-cyan-500" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{currentSite?.humidity}</div>
                    <div className="text-sm text-muted-foreground">Humidity</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon name="Wind" size={24} className="text-green-500" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{currentSite?.windSpeed}</div>
                    <div className="text-sm text-muted-foreground">Wind Speed</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon name="Eye" size={24} className="text-purple-500" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{currentSite?.visibility}</div>
                    <div className="text-sm text-muted-foreground">Visibility</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon name="Sun" size={24} className="text-orange-500" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{currentSite?.uvIndex}</div>
                    <div className="text-sm text-muted-foreground">UV Index</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon name="Leaf" size={24} className="text-teal-500" />
                    </div>
                    <div className={`text-2xl font-bold ${getAirQualityColor(currentSite?.airQuality)}`}>
                      {currentSite?.airQuality}
                    </div>
                    <div className="text-sm text-muted-foreground">Air Quality</div>
                  </div>
                </div>

                {/* Threats & Conservation */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-error/5 rounded-xl p-4 border border-error/20">
                    <div className="flex items-center space-x-2 mb-3">
                      <Icon name="AlertTriangle" size={20} className="text-error" />
                      <h4 className="font-medium text-foreground">Environmental Threats</h4>
                    </div>
                    <div className="space-y-2">
                      {currentSite?.threats?.map((threat, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-error rounded-full" />
                          <span className="text-sm text-muted-foreground">{threat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-success/5 rounded-xl p-4 border border-success/20">
                    <div className="flex items-center space-x-2 mb-3">
                      <Icon name="Shield" size={20} className="text-success" />
                      <h4 className="font-medium text-foreground">Conservation Status</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Overall Health</span>
                        <span className="font-medium text-foreground">{currentSite?.conservation}%</span>
                      </div>
                      <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-success to-primary transition-all duration-1000"
                          style={{ width: `${currentSite?.conservation}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button
                    variant="default"
                    iconName="BarChart3"
                    iconPosition="left"
                    className="flex-1"
                  >
                    View Detailed Analytics
                  </Button>
                  <Button
                    variant="outline"
                    iconName="Heart"
                    iconPosition="left"
                    className="flex-1"
                  >
                    Support Conservation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveEnvironmentalData;