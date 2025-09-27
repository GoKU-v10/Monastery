import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const SustainabilityEducation = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Topics', icon: 'BookOpen' },
    { id: 'conservation', label: 'Conservation', icon: 'Shield' },
    { id: 'renewable', label: 'Renewable Energy', icon: 'Zap' },
    { id: 'agriculture', label: 'Sustainable Agriculture', icon: 'Sprout' },
    { id: 'waste', label: 'Waste Management', icon: 'Recycle' }
  ];

  const educationalContent = [
    {
      id: 1,
      title: "Traditional Water Conservation in Himalayan Monasteries",
      category: "conservation",
      type: "article",
      duration: "8 min read",
      difficulty: "beginner",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      description: `Learn how ancient Tibetan monasteries developed sophisticated water conservation systems that modern engineers still study today. Discover traditional techniques for rainwater harvesting, groundwater protection, and sustainable water management in high-altitude environments.`,
      topics: ["Water harvesting", "Traditional engineering", "High-altitude conservation"],
      completions: 1247,
      rating: 4.8
    },
    {
      id: 2,
      title: "Solar Power in Sacred Spaces: A Gentle Approach",
      category: "renewable",
      type: "video",
      duration: "15 min",
      difficulty: "intermediate",
      image: "https://images.pixabay.com/photo/2017/09/12/13/21/photovoltaic-system-2742304_1280.jpg?w=400&h=250&fit=crop",
      description: `Explore how monasteries are integrating solar energy systems while maintaining the aesthetic and spiritual integrity of sacred spaces. This comprehensive guide covers planning, installation, and maintenance of renewable energy systems in heritage buildings.`,
      topics: ["Solar installation", "Heritage preservation", "Energy independence"],
      completions: 892,
      rating: 4.9
    },
    {
      id: 3,
      title: "Permaculture Principles in Monastery Gardens",
      category: "agriculture",
      type: "interactive",
      duration: "45 min",
      difficulty: "intermediate",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop",
      description: `Interactive course on applying permaculture principles to create sustainable food systems in monastery environments. Learn about companion planting, natural pest control, and soil regeneration techniques used by Tibetan monks for centuries.`,
      topics: ["Permaculture design", "Organic farming", "Soil health"],
      completions: 634,
      rating: 4.7
    },
    {
      id: 4,
      title: "Zero Waste Philosophy: Lessons from Monastic Life",
      category: "waste",
      type: "workshop",
      duration: "2 hours",
      difficulty: "beginner",
      image: "https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?w=400&h=250&fit=crop",
      description: `Virtual workshop exploring how monastic communities have practiced zero waste living for centuries. Learn practical techniques for reducing, reusing, and recycling that can be applied in modern life while honoring traditional wisdom.`,
      topics: ["Waste reduction", "Mindful consumption", "Traditional practices"],
      completions: 1456,
      rating: 4.6
    },
    {
      id: 5,
      title: "Climate Adaptation Strategies for Sacred Sites",
      category: "conservation",
      type: "case-study",
      duration: "12 min read",
      difficulty: "advanced",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      description: `Detailed case studies of how monastery communities are adapting to climate change while preserving their cultural heritage. Examine successful strategies for protecting ancient buildings, maintaining traditional practices, and building resilience.`,
      topics: ["Climate adaptation", "Heritage protection", "Community resilience"],
      completions: 567,
      rating: 4.9
    },
    {
      id: 6,
      title: "Renewable Energy Systems Design Workshop",
      category: "renewable",
      type: "workshop",
      duration: "3 hours",
      difficulty: "advanced",
      image: "https://images.pixabay.com/photo/2017/09/12/13/21/photovoltaic-system-2742304_1280.jpg?w=400&h=250&fit=crop",
      description: `Hands-on workshop for designing renewable energy systems for remote monastery locations. Learn about system sizing, component selection, installation planning, and maintenance schedules for off-grid solar and wind power systems.`,
      topics: ["System design", "Off-grid solutions", "Technical planning"],
      completions: 234,
      rating: 4.8
    }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? educationalContent 
    : educationalContent?.filter(item => item?.category === selectedCategory);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video': return 'Play';
      case 'interactive': return 'MousePointer';
      case 'workshop': return 'Users';
      case 'case-study': return 'FileText';
      default: return 'BookOpen';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'video': return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'interactive': return 'bg-purple-500/10 text-purple-600 border-purple-500/20';
      case 'workshop': return 'bg-green-500/10 text-green-600 border-green-500/20';
      case 'case-study': return 'bg-orange-500/10 text-orange-600 border-orange-500/20';
      default: return 'bg-primary/10 text-primary border-primary/20';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner': return 'bg-success/10 text-success';
      case 'intermediate': return 'bg-warning/10 text-warning';
      case 'advanced': return 'bg-error/10 text-error';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h3 className="font-sans font-semibold text-2xl text-foreground">Sustainability Education Center</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Learn from centuries of monastic wisdom combined with modern sustainability practices. 
          Discover how ancient traditions can guide us toward a more sustainable future.
        </p>
      </div>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => setSelectedCategory(category?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category?.id
                ? 'bg-primary text-primary-foreground shadow-soft'
                : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
          >
            <Icon name={category?.icon} size={16} />
            <span>{category?.label}</span>
          </button>
        ))}
      </div>
      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent?.map((content) => (
          <div
            key={content?.id}
            className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-medium transition-all duration-300 scroll-reveal"
          >
            {/* Content Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={content?.image}
                alt={content?.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex space-x-2">
                <span className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(content?.type)}`}>
                  <Icon name={getTypeIcon(content?.type)} size={12} />
                  <span className="capitalize">{content?.type}</span>
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(content?.difficulty)}`}>
                  {content?.difficulty}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 space-y-4">
              <div>
                <h4 className="font-sans font-semibold text-lg text-foreground mb-2 line-clamp-2">
                  {content?.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {content?.description}
                </p>
              </div>

              {/* Topics */}
              <div className="flex flex-wrap gap-1">
                {content?.topics?.slice(0, 3)?.map((topic, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-md"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={14} />
                    <span>{content?.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Users" size={14} />
                    <span>{content?.completions}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Star" size={14} className="text-accent fill-current" />
                  <span className="font-medium">{content?.rating}</span>
                </div>
              </div>

              {/* Action Button */}
              <Button
                variant="outline"
                size="sm"
                iconName="ArrowRight"
                iconPosition="right"
                className="w-full"
              >
                Start Learning
              </Button>
            </div>
          </div>
        ))}
      </div>
      {/* Learning Path Suggestion */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-lg p-6">
        <div className="flex items-start space-x-4">
          <div className="bg-primary/10 p-3 rounded-lg">
            <Icon name="Lightbulb" size={24} className="text-primary" />
          </div>
          <div className="flex-1">
            <h4 className="font-sans font-semibold text-lg text-foreground mb-2">
              Suggested Learning Path
            </h4>
            <p className="text-muted-foreground mb-4">
              New to sustainability? Start with our beginner-friendly content and progress through 
              our structured learning path designed by monastery sustainability experts.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="default"
                size="sm"
                iconName="Play"
                iconPosition="left"
              >
                Start Beginner Path
              </Button>
              <Button
                variant="outline"
                size="sm"
                iconName="BookOpen"
                iconPosition="left"
              >
                View All Paths
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityEducation;