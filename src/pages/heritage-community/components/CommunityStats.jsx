import React from 'react';
import Icon from '../../../components/AppIcon';

const CommunityStats = () => {
  const stats = [
    {
      id: 1,
      label: "Active Members",
      value: "12,847",
      change: "+324",
      changeType: "increase",
      icon: "Users",
      description: "Growing community of heritage enthusiasts"
    },
    {
      id: 2,
      label: "Stories Shared",
      value: "3,256",
      change: "+89",
      changeType: "increase",
      icon: "BookOpen",
      description: "Personal pilgrimage experiences"
    },
    {
      id: 3,
      label: "Preservation Projects",
      value: "127",
      change: "+12",
      changeType: "increase",
      icon: "Shield",
      description: "Collaborative conservation efforts"
    },
    {
      id: 4,
      label: "Expert Responses",
      value: "2,891",
      change: "+156",
      changeType: "increase",
      icon: "MessageCircle",
      description: "Q&A sessions completed this month"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats?.map((stat) => (
        <div
          key={stat?.id}
          className="bg-card border border-border rounded-lg p-6 hover:shadow-medium transition-all duration-300 group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Icon name={stat?.icon} size={24} className="text-primary" />
            </div>
            <div className={`flex items-center space-x-1 text-sm font-medium ${
              stat?.changeType === 'increase' ? 'text-success' : 'text-error'
            }`}>
              <Icon 
                name={stat?.changeType === 'increase' ? 'TrendingUp' : 'TrendingDown'} 
                size={16} 
              />
              <span>{stat?.change}</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-foreground">{stat?.value}</h3>
            <p className="text-sm font-medium text-muted-foreground">{stat?.label}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {stat?.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommunityStats;