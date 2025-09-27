import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AudioPlayer = ({ currentTrack, isPlaying, onPlayPause, onNext, onPrevious, onSeek, onVolumeChange, onSpeedChange }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef?.current) {
      audioRef.current.volume = volume;
      audioRef.current.playbackRate = playbackSpeed;
    }
  }, [volume, playbackSpeed]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds?.toString()?.padStart(2, '0')}`;
  };

  const handleSeek = (e) => {
    const rect = e?.currentTarget?.getBoundingClientRect();
    const percent = (e?.clientX - rect?.left) / rect?.width;
    const newTime = percent * duration;
    setCurrentTime(newTime);
    onSeek(newTime);
  };

  const speedOptions = [0.5, 0.75, 1, 1.25, 1.5, 2];

  if (!currentTrack) {
    return (
      <div className="bg-card border border-border rounded-lg p-6 text-center">
        <Icon name="Headphones" size={48} className="text-muted-foreground mx-auto mb-4" />
        <p className="text-muted-foreground">Select an audio track to begin your journey</p>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-soft">
      <audio
        ref={audioRef}
        src={currentTrack?.audioUrl}
        onTimeUpdate={(e) => setCurrentTime(e?.target?.currentTime)}
        onLoadedMetadata={(e) => setDuration(e?.target?.duration)}
        onEnded={onNext}
      />
      {/* Track Info */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon name={currentTrack?.icon} size={24} className="text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-sans font-semibold text-lg text-foreground truncate">
            {currentTrack?.title}
          </h3>
          <p className="text-muted-foreground text-sm truncate">
            {currentTrack?.narrator} • {currentTrack?.language}
          </p>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-xs text-muted-foreground">{currentTrack?.category}</span>
            <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
            <span className="text-xs text-muted-foreground">{currentTrack?.duration}</span>
          </div>
        </div>
      </div>
      {/* Progress Bar */}
      <div className="mb-6">
        <div 
          className="w-full h-2 bg-muted rounded-full cursor-pointer"
          onClick={handleSeek}
        >
          <div 
            className="h-full bg-primary rounded-full transition-all duration-300"
            style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-muted-foreground mt-2">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
      {/* Controls */}
      <div className="flex items-center justify-center space-x-4 mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={onPrevious}
          className="text-muted-foreground hover:text-foreground"
        >
          <Icon name="SkipBack" size={20} />
        </Button>

        <Button
          variant="default"
          size="lg"
          onClick={onPlayPause}
          className="w-12 h-12 rounded-full candlelight-glow"
        >
          <Icon name={isPlaying ? "Pause" : "Play"} size={24} />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={onNext}
          className="text-muted-foreground hover:text-foreground"
        >
          <Icon name="SkipForward" size={20} />
        </Button>
      </div>
      {/* Additional Controls */}
      <div className="flex items-center justify-between">
        {/* Volume Control */}
        <div className="flex items-center space-x-2">
          <Icon name="Volume2" size={16} className="text-muted-foreground" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => {
              const newVolume = parseFloat(e?.target?.value);
              setVolume(newVolume);
              onVolumeChange(newVolume);
            }}
            className="w-20 h-1 bg-muted rounded-full appearance-none cursor-pointer"
          />
        </div>

        {/* Speed Control */}
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowSpeedMenu(!showSpeedMenu)}
            className="text-muted-foreground hover:text-foreground"
          >
            {playbackSpeed}x
          </Button>
          
          {showSpeedMenu && (
            <div className="absolute bottom-full right-0 mb-2 bg-popover border border-border rounded-lg shadow-medium py-2 z-50">
              {speedOptions?.map((speed) => (
                <button
                  key={speed}
                  onClick={() => {
                    setPlaybackSpeed(speed);
                    onSpeedChange(speed);
                    setShowSpeedMenu(false);
                  }}
                  className={`block w-full px-4 py-2 text-sm text-left hover:bg-muted/50 transition-colors ${
                    speed === playbackSpeed ? 'text-primary bg-primary/10' : 'text-popover-foreground'
                  }`}
                >
                  {speed}x
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Download */}
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground"
        >
          <Icon name="Download" size={16} />
        </Button>
      </div>
    </div>
  );
};

export default AudioPlayer;