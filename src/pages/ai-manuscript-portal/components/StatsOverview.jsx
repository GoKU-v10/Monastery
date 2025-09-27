import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsOverview = ({ stats }) => {
  const statCards = [
    {
      title: 'Total Manuscripts',
      value: stats?.totalManuscripts,
      change: '+12%',
      changeType: 'positive',
      icon: 'FileText',
      color: 'text-primary bg-primary/10'
    },
    {
      title: 'Digitized Pages',
      value: stats?.digitizedPages,
      change: '+8%',
      changeType: 'positive',
      icon: 'Scan',
      color: 'text-success bg-success/10'
    },
    {
      title: 'Active Scholars',
      value: stats?.activeScholars,
      change: '+15%',
      changeType: 'positive',
      icon: 'Users',
      color: 'text-warning bg-warning/10'
    },
    {
      title: 'Completed Projects',
      value: stats?.completedProjects,
      change: '+5%',
      changeType: 'positive',
      icon: 'CheckCircle',
      color: 'text-accent bg-accent/10'
    }
  ];

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000)?.toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000)?.toFixed(1) + 'K';
    }
    return num?.toLocaleString();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards?.map((stat, index) => (
        <div key={index} className="bg-card border border-border rounded-lg p-6 shadow-soft hover:shadow-medium transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg ${stat?.color}`}>
              <Icon name={stat?.icon} size={24} />
            </div>
            <div className={`text-sm font-medium ${
              stat?.changeType === 'positive' ? 'text-success' : 'text-error'
            }`}>
              {stat?.change}
            </div>
          </div>
          
          <div className="space-y-1">
            <div className="text-2xl font-bold text-foreground">
              {formatNumber(stat?.value)}
            </div>
            <div className="text-sm text-muted-foreground">
              {stat?.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;