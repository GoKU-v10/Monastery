import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ManuscriptCard from './components/ManuscriptCard';
import SearchFilters from './components/SearchFilters';
import DigitizationProgress from './components/DigitizationProgress';
import CollaborationHub from './components/CollaborationHub';
import RecentActivity from './components/RecentActivity';
import StatsOverview from './components/StatsOverview';

const AIManuscriptPortal = () => {
  const [activeTab, setActiveTab] = useState('manuscripts');
  const [filters, setFilters] = useState({
    search: '',
    language: 'all',
    status: 'all',
    category: 'all',
    monastery: 'all',
    century: 'all'
  });

  // Mock data for manuscripts
  const manuscripts = [
    {
      id: 1,
      title: "Prajnaparamita Sutra",
      monastery: "Potala Palace",
      century: "12th Century",
      language: "Tibetan",
      pages: 247,
      collaborators: 8,
      rating: 5,
      status: "completed",
      progress: 100,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop",
      description: `Ancient wisdom text on the perfection of wisdom, containing profound teachings on emptiness and compassion. This manuscript represents one of the most important philosophical works in Buddhist literature.`
    },
    {
      id: 2,
      title: "Lotus Sutra Commentary",
      monastery: "Sera Monastery",
      century: "14th Century",
      language: "Sanskrit",
      pages: 189,
      collaborators: 12,
      rating: 4,
      status: "in-progress",
      progress: 78,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      description: `Detailed commentary on the Lotus Sutra, exploring the universal Buddha nature and the path to enlightenment through skillful means and compassionate action.`
    },
    {
      id: 3,
      title: "Vinaya Rules Collection",
      monastery: "Drepung Monastery",
      century: "11th Century",
      language: "Tibetan",
      pages: 156,
      collaborators: 6,
      rating: 4,
      status: "in-progress",
      progress: 45,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      description: `Comprehensive collection of monastic rules and ethical guidelines, providing the foundation for Buddhist monastic life and community governance.`
    },
    {
      id: 4,
      title: "Abhidhamma Treatise",
      monastery: "Ganden Monastery",
      century: "13th Century",
      language: "Sanskrit",
      pages: 298,
      collaborators: 15,
      rating: 5,
      status: "pending",
      progress: 0,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      description: `Systematic analysis of mental phenomena and consciousness, representing the pinnacle of Buddhist psychological and philosophical understanding.`
    },
    {
      id: 5,
      title: "Tara Tantra Practices",
      monastery: "Tashilhunpo Monastery",
      century: "15th Century",
      language: "Tibetan",
      pages: 134,
      collaborators: 9,
      rating: 4,
      status: "completed",
      progress: 100,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop",
      description: `Sacred tantric practices dedicated to Tara, the female Buddha of compassion, including visualization techniques and mantras for spiritual transformation.`
    },
    {
      id: 6,
      title: "Madhyamaka Philosophy",
      monastery: "Samye Monastery",
      century: "10th Century",
      language: "Sanskrit",
      pages: 267,
      collaborators: 11,
      rating: 5,
      status: "in-progress",
      progress: 62,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      description: `Foundational text on the Middle Way philosophy, exploring the nature of reality through the lens of dependent origination and emptiness.`
    }
  ];

  // Mock data for digitization projects
  const digitizationProjects = [
    {
      id: 1,
      title: "Kangyur Collection Digitization",
      description: "Complete digitization of the Tibetan Buddhist canon",
      status: "processing",
      progress: 87,
      totalPages: 1247,
      processedPages: 1085,
      accuracy: 94.2,
      eta: "3 days",
      assignedTo: "Dr. Sarah Chen",
      startDate: "Oct 15, 2024"
    },
    {
      id: 2,
      title: "Sanskrit Palm Leaf Manuscripts",
      description: "Ancient palm leaf manuscripts from South India",
      status: "reviewing",
      progress: 95,
      totalPages: 456,
      processedPages: 433,
      accuracy: 97.8,
      eta: "1 day",
      assignedTo: "Prof. Rajesh Kumar",
      startDate: "Oct 20, 2024"
    },
    {
      id: 3,
      title: "Mongolian Buddhist Texts",
      description: "Rare Mongolian translations of Buddhist classics",
      status: "uploading",
      progress: 34,
      totalPages: 789,
      processedPages: 268,
      accuracy: 91.5,
      eta: "8 days",
      assignedTo: "Dr. Batbayar",
      startDate: "Oct 25, 2024"
    }
  ];

  // Mock data for collaborations
  const collaborations = [
    {
      id: 1,
      title: "Prajnaparamita Comparative Study",
      description: "Cross-cultural analysis of Perfection of Wisdom texts across different Buddhist traditions",
      priority: "high",
      deadline: "Dec 15, 2024",
      messages: 47,
      documents: 23,
      progress: 68,
      lead: "Dr. Michael Thompson",
      institution: "Oxford University",
      members: [
        { name: "Dr. Sarah Chen", avatar: "https://randomuser.me/api/portraits/women/32.jpg", role: "lead" },
        { name: "Prof. Tenzin Norbu", avatar: "https://randomuser.me/api/portraits/men/45.jpg", role: "contributor" },
        { name: "Dr. Yuki Tanaka", avatar: "https://randomuser.me/api/portraits/women/28.jpg", role: "reviewer" },
        { name: "Prof. Lobsang Tenzin", avatar: "https://randomuser.me/api/portraits/men/52.jpg", role: "contributor" },
        { name: "Dr. Maria Rodriguez", avatar: "https://randomuser.me/api/portraits/women/41.jpg", role: "reviewer" }
      ]
    },
    {
      id: 2,
      title: "Digital Preservation Standards",
      description: "Developing international standards for Buddhist manuscript digitization and preservation",
      priority: "medium",
      deadline: "Jan 30, 2025",
      messages: 23,
      documents: 15,
      progress: 42,
      lead: "Prof. James Wilson",
      institution: "Harvard University",
      members: [
        { name: "Dr. Lisa Park", avatar: "https://randomuser.me/api/portraits/women/35.jpg", role: "lead" },
        { name: "Dr. Karma Lhamo", avatar: "https://randomuser.me/api/portraits/women/29.jpg", role: "contributor" },
        { name: "Prof. Zhang Wei", avatar: "https://randomuser.me/api/portraits/men/38.jpg", role: "reviewer" }
      ]
    },
    {
      id: 3,
      title: "AI Translation Enhancement",
      description: "Improving machine translation accuracy for ancient Buddhist texts using deep learning",
      priority: "high",
      deadline: "Nov 20, 2024",
      messages: 89,
      documents: 34,
      progress: 73,
      lead: "Dr. Priya Sharma",
      institution: "MIT",
      members: [
        { name: "Dr. Alex Johnson", avatar: "https://randomuser.me/api/portraits/men/33.jpg", role: "lead" },
        { name: "Dr. Mei Lin", avatar: "https://randomuser.me/api/portraits/women/26.jpg", role: "contributor" },
        { name: "Prof. Robert Brown", avatar: "https://randomuser.me/api/portraits/men/47.jpg", role: "reviewer" },
        { name: "Dr. Sangay Dolma", avatar: "https://randomuser.me/api/portraits/women/31.jpg", role: "contributor" }
      ]
    }
  ];

  // Mock data for recent activities
  const recentActivities = [
    {
      id: 1,
      type: "completion",
      user: {
        name: "Dr. Sarah Chen",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg"
      },
      description: "completed digitization of Prajnaparamita Sutra manuscript",
      manuscript: "Prajnaparamita Sutra",
      language: "Tibetan",
      timestamp: new Date(Date.now() - 300000)
    },
    {
      id: 2,
      type: "collaboration",
      user: {
        name: "Prof. Tenzin Norbu",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg"
      },
      description: "joined the Comparative Buddhist Philosophy project",
      collaboration: "Comparative Buddhist Philosophy",
      timestamp: new Date(Date.now() - 900000)
    },
    {
      id: 3,
      type: "upload",
      user: {
        name: "Dr. Yuki Tanaka",
        avatar: "https://randomuser.me/api/portraits/women/28.jpg"
      },
      description: "uploaded new manuscript images for OCR processing",
      manuscript: "Lotus Sutra Commentary",
      language: "Sanskrit",
      timestamp: new Date(Date.now() - 1800000)
    },
    {
      id: 4,
      type: "annotation",
      user: {
        name: "Prof. Lobsang Tenzin",
        avatar: "https://randomuser.me/api/portraits/men/52.jpg"
      },
      description: "added scholarly annotations to Vinaya Rules Collection",
      manuscript: "Vinaya Rules Collection",
      language: "Tibetan",
      timestamp: new Date(Date.now() - 3600000)
    },
    {
      id: 5,
      type: "review",
      user: {
        name: "Dr. Maria Rodriguez",
        avatar: "https://randomuser.me/api/portraits/women/41.jpg"
      },
      description: "reviewed and approved translation accuracy for Abhidhamma Treatise",
      manuscript: "Abhidhamma Treatise",
      language: "Sanskrit",
      timestamp: new Date(Date.now() - 7200000)
    }
  ];

  // Mock stats data
  const stats = {
    totalManuscripts: 2847,
    digitizedPages: 156789,
    activeScholars: 156,
    completedProjects: 623
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleResetFilters = () => {
    setFilters({
      search: '',
      language: 'all',
      status: 'all',
      category: 'all',
      monastery: 'all',
      century: 'all'
    });
  };

  const handleViewManuscript = (manuscript) => {
    console.log('Viewing manuscript:', manuscript);
  };

  const handleCollaborate = (manuscript) => {
    console.log('Collaborating on:', manuscript);
  };

  const handleDownload = (manuscript) => {
    console.log('Downloading:', manuscript);
  };

  const handleJoinCollaboration = (collaboration) => {
    console.log('Joining collaboration:', collaboration);
  };

  const handleViewCollaborationDetails = (collaboration) => {
    console.log('Viewing collaboration details:', collaboration);
  };

  const tabs = [
    { id: 'manuscripts', label: 'Manuscripts', icon: 'FileText' },
    { id: 'digitization', label: 'AI Processing', icon: 'Cpu' },
    { id: 'collaboration', label: 'Collaborations', icon: 'Users' },
    { id: 'activity', label: 'Recent Activity', icon: 'Activity' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Manuscript Portal - Monastery Digital Heritage</title>
        <meta name="description" content="Transform ancient texts into searchable digital archives with AI-powered OCR tools, collaborative research features, and global scholar network." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-20 pb-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                <Icon name="Cpu" size={16} className="mr-2" />
                AI-Powered Manuscript Digitization
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                AI Manuscript Portal
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Transform ancient Buddhist texts into searchable digital archives through cutting-edge AI technology. 
                Collaborate with scholars worldwide to preserve and unlock the wisdom of millennia.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Upload"
                  iconPosition="left"
                  className="candlelight-glow"
                >
                  Upload Manuscript
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Search"
                  iconPosition="left"
                >
                  Browse Archive
                </Button>
              </div>
            </div>

            {/* Stats Overview */}
            <StatsOverview stats={stats} />
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search Filters */}
            <div className="mb-8">
              <SearchFilters
                filters={filters}
                onFilterChange={handleFilterChange}
                onReset={handleResetFilters}
              />
            </div>

            {/* Tab Navigation */}
            <div className="mb-8">
              <div className="border-b border-border">
                <nav className="-mb-px flex space-x-8">
                  {tabs?.map((tab) => (
                    <button
                      key={tab?.id}
                      onClick={() => setActiveTab(tab?.id)}
                      className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === tab?.id
                          ? 'border-primary text-primary' :'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground'
                      }`}
                    >
                      <Icon name={tab?.icon} size={16} />
                      <span>{tab?.label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Tab Content */}
            <div className="space-y-8">
              {activeTab === 'manuscripts' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {manuscripts?.map((manuscript) => (
                    <ManuscriptCard
                      key={manuscript?.id}
                      manuscript={manuscript}
                      onView={handleViewManuscript}
                      onCollaborate={handleCollaborate}
                      onDownload={handleDownload}
                    />
                  ))}
                </div>
              )}

              {activeTab === 'digitization' && (
                <DigitizationProgress projects={digitizationProjects} />
              )}

              {activeTab === 'collaboration' && (
                <CollaborationHub
                  collaborations={collaborations}
                  onJoin={handleJoinCollaboration}
                  onViewDetails={handleViewCollaborationDetails}
                />
              )}

              {activeTab === 'activity' && (
                <RecentActivity activities={recentActivities} />
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Join the Digital Preservation Movement
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Help preserve ancient wisdom for future generations through collaborative digitization and AI-enhanced research.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="default"
                size="lg"
                iconName="UserPlus"
                iconPosition="left"
                className="breathe"
              >
                Become a Scholar
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Heart"
                iconPosition="left"
              >
                Support Project
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-card border-t border-border py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="BookOpen" size={20} className="text-primary-foreground" />
                  </div>
                  <span className="text-lg font-semibold text-foreground">AI Manuscript Portal</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Preserving ancient wisdom through modern technology. Join our global community of scholars 
                  and researchers in digitizing Buddhist manuscripts for future generations.
                </p>
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm" iconName="Mail" />
                  <Button variant="ghost" size="sm" iconName="Twitter" />
                  <Button variant="ghost" size="sm" iconName="Github" />
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-4">Resources</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">API Reference</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Research Papers</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Best Practices</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-4">Community</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">Scholar Network</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Discussion Forum</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Events</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Newsletter</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
              <p>&copy; {new Date()?.getFullYear()} Monastery Digital Heritage. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AIManuscriptPortal;