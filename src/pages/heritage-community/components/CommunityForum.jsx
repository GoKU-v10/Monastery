import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const CommunityForum = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Discussions', icon: 'MessageSquare', count: 1247 },
    { id: 'pilgrimage', label: 'Pilgrimage Stories', icon: 'Mountain', count: 342 },
    { id: 'meditation', label: 'Meditation & Practice', icon: 'Heart', count: 456 },
    { id: 'preservation', label: 'Heritage Preservation', icon: 'Shield', count: 189 },
    { id: 'research', label: 'Academic Research', icon: 'BookOpen', count: 234 },
    { id: 'events', label: 'Community Events', icon: 'Calendar', count: 126 }
  ];

  const discussions = [
    {
      id: 1,
      title: "Virtual Pilgrimage Experience: Hemis Monastery Festival",
      excerpt: `I just completed the virtual Hemis Festival experience and I'm amazed by how immersive it felt. The 360° views of the masked dances and the ability to interact with other participants made it feel like I was truly there.\n\nHas anyone else tried this? I'm curious about your experiences and whether you felt the same spiritual connection I did.`,
      author: {
        name: "Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        location: "San Francisco, USA",
        reputation: 1247,
        badge: "Heritage Ambassador",
        joinedDate: "2024-03-15"
      },
      category: "pilgrimage",
      tags: ["Virtual Reality", "Hemis Festival", "Spiritual Experience"],
      createdAt: "2025-09-27T09:15:00Z",
      lastActivity: "2025-09-27T11:05:00Z",
      replies: 23,
      views: 456,
      likes: 67,
      isPinned: true,
      hasExpertReply: true,
      isHot: true
    },
    {
      id: 2,
      title: "AI Manuscript Translation: Preserving Meaning vs. Literal Accuracy",
      excerpt: `Working on the Tashilhunpo manuscript project, I've encountered fascinating challenges in AI translation. How do we balance preserving the spiritual essence of texts with maintaining scholarly accuracy?\n\nI'd love to hear from other researchers about their approaches to this delicate balance.`,
      author: {
        name: "Dr. Tenzin Norbu",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        location: "Dharamshala, India",
        reputation: 2891,
        badge: "Research Scholar",
        joinedDate: "2023-11-20"
      },
      category: "research",
      tags: ["AI Translation", "Manuscript Preservation", "Academic Research"],
      createdAt: "2025-09-26T16:30:00Z",
      lastActivity: "2025-09-27T10:45:00Z",
      replies: 34,
      views: 789,
      likes: 89,
      isPinned: false,
      hasExpertReply: true,
      isHot: true
    },
    {
      id: 3,
      title: "Daily Meditation Practice: Finding Consistency in Modern Life",
      excerpt: `I've been struggling to maintain a consistent meditation practice with my busy schedule. The monastery's guided sessions have been helpful, but I'm looking for practical tips from the community.\n\nWhat strategies have worked for you in building a sustainable daily practice?`,
      author: {
        name: "Maria Rodriguez",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        location: "Barcelona, Spain",
        reputation: 567,
        badge: "Community Contributor",
        joinedDate: "2024-07-08"
      },
      category: "meditation",
      tags: ["Daily Practice", "Meditation Tips", "Work-Life Balance"],
      createdAt: "2025-09-26T08:20:00Z",
      lastActivity: "2025-09-27T09:30:00Z",
      replies: 45,
      views: 623,
      likes: 78,
      isPinned: false,
      hasExpertReply: false,
      isHot: false
    },
    {
      id: 4,
      title: "Climate Change Impact on Monastery Preservation",
      excerpt: `Recent environmental monitoring data shows concerning trends affecting monastery structures. Rising temperatures and changing precipitation patterns are accelerating deterioration.\n\nWhat innovative preservation techniques are being developed to address these challenges?`,
      author: {
        name: "Dr. James Wilson",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        location: "Oxford, UK",
        reputation: 1834,
        badge: "Environmental Specialist",
        joinedDate: "2024-01-12"
      },
      category: "preservation",
      tags: ["Climate Change", "Environmental Monitoring", "Conservation"],
      createdAt: "2025-09-25T14:45:00Z",
      lastActivity: "2025-09-27T08:15:00Z",
      replies: 28,
      views: 512,
      likes: 56,
      isPinned: false,
      hasExpertReply: true,
      isHot: false
    },
    {
      id: 5,
      title: "Upcoming Losar Festival: Virtual Celebration Planning",
      excerpt: `The Tibetan New Year is approaching and our community is organizing a virtual celebration. We're looking for volunteers to help with various aspects of the event.\n\nWho's interested in participating or helping organize this special celebration?`,
      author: {
        name: "Lobsang Tenzin",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        location: "Kathmandu, Nepal",
        reputation: 923,
        badge: "Event Organizer",
        joinedDate: "2024-05-03"
      },
      category: "events",
      tags: ["Losar Festival", "Virtual Events", "Community Celebration"],
      createdAt: "2025-09-25T11:30:00Z",
      lastActivity: "2025-09-26T20:10:00Z",
      replies: 67,
      views: 834,
      likes: 123,
      isPinned: true,
      hasExpertReply: false,
      isHot: true
    }
  ];

  const filteredDiscussions = discussions?.filter(discussion => {
    const matchesCategory = selectedCategory === 'all' || discussion?.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      discussion?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      discussion?.excerpt?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      discussion?.tags?.some(tag => tag?.toLowerCase()?.includes(searchQuery?.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Heritage Ambassador': return 'bg-accent/20 text-accent';
      case 'Research Scholar': return 'bg-primary/20 text-primary';
      case 'Environmental Specialist': return 'bg-success/20 text-success';
      case 'Event Organizer': return 'bg-warning/20 text-warning';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-foreground">Community Forum</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Connect with fellow heritage enthusiasts, share experiences, and engage in meaningful 
          discussions about monastery culture, preservation, and spiritual practices.
        </p>
      </div>
      {/* Search and New Discussion */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <Input
            type="search"
            placeholder="Search discussions, topics, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e?.target?.value)}
            className="w-full"
          />
        </div>
        <Button variant="default" iconName="Plus" iconPosition="left">
          Start Discussion
        </Button>
      </div>
      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => setSelectedCategory(category?.id)}
            className={`p-4 rounded-lg border transition-all duration-200 text-left ${
              selectedCategory === category?.id
                ? 'bg-primary text-primary-foreground border-primary shadow-soft'
                : 'bg-card text-card-foreground border-border hover:bg-muted/50'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <Icon name={category?.icon} size={20} />
              <span className="text-sm font-bold">{category?.count}</span>
            </div>
            <p className="text-sm font-medium leading-tight">{category?.label}</p>
          </button>
        ))}
      </div>
      {/* Discussions List */}
      <div className="space-y-4">
        {filteredDiscussions?.map((discussion) => (
          <div
            key={discussion?.id}
            className={`bg-card border rounded-lg p-6 hover:shadow-soft transition-all duration-200 ${
              discussion?.isPinned ? 'border-accent/50 bg-accent/5' : 'border-border'
            }`}
          >
            {/* Discussion Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  {discussion?.isPinned && (
                    <Icon name="Pin" size={16} className="text-accent" />
                  )}
                  {discussion?.isHot && (
                    <Icon name="Flame" size={16} className="text-error" />
                  )}
                  {discussion?.hasExpertReply && (
                    <Icon name="CheckCircle" size={16} className="text-success" />
                  )}
                  <span className="text-xs text-muted-foreground">
                    {discussion?.category?.charAt(0)?.toUpperCase() + discussion?.category?.slice(1)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 hover:text-primary transition-colors cursor-pointer">
                  {discussion?.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {discussion?.excerpt?.split('\n')?.[0]}
                </p>
              </div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground ml-6">
                <div className="flex items-center space-x-1">
                  <Icon name="Eye" size={16} />
                  <span>{discussion?.views}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="MessageCircle" size={16} />
                  <span>{discussion?.replies}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Heart" size={16} />
                  <span>{discussion?.likes}</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {discussion?.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-muted text-xs text-muted-foreground rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Author and Meta Info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Image
                  src={discussion?.author?.avatar}
                  alt={discussion?.author?.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium text-foreground">
                      {discussion?.author?.name}
                    </p>
                    <span className={`px-2 py-0.5 text-xs font-medium rounded ${getBadgeColor(discussion?.author?.badge)}`}>
                      {discussion?.author?.badge}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <span>{discussion?.author?.location}</span>
                    <span>•</span>
                    <span>{discussion?.author?.reputation} reputation</span>
                  </div>
                </div>
              </div>
              <div className="text-right text-xs text-muted-foreground">
                <p>Started {formatTimeAgo(discussion?.createdAt)}</p>
                <p>Last activity {formatTimeAgo(discussion?.lastActivity)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" iconName="RefreshCw" iconPosition="left">
          Load More Discussions
        </Button>
      </div>
      {/* Community Guidelines */}
      <div className="bg-muted/50 border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
          <Icon name="Shield" size={20} className="text-primary mr-2" />
          Community Guidelines
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div className="space-y-2">
            <p className="flex items-center">
              <Icon name="Check" size={16} className="text-success mr-2" />
              Respect cultural sensitivity and traditions
            </p>
            <p className="flex items-center">
              <Icon name="Check" size={16} className="text-success mr-2" />
              Share authentic experiences and insights
            </p>
            <p className="flex items-center">
              <Icon name="Check" size={16} className="text-success mr-2" />
              Support fellow community members
            </p>
          </div>
          <div className="space-y-2">
            <p className="flex items-center">
              <Icon name="X" size={16} className="text-error mr-2" />
              No spam or self-promotion
            </p>
            <p className="flex items-center">
              <Icon name="X" size={16} className="text-error mr-2" />
              Avoid controversial political discussions
            </p>
            <p className="flex items-center">
              <Icon name="X" size={16} className="text-error mr-2" />
              No harassment or discriminatory language
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityForum;