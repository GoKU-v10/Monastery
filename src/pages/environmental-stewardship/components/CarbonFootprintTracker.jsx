import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const CarbonFootprintTracker = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [comparisonMode, setComparisonMode] = useState('virtual-vs-physical');

  const periods = [
    { id: 'week', label: 'This Week' },
    { id: 'month', label: 'This Month' },
    { id: 'year', label: 'This Year' }
  ];

  const comparisonModes = [
    { id: 'virtual-vs-physical', label: 'Virtual vs Physical Visits' },
    { id: 'transportation', label: 'Transportation Methods' },
    { id: 'activities', label: 'Activity Types' }
  ];

  // Mock data for carbon footprint tracking
  const carbonData = {
    week: {
      total: 2.4,
      saved: 18.6,
      breakdown: [
        { name: 'Virtual Tours', value: 0.1, color: '#7C9885' },
        { name: 'Digital Content', value: 0.3, color: '#A8C8EC' },
        { name: 'Online Events', value: 0.2, color: '#D4AF37' },
        { name: 'Community Forums', value: 0.1, color: '#8B7355' },
        { name: 'Audio Streaming', value: 0.4, color: '#C4914C' },
        { name: 'Video Calls', value: 1.3, color: '#A67C7C' }
      ]
    },
    month: {
      total: 12.8,
      saved: 87.2,
      breakdown: [
        { name: 'Virtual Tours', value: 1.2, color: '#7C9885' },
        { name: 'Digital Content', value: 2.1, color: '#A8C8EC' },
        { name: 'Online Events', value: 1.8, color: '#D4AF37' },
        { name: 'Community Forums', value: 0.9, color: '#8B7355' },
        { name: 'Audio Streaming', value: 3.2, color: '#C4914C' },
        { name: 'Video Calls', value: 3.6, color: '#A67C7C' }
      ]
    },
    year: {
      total: 156.4,
      saved: 1043.6,
      breakdown: [
        { name: 'Virtual Tours', value: 18.2, color: '#7C9885' },
        { name: 'Digital Content', value: 28.4, color: '#A8C8EC' },
        { name: 'Online Events', value: 24.1, color: '#D4AF37' },
        { name: 'Community Forums', value: 12.3, color: '#8B7355' },
        { name: 'Audio Streaming', value: 38.7, color: '#C4914C' },
        { name: 'Video Calls', value: 34.7, color: '#A67C7C' }
      ]
    }
  };

  const comparisonData = {
    'virtual-vs-physical': [
      { name: 'Virtual Pilgrimage', carbon: 2.1, cost: 0, participants: 1247 },
      { name: 'Local Visit (Car)', carbon: 45.3, cost: 120, participants: 89 },
      { name: 'Domestic Flight', carbon: 180.7, cost: 450, participants: 34 },
      { name: 'International Flight', carbon: 2100.5, cost: 1200, participants: 12 }
    ],
    'transportation': [
      { name: 'Walking/Cycling', carbon: 0, cost: 0, participants: 156 },
      { name: 'Public Transport', carbon: 12.4, cost: 25, participants: 234 },
      { name: 'Electric Vehicle', carbon: 18.7, cost: 45, participants: 67 },
      { name: 'Gasoline Car', carbon: 45.3, cost: 85, participants: 123 },
      { name: 'Domestic Flight', carbon: 180.7, cost: 450, participants: 45 },
      { name: 'International Flight', carbon: 2100.5, cost: 1200, participants: 23 }
    ],
    'activities': [
      { name: 'Virtual Tours', carbon: 0.8, cost: 0, participants: 892 },
      { name: 'Audio Guides', carbon: 0.3, cost: 5, participants: 567 },
      { name: 'Online Workshops', carbon: 1.2, cost: 25, participants: 234 },
      { name: 'Physical Visits', carbon: 45.3, cost: 120, participants: 156 },
      { name: 'Retreat Programs', carbon: 180.7, cost: 450, participants: 67 },
      { name: 'Pilgrimage Tours', carbon: 850.2, cost: 2500, participants: 23 }
    ]
  };

  const currentData = carbonData?.[selectedPeriod];
  const currentComparison = comparisonData?.[comparisonMode];

  const achievements = [
    {
      id: 1,
      title: "Carbon Neutral Explorer",
      description: "Completed 10 virtual tours this month",
      icon: "Award",
      earned: true,
      progress: 100
    },
    {
      id: 2,
      title: "Digital Pilgrim",
      description: "Saved 50kg CO2 through virtual experiences",
      icon: "Shield",
      earned: true,
      progress: 100
    },
    {
      id: 3,
      title: "Sustainability Champion",
      description: "Inspired 5 friends to try virtual pilgrimage",
      icon: "Users",
      earned: false,
      progress: 60
    },
    {
      id: 4,
      title: "Green Guardian",
      description: "Offset 100kg CO2 through conservation donations",
      icon: "Leaf",
      earned: false,
      progress: 25
    }
  ];

  const tips = [
    {
      id: 1,
      title: "Choose Virtual First",
      description: "Try virtual tours before planning physical visits to reduce your carbon footprint by up to 95%.",
      icon: "Monitor",
      impact: "High"
    },
    {
      id: 2,
      title: "Combine Experiences",
      description: "Use virtual tours to plan efficient physical visits, reducing unnecessary travel and maximizing your experience.",
      icon: "Route",
      impact: "Medium"
    },
    {
      id: 3,
      title: "Share the Journey",
      description: "Invite friends to join virtual experiences instead of traveling separately to the same destinations.",
      icon: "Share2",
      impact: "Medium"
    },
    {
      id: 4,
      title: "Offset Your Impact",
      description: "Support monastery conservation projects to offset any unavoidable carbon emissions from travel.",
      icon: "Heart",
      impact: "High"
    }
  ];

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'High': return 'text-success bg-success/10';
      case 'Medium': return 'text-warning bg-warning/10';
      case 'Low': return 'text-muted-foreground bg-muted/10';
      default: return 'text-muted-foreground bg-muted/10';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h3 className="font-sans font-semibold text-2xl text-foreground">Carbon Footprint Tracker</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Track your environmental impact and discover how virtual experiences can significantly reduce 
          your carbon footprint while still providing meaningful spiritual and cultural connections.
        </p>
      </div>
      {/* Period Selector */}
      <div className="flex justify-center">
        <div className="flex space-x-1 bg-muted/50 p-1 rounded-lg">
          {periods?.map((period) => (
            <button
              key={period?.id}
              onClick={() => setSelectedPeriod(period?.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                selectedPeriod === period?.id
                  ? 'bg-background text-foreground shadow-soft'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {period?.label}
            </button>
          ))}
        </div>
      </div>
      {/* Carbon Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-lg p-6 text-center">
          <div className="bg-error/10 p-3 rounded-lg inline-block mb-4">
            <Icon name="Zap" size={24} className="text-error" />
          </div>
          <div className="text-3xl font-sans font-semibold text-foreground mb-2">
            {currentData?.total} kg
          </div>
          <div className="text-sm text-muted-foreground">CO2 Generated</div>
          <div className="text-xs text-muted-foreground mt-1">Digital activities</div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 text-center">
          <div className="bg-success/10 p-3 rounded-lg inline-block mb-4">
            <Icon name="Leaf" size={24} className="text-success" />
          </div>
          <div className="text-3xl font-sans font-semibold text-foreground mb-2">
            {currentData?.saved} kg
          </div>
          <div className="text-sm text-muted-foreground">CO2 Saved</div>
          <div className="text-xs text-muted-foreground mt-1">vs physical travel</div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 text-center">
          <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">
            <Icon name="TrendingDown" size={24} className="text-primary" />
          </div>
          <div className="text-3xl font-sans font-semibold text-foreground mb-2">
            {Math.round((currentData?.saved / (currentData?.total + currentData?.saved)) * 100)}%
          </div>
          <div className="text-sm text-muted-foreground">Reduction</div>
          <div className="text-xs text-muted-foreground mt-1">Carbon footprint</div>
        </div>
      </div>
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Breakdown Pie Chart */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h4 className="font-sans font-medium text-lg text-foreground mb-4">Carbon Breakdown</h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={currentData?.breakdown}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {currentData?.breakdown?.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry?.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => [`${value} kg CO2`, 'Carbon Footprint']}
                  contentStyle={{
                    backgroundColor: 'var(--color-popover)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {currentData?.breakdown?.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item?.color }}
                />
                <span className="text-xs text-muted-foreground">{item?.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Chart */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-sans font-medium text-lg text-foreground">Impact Comparison</h4>
            <select
              value={comparisonMode}
              onChange={(e) => setComparisonMode(e?.target?.value)}
              className="text-sm border border-border rounded-md px-3 py-1 bg-background text-foreground"
            >
              {comparisonModes?.map((mode) => (
                <option key={mode?.id} value={mode?.id}>{mode?.label}</option>
              ))}
            </select>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={currentComparison}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis 
                  dataKey="name" 
                  stroke="var(--color-muted-foreground)"
                  fontSize={10}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis 
                  stroke="var(--color-muted-foreground)"
                  fontSize={12}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--color-popover)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="carbon" fill="#8B7355" name="CO2 (kg)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      {/* Achievements */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h4 className="font-sans font-medium text-lg text-foreground mb-4">Sustainability Achievements</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements?.map((achievement) => (
            <div
              key={achievement?.id}
              className={`p-4 rounded-lg border transition-all duration-200 ${
                achievement?.earned
                  ? 'border-success/20 bg-success/5' :'border-border bg-muted/20'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 rounded-lg ${
                  achievement?.earned ? 'bg-success/10 text-success' : 'bg-muted text-muted-foreground'
                }`}>
                  <Icon name={achievement?.icon} size={20} />
                </div>
                {achievement?.earned && (
                  <Icon name="CheckCircle" size={16} className="text-success" />
                )}
              </div>
              <h5 className="font-medium text-foreground mb-1">{achievement?.title}</h5>
              <p className="text-xs text-muted-foreground mb-3">{achievement?.description}</p>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    achievement?.earned ? 'bg-success' : 'bg-primary'
                  }`}
                  style={{ width: `${achievement?.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Sustainability Tips */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h4 className="font-sans font-medium text-lg text-foreground mb-4">Sustainability Tips</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tips?.map((tip) => (
            <div key={tip?.id} className="flex items-start space-x-4 p-4 bg-muted/20 rounded-lg">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Icon name={tip?.icon} size={20} className="text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-medium text-foreground">{tip?.title}</h5>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(tip?.impact)}`}>
                    {tip?.impact} Impact
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{tip?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <Button
          variant="default"
          iconName="Calculator"
          iconPosition="left"
        >
          Calculate Trip Impact
        </Button>
        <Button
          variant="outline"
          iconName="Download"
          iconPosition="left"
        >
          Download Report
        </Button>
        <Button
          variant="outline"
          iconName="Share2"
          iconPosition="left"
        >
          Share Progress
        </Button>
      </div>
    </div>
  );
};

export default CarbonFootprintTracker;