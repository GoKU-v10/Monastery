import React from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const SearchFilters = ({ filters, onFilterChange, onReset }) => {
  const languageOptions = [
    { value: 'all', label: 'All Languages' },
    { value: 'tibetan', label: 'Tibetan' },
    { value: 'sanskrit', label: 'Sanskrit' },
    { value: 'chinese', label: 'Chinese' },
    { value: 'pali', label: 'Pali' },
    { value: 'mongolian', label: 'Mongolian' }
  ];

  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'completed', label: 'Completed' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'pending', label: 'Pending' }
  ];

  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'sutra', label: 'Sutra Texts' },
    { value: 'commentary', label: 'Commentaries' },
    { value: 'ritual', label: 'Ritual Texts' },
    { value: 'philosophy', label: 'Philosophy' },
    { value: 'biography', label: 'Biographies' },
    { value: 'history', label: 'Historical Records' }
  ];

  const monasteryOptions = [
    { value: 'all', label: 'All Monasteries' },
    { value: 'potala', label: 'Potala Palace' },
    { value: 'sera', label: 'Sera Monastery' },
    { value: 'drepung', label: 'Drepung Monastery' },
    { value: 'ganden', label: 'Ganden Monastery' },
    { value: 'tashilhunpo', label: 'Tashilhunpo Monastery' },
    { value: 'samye', label: 'Samye Monastery' }
  ];

  const centuryOptions = [
    { value: 'all', label: 'All Periods' },
    { value: '7th', label: '7th Century' },
    { value: '8th', label: '8th Century' },
    { value: '9th', label: '9th Century' },
    { value: '10th', label: '10th Century' },
    { value: '11th', label: '11th Century' },
    { value: '12th', label: '12th Century' },
    { value: '13th', label: '13th Century' },
    { value: '14th', label: '14th Century' },
    { value: '15th', label: '15th Century' },
    { value: '16th', label: '16th Century' },
    { value: '17th', label: '17th Century' },
    { value: '18th', label: '18th Century' }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-soft">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground flex items-center">
          <Icon name="Filter" size={20} className="mr-2 text-primary" />
          Advanced Search Filters
        </h3>
        <Button
          variant="ghost"
          size="sm"
          iconName="RotateCcw"
          onClick={onReset}
          className="text-muted-foreground hover:text-foreground"
        >
          Reset
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <Input
          type="search"
          placeholder="Search manuscripts..."
          value={filters?.search}
          onChange={(e) => onFilterChange('search', e?.target?.value)}
          className="col-span-full"
        />

        <Select
          label="Language"
          options={languageOptions}
          value={filters?.language}
          onChange={(value) => onFilterChange('language', value)}
        />

        <Select
          label="Status"
          options={statusOptions}
          value={filters?.status}
          onChange={(value) => onFilterChange('status', value)}
        />

        <Select
          label="Category"
          options={categoryOptions}
          value={filters?.category}
          onChange={(value) => onFilterChange('category', value)}
        />

        <Select
          label="Monastery"
          options={monasteryOptions}
          value={filters?.monastery}
          onChange={(value) => onFilterChange('monastery', value)}
        />

        <Select
          label="Time Period"
          options={centuryOptions}
          value={filters?.century}
          onChange={(value) => onFilterChange('century', value)}
        />
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <span className="flex items-center">
            <Icon name="Database" size={14} className="mr-1" />
            2,847 manuscripts
          </span>
          <span className="flex items-center">
            <Icon name="Users" size={14} className="mr-1" />
            156 active scholars
          </span>
          <span className="flex items-center">
            <Icon name="Globe" size={14} className="mr-1" />
            12 languages
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            iconName="BookmarkPlus"
            iconPosition="left"
          >
            Save Search
          </Button>
          <Button
            variant="default"
            size="sm"
            iconName="Search"
            iconPosition="left"
          >
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;