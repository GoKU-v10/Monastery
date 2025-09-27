import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import EnvironmentalMetrics from './components/EnvironmentalMetrics';
import ConservationProjects from './components/ConservationProjects';
import RealTimeMonitoring from './components/RealTimeMonitoring';
import SustainabilityEducation from './components/SustainabilityEducation';
import CarbonFootprintTracker from './components/CarbonFootprintTracker';

const EnvironmentalStewardship = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'BarChart3' },
    { id: 'monitoring', label: 'Real-Time Monitoring', icon: 'Activity' },
    { id: 'projects', label: 'Conservation Projects', icon: 'TreePine' },
    { id: 'education', label: 'Sustainability Education', icon: 'BookOpen' },
    { id: 'carbon-tracker', label: 'Carbon Tracker', icon: 'Leaf' }
  ];

  const impactStats = [
    {
      id: 1,
      title: "Monasteries Protected",
      value: "47",
      change: "+3 this year",
      icon: "Shield",
      color: "text-success bg-success/10"
    },
    {
      id: 2,
      title: "Carbon Offset",
      value: "2,847",
      unit: "tons/year",
      change: "+12% increase",
      icon: "Leaf",
      color: "text-primary bg-primary/10"
    },
    {
      id: 3,
      title: "Conservation Funding",
      value: "$1.2M",
      change: "85% of goal reached",
      icon: "DollarSign",
      color: "text-accent bg-accent/10"
    },
    {
      id: 4,
      title: "Active Volunteers",
      value: "3,456",
      change: "+234 this month",
      icon: "Users",
      color: "text-warning bg-warning/10"
    }
  ];

  const quickActions = [
    {
      id: 1,
      title: "Monitor Air Quality",
      description: "Check real-time environmental data from monastery sensors",
      icon: "Wind",
      action: () => setActiveTab('monitoring')
    },
    {
      id: 2,
      title: "Support a Project",
      description: "Contribute to active conservation initiatives",
      icon: "Heart",
      action: () => setActiveTab('projects')
    },
    {
      id: 3,
      title: "Learn Sustainability",
      description: "Explore educational content on environmental stewardship",
      icon: "GraduationCap",
      action: () => setActiveTab('education')
    },
    {
      id: 4,
      title: "Track Your Impact",
      description: "Monitor your carbon footprint and environmental contribution",
      icon: "TrendingDown",
      action: () => setActiveTab('carbon-tracker')
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'monitoring':
        return <RealTimeMonitoring />;
      case 'projects':
        return <ConservationProjects />;
      case 'education':
        return <SustainabilityEducation />;
      case 'carbon-tracker':
        return <CarbonFootprintTracker />;
      default:
        return (
          <div className="space-y-8">
            {/* Environmental Metrics */}
            <div>
              <h3 className="font-sans font-semibold text-xl text-foreground mb-6">Current Environmental Status</h3>
              <EnvironmentalMetrics />
            </div>
            {/* Impact Statistics */}
            <div>
              <h3 className="font-sans font-semibold text-xl text-foreground mb-6">Conservation Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {impactStats?.map((stat) => (
                  <div
                    key={stat?.id}
                    className="bg-card border border-border rounded-lg p-6 hover:shadow-soft transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg ${stat?.color}`}>
                        <Icon name={stat?.icon} size={24} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-sans font-medium text-foreground">{stat?.title}</h4>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-3xl font-sans font-semibold text-foreground">{stat?.value}</span>
                        {stat?.unit && <span className="text-sm text-muted-foreground">{stat?.unit}</span>}
                      </div>
                      <p className="text-sm text-success">{stat?.change}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Quick Actions */}
            <div>
              <h3 className="font-sans font-semibold text-xl text-foreground mb-6">Take Action</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {quickActions?.map((action) => (
                  <button
                    key={action?.id}
                    onClick={action?.action}
                    className="bg-card border border-border rounded-lg p-6 text-left hover:shadow-medium hover:border-primary/50 transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Icon name={action?.icon} size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-sans font-medium text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                          {action?.title}
                        </h4>
                        <p className="text-muted-foreground">{action?.description}</p>
                      </div>
                      <Icon name="ArrowRight" size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
            {/* Featured Conservation Project */}
            <div className="bg-gradient-to-r from-success/5 to-primary/5 border border-success/20 rounded-lg p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-sans font-semibold text-xl text-foreground mb-2">Featured Project</h3>
                  <h4 className="font-sans font-medium text-lg text-foreground mb-3">Himalayan Forest Restoration Initiative</h4>
                  <p className="text-muted-foreground max-w-2xl">
                    Join our largest conservation effort to restore 10,000 hectares of sacred forest around 
                    Himalayan monasteries. This project combines traditional ecological knowledge with modern 
                    conservation science to protect biodiversity and support monastery communities.
                  </p>
                </div>
                <div className="bg-success/10 p-4 rounded-lg">
                  <Icon name="TreePine" size={32} className="text-success" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-sans font-semibold text-foreground">78%</div>
                  <div className="text-sm text-muted-foreground">Project Progress</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-sans font-semibold text-foreground">$450K</div>
                  <div className="text-sm text-muted-foreground">Raised of $600K</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-sans font-semibold text-foreground">1,247</div>
                  <div className="text-sm text-muted-foreground">Active Supporters</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  variant="default"
                  iconName="Heart"
                  iconPosition="left"
                  onClick={() => setActiveTab('projects')}
                >
                  Support This Project
                </Button>
                <Button
                  variant="outline"
                  iconName="Info"
                  iconPosition="left"
                  onClick={() => setActiveTab('projects')}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Environmental Stewardship - Monastery Digital Heritage</title>
        <meta name="description" content="Monitor environmental conditions, support conservation projects, and learn sustainable practices to protect sacred monastery heritage sites." />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="Leaf" size={16} />
                <span>Environmental Guardian Center</span>
              </div>
              
              <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-foreground">
                Environmental
                <span className="block text-primary">Stewardship</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Protecting sacred monastery heritage through technology-driven conservation, 
                real-time environmental monitoring, and community-powered sustainability initiatives.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Activity"
                  iconPosition="left"
                  onClick={() => setActiveTab('monitoring')}
                  className="candlelight-glow"
                >
                  View Live Data
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="TreePine"
                  iconPosition="left"
                  onClick={() => setActiveTab('projects')}
                >
                  Support Conservation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="bg-background border-b border-border sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-1 overflow-x-auto py-4">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    activeTab === tab?.id
                      ? 'bg-primary text-primary-foreground shadow-soft'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <Icon name={tab?.icon} size={16} />
                  <span>{tab?.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tab Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {renderTabContent()}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-6">
              <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground">
                Join the Conservation Movement
              </h2>
              <p className="text-xl text-muted-foreground">
                Every action counts in preserving our sacred heritage for future generations. 
                Start your environmental stewardship journey today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Users"
                  iconPosition="left"
                >
                  Become a Volunteer
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Heart"
                  iconPosition="left"
                >
                  Make a Donation
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  iconName="Share2"
                  iconPosition="left"
                >
                  Share Our Mission
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; {new Date()?.getFullYear()} Monastery Digital Heritage. Preserving sacred spaces through technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EnvironmentalStewardship;