import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

const EventCalendar = ({ events, onDateClick }) => {
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const eventOnDate = events.find(event => {
        const eventDate = new Date(event.date);
        return date.getDate() === eventDate.getDate() &&
               date.getMonth() === eventDate.getMonth() &&
               date.getFullYear() === eventDate.getFullYear();
      });
      if (eventOnDate) {
        return <div className={`event-marker ${eventOnDate.type}`}></div>;
      }
    }
    return null;
  };

  const handleDateClick = (date) => {
    const eventOnDate = events.find(event => {
      const eventDate = new Date(event.date);
      return date.getDate() === eventDate.getDate() &&
             date.getMonth() === eventDate.getMonth() &&
             date.getFullYear() === eventDate.getFullYear();
    });
    if (eventOnDate && onDateClick) {
      onDateClick(eventOnDate.id);
    }
  };

  const todaysEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    const today = new Date();
    return eventDate.getDate() === today.getDate() &&
           eventDate.getMonth() === today.getMonth() &&
           eventDate.getFullYear() === today.getFullYear();
  });

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Event Calendar</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        <div className="md:w-1/2 flex justify-center">
          <Calendar
            tileContent={tileContent}
            onClickDay={handleDateClick}
          />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold mb-4">Today's Events</h3>
          {todaysEvents.length > 0 ? (
            <div className="space-y-4">
              {todaysEvents.map(event => (
                <div key={event.id} className="p-4 bg-card rounded-lg shadow-md">
                  <h4 className="font-bold">{event.name}</h4>
                  <p className="text-sm text-muted-foreground">{event.monastery}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No events scheduled for today.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventCalendar;
