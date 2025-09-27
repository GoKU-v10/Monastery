import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

// Import all components
import CommunityStats from './components/CommunityStats';
import FeaturedStories from './components/FeaturedStories';
import ExpertQA from './components/ExpertQA';
import PreservationProjects from './components/PreservationProjects';
import CommunityForum from './components/CommunityForum';
import UserAchievements from './components/UserAchievements';

const HeritageCommunity = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const navigationTabs = [
    { id: 'overview', label: 'Community Overview', icon: 'Home' },
    { id: 'stories', label: 'Featured Stories', icon: 'BookOpen' },
    { id: 'forum', label: 'Discussion Forum', icon: 'MessageSquare' },
    { id: 'experts', label: 'Expert Q&A', icon: 'MessageCircle' },
    { id: 'projects', label: 'Preservation Projects', icon: 'Shield' },
    { id: 'achievements', label: 'Achievements', icon: 'Award' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <CommunityOverview />;
      case 'stories':
        return <FeaturedStories />;
      case 'forum':
        return <CommunityForum />;
      case 'experts':
        return <ExpertQA />;
      case 'projects':
        return <PreservationProjects />;
      case 'achievements':
        return <UserAchievements />;
      default:
        return <CommunityOverview />;
    }
  };

  const CommunityOverview = () => (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 rounded-2xl p-8 md:p-12 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMSIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjAzIi8+CjxjaXJjbGUgY3g9IjMwIiBjeT0iMjAiIHI9IjEuNSIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjAyIi8+CjxjaXJjbGUgY3g9IjIwIiBjeT0iMzAiIHI9IjAuNSIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjA0Ii8+Cjwvc3ZnPgo=')] opacity-30"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full text-sm font-medium text-primary border border-primary/20">
            <Icon name="Users" size={16} />
            <span>Heritage for Humanity</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Community Wisdom
            <span className="block text-primary">Exchange</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join a global community of heritage enthusiasts, spiritual seekers, and preservation advocates. 
            Share stories, collaborate on projects, and help preserve monastery wisdom for future generations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" iconName="Plus" iconPosition="left">
              Join Community
            </Button>
            <Button variant="outline" size="lg" iconName="Play" iconPosition="left">
              Watch Introduction
            </Button>
          </div>
        </div>
      </div>

      {/* Community Stats */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Community Impact</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Together, we're building the world's largest digital monastery heritage community
          </p>
        </div>
        <CommunityStats />
      </section>

      {/* Quick Actions */}
      <section className="bg-card border border-border rounded-lg p-8">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Get Started</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Share Your Story",
              description: "Tell us about your pilgrimage or spiritual journey",
              icon: "BookOpen",
              action: "Share Story",
              color: "primary"
            },
            {
              title: "Ask Experts",
              description: "Get answers from monastery scholars and teachers",
              icon: "MessageCircle",
              action: "Ask Question",
              color: "accent"
            },
            {
              title: "Join Projects",
              description: "Contribute to preservation and research initiatives",
              icon: "Shield",
              action: "View Projects",
              color: "success"
            },
            {
              title: "Connect & Learn",
              description: "Engage in discussions with fellow enthusiasts",
              icon: "Users",
              action: "Join Forum",
              color: "secondary"
            }
          ]?.map((action, index) => (
            <div key={index} className="text-center space-y-4 p-6 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${action?.color}/10 text-${action?.color}`}>
                <Icon name={action?.icon} size={32} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{action?.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{action?.description}</p>
                <Button variant="outline" size="sm">
                  {action?.action}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Content Preview */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Latest Stories Preview */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-foreground flex items-center">
              <Icon name="BookOpen" size={20} className="text-primary mr-2" />
              Latest Stories
            </h3>
            <Button variant="ghost" size="sm" onClick={() => setActiveTab('stories')}>
              View All
            </Button>
          </div>
          <div className="space-y-4">
            {[
              {
                title: "Walking the Ancient Paths: A Digital Pilgrimage",
                author: "Sarah Chen",
                time: "2h ago",
                excerpt: "My journey began with curiosity about Tibetan Buddhism..."
              },
              {
                title: "Preserving Manuscripts: AI Meets Tradition",
                author: "Dr. Tenzin Norbu",
                time: "5h ago",
                excerpt: "Working with the AI digitization team has been..."
              }
            ]?.map((story, index) => (
              <div key={index} className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium text-foreground mb-1 line-clamp-1">{story?.title}</h4>
                <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{story?.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>by {story?.author}</span>
                  <span>{story?.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Projects Preview */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-foreground flex items-center">
              <Icon name="Shield" size={20} className="text-success mr-2" />
              Active Projects
            </h3>
            <Button variant="ghost" size="sm" onClick={() => setActiveTab('projects')}>
              View All
            </Button>
          </div>
          <div className="space-y-4">
            {[
              {
                title: "Hemis Monastery Manuscript Digitization",
                progress: 68,
                contributors: 234,
                urgency: "High Priority"
              },
              {
                title: "Sera Monastery Climate Control System",
                progress: 42,
                contributors: 189,
                urgency: "Medium Priority"
              }
            ]?.map((project, index) => (
              <div key={index} className="p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-foreground line-clamp-1">{project?.title}</h4>
                  <span className="text-xs text-warning bg-warning/10 px-2 py-1 rounded">
                    {project?.urgency}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium text-foreground">{project?.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-success h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project?.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {project?.contributors} contributors
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="bg-gradient-to-r from-muted/50 to-muted/30 border border-border rounded-lg p-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Community Values</h2>
          <p className="text-muted-foreground">
            Our community is built on respect, authenticity, and shared commitment to preserving cultural heritage
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: "Heart",
                title: "Respect & Compassion",
                description: "Honor cultural traditions and treat all members with kindness"
              },
              {
                icon: "Shield",
                title: "Authentic Sharing",
                description: "Share genuine experiences and verified information"
              },
              {
                icon: "Users",
                title: "Collaborative Spirit",
                description: "Work together to preserve heritage for future generations"
              }
            ]?.map((value, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full">
                  <Icon name={value?.icon} size={24} />
                </div>
                <h3 className="font-semibold text-foreground">{value?.title}</h3>
                <p className="text-sm text-muted-foreground">{value?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Navigation Tabs */}
        <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-1 overflow-x-auto py-4">
              {navigationTabs?.map((tab) => (
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
        </div>

        {/* Tab Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderTabContent()}
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-6">
              <Button variant="ghost" size="sm" iconName="MessageCircle">
                Support
              </Button>
              <Button variant="ghost" size="sm" iconName="Shield">
                Guidelines
              </Button>
              <Button variant="ghost" size="sm" iconName="Info">
                About
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date()?.getFullYear()} Monastery Digital Heritage. Building bridges between ancient wisdom and modern community.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HeritageCommunity;