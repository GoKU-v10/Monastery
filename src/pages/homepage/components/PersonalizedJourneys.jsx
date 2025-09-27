import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PersonalizedJourneys = () => {
  const [selectedJourney, setSelectedJourney] = useState(0);
  const [userPreferences, setUserPreferences] = useState({
    experience: 'beginner',
    interest: 'spiritual',
    time: 'flexible'
  });

  const journeyTypes = [
    {
      id: 1,
      title: "Spiritual Seeker Path",
      description: "Discover inner peace through guided meditation, virtual pilgrimage, and ancient wisdom teachings.",
      duration: "2-4 weeks",
      difficulty: "Beginner Friendly",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      color: "from-purple-500/20 to-indigo-500/20",
      icon: "Heart",
      steps: [
        { title: "Virtual Monastery Tour", description: "360° exploration of sacred spaces", route: "/virtual-pilgrimage-center" },
        { title: "Guided Meditation", description: "Daily mindfulness practices", route: "/homepage" },
        { title: "Wisdom Library", description: "Audio teachings and stories", route: "/audio-wisdom-library" },
        { title: "Community Connection", description: "Join spiritual discussions", route: "/heritage-community" }
      ],
      benefits: ["Inner Peace", "Cultural Understanding", "Mindful Living", "Global Community"]
    },
    {
      id: 2,
      title: "Academic Researcher Journey",
      description: "Contribute to heritage preservation through manuscript digitization and collaborative research.",
      duration: "Ongoing",
      difficulty: "Advanced",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      color: "from-blue-500/20 to-cyan-500/20",
      icon: "BookOpen",
      steps: [
        { title: "Manuscript Portal", description: "Access AI digitization tools", route: "/ai-manuscript-portal" },
        { title: "Research Collaboration", description: "Work with global scholars", route: "/heritage-community" },
        { title: "Data Analysis", description: "Environmental monitoring", route: "/environmental-stewardship" },
        { title: "Publication Platform", description: "Share research findings", route: "/heritage-community" }
      ],
      benefits: ["Research Impact", "Global Collaboration", "Cultural Preservation", "Academic Recognition"]
    },
    {
      id: 3,
      title: "Cultural Tourist Experience",
      description: "Plan meaningful monastery visits with AR navigation and immersive cultural learning.",
      duration: "1-3 weeks",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop",
      color: "from-green-500/20 to-teal-500/20",
      icon: "MapPin",
      steps: [
        { title: "Pilgrimage Planning", description: "Personalized travel routes", route: "/virtual-pilgrimage-center" },
        { title: "Audio Guides", description: "Offline cultural content", route: "/audio-wisdom-library" },
        { title: "AR Navigation", description: "Interactive site exploration", route: "/virtual-pilgrimage-center" },
        { title: "Community Sharing", description: "Document your journey", route: "/heritage-community" }
      ],
      benefits: ["Authentic Experiences", "Cultural Immersion", "Sustainable Tourism", "Local Impact"]
    },
    {
      id: 4,
      title: "Conservation Advocate Path",
      description: "Protect sacred spaces through environmental monitoring and preservation initiatives.",
      duration: "Ongoing",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
      color: "from-emerald-500/20 to-green-500/20",
      icon: "Leaf",
      steps: [
        { title: "Environmental Dashboard", description: "Monitor site conditions", route: "/environmental-stewardship" },
        { title: "Conservation Projects", description: "Join preservation efforts", route: "/environmental-stewardship" },
        { title: "Fundraising Campaigns", description: "Support heritage sites", route: "/heritage-community" },
        { title: "Impact Tracking", description: "Measure conservation success", route: "/environmental-stewardship" }
      ],
      benefits: ["Environmental Impact", "Heritage Protection", "Community Leadership", "Global Change"]
    }
  ];

  const currentJourney = journeyTypes?.[selectedJourney];

  const getRecommendations = () => {
    const { experience, interest, time } = userPreferences;
    
    if (interest === 'spiritual' && experience === 'beginner') return 0;
    if (interest === 'academic' || experience === 'advanced') return 1;
    if (interest === 'travel' && time === 'limited') return 2;
    if (interest === 'environment') return 3;
    
    return 0;
  };

  useEffect(() => {
    setSelectedJourney(getRecommendations());
  }, [userPreferences]);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Icon name="Route" size={24} className="text-accent" />
            </div>
            <span className="text-sm font-medium text-accent tracking-wide uppercase">
              Personalized Learning Paths
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Journey to Digital Enlightenment
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover curated learning paths tailored to your interests, experience level, and goals. 
            Each journey combines ancient wisdom with modern technology for meaningful cultural engagement.
          </p>
        </div>

        {/* Preference Selector */}
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-6 mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
            Customize Your Journey
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Experience Level
              </label>
              <div className="space-y-2">
                {['beginner', 'intermediate', 'advanced']?.map((level) => (
                  <button
                    key={level}
                    onClick={() => setUserPreferences(prev => ({ ...prev, experience: level }))}
                    className={`w-full p-3 rounded-lg text-left transition-all duration-200 ${
                      userPreferences?.experience === level
                        ? 'bg-primary/10 border border-primary/30 text-primary' :'bg-muted/30 border border-border/50 text-muted-foreground hover:bg-muted/50'
                    }`}
                  >
                    <div className="font-medium capitalize">{level}</div>
                    <div className="text-xs opacity-70">
                      {level === 'beginner' && 'New to monastery culture'}
                      {level === 'intermediate' && 'Some cultural knowledge'}
                      {level === 'advanced' && 'Expert or researcher'}
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Primary Interest
              </label>
              <div className="space-y-2">
                {[
                  { key: 'spiritual', label: 'Spiritual Growth', desc: 'Meditation & mindfulness' },
                  { key: 'academic', label: 'Academic Research', desc: 'Scholarly pursuits' },
                  { key: 'travel', label: 'Cultural Tourism', desc: 'Travel & exploration' },
                  { key: 'environment', label: 'Conservation', desc: 'Environmental protection' }
                ]?.map((interest) => (
                  <button
                    key={interest?.key}
                    onClick={() => setUserPreferences(prev => ({ ...prev, interest: interest?.key }))}
                    className={`w-full p-3 rounded-lg text-left transition-all duration-200 ${
                      userPreferences?.interest === interest?.key
                        ? 'bg-primary/10 border border-primary/30 text-primary' :'bg-muted/30 border border-border/50 text-muted-foreground hover:bg-muted/50'
                    }`}
                  >
                    <div className="font-medium">{interest?.label}</div>
                    <div className="text-xs opacity-70">{interest?.desc}</div>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Time Commitment
              </label>
              <div className="space-y-2">
                {[
                  { key: 'limited', label: 'Limited Time', desc: '1-2 hours/week' },
                  { key: 'moderate', label: 'Moderate', desc: '3-5 hours/week' },
                  { key: 'flexible', label: 'Flexible', desc: 'As needed' }
                ]?.map((time) => (
                  <button
                    key={time?.key}
                    onClick={() => setUserPreferences(prev => ({ ...prev, time: time?.key }))}
                    className={`w-full p-3 rounded-lg text-left transition-all duration-200 ${
                      userPreferences?.time === time?.key
                        ? 'bg-primary/10 border border-primary/30 text-primary' :'bg-muted/30 border border-border/50 text-muted-foreground hover:bg-muted/50'
                    }`}
                  >
                    <div className="font-medium">{time?.label}</div>
                    <div className="text-xs opacity-70">{time?.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Journey Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {journeyTypes?.map((journey, index) => (
            <button
              key={journey?.id}
              onClick={() => setSelectedJourney(index)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                selectedJourney === index
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted/70'
              }`}
            >
              <Icon name={journey?.icon} size={16} />
              <span className="text-sm font-medium">{journey?.title?.split(' ')?.[0]} {journey?.title?.split(' ')?.[1]}</span>
            </button>
          ))}
        </div>

        {/* Selected Journey Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Journey Overview */}
          <div className="space-y-8">
            <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${currentJourney?.color} p-8 border border-border/50`}>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Icon name={currentJourney?.icon} size={24} className="text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{currentJourney?.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{currentJourney?.duration}</span>
                      <span>•</span>
                      <span>{currentJourney?.difficulty}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {currentJourney?.description}
                </p>

                {/* Benefits */}
                <div className="grid grid-cols-2 gap-3">
                  {currentJourney?.benefits?.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <Image
                  src={currentJourney?.image}
                  alt={currentJourney?.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Journey Steps */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Your Learning Path</h4>
              
              {currentJourney?.steps?.map((step, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:shadow-soft transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">{index + 1}</span>
                  </div>
                  
                  <div className="flex-1">
                    <h5 className="font-medium text-foreground mb-1">{step?.title}</h5>
                    <p className="text-sm text-muted-foreground mb-3">{step?.description}</p>
                    
                    <Link to={step?.route}>
                      <Button
                        variant="ghost"
                        size="sm"
                        iconName="ArrowRight"
                        iconPosition="right"
                        className="text-primary hover:bg-primary/10"
                      >
                        Start Step
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Journey Visualization */}
          <div className="space-y-8">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl backdrop-blur-sm border border-border/50">
                <div className="absolute inset-4 rounded-2xl overflow-hidden">
                  <Image
                    src={currentJourney?.image}
                    alt={currentJourney?.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Progress Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  {/* Journey Progress */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">Journey Progress</span>
                        <span className="text-sm text-muted-foreground">0/4 Steps</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full">
                        <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full w-0 transition-all duration-1000" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Start Journey CTA */}
            <div className="text-center space-y-4">
              <h4 className="text-xl font-semibold text-foreground">
                Ready to Begin?
              </h4>
              <p className="text-muted-foreground">
                Start your personalized journey to digital enlightenment and cultural preservation.
              </p>
              
              <div className="space-y-3">
                <Link to={currentJourney?.steps?.[0]?.route}>
                  <Button
                    variant="default"
                    size="lg"
                    iconName="Play"
                    iconPosition="left"
                    className="w-full candlelight-glow"
                  >
                    Start {currentJourney?.title}
                  </Button>
                </Link>
                
                <Button
                  variant="outline"
                  size="lg"
                  iconName="BookOpen"
                  iconPosition="left"
                  className="w-full"
                >
                  Learn More About This Path
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedJourneys;