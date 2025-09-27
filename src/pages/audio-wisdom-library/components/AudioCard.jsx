import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AudioCard = ({ track, isPlaying, onPlay, onAddToPlaylist, onDownload }) => {
  const languageColors = {
    'English': 'bg-blue-100 text-blue-800',
    'Tibetan': 'bg-red-100 text-red-800',
    'Sanskrit': 'bg-yellow-100 text-yellow-800',
    'Mandarin': 'bg-green-100 text-green-800',
    'Japanese': 'bg-purple-100 text-purple-800'
  };

  const categoryIcons = {
    'Guided Meditation': 'Brain',
    'Cultural Story': 'BookOpen',
    'Monastery Tour': 'MapPin',
    'Chanting': 'Music',
    'Teaching': 'GraduationCap',
    'Nature Sounds': 'Leaf'
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-medium transition-all duration-300 group">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
            <Icon 
              name={categoryIcons?.[track?.category] || 'Headphones'} 
              size={20} 
              className="text-primary" 
            />
          </div>
          <div>
            <h3 className="font-sans font-semibold text-foreground group-hover:text-primary transition-colors">
              {track?.title}
            </h3>
            <p className="text-sm text-muted-foreground">{track?.narrator}</p>
          </div>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onPlay(track)}
          className="opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Icon name={isPlaying ? "Pause" : "Play"} size={16} />
        </Button>
      </div>
      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {track?.description}
      </p>
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${languageColors?.[track?.language] || 'bg-gray-100 text-gray-800'}`}>
          {track?.language}
        </span>
        <span className="px-2 py-1 bg-muted rounded-full text-xs text-muted-foreground">
          {track?.category}
        </span>
        {track?.isOfflineAvailable && (
          <span className="px-2 py-1 bg-success/20 text-success rounded-full text-xs font-medium">
            Offline
          </span>
        )}
      </div>
      {/* Stats */}
      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1">
            <Icon name="Clock" size={14} />
            <span>{track?.duration}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Icon name="Users" size={14} />
            <span>{track?.listens}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Icon name="Star" size={14} />
            <span>{track?.rating}</span>
          </span>
        </div>
      </div>
      {/* Actions */}
      <div className="flex items-center justify-between">
        <Button
          variant="default"
          size="sm"
          onClick={() => onPlay(track)}
          iconName={isPlaying ? "Pause" : "Play"}
          iconPosition="left"
          className="flex-1 mr-2"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </Button>
        
        <div className="flex space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onAddToPlaylist(track)}
            className="text-muted-foreground hover:text-foreground"
          >
            <Icon name="Plus" size={16} />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDownload(track)}
            className="text-muted-foreground hover:text-foreground"
          >
            <Icon name="Download" size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AudioCard;