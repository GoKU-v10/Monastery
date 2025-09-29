import React from 'react';
import Button from '../../../components/ui/Button';

const EventDetailModal = ({ event, onClose }) => {
  if (!event) return null;

  const shareOnWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?text=Check out this event: ${event.name} - ${window.location.href}`);
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-card text-card-foreground rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-3xl font-bold text-primary">{event.name}</h2>
            <Button onClick={onClose} variant="ghost" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img src={event.image} alt={event.name} className="w-full h-64 object-cover rounded-lg mb-4" />
              <div className="flex space-x-2">
                  <Button onClick={copyLink}>Copy Link</Button>
                  <Button onClick={shareOnWhatsApp}>Share on WhatsApp</Button>
                  <Button onClick={shareOnFacebook}>Share on Facebook</Button>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">About the Event</h3>
              <p className="mb-4">{event.longDescription}</p>
              <h4 className="text-lg font-semibold">History</h4>
              <p className="mb-4">{event.history}</p>
              <h4 className="text-lg font-semibold">Cultural Significance</h4>
              <p className="mb-4">{event.culturalSignificance}</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Monastery Information</h3>
            <p><strong>Monastery:</strong> {event.monastery}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <a href={event.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">View on Google Maps</a>
          </div>

          {event.artists && event.artists.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2">Artists & Performers</h3>
              {event.artists.map((artist, index) => (
                <div key={index} className="mb-2">
                  <p><strong>{artist.name}:</strong> {artist.bio}</p>
                </div>
              ))}
            </div>
          )}

          {event.schedule && event.schedule.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2">Event Schedule</h3>
              <ul className="list-disc list-inside">
                {event.schedule.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {event.gallery && event.gallery.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2">Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {event.gallery.map((image, index) => (
                  <img key={index} src={image} alt={`${event.name} gallery ${index + 1}`} className="w-full h-32 object-cover rounded-lg" />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetailModal;
