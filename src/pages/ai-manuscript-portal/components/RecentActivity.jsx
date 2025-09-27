import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RecentActivity = ({ activities }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'upload':
        return 'Upload';
      case 'collaboration':
        return 'Users';
      case 'completion':
        return 'CheckCircle';
      case 'annotation':
        return 'MessageSquare';
      case 'review':
        return 'Eye';
      case 'download':
        return 'Download';
      default:
        return 'Activity';
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'upload':
        return 'text-primary bg-primary/10';
      case 'collaboration':
        return 'text-success bg-success/10';
      case 'completion':
        return 'text-success bg-success/10';
      case 'annotation':
        return 'text-warning bg-warning/10';
      case 'review':
        return 'text-accent bg-accent/10';
      case 'download':
        return 'text-muted-foreground bg-muted/50';
      default:
        return 'text-muted-foreground bg-muted/50';
    }
  };

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diffInMinutes = Math.floor((now - time) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-soft">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground flex items-center">
            <Icon name="Activity" size={20} className="mr-2 text-primary" />
            Recent Activity
          </h3>
          <Button
            variant="ghost"
            size="sm"
            iconName="MoreHorizontal"
            className="text-muted-foreground hover:text-foreground"
          />
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Latest updates from the manuscript digitization community
        </p>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {activities?.map((activity) => (
            <div key={activity?.id} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-muted/30 transition-colors">
              <div className="flex-shrink-0">
                <Image
                  src={activity?.user?.avatar}
                  alt={activity?.user?.name}
                  className="w-10 h-10 rounded-full"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-medium text-foreground text-sm">
                    {activity?.user?.name}
                  </span>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getActivityColor(activity?.type)}`}>
                    <Icon name={getActivityIcon(activity?.type)} size={10} className="mr-1" />
                    {activity?.type}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {formatTimeAgo(activity?.timestamp)}
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground mb-2">
                  {activity?.description}
                </p>
                
                {activity?.manuscript && (
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Icon name="FileText" size={12} />
                    <span>{activity?.manuscript}</span>
                    {activity?.language && (
                      <>
                        <span>•</span>
                        <span>{activity?.language}</span>
                      </>
                    )}
                  </div>
                )}
                
                {activity?.collaboration && (
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Icon name="Users" size={12} />
                    <span>{activity?.collaboration}</span>
                  </div>
                )}
              </div>
              
              <div className="flex-shrink-0">
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="ExternalLink"
                  className="text-muted-foreground hover:text-primary"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Showing recent 10 activities
            </div>
            <Button
              variant="outline"
              size="sm"
              iconName="ArrowRight"
              iconPosition="right"
            >
              View All Activity
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;