import React from 'react';
import Button from '../../../components/ui/Button';

const FilterSort = ({ events, onFilterChange, onSortChange }) => {
  const monasteries = [...new Set(events.map(event => event.monastery))];
  const types = [...new Set(events.map(event => event.type))];
  const regions = [...new Set(events.map(event => event.region))];

  return (
    <div className="flex flex-wrap items-center space-x-4">
      <div className="flex items-center space-x-2">
        <label htmlFor="monastery-filter" className="text-sm font-medium">Monastery:</label>
        <select id="monastery-filter" onChange={(e) => onFilterChange('monastery', e.target.value)} className="w-full bg-input border border-border rounded-lg px-3 py-2">
          <option value="">All</option>
          {monasteries.map(monastery => (
            <option key={monastery} value={monastery}>{monastery}</option>
          ))}
        </select>
      </div>
      <div className="flex items-center space-x-2">
        <label htmlFor="type-filter" className="text-sm font-medium">Type:</label>
        <select id="type-filter" onChange={(e) => onFilterChange('type', e.target.value)} className="w-full bg-input border border-border rounded-lg px-3 py-2">
          <option value="">All</option>
          {types.map(type => (
            <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
          ))}
        </select>
      </div>
      <div className="flex items-center space-x-2">
        <label htmlFor="region-filter" className="text-sm font-medium">Region:</label>
        <select id="region-filter" onChange={(e) => onFilterChange('region', e.target.value)} className="w-full bg-input border border-border rounded-lg px-3 py-2">
          <option value="">All</option>
          {regions.map(region => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>
      </div>
      <div className="flex items-center space-x-2">
        <label htmlFor="sort-by" className="text-sm font-medium">Sort by:</label>
        <select id="sort-by" onChange={(e) => onSortChange(e.target.value)} className="w-full bg-input border border-border rounded-lg px-3 py-2">
          <option value="date">Date</option>
          <option value="name">Name</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSort;