import React from 'react';
import ReactPlayer from 'react-player';

const getYouTubeVideoId = (url) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  if (match && match[2].length === 11) {
    return match[2];
  }
  return null;
};

const VideoPlayer = ({ events, currentVideo, onVideoSelect }) => {
    if (!events || events.length === 0) {
        return null;
    }

    const videoUrl = currentVideo || events[0].videoUrl;
    const videoId = getYouTubeVideoId(videoUrl);
    const playableUrl = videoId ? `https://www.youtube.com/watch?v=${videoId}` : videoUrl;

    return (
        <section id="video-player" className="py-12 bg-muted rounded-lg">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Event Highlights</h2>
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="w-full lg:w-2/3 mx-auto">
                        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
                            <ReactPlayer
                                url={playableUrl}
                                width="100%"
                                height="100%"
                                controls
                                playing={!!currentVideo}
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <h3 className="text-xl font-bold mb-4">Playlist</h3>
                        <div className="flex overflow-x-auto space-x-4 p-2">
                            {events.map(event => {
                                const isSelected = videoUrl === event.videoUrl;
                                return (
                                    <div 
                                        key={event.id} 
                                        className={`flex-shrink-0 w-48 p-2 rounded-lg cursor-pointer transition-all ${isSelected ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-card/80'}`}
                                        onClick={() => onVideoSelect(event.videoUrl)}
                                    >
                                        <img src={event.image} alt={event.name} className="w-full h-24 object-cover rounded-md mb-2" />
                                        <h4 className="font-bold text-sm truncate">{event.name}</h4>
                                        <p className="text-xs text-muted-foreground truncate">{event.monastery}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoPlayer;
