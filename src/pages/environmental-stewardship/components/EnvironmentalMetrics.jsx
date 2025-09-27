import React from 'react';
import Icon from '../../../components/AppIcon';

const EnvironmentalMetrics = () => {
  const metrics = [
    {
      id: 1,
      title: "Air Quality Index",
      value: "42",
      unit: "AQI",
      status: "good",
      change: "-8%",
      trend: "down",
      icon: "Wind",
      description: "Excellent air quality around monastery grounds"
    },
    {
      id: 2,
      title: "Water Quality",
      value: "98.5",
      unit: "%",
      status: "excellent",
      change: "+2.1%",
      trend: "up",
      icon: "Droplets",
      description: "Pure mountain spring water maintained"
    },
    {
      id: 3,
      title: "Forest Coverage",
      value: "87.3",
      unit: "%",
      status: "stable",
      change: "+0.5%",
      trend: "up",
      icon: "Trees",
      description: "Protected forest area expanding"
    },
    {
      id: 4,
      title: "Carbon Offset",
      value: "2.4",
      unit: "tons/month",
      status: "positive",
      change: "+12%",
      trend: "up",
      icon: "Leaf",
      description: "Monthly carbon sequestration rate"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'excellent':
        return 'text-success bg-success/10 border-success/20';
      case 'good':
        return 'text-success bg-success/10 border-success/20';
      case 'stable':
        return 'text-primary bg-primary/10 border-primary/20';
      case 'positive':
        return 'text-accent bg-accent/10 border-accent/20';
      default:
        return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getTrendColor = (trend) => {
    return trend === 'up' ? 'text-success' : trend === 'down' ? 'text-warning' : 'text-muted-foreground';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics?.map((metric) => (
        <div
          key={metric?.id}
          className="bg-card border border-border rounded-lg p-6 hover:shadow-soft transition-all duration-300 breathe"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg ${getStatusColor(metric?.status)}`}>
              <Icon name={metric?.icon} size={24} />
            </div>
            <div className={`flex items-center space-x-1 ${getTrendColor(metric?.trend)}`}>
              <Icon 
                name={metric?.trend === 'up' ? 'TrendingUp' : metric?.trend === 'down' ? 'TrendingDown' : 'Minus'} 
                size={16} 
              />
              <span className="text-sm font-medium">{metric?.change}</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-sans font-medium text-foreground">{metric?.title}</h3>
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-sans font-semibold text-foreground">{metric?.value}</span>
              <span className="text-sm text-muted-foreground">{metric?.unit}</span>
            </div>
            <p className="text-sm text-muted-foreground">{metric?.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EnvironmentalMetrics;