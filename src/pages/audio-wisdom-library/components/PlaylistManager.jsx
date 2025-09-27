import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const PlaylistManager = ({ playlists, onCreatePlaylist, onDeletePlaylist, onAddToPlaylist, onRemoveFromPlaylist, selectedPlaylist, onSelectPlaylist }) => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState('');
  const [newPlaylistDescription, setNewPlaylistDescription] = useState('');

  const handleCreatePlaylist = () => {
    if (newPlaylistName?.trim()) {
      onCreatePlaylist({
        id: Date.now(),
        name: newPlaylistName,
        description: newPlaylistDescription,
        tracks: [],
        createdAt: new Date(),
        duration: '0 min'
      });
      setNewPlaylistName('');
      setNewPlaylistDescription('');
      setShowCreateForm(false);
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-sans font-semibold text-xl text-foreground">My Playlists</h2>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowCreateForm(!showCreateForm)}
          iconName="Plus"
          iconPosition="left"
        >
          Create
        </Button>
      </div>
      {/* Create Form */}
      {showCreateForm && (
        <div className="bg-muted/50 rounded-lg p-4 mb-6">
          <Input
            label="Playlist Name"
            type="text"
            placeholder="Enter playlist name"
            value={newPlaylistName}
            onChange={(e) => setNewPlaylistName(e?.target?.value)}
            className="mb-4"
          />
          <Input
            label="Description (Optional)"
            type="text"
            placeholder="Describe your playlist"
            value={newPlaylistDescription}
            onChange={(e) => setNewPlaylistDescription(e?.target?.value)}
            className="mb-4"
          />
          <div className="flex space-x-2">
            <Button
              variant="default"
              size="sm"
              onClick={handleCreatePlaylist}
              disabled={!newPlaylistName?.trim()}
            >
              Create Playlist
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowCreateForm(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
      {/* Playlists List */}
      <div className="space-y-3">
        {playlists?.map((playlist) => (
          <div
            key={playlist?.id}
            className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
              selectedPlaylist?.id === playlist?.id
                ? 'border-primary bg-primary/10' :'border-border hover:border-primary/50 hover:bg-muted/50'
            }`}
            onClick={() => onSelectPlaylist(playlist)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Icon name="Music" size={16} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{playlist?.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {playlist?.tracks?.length} tracks • {playlist?.duration}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                {selectedPlaylist?.id === playlist?.id && (
                  <Icon name="Play" size={16} className="text-primary" />
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e?.stopPropagation();
                    onDeletePlaylist(playlist?.id);
                  }}
                  className="text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Icon name="Trash2" size={14} />
                </Button>
              </div>
            </div>
            
            {playlist?.description && (
              <p className="text-sm text-muted-foreground mt-2 ml-13">
                {playlist?.description}
              </p>
            )}
          </div>
        ))}

        {playlists?.length === 0 && (
          <div className="text-center py-8">
            <Icon name="Music" size={48} className="text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No playlists created yet</p>
            <p className="text-sm text-muted-foreground mt-1">
              Create your first playlist to organize your favorite tracks
            </p>
          </div>
        )}
      </div>
      {/* Selected Playlist Tracks */}
      {selectedPlaylist && selectedPlaylist?.tracks?.length > 0 && (
        <div className="mt-6 pt-6 border-t border-border">
          <h3 className="font-medium text-foreground mb-4">
            Tracks in "{selectedPlaylist?.name}"
          </h3>
          <div className="space-y-2">
            {selectedPlaylist?.tracks?.map((track, index) => (
              <div
                key={`${track?.id}-${index}`}
                className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-muted-foreground w-6">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">{track?.title}</p>
                    <p className="text-xs text-muted-foreground">{track?.narrator}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-muted-foreground">{track?.duration}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onRemoveFromPlaylist(selectedPlaylist?.id, track?.id)}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <Icon name="X" size={12} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PlaylistManager;