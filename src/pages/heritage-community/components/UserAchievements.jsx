import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const UserAchievements = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Achievements', icon: 'Award' },
    { id: 'contribution', label: 'Contributions', icon: 'Heart' },
    { id: 'preservation', label: 'Preservation', icon: 'Shield' },
    { id: 'community', label: 'Community', icon: 'Users' },
    { id: 'research', label: 'Research', icon: 'BookOpen' }
  ];

  const achievements = [
    {
      id: 1,
      title: "Heritage Ambassador",
      description: "Recognized for outstanding contributions to monastery heritage preservation and community engagement",
      category: "contribution",
      icon: "Crown",
      rarity: "legendary",
      earnedBy: 12,
      totalMembers: 12847,
      requirements: [
        "Complete 50+ community contributions",
        "Lead 3+ preservation projects",
        "Mentor 10+ new members",
        "Maintain 95%+ community rating"
      ],
      rewards: [
        "Exclusive access to expert sessions",
        "Priority project participation",
        "Special community badge",
        "Annual heritage summit invitation"
      ],
      recentEarners: [
        {
          name: "Sarah Chen",
          avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
          earnedAt: "2025-09-25T14:30:00Z",
          location: "San Francisco, USA"
        },
        {
          name: "Dr. Tenzin Norbu",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
          earnedAt: "2025-09-20T09:15:00Z",
          location: "Dharamshala, India"
        }
      ]
    },
    {
      id: 2,
      title: "Manuscript Guardian",
      description: "Successfully contributed to the digitization and preservation of ancient monastery manuscripts",
      category: "preservation",
      icon: "BookOpen",
      rarity: "epic",
      earnedBy: 89,
      totalMembers: 12847,
      requirements: [
        "Participate in 5+ manuscript projects",
        "Complete digitization training",
        "Contribute 100+ hours of work",
        "Maintain quality standards"
      ],
      rewards: [
        "Access to rare manuscript collections",
        "Digitization tool privileges",
        "Research collaboration opportunities",
        "Academic publication credits"
      ],
      recentEarners: [
        {
          name: "Dr. Maria Rodriguez",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
          earnedAt: "2025-09-26T16:45:00Z",
          location: "Barcelona, Spain"
        },
        {
          name: "James Wilson",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
          earnedAt: "2025-09-24T11:20:00Z",
          location: "Oxford, UK"
        }
      ]
    },
    {
      id: 3,
      title: "Community Builder",
      description: "Fostered meaningful connections and helped grow the monastery heritage community",
      category: "community",
      icon: "Users",
      rarity: "rare",
      earnedBy: 234,
      totalMembers: 12847,
      requirements: [
        "Invite 25+ new members",
        "Host 3+ community events",
        "Moderate forum discussions",
        "Maintain positive engagement"
      ],
      rewards: [
        "Event hosting privileges",
        "Community moderation tools",
        "Special recognition badge",
        "Networking opportunities"
      ],
      recentEarners: [
        {
          name: "Lobsang Tenzin",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
          earnedAt: "2025-09-27T08:30:00Z",
          location: "Kathmandu, Nepal"
        },
        {
          name: "Elena Petrov",
          avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
          earnedAt: "2025-09-25T19:10:00Z",
          location: "Prague, Czech Republic"
        }
      ]
    },
    {
      id: 4,
      title: "Digital Pilgrim",
      description: "Completed virtual pilgrimage journeys and shared meaningful spiritual experiences",
      category: "contribution",
      icon: "Mountain",
      rarity: "common",
      earnedBy: 1456,
      totalMembers: 12847,
      requirements: [
        "Complete 10+ virtual tours",
        "Share 5+ pilgrimage stories",
        "Engage with community feedback",
        "Maintain respectful participation"
      ],
      rewards: [
        "Advanced tour features",
        "Story highlighting privileges",
        "Pilgrimage planning tools",
        "Cultural insights access"
      ],
      recentEarners: [
        {
          name: "Michael Chen",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
          earnedAt: "2025-09-27T10:15:00Z",
          location: "Toronto, Canada"
        },
        {
          name: "Priya Sharma",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
          earnedAt: "2025-09-27T09:45:00Z",
          location: "Mumbai, India"
        }
      ]
    },
    {
      id: 5,
      title: "Research Scholar",
      description: "Made significant contributions to academic research and knowledge preservation",
      category: "research",
      icon: "GraduationCap",
      rarity: "epic",
      earnedBy: 67,
      totalMembers: 12847,
      requirements: [
        "Publish 3+ research papers",
        "Collaborate on academic projects",
        "Peer review contributions",
        "Maintain scholarly standards"
      ],
      rewards: [
        "Research database access",
        "Academic collaboration network",
        "Publication opportunities",
        "Conference presentation slots"
      ],
      recentEarners: [
        {
          name: "Dr. Yuki Tanaka",
          avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
          earnedAt: "2025-09-23T13:20:00Z",
          location: "Kyoto, Japan"
        }
      ]
    },
    {
      id: 6,
      title: "Environmental Guardian",
      description: "Actively participated in monastery environmental monitoring and conservation efforts",
      category: "preservation",
      icon: "Leaf",
      rarity: "rare",
      earnedBy: 156,
      totalMembers: 12847,
      requirements: [
        "Monitor environmental data",
        "Participate in conservation projects",
        "Report environmental concerns",
        "Promote sustainability practices"
      ],
      rewards: [
        "Environmental monitoring tools",
        "Conservation project access",
        "Sustainability resources",
        "Expert consultation sessions"
      ],
      recentEarners: [
        {
          name: "Dr. James Wilson",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
          earnedAt: "2025-09-26T15:30:00Z",
          location: "Oxford, UK"
        }
      ]
    }
  ];

  const filteredAchievements = selectedCategory === 'all' 
    ? achievements 
    : achievements?.filter(achievement => achievement?.category === selectedCategory);

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'legendary': return 'from-yellow-400 to-orange-500 text-white';
      case 'epic': return 'from-purple-400 to-pink-500 text-white';
      case 'rare': return 'from-blue-400 to-cyan-500 text-white';
      case 'common': return 'from-gray-400 to-gray-600 text-white';
      default: return 'from-gray-400 to-gray-600 text-white';
    }
  };

  const getRarityBorder = (rarity) => {
    switch (rarity) {
      case 'legendary': return 'border-yellow-400 shadow-yellow-400/20';
      case 'epic': return 'border-purple-400 shadow-purple-400/20';
      case 'rare': return 'border-blue-400 shadow-blue-400/20';
      case 'common': return 'border-gray-400 shadow-gray-400/20';
      default: return 'border-gray-400 shadow-gray-400/20';
    }
  };

  const formatTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  const calculateRarity = (earnedBy, totalMembers) => {
    const percentage = (earnedBy / totalMembers) * 100;
    return percentage?.toFixed(2);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-foreground">Community Achievements</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Celebrate milestones and recognize outstanding contributions to monastery heritage preservation. 
          Earn badges, unlock rewards, and inspire others through your dedication.
        </p>
      </div>
      {/* Achievement Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-foreground mb-1">127</div>
          <div className="text-sm text-muted-foreground">Total Achievements</div>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-accent mb-1">12</div>
          <div className="text-sm text-muted-foreground">Legendary Badges</div>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary mb-1">2,847</div>
          <div className="text-sm text-muted-foreground">Badges Earned</div>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-success mb-1">89%</div>
          <div className="text-sm text-muted-foreground">Active Participants</div>
        </div>
      </div>
      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 justify-center">
        {categories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => setSelectedCategory(category?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category?.id
                ? 'bg-primary text-primary-foreground shadow-soft'
                : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
            }`}
          >
            <Icon name={category?.icon} size={16} />
            <span>{category?.label}</span>
          </button>
        ))}
      </div>
      {/* Achievements Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredAchievements?.map((achievement) => (
          <div
            key={achievement?.id}
            className={`bg-card border-2 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 ${getRarityBorder(achievement?.rarity)}`}
          >
            {/* Achievement Header */}
            <div className={`bg-gradient-to-r ${getRarityColor(achievement?.rarity)} p-6`}>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Icon name={achievement?.icon} size={32} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{achievement?.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {achievement?.description}
                  </p>
                </div>
              </div>
              
              {/* Rarity and Stats */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/20">
                <div className="flex items-center space-x-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium text-white uppercase tracking-wide">
                    {achievement?.rarity}
                  </span>
                  <span className="text-white/90 text-sm">
                    {calculateRarity(achievement?.earnedBy, achievement?.totalMembers)}% of members
                  </span>
                </div>
                <div className="text-white/90 text-sm">
                  {achievement?.earnedBy} earned
                </div>
              </div>
            </div>

            {/* Achievement Content */}
            <div className="p-6 space-y-6">
              {/* Requirements */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                  <Icon name="Target" size={16} className="text-primary mr-2" />
                  Requirements
                </h4>
                <ul className="space-y-2">
                  {achievement?.requirements?.map((requirement, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                      <Icon name="Check" size={14} className="text-success mt-0.5 flex-shrink-0" />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Rewards */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                  <Icon name="Gift" size={16} className="text-accent mr-2" />
                  Rewards
                </h4>
                <ul className="space-y-2">
                  {achievement?.rewards?.map((reward, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                      <Icon name="Star" size={14} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>{reward}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Earners */}
              {achievement?.recentEarners?.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                    <Icon name="Users" size={16} className="text-primary mr-2" />
                    Recent Earners
                  </h4>
                  <div className="space-y-3">
                    {achievement?.recentEarners?.map((earner, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Image
                          src={earner?.avatar}
                          alt={earner?.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">{earner?.name}</p>
                          <p className="text-xs text-muted-foreground">{earner?.location}</p>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {formatTimeAgo(earner?.earnedAt)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Button */}
              <div className="pt-4 border-t border-border">
                <Button variant="outline" fullWidth iconName="Target" iconPosition="left">
                  View Progress
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Achievement Leaderboard */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center">
          <Icon name="Trophy" size={20} className="text-accent mr-2" />
          Top Contributors This Month
        </h3>
        <div className="space-y-4">
          {[
            {
              rank: 1,
              name: "Sarah Chen",
              avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
              achievements: 8,
              points: 2450,
              badge: "Heritage Ambassador"
            },
            {
              rank: 2,
              name: "Dr. Tenzin Norbu",
              avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
              achievements: 7,
              points: 2180,
              badge: "Research Scholar"
            },
            {
              rank: 3,
              name: "Maria Rodriguez",
              avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
              achievements: 6,
              points: 1890,
              badge: "Manuscript Guardian"
            }
          ]?.map((user) => (
            <div key={user?.rank} className="flex items-center space-x-4 p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold">
                {user?.rank}
              </div>
              <Image
                src={user?.avatar}
                alt={user?.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{user?.name}</p>
                <p className="text-xs text-muted-foreground">{user?.badge}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-foreground">{user?.achievements} badges</p>
                <p className="text-xs text-muted-foreground">{user?.points} points</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserAchievements;