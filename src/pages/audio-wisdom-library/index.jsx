import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Header from '../../components/ui/Header';
import AudioPlayer from './components/AudioPlayer';
import AudioCard from './components/AudioCard';
import PlaylistManager from './components/PlaylistManager';
import FilterPanel from './components/FilterPanel';
import SleepTimer from './components/SleepTimer';
import FeaturedContent from './components/FeaturedContent';

const AudioWisdomLibrary = () => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('featured');
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [sleepTimerActive, setSleepTimerActive] = useState(false);
  const [filters, setFilters] = useState({
    categories: [],
    languages: [],
    durations: [],
    offlineOnly: false,
    highQuality: false,
    recentlyAdded: false
  });

  // Mock data for audio tracks
  const audioTracks = [
    {
      id: 1,
      title: "Morning Meditation: Awakening Mindfulness",
      narrator: "Lama Tenzin",
      description: "Begin your day with this gentle 15-minute guided meditation focusing on breath awareness and setting positive intentions.",
      category: "Guided Meditation",
      language: "English",
      duration: "15:32",
      audioUrl: "/audio/morning-meditation.mp3",
      listens: "12.5K",
      rating: "4.9",
      isOfflineAvailable: true,
      icon: "Brain"
    },
    {
      id: 2,
      title: "The Legend of the Golden Buddha",
      narrator: "Master Chen Wei",
      description: "An ancient tale from the Shaolin Temple about discovering inner wisdom and the true nature of enlightenment.",
      category: "Cultural Story",
      language: "English",
      duration: "23:45",
      audioUrl: "/audio/golden-buddha.mp3",
      listens: "8.7K",
      rating: "4.8",
      isOfflineAvailable: true,
      icon: "BookOpen"
    },
    {
      id: 3,
      title: "Virtual Tour: Potala Palace",
      narrator: "Guide Pema",
      description: "Experience the sacred halls of the Potala Palace in Lhasa through immersive spatial audio and detailed descriptions.",
      category: "Monastery Tour",
      language: "English",
      duration: "45:20",
      audioUrl: "/audio/potala-tour.mp3",
      listens: "15.2K",
      rating: "4.9",
      isOfflineAvailable: false,
      icon: "MapPin"
    },
    {
      id: 4,
      title: "Tibetan Throat Singing: Om Mani Padme Hum",
      narrator: "Monks of Sera Monastery",
      description: "Traditional Tibetan chanting featuring the sacred mantra Om Mani Padme Hum, recorded live at Sera Monastery.",
      category: "Chanting",
      language: "Tibetan",
      duration: "31:15",
      audioUrl: "/audio/om-mani.mp3",
      listens: "20.1K",
      rating: "4.9",
      isOfflineAvailable: true,
      icon: "Music"
    },
    {
      id: 5,
      title: "The Four Noble Truths Explained",
      narrator: "Venerable Thich Minh An",
      description: "A comprehensive teaching on Buddhism's foundational principles, presented in accessible modern language.",
      category: "Teaching",
      language: "English",
      duration: "52:30",
      audioUrl: "/audio/four-truths.mp3",
      listens: "9.8K",
      rating: "4.7",
      isOfflineAvailable: true,
      icon: "GraduationCap"
    },
    {
      id: 6,
      title: "Mountain Stream Meditation",
      narrator: "Nature Sounds",
      description: "Peaceful sounds of a mountain stream flowing through a Himalayan monastery garden, perfect for meditation.",
      category: "Nature Sounds",
      language: "Instrumental",
      duration: "60:00",
      audioUrl: "/audio/stream.mp3",
      listens: "25.3K",
      rating: "4.8",
      isOfflineAvailable: true,
      icon: "Leaf"
    },
    {
      id: 7,
      title: "Walking Meditation Practice",
      narrator: "Sister Marie Nguyen",
      description: "Learn the art of mindful walking with this guided practice suitable for both indoor and outdoor meditation.",
      category: "Guided Meditation",
      language: "English",
      duration: "20:15",
      audioUrl: "/audio/walking-meditation.mp3",
      listens: "7.4K",
      rating: "4.6",
      isOfflineAvailable: false,
      icon: "Brain"
    },
    {
      id: 8,
      title: "The Monkey King\'s Journey",
      narrator: "Master Liu",
      description: "A beloved Chinese Buddhist tale about overcoming ego and finding true strength through wisdom and compassion.",
      category: "Cultural Story",
      language: "Mandarin",
      duration: "35:42",
      audioUrl: "/audio/monkey-king.mp3",
      listens: "11.2K",
      rating: "4.8",
      isOfflineAvailable: true,
      icon: "BookOpen"
    }
  ];

  // Mock playlists
  const [playlists, setPlaylists] = useState([
    {
      id: 1,
      name: "Morning Practice",
      description: "Start your day with mindfulness",
      tracks: [audioTracks?.[0], audioTracks?.[6]],
      createdAt: new Date('2024-01-15'),
      duration: "35 min"
    },
    {
      id: 2,
      name: "Cultural Wisdom",
      description: "Stories from ancient traditions",
      tracks: [audioTracks?.[1], audioTracks?.[7]],
      createdAt: new Date('2024-02-10'),
      duration: "59 min"
    }
  ]);

  // Filter tracks based on search and filters
  const filteredTracks = audioTracks?.filter(track => {
    const matchesSearch = track?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
                         track?.narrator?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
                         track?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase());
    
    const matchesCategory = filters?.categories?.length === 0 || filters?.categories?.includes(track?.category);
    const matchesLanguage = filters?.languages?.length === 0 || filters?.languages?.includes(track?.language);
    const matchesOffline = !filters?.offlineOnly || track?.isOfflineAvailable;
    
    return matchesSearch && matchesCategory && matchesLanguage && matchesOffline;
  });

  const handlePlayTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    const currentIndex = filteredTracks?.findIndex(track => track?.id === currentTrack?.id);
    const nextIndex = (currentIndex + 1) % filteredTracks?.length;
    setCurrentTrack(filteredTracks?.[nextIndex]);
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    const currentIndex = filteredTracks?.findIndex(track => track?.id === currentTrack?.id);
    const prevIndex = currentIndex === 0 ? filteredTracks?.length - 1 : currentIndex - 1;
    setCurrentTrack(filteredTracks?.[prevIndex]);
    setIsPlaying(true);
  };

  const handleCreatePlaylist = (playlist) => {
    setPlaylists([...playlists, playlist]);
  };

  const handleDeletePlaylist = (playlistId) => {
    setPlaylists(playlists?.filter(p => p?.id !== playlistId));
    if (selectedPlaylist?.id === playlistId) {
      setSelectedPlaylist(null);
    }
  };

  const handleAddToPlaylist = (track) => {
    if (selectedPlaylist) {
      const updatedPlaylists = playlists?.map(playlist => {
        if (playlist?.id === selectedPlaylist?.id) {
          return {
            ...playlist,
            tracks: [...playlist?.tracks, track]
          };
        }
        return playlist;
      });
      setPlaylists(updatedPlaylists);
      setSelectedPlaylist(updatedPlaylists?.find(p => p?.id === selectedPlaylist?.id));
    }
  };

  const handleSleepTimerStart = (duration) => {
    setSleepTimerActive(true);
    // In a real app, this would set up the actual timer logic
  };

  const handleSleepTimerStop = () => {
    setSleepTimerActive(false);
  };

  const handleSleepTimerComplete = () => {
    setIsPlaying(false);
    setSleepTimerActive(false);
  };

  const clearFilters = () => {
    setFilters({
      categories: [],
      languages: [],
      durations: [],
      offlineOnly: false,
      highQuality: false,
      recentlyAdded: false
    });
  };

  const tabs = [
    { id: 'featured', label: 'Featured', icon: 'Star' },
    { id: 'library', label: 'Library', icon: 'Library' },
    { id: 'playlists', label: 'Playlists', icon: 'Music' },
    { id: 'downloads', label: 'Downloads', icon: 'Download' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Navigation Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
            <Link to="/homepage" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <Icon name="ChevronRight" size={16} />
            <span className="text-foreground">Audio Wisdom Library</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Search */}
              <div className="bg-card border border-border rounded-lg p-4">
                <Input
                  type="search"
                  placeholder="Search audio content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e?.target?.value)}
                  className="w-full"
                />
              </div>

              {/* Filters */}
              <FilterPanel
                filters={filters}
                onFilterChange={setFilters}
                onClearFilters={clearFilters}
              />

              {/* Sleep Timer */}
              <SleepTimer
                isActive={sleepTimerActive}
                onStart={handleSleepTimerStart}
                onStop={handleSleepTimerStop}
                onComplete={handleSleepTimerComplete}
              />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Audio Player */}
              <AudioPlayer
                currentTrack={currentTrack}
                isPlaying={isPlaying}
                onPlayPause={handlePlayPause}
                onNext={handleNext}
                onPrevious={handlePrevious}
                onSeek={() => {}}
                onVolumeChange={() => {}}
                onSpeedChange={() => {}}
              />

              {/* Tabs */}
              <div className="bg-card border border-border rounded-lg">
                <div className="border-b border-border">
                  <nav className="flex space-x-8 px-6">
                    {tabs?.map((tab) => (
                      <button
                        key={tab?.id}
                        onClick={() => setActiveTab(tab?.id)}
                        className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors ${
                          activeTab === tab?.id
                            ? 'border-primary text-primary' :'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground'
                        }`}
                      >
                        <Icon name={tab?.icon} size={16} />
                        <span>{tab?.label}</span>
                      </button>
                    ))}
                  </nav>
                </div>

                <div className="p-6">
                  {/* Featured Tab */}
                  {activeTab === 'featured' && (
                    <FeaturedContent
                      featuredTracks={audioTracks}
                      onPlay={handlePlayTrack}
                      onExplore={(categoryId) => {
                        setActiveTab('library');
                        // Filter by category
                      }}
                    />
                  )}

                  {/* Library Tab */}
                  {activeTab === 'library' && (
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="font-sans font-semibold text-xl text-foreground">
                          Audio Library
                        </h2>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <span>{filteredTracks?.length} tracks</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredTracks?.map((track) => (
                          <AudioCard
                            key={track?.id}
                            track={track}
                            isPlaying={isPlaying && currentTrack?.id === track?.id}
                            onPlay={handlePlayTrack}
                            onAddToPlaylist={handleAddToPlaylist}
                            onDownload={() => {}}
                          />
                        ))}
                      </div>

                      {filteredTracks?.length === 0 && (
                        <div className="text-center py-12">
                          <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                          <h3 className="font-medium text-foreground mb-2">No tracks found</h3>
                          <p className="text-muted-foreground mb-4">
                            Try adjusting your search or filters
                          </p>
                          <Button variant="outline" onClick={clearFilters}>
                            Clear Filters
                          </Button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Playlists Tab */}
                  {activeTab === 'playlists' && (
                    <PlaylistManager
                      playlists={playlists}
                      onCreatePlaylist={handleCreatePlaylist}
                      onDeletePlaylist={handleDeletePlaylist}
                      onAddToPlaylist={handleAddToPlaylist}
                      onRemoveFromPlaylist={() => {}}
                      selectedPlaylist={selectedPlaylist}
                      onSelectPlaylist={setSelectedPlaylist}
                    />
                  )}

                  {/* Downloads Tab */}
                  {activeTab === 'downloads' && (
                    <div>
                      <div className="text-center py-12">
                        <Icon name="Download" size={48} className="text-muted-foreground mx-auto mb-4" />
                        <h3 className="font-medium text-foreground mb-2">Offline Downloads</h3>
                        <p className="text-muted-foreground mb-4">
                          Download tracks for offline listening during monastery visits
                        </p>
                        <Button variant="default">
                          Browse Downloadable Content
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AudioWisdomLibrary;