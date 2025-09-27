import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterPanel = ({ filters, onFilterChange, onClearFilters }) => {
  const categories = [
    'Guided Meditation',
    'Cultural Story',
    'Monastery Tour',
    'Chanting',
    'Teaching',
    'Nature Sounds'
  ];

  const languages = [
    'English',
    'Tibetan',
    'Sanskrit',
    'Mandarin',
    'Japanese'
  ];

  const durations = [
    { label: 'Short (< 10 min)', value: 'short' },
    { label: 'Medium (10-30 min)', value: 'medium' },
    { label: 'Long (> 30 min)', value: 'long' }
  ];

  const handleCategoryChange = (category, checked) => {
    const newCategories = checked
      ? [...filters?.categories, category]
      : filters?.categories?.filter(c => c !== category);
    onFilterChange({ ...filters, categories: newCategories });
  };

  const handleLanguageChange = (language, checked) => {
    const newLanguages = checked
      ? [...filters?.languages, language]
      : filters?.languages?.filter(l => l !== language);
    onFilterChange({ ...filters, languages: newLanguages });
  };

  const handleDurationChange = (duration, checked) => {
    const newDurations = checked
      ? [...filters?.durations, duration]
      : filters?.durations?.filter(d => d !== duration);
    onFilterChange({ ...filters, durations: newDurations });
  };

  const hasActiveFilters = filters?.categories?.length > 0 || 
                          filters?.languages?.length > 0 || 
                          filters?.durations?.length > 0 ||
                          filters?.offlineOnly;

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-sans font-semibold text-lg text-foreground">Filters</h2>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            Clear All
          </Button>
        )}
      </div>
      {/* Categories */}
      <div className="mb-6">
        <h3 className="font-medium text-foreground mb-3 flex items-center">
          <Icon name="Tag" size={16} className="mr-2" />
          Categories
        </h3>
        <div className="space-y-2">
          {categories?.map((category) => (
            <Checkbox
              key={category}
              label={category}
              checked={filters?.categories?.includes(category)}
              onChange={(e) => handleCategoryChange(category, e?.target?.checked)}
            />
          ))}
        </div>
      </div>
      {/* Languages */}
      <div className="mb-6">
        <h3 className="font-medium text-foreground mb-3 flex items-center">
          <Icon name="Globe" size={16} className="mr-2" />
          Languages
        </h3>
        <div className="space-y-2">
          {languages?.map((language) => (
            <Checkbox
              key={language}
              label={language}
              checked={filters?.languages?.includes(language)}
              onChange={(e) => handleLanguageChange(language, e?.target?.checked)}
            />
          ))}
        </div>
      </div>
      {/* Duration */}
      <div className="mb-6">
        <h3 className="font-medium text-foreground mb-3 flex items-center">
          <Icon name="Clock" size={16} className="mr-2" />
          Duration
        </h3>
        <div className="space-y-2">
          {durations?.map((duration) => (
            <Checkbox
              key={duration?.value}
              label={duration?.label}
              checked={filters?.durations?.includes(duration?.value)}
              onChange={(e) => handleDurationChange(duration?.value, e?.target?.checked)}
            />
          ))}
        </div>
      </div>
      {/* Special Filters */}
      <div className="mb-6">
        <h3 className="font-medium text-foreground mb-3 flex items-center">
          <Icon name="Settings" size={16} className="mr-2" />
          Options
        </h3>
        <div className="space-y-2">
          <Checkbox
            label="Offline Available"
            checked={filters?.offlineOnly}
            onChange={(e) => onFilterChange({ ...filters, offlineOnly: e?.target?.checked })}
          />
          <Checkbox
            label="High Quality Audio"
            checked={filters?.highQuality}
            onChange={(e) => onFilterChange({ ...filters, highQuality: e?.target?.checked })}
          />
          <Checkbox
            label="Recently Added"
            checked={filters?.recentlyAdded}
            onChange={(e) => onFilterChange({ ...filters, recentlyAdded: e?.target?.checked })}
          />
        </div>
      </div>
      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <div className="pt-4 border-t border-border">
          <h4 className="text-sm font-medium text-foreground mb-2">Active Filters:</h4>
          <div className="flex flex-wrap gap-2">
            {filters?.categories?.map((category) => (
              <span
                key={category}
                className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full flex items-center space-x-1"
              >
                <span>{category}</span>
                <button
                  onClick={() => handleCategoryChange(category, false)}
                  className="hover:text-primary/70"
                >
                  <Icon name="X" size={10} />
                </button>
              </span>
            ))}
            {filters?.languages?.map((language) => (
              <span
                key={language}
                className="px-2 py-1 bg-secondary/20 text-secondary-foreground text-xs rounded-full flex items-center space-x-1"
              >
                <span>{language}</span>
                <button
                  onClick={() => handleLanguageChange(language, false)}
                  className="hover:opacity-70"
                >
                  <Icon name="X" size={10} />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterPanel;