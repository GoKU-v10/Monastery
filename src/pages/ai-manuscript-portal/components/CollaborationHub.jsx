import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CollaborationHub = ({ collaborations, onJoin, onViewDetails }) => {
  const getRoleColor = (role) => {
    switch (role) {
      case 'lead':
        return 'text-primary bg-primary/10';
      case 'contributor':
        return 'text-success bg-success/10';
      case 'reviewer':
        return 'text-warning bg-warning/10';
      default:
        return 'text-muted-foreground bg-muted/50';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'text-error bg-error/10';
      case 'medium':
        return 'text-warning bg-warning/10';
      case 'low':
        return 'text-success bg-success/10';
      default:
        return 'text-muted-foreground bg-muted/50';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-soft">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground flex items-center">
            <Icon name="Users" size={20} className="mr-2 text-primary" />
            Active Collaborations
          </h3>
          <Button
            variant="outline"
            size="sm"
            iconName="UserPlus"
            iconPosition="left"
          >
            Join Project
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Connect with scholars worldwide for manuscript research
        </p>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {collaborations?.map((collab) => (
            <div key={collab?.id} className="border border-border rounded-lg p-4 hover:shadow-soft transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-medium text-foreground">{collab?.title}</h4>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(collab?.priority)}`}>
                      {collab?.priority} priority
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{collab?.description}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Icon name="Calendar" size={14} className="mr-1" />
                      Due {collab?.deadline}
                    </span>
                    <span className="flex items-center">
                      <Icon name="MessageSquare" size={14} className="mr-1" />
                      {collab?.messages} messages
                    </span>
                    <span className="flex items-center">
                      <Icon name="FileText" size={14} className="mr-1" />
                      {collab?.documents} documents
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 ml-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="Eye"
                    onClick={() => onViewDetails(collab)}
                    className="text-muted-foreground hover:text-foreground"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="UserPlus"
                    onClick={() => onJoin(collab)}
                  >
                    Join
                  </Button>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">Team Members</span>
                  <span className="text-sm text-muted-foreground">{collab?.members?.length} scholars</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {collab?.members?.slice(0, 5)?.map((member, index) => (
                      <div key={index} className="relative">
                        <Image
                          src={member?.avatar}
                          alt={member?.name}
                          className="w-8 h-8 rounded-full border-2 border-background"
                        />
                      </div>
                    ))}
                    {collab?.members?.length > 5 && (
                      <div className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                        <span className="text-xs font-medium text-muted-foreground">
                          +{collab?.members?.length - 5}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center space-x-1 ml-4">
                    {collab?.members?.slice(0, 3)?.map((member, index) => (
                      <span key={index} className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(member?.role)}`}>
                        {member?.role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">Progress</span>
                  <span className="text-sm font-medium text-foreground">{collab?.progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary rounded-full h-2 transition-all duration-300"
                    style={{ width: `${collab?.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-muted-foreground">
                    Led by <span className="font-medium text-foreground">{collab?.lead}</span>
                  </span>
                  <span className="text-muted-foreground">
                    <Icon name="MapPin" size={14} className="inline mr-1" />
                    {collab?.institution}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="MessageSquare"
                    className="text-muted-foreground hover:text-primary"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="Share"
                    className="text-muted-foreground hover:text-success"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-primary mb-1">156</div>
              <div className="text-sm text-muted-foreground">Active Scholars</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-success mb-1">89</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-warning mb-1">34</div>
              <div className="text-sm text-muted-foreground">Universities</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-accent mb-1">12</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationHub;