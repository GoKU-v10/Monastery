import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SleepTimer = ({ isActive, onStart, onStop, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [selectedDuration, setSelectedDuration] = useState(30);
  const [showSettings, setShowSettings] = useState(false);

  const durations = [
    { label: '15 minutes', value: 15 },
    { label: '30 minutes', value: 30 },
    { label: '45 minutes', value: 45 },
    { label: '1 hour', value: 60 },
    { label: '1.5 hours', value: 90 },
    { label: '2 hours', value: 120 }
  ];

  useEffect(() => {
    let interval;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            onComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, onComplete]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}:${minutes?.toString()?.padStart(2, '0')}:${secs?.toString()?.padStart(2, '0')}`;
    }
    return `${minutes}:${secs?.toString()?.padStart(2, '0')}`;
  };

  const handleStart = () => {
    setTimeLeft(selectedDuration * 60);
    onStart(selectedDuration);
    setShowSettings(false);
  };

  const handleStop = () => {
    setTimeLeft(0);
    onStop();
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Icon name="Moon" size={20} className="text-primary" />
          <h3 className="font-medium text-foreground">Sleep Timer</h3>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setShowSettings(!showSettings)}
          className="text-muted-foreground hover:text-foreground"
        >
          <Icon name="Settings" size={16} />
        </Button>
      </div>
      {/* Timer Display */}
      {isActive && timeLeft > 0 ? (
        <div className="text-center mb-4">
          <div className="text-2xl font-mono font-semibold text-primary mb-2">
            {formatTime(timeLeft)}
          </div>
          <div className="w-full bg-muted rounded-full h-2 mb-4">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-1000"
              style={{
                width: `${((selectedDuration * 60 - timeLeft) / (selectedDuration * 60)) * 100}%`
              }}
            />
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleStop}
            iconName="Square"
            iconPosition="left"
          >
            Stop Timer
          </Button>
        </div>
      ) : (
        <div className="text-center mb-4">
          <p className="text-muted-foreground text-sm mb-4">
            Set a timer to automatically pause playback
          </p>
          
          {showSettings && (
            <div className="grid grid-cols-2 gap-2 mb-4">
              {durations?.map((duration) => (
                <button
                  key={duration?.value}
                  onClick={() => setSelectedDuration(duration?.value)}
                  className={`p-2 text-sm rounded-lg border transition-colors ${
                    selectedDuration === duration?.value
                      ? 'border-primary bg-primary/10 text-primary' :'border-border hover:border-primary/50 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {duration?.label}
                </button>
              ))}
            </div>
          )}
          
          <div className="flex items-center justify-center space-x-2">
            <span className="text-sm text-muted-foreground">
              {selectedDuration} minutes
            </span>
            <Button
              variant="default"
              size="sm"
              onClick={handleStart}
              iconName="Play"
              iconPosition="left"
            >
              Start Timer
            </Button>
          </div>
        </div>
      )}
      {/* Timer Info */}
      <div className="text-xs text-muted-foreground text-center">
        <p>Audio will fade out gradually before stopping</p>
      </div>
    </div>
  );
};

export default SleepTimer;