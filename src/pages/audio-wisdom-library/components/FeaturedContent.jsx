import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturedContent = ({ featuredTracks, onPlay, onExplore }) => {
  const categories = [
    {
      id: 'meditation',
      title: 'Guided Meditations',
      description: 'Find inner peace with our collection of guided meditation sessions',
      icon: 'Brain',
      color: 'bg-blue-500',
      tracks: featuredTracks?.filter(track => track?.category === 'Guided Meditation')?.slice(0, 3)
    },
    {
      id: 'stories',
      title: 'Cultural Stories',
      description: 'Discover ancient wisdom through traditional monastery tales',
      icon: 'BookOpen',
      color: 'bg-amber-500',
      tracks: featuredTracks?.filter(track => track?.category === 'Cultural Story')?.slice(0, 3)
    },
    {
      id: 'tours',
      title: 'Virtual Tours',
      description: 'Experience sacred spaces through immersive audio journeys',
      icon: 'MapPin',
      color: 'bg-green-500',
      tracks: featuredTracks?.filter(track => track?.category === 'Monastery Tour')?.slice(0, 3)
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-xl p-8 text-center">
        <Icon name="Headphones" size={48} className="text-primary mx-auto mb-4" />
        <h1 className="font-sans font-bold text-3xl text-foreground mb-4">
          Audio Wisdom Library
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
          Immerse yourself in the sacred sounds of monastery wisdom. Experience guided meditations, 
          cultural stories, and virtual tours with spatial audio technology.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="default"
            size="lg"
            iconName="Play"
            iconPosition="left"
            className="candlelight-glow"
          >
            Start Listening
          </Button>
          <Button
            variant="outline"
            size="lg"
            iconName="Download"
            iconPosition="left"
          >
            Offline Library
          </Button>
        </div>
      </div>
      {/* Featured Categories */}
      {categories?.map((category) => (
        <div key={category?.id} className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 ${category?.color} rounded-lg flex items-center justify-center`}>
                <Icon name={category?.icon} size={24} className="text-white" />
              </div>
              <div>
                <h2 className="font-sans font-semibold text-xl text-foreground">
                  {category?.title}
                </h2>
                <p className="text-muted-foreground">{category?.description}</p>
              </div>
            </div>
            
            <Button
              variant="ghost"
              onClick={() => onExplore(category?.id)}
              iconName="ArrowRight"
              iconPosition="right"
            >
              View All
            </Button>
          </div>

          {/* Track Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {category?.tracks?.map((track) => (
              <div
                key={track?.id}
                className="bg-muted/30 rounded-lg p-4 hover:bg-muted/50 transition-colors group cursor-pointer"
                onClick={() => onPlay(track)}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Icon name="Music" size={16} className="text-primary" />
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Icon name="Play" size={16} />
                  </Button>
                </div>
                
                <h3 className="font-medium text-foreground mb-1 line-clamp-2">
                  {track?.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {track?.narrator}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{track?.duration}</span>
                  <span className="flex items-center space-x-1">
                    <Icon name="Star" size={12} />
                    <span>{track?.rating}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {category?.tracks?.length === 0 && (
            <div className="text-center py-8">
              <Icon name={category?.icon} size={48} className="text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No tracks available in this category</p>
            </div>
          )}
        </div>
      ))}
      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <Icon name="Headphones" size={24} className="text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">500+</div>
          <div className="text-sm text-muted-foreground">Audio Tracks</div>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <Icon name="Globe" size={24} className="text-secondary mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">5</div>
          <div className="text-sm text-muted-foreground">Languages</div>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <Icon name="Clock" size={24} className="text-accent mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">200+</div>
          <div className="text-sm text-muted-foreground">Hours Content</div>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <Icon name="Download" size={24} className="text-success mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">100+</div>
          <div className="text-sm text-muted-foreground">Offline Ready</div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedContent;