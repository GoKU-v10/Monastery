import React, { useState } from "react";
import Button from "../../../components/ui/Button";
import BookingModal from "./BookingModal";
import EventDetailModal from "./EventDetailModal";

const EventCard = ({ event, onWatchVideo }) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  return (
    <>
      <div 
        className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col cursor-pointer"
        onClick={() => setIsDetailModalOpen(true)}
      >
        <div className="relative">
          <img src={event.image} alt={event.name} className="w-full h-48 object-cover" />
          <div className="absolute bottom-2 left-2 flex space-x-2">
            <span className="bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded">{event.location}</span>
            <span className="bg-secondary text-secondary-foreground text-xs font-semibold px-2 py-1 rounded">{event.monastery}</span>
          </div>
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2">{event.name}</h3>
          <p className="text-sm text-muted-foreground mb-2">{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <p className="text-sm mb-4 flex-grow">{event.description}</p>
          <div className="flex justify-between items-center mt-auto">
            <Button 
              onClick={(e) => { 
                e.stopPropagation(); 
                onWatchVideo(event.videoUrl); 
              }} 
              variant="outline"
            >
              Watch Video
            </Button>
            <Button 
              onClick={(e) => { 
                e.stopPropagation(); 
                setIsBookingModalOpen(true); 
              }} 
              variant="highlight"
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
      {isBookingModalOpen && <BookingModal event={event} onClose={() => setIsBookingModalOpen(false)} />}
      {isDetailModalOpen && <EventDetailModal event={event} onClose={() => setIsDetailModalOpen(false)} />}
    </>
  );
};

export default EventCard;
