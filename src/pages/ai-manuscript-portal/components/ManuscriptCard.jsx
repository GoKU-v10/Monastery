import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ManuscriptCard = ({ manuscript, onView, onCollaborate, onDownload }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-success bg-success/10';
      case 'in-progress':
        return 'text-warning bg-warning/10';
      case 'pending':
        return 'text-muted-foreground bg-muted/50';
      default:
        return 'text-muted-foreground bg-muted/50';
    }
  };

  const getLanguageIcon = (language) => {
    switch (language) {
      case 'Tibetan':
        return 'Mountain';
      case 'Sanskrit':
        return 'Scroll';
      case 'Chinese':
        return 'BookOpen';
      default:
        return 'FileText';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={manuscript?.image}
          alt={manuscript?.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(manuscript?.status)}`}>
            {manuscript?.status === 'completed' && <Icon name="CheckCircle" size={12} className="mr-1" />}
            {manuscript?.status === 'in-progress' && <Icon name="Clock" size={12} className="mr-1" />}
            {manuscript?.status === 'pending' && <Icon name="AlertCircle" size={12} className="mr-1" />}
            {manuscript?.status?.charAt(0)?.toUpperCase() + manuscript?.status?.slice(1)?.replace('-', ' ')}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary backdrop-blur-sm">
            <Icon name={getLanguageIcon(manuscript?.language)} size={12} className="mr-1" />
            {manuscript?.language}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-white font-semibold text-lg leading-tight mb-1">
            {manuscript?.title}
          </h3>
          <p className="text-white/80 text-sm">
            {manuscript?.monastery} • {manuscript?.century}
          </p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span className="flex items-center">
              <Icon name="FileText" size={14} className="mr-1" />
              {manuscript?.pages} pages
            </span>
            <span className="flex items-center">
              <Icon name="Users" size={14} className="mr-1" />
              {manuscript?.collaborators} scholars
            </span>
          </div>
          <div className="flex items-center space-x-1">
            {[...Array(5)]?.map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={12}
                className={i < manuscript?.rating ? 'text-accent fill-current' : 'text-muted-foreground/30'}
              />
            ))}
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {manuscript?.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="text-sm">
            <span className="text-muted-foreground">Progress: </span>
            <span className="font-medium text-foreground">{manuscript?.progress}%</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              iconName="Eye"
              onClick={() => onView(manuscript)}
              className="text-muted-foreground hover:text-foreground"
            />
            <Button
              variant="ghost"
              size="sm"
              iconName="Users"
              onClick={() => onCollaborate(manuscript)}
              className="text-muted-foreground hover:text-primary"
            />
            <Button
              variant="ghost"
              size="sm"
              iconName="Download"
              onClick={() => onDownload(manuscript)}
              className="text-muted-foreground hover:text-success"
            />
          </div>
        </div>

        {manuscript?.progress > 0 && (
          <div className="mt-3">
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary rounded-full h-2 transition-all duration-300"
                style={{ width: `${manuscript?.progress}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManuscriptCard;