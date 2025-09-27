import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';

const ARExperience = ({ selectedLocation }) => {
  const [isARActive, setIsARActive] = useState(false);
  const [cameraPermission, setCameraPermission] = useState(null);
  const [arMode, setArMode] = useState('overlay'); // overlay, navigation, meditation
  const [detectedObjects, setDetectedObjects] = useState([]);
  const [compassHeading, setCompassHeading] = useState(0);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const arFeatures = [
    {
      id: 'overlay',
      name: 'Sacred Overlay',
      description: 'View spiritual information overlaid on your environment',
      icon: 'Eye',
      color: 'text-primary'
    },
    {
      id: 'navigation',
      name: 'AR Navigation',
      description: 'Get directional guidance to monastery locations',
      icon: 'Navigation',
      color: 'text-secondary'
    },
    {
      id: 'meditation',
      name: 'Meditation Space',
      description: 'Create a virtual meditation environment anywhere',
      icon: 'Flower',
      color: 'text-accent'
    }
  ];

  const mockARObjects = [
    {
      id: 'buddha-statue',
      name: 'Buddha Statue',
      type: 'spiritual',
      position: { x: 45, y: 60 },
      info: 'This represents the historical Buddha in meditation posture',
      mantra: 'Om Mani Padme Hum',
      significance: 'Symbol of enlightenment and compassion'
    },
    {
      id: 'prayer-wheel',
      name: 'Prayer Wheel',
      type: 'interactive',
      position: { x: 70, y: 40 },
      info: 'Spinning prayer wheels sends mantras into the universe',
      action: 'Touch to spin and generate merit',
      sound: 'prayer-wheel-spin.mp3'
    },
    {
      id: 'lotus-flower',
      name: 'Lotus Flower',
      type: 'symbolic',
      position: { x: 30, y: 75 },
      info: 'The lotus represents purity rising from muddy waters',
      teaching: 'Like the lotus, we can find beauty and wisdom in difficult circumstances',
      meditation: 'Focus on the lotus to cultivate inner purity'
    },
    {
      id: 'incense-burner',
      name: 'Incense Burner',
      type: 'atmospheric',
      position: { x: 55, y: 30 },
      info: 'Sacred smoke carries prayers and purifies the space',
      fragrance: 'Sandalwood and jasmine',
      ritual: 'Light incense to begin meditation practice'
    }
  ];

  useEffect(() => {
    // Simulate compass heading updates
    const interval = setInterval(() => {
      setCompassHeading(prev => (prev + 1) % 360);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const requestCameraPermission = async () => {
    try {
      const stream = await navigator.mediaDevices?.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      setCameraPermission('granted');
      if (videoRef?.current) {
        videoRef.current.srcObject = stream;
      }
      return true;
    } catch (error) {
      setCameraPermission('denied');
      console.error('Camera access denied:', error);
      return false;
    }
  };

  const startARExperience = async () => {
    if (cameraPermission !== 'granted') {
      const granted = await requestCameraPermission();
      if (!granted) return;
    }
    
    setIsARActive(true);
    // Simulate object detection
    setTimeout(() => {
      setDetectedObjects(mockARObjects);
    }, 1500);
  };

  const stopARExperience = () => {
    setIsARActive(false);
    setDetectedObjects([]);
    if (videoRef?.current && videoRef?.current?.srcObject) {
      const tracks = videoRef?.current?.srcObject?.getTracks();
      tracks?.forEach(track => track?.stop());
    }
  };

  const handleObjectInteraction = (object) => {
    // Simulate object interaction
    console.log('Interacting with:', object?.name);
    
    // Add visual feedback
    const element = document.getElementById(`ar-object-${object?.id}`);
    if (element) {
      element?.classList?.add('animate-pulse');
      setTimeout(() => {
        element?.classList?.remove('animate-pulse');
      }, 1000);
    }
  };

  const getDirectionToMonastery = () => {
    // Mock direction calculation
    const directions = [
      { direction: 'North', distance: '2.3 km', bearing: 0 },
      { direction: 'Northeast', distance: '1.8 km', bearing: 45 },
      { direction: 'East', distance: '3.1 km', bearing: 90 }
    ];
    return directions?.[Math.floor(Math.random() * directions?.length)];
  };

  const currentDirection = getDirectionToMonastery();

  return (
    <div className="bg-card rounded-lg shadow-medium overflow-hidden">
      {/* AR Header */}
      <div className="p-4 border-b border-border bg-gradient-to-r from-accent/5 to-secondary/5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-sans font-semibold text-lg text-foreground">
              Augmented Reality Experience
            </h3>
            <p className="text-sm text-muted-foreground">
              Immerse yourself in sacred digital overlays
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            {isARActive ? (
              <Button
                variant="destructive"
                size="sm"
                iconName="X"
                onClick={stopARExperience}
              >
                Stop AR
              </Button>
            ) : (
              <Button
                variant="default"
                size="sm"
                iconName="Camera"
                onClick={startARExperience}
                className="candlelight-glow"
              >
                Start AR
              </Button>
            )}
          </div>
        </div>

        {/* AR Mode Selector */}
        <div className="flex space-x-2 mt-4 overflow-x-auto">
          {arFeatures?.map((feature) => (
            <button
              key={feature?.id}
              onClick={() => setArMode(feature?.id)}
              className={`flex-shrink-0 flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                arMode === feature?.id
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <Icon name={feature?.icon} size={16} className={feature?.color} />
              <span>{feature?.name}</span>
            </button>
          ))}
        </div>
      </div>
      {/* AR Viewport */}
      <div className="relative">
        {!isARActive ? (
          /* AR Preview/Setup */
          (<div className="h-96 bg-gradient-to-br from-muted/30 to-muted/60 flex items-center justify-center">
            <div className="text-center max-w-md px-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Camera" size={32} className="text-primary" />
              </div>
              
              <h4 className="font-sans font-semibold text-lg text-foreground mb-2">
                Ready for AR Experience
              </h4>
              
              <p className="text-sm text-muted-foreground mb-6">
                Point your camera at any space to overlay sacred elements and spiritual guidance. 
                Works best in well-lit environments.
              </p>

              {cameraPermission === 'denied' && (
                <div className="bg-error/10 border border-error/20 rounded-lg p-3 mb-4">
                  <div className="flex items-center space-x-2 text-error text-sm">
                    <Icon name="AlertTriangle" size={16} />
                    <span>Camera access required for AR experience</span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                {arFeatures?.map((feature) => (
                  <div key={feature?.id} className="bg-background rounded-lg p-3 text-center">
                    <Icon name={feature?.icon} size={20} className={`${feature?.color} mx-auto mb-2`} />
                    <p className="font-medium text-foreground">{feature?.name}</p>
                    <p className="text-muted-foreground mt-1">{feature?.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>)
        ) : (
          /* Active AR View */
          (<div className="relative h-96 bg-black overflow-hidden">
            {/* Camera Feed */}
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
            />
            {/* AR Overlays */}
            <div className="absolute inset-0">
              {/* Compass (Navigation Mode) */}
              {arMode === 'navigation' && (
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center space-x-3">
                    <div className="relative w-12 h-12">
                      <div 
                        className="absolute inset-0 border-2 border-primary rounded-full"
                        style={{ transform: `rotate(${compassHeading}deg)` }}
                      >
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <Icon name="Navigation" size={16} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary" />
                    </div>
                    
                    <div className="text-xs">
                      <p className="font-medium text-foreground">{currentDirection?.direction}</p>
                      <p className="text-muted-foreground">{currentDirection?.distance}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Sacred Objects Overlay */}
              {arMode === 'overlay' && detectedObjects?.map((object) => (
                <div
                  key={object?.id}
                  id={`ar-object-${object?.id}`}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{ left: `${object?.position?.x}%`, top: `${object?.position?.y}%` }}
                  onClick={() => handleObjectInteraction(object)}
                >
                  {/* Object Marker */}
                  <div className="w-8 h-8 bg-accent/90 rounded-full border-2 border-white shadow-medium flex items-center justify-center animate-pulse hover:animate-none transition-all duration-300 hover:scale-125">
                    <Icon name="Sparkles" size={16} className="text-white" />
                  </div>
                  
                  {/* Object Info Panel */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                    <div className="bg-popover/95 backdrop-blur-sm border border-border rounded-lg shadow-medium p-3 min-w-48">
                      <h4 className="font-medium text-sm text-popover-foreground mb-1">
                        {object?.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        {object?.info}
                      </p>
                      
                      {object?.mantra && (
                        <div className="text-xs text-accent font-medium">
                          🕉️ {object?.mantra}
                        </div>
                      )}
                      
                      {object?.action && (
                        <div className="text-xs text-primary mt-1">
                          👆 {object?.action}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Meditation Space Mode */}
              {arMode === 'meditation' && (
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/10">
                  {/* Floating Lotus Petals */}
                  <div className="absolute top-1/4 left-1/4 w-8 h-8 opacity-60 animate-bounce">
                    <Icon name="Flower" size={32} className="text-accent" />
                  </div>
                  <div className="absolute top-1/3 right-1/4 w-6 h-6 opacity-40 animate-bounce delay-1000">
                    <Icon name="Flower" size={24} className="text-secondary" />
                  </div>
                  <div className="absolute bottom-1/3 left-1/3 w-10 h-10 opacity-50 animate-bounce delay-500">
                    <Icon name="Flower" size={40} className="text-primary" />
                  </div>
                  
                  {/* Meditation Timer */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <Icon name="Clock" size={16} className="text-muted-foreground" />
                      <span className="text-foreground font-medium">5:00</span>
                      <Button variant="ghost" size="sm" iconName="Play" className="h-6 w-6 p-0" />
                    </div>
                  </div>
                </div>
              )}

              {/* AR Status Indicator */}
              <div className="absolute top-4 right-4 bg-success/80 backdrop-blur-sm rounded-full px-3 py-1">
                <div className="flex items-center space-x-2 text-xs text-white">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span>AR Active</span>
                </div>
              </div>
            </div>
          </div>)
        )}
      </div>
      {/* AR Controls */}
      <div className="p-4 bg-muted/20">
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            {isARActive ? (
              <span>Move your device to explore the sacred space</span>
            ) : (
              <span>Grant camera permission to begin AR experience</span>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              iconName="Settings"
              className="hidden sm:flex"
            >
              AR Settings
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              iconName="HelpCircle"
            >
              Help
            </Button>
          </div>
        </div>

        {/* Feature Description */}
        {isARActive && (
          <div className="mt-3 p-3 bg-background rounded-lg">
            <div className="flex items-start space-x-3">
              <Icon 
                name={arFeatures?.find(f => f?.id === arMode)?.icon || 'Eye'} 
                size={16} 
                className={arFeatures?.find(f => f?.id === arMode)?.color || 'text-primary'} 
              />
              <div>
                <h4 className="font-medium text-sm text-foreground">
                  {arFeatures?.find(f => f?.id === arMode)?.name}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  {arFeatures?.find(f => f?.id === arMode)?.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ARExperience;