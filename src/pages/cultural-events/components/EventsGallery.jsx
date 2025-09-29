import React, { useState, useMemo } from 'react';
import EventCard from './EventCard';
import FilterSort from './FilterSort';

const EventsGallery = ({ events, onWatchVideo }) => {
  const [filters, setFilters] = useState({
    monastery: '',
    type: '',
    region: ''
  });

  const [sort, setSort] = useState('date');

  const handleFilterChange = (filterName, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [filterName]: value }));
  };

  const handleSortChange = (sortKey) => {
    setSort(sortKey);
  };

  const filteredAndSortedEvents = useMemo(() => {
    let filtered = events.filter(event => {
      return (filters.monastery ? event.monastery === filters.monastery : true) &&
             (filters.type ? event.type === filters.type : true) &&
             (filters.region ? event.region === filters.region : true);
    });

    return filtered.sort((a, b) => {
      if (sort === 'date') {
        return new Date(a.date) - new Date(b.date);
      } else if (sort === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  }, [events, filters, sort]);

  return (
    <section className="py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Events Gallery</h2>
        <FilterSort events={events} onFilterChange={handleFilterChange} onSortChange={handleSortChange} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredAndSortedEvents.map(event => (
          <EventCard key={event.id} event={event} onWatchVideo={onWatchVideo} />
        ))}
      </div>
    </section>
  );
};

export default EventsGallery;