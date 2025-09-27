import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PilgrimageJourney = ({ selectedLocation }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [journeyProgress, setJourneyProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'bo', name: 'བོད་ཡིག', flag: '🏔️' },
    { code: 'sa', name: 'संस्कृत', flag: '🕉️' }
  ];

  const journeySteps = [
    {
      id: 'preparation',
      title: 'Sacred Preparation',
      duration: '5 minutes',
      description: 'Begin your spiritual journey with mindful preparation and intention setting',
      content: `Welcome to your virtual pilgrimage. Take a moment to center yourself.\n\nFind a quiet space where you won't be disturbed. Light a candle or incense if you have them available.\n\nSet your intention for this journey. What do you hope to discover or experience?\n\nTake three deep breaths, allowing yourself to transition from the everyday world into sacred space.`,
      audioFile: 'preparation-guide.mp3',image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      practices: [
        'Mindful breathing','Intention setting','Sacred space creation'
      ]
    },
    {
      id: 'approach',title: 'Approaching the Sacred',duration: '8 minutes',description: 'Experience the traditional approach to the monastery with reverence and awareness',
      content: `As pilgrims have done for centuries, we approach the monastery with humility and respect.\n\nImagine walking along the ancient path, feeling the stones beneath your feet that countless seekers have traveled.\n\nNotice the prayer flags fluttering in the wind, carrying mantras and blessings across the landscape.\n\nObserve the architecture rising before you - each element designed to inspire contemplation and awe.`,
      audioFile: 'approach-guide.mp3',image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&h=400&fit=crop',
      practices: [
        'Walking meditation','Architectural appreciation','Cultural awareness'
      ]
    },
    {
      id: 'entrance',title: 'Sacred Threshold',duration: '6 minutes',description: 'Cross the threshold into sacred space with proper reverence and protocol',
      content: `Pause at the entrance - this threshold marks the boundary between ordinary and sacred space.\n\nTraditionally, pilgrims remove their shoes and bow before entering. Take a moment to honor this custom.\n\nAs you cross the threshold, feel the shift in energy. The air itself seems different here.\n\nNotice the intricate carvings and symbols that guard the entrance, each telling stories of wisdom and protection.`,
      audioFile: 'entrance-guide.mp3',image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop',
      practices: [
        'Threshold ritual','Symbolic interpretation','Respectful entry'
      ]
    },
    {
      id: 'exploration',title: 'Sacred Exploration',duration: '15 minutes',description: 'Explore the monastery spaces with guided contemplation and learning',
      content: `Now we enter the heart of the monastery. Each space has been designed for specific spiritual purposes.\n\nThe main hall houses the central Buddha statue - notice how the light falls across the golden features.\n\nThe walls are covered with ancient murals depicting the path to enlightenment. Each image is a teaching.\n\nTake time to sit in meditation, joining the countless practitioners who have found peace in this very spot.`,
      audioFile: 'exploration-guide.mp3',image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      practices: [
        'Contemplative observation','Silent meditation','Artistic appreciation'
      ]
    },
    {
      id: 'reflection',title: 'Deep Reflection',duration: '10 minutes',description: 'Engage in guided reflection and personal contemplation',
      content: `Find a quiet corner for personal reflection. This is your time to process what you've experienced.\n\nWhat insights have emerged during your virtual pilgrimage? What questions arise?\n\nConsider how the wisdom of this place might apply to your daily life.\n\nAllow yourself to sit in silence, simply being present with whatever arises.`,
      audioFile: 'reflection-guide.mp3',
      image: 'https://images.unsplash.com/photo-1563492065-1a5a3e6b8e8e?w=600&h=400&fit=crop',
      practices: [
        'Personal reflection',
        'Insight integration',
        'Silent contemplation'
      ]
    },
    {
      id: 'dedication',
      title: 'Merit Dedication',
      duration: '5 minutes',
      description: 'Complete your journey with traditional merit dedication and gratitude',
      content: `As your virtual pilgrimage concludes, we follow the traditional practice of merit dedication.\n\nAny positive energy or insights gained from this journey, we dedicate to the benefit of all beings.\n\nExpress gratitude to the monastery, its inhabitants, and all who have preserved this sacred space.\n\nCarry the peace and wisdom you've touched here back into your daily life.`,
      audioFile: 'dedication-guide.mp3',image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      practices: [
        'Merit dedication','Gratitude expression','Integration commitment'
      ]
    }
  ];

  const currentStepData = journeySteps?.[currentStep];

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setJourneyProgress(prev => {
          if (prev >= 100) {
            setIsPlaying(false);
            if (currentStep < journeySteps?.length - 1) {
              setCurrentStep(prev => prev + 1);
            }
            return 0;
          }
          return prev + 1;
        });
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentStep]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleStepChange = (stepIndex) => {
    setCurrentStep(stepIndex);
    setJourneyProgress(0);
    setIsPlaying(false);
  };

  const handleNext = () => {
    if (currentStep < journeySteps?.length - 1) {
      setCurrentStep(currentStep + 1);
      setJourneyProgress(0);
      setIsPlaying(false);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setJourneyProgress(0);
      setIsPlaying(false);
    }
  };

  const totalDuration = journeySteps?.reduce((total, step) => {
    const minutes = parseInt(step?.duration?.split(' ')?.[0]);
    return total + minutes;
  }, 0);

  return (
    <div className="bg-card rounded-lg shadow-medium overflow-hidden">
      {/* Journey Header */}
      <div className="p-6 border-b border-border bg-gradient-to-r from-accent/5 to-primary/5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="font-sans font-semibold text-xl text-foreground">
              Guided Spiritual Journey
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {selectedLocation?.name || 'Sacred Monastery'} • {totalDuration} minutes total
            </p>
          </div>
          
          {/* Language Selector */}
          <div className="flex items-center space-x-2">
            <Icon name="Languages" size={16} className="text-muted-foreground" />
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e?.target?.value)}
              className="bg-background border border-border rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              {languages?.map((lang) => (
                <option key={lang?.code} value={lang?.code}>
                  {lang?.flag} {lang?.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="mt-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
            <span>Journey Progress</span>
            <span>{currentStep + 1} of {journeySteps?.length}</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + journeyProgress / 100) / journeySteps?.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
      {/* Step Navigation */}
      <div className="p-4 border-b border-border bg-muted/20">
        <div className="flex items-center space-x-2 overflow-x-auto pb-2">
          {journeySteps?.map((step, index) => (
            <button
              key={step?.id}
              onClick={() => handleStepChange(index)}
              className={`flex-shrink-0 flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                index === currentStep
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : index < currentStep
                  ? 'bg-success/10 text-success hover:bg-success/20' :'bg-background text-muted-foreground hover:bg-muted/50 hover:text-foreground'
              }`}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                index === currentStep
                  ? 'bg-primary-foreground/20'
                  : index < currentStep
                  ? 'bg-success text-success-foreground'
                  : 'bg-muted'
              }`}>
                {index < currentStep ? (
                  <Icon name="Check" size={12} />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <span className="hidden sm:inline">{step?.title}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Current Step Content */}
      <div className="p-6">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Step Image */}
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden">
              <Image
                src={currentStepData?.image}
                alt={currentStepData?.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Audio Controls Overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-3">
              <div className="flex items-center space-x-3">
                <Button
                  variant={isPlaying ? 'default' : 'outline'}
                  size="sm"
                  iconName={isPlaying ? 'Pause' : 'Play'}
                  onClick={handlePlayPause}
                />
                
                <div className="flex-1">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-200"
                      style={{ width: `${journeyProgress}%` }}
                    />
                  </div>
                </div>
                
                <span className="text-xs text-muted-foreground">
                  {currentStepData?.duration}
                </span>
              </div>
            </div>
          </div>

          {/* Step Content */}
          <div className="space-y-4">
            <div>
              <h4 className="font-sans font-semibold text-lg text-foreground mb-2">
                {currentStepData?.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {currentStepData?.description}
              </p>
            </div>

            <div className="prose prose-sm max-w-none">
              <div className="text-foreground whitespace-pre-line leading-relaxed">
                {currentStepData?.content}
              </div>
            </div>

            {/* Practices */}
            <div>
              <h5 className="font-medium text-sm text-foreground mb-2">
                Key Practices:
              </h5>
              <div className="flex flex-wrap gap-2">
                {currentStepData?.practices?.map((practice, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                  >
                    {practice}
                  </span>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <Button
                variant="outline"
                size="sm"
                iconName="ChevronLeft"
                iconPosition="left"
                onClick={handlePrevious}
                disabled={currentStep === 0}
              >
                Previous
              </Button>

              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="RotateCcw"
                  onClick={() => {
                    setJourneyProgress(0);
                    setIsPlaying(false);
                  }}
                >
                  Restart Step
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="Bookmark"
                >
                  Save Progress
                </Button>
              </div>

              <Button
                variant="default"
                size="sm"
                iconName="ChevronRight"
                iconPosition="right"
                onClick={handleNext}
                disabled={currentStep === journeySteps?.length - 1}
              >
                {currentStep === journeySteps?.length - 1 ? 'Complete' : 'Next'}
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Journey Summary */}
      {currentStep === journeySteps?.length - 1 && (
        <div className="p-6 border-t border-border bg-gradient-to-r from-success/5 to-primary/5">
          <div className="text-center">
            <Icon name="Heart" size={32} className="text-success mx-auto mb-3" />
            <h4 className="font-sans font-semibold text-lg text-foreground mb-2">
              Journey Complete
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              You have completed your virtual pilgrimage. May the peace and wisdom you've touched here benefit all beings.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                variant="outline"
                iconName="RotateCcw"
                onClick={() => {
                  setCurrentStep(0);
                  setJourneyProgress(0);
                  setIsPlaying(false);
                }}
              >
                Begin Again
              </Button>
              
              <Button
                variant="default"
                iconName="Share"
              >
                Share Experience
              </Button>
              
              <Button
                variant="secondary"
                iconName="Download"
              >
                Download Guide
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PilgrimageJourney;