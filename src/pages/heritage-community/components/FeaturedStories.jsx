import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedStories = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Stories', icon: 'BookOpen' },
    { id: 'pilgrimage', label: 'Pilgrimage', icon: 'Mountain' },
    { id: 'preservation', label: 'Preservation', icon: 'Shield' },
    { id: 'meditation', label: 'Meditation', icon: 'Heart' },
    { id: 'research', label: 'Research', icon: 'Search' }
  ];

  const stories = [
    {
      id: 1,
      title: "Walking the Ancient Paths: A Digital Pilgrimage to Hemis Monastery",
      excerpt: `My journey began with curiosity about Tibetan Buddhism and led me through virtual halls that felt more real than many physical spaces I've visited. The 360° experience of the prayer wheels spinning in the morning light brought tears to my eyes.\n\nThrough the community discussions, I connected with monks who shared wisdom about impermanence that changed my perspective on daily struggles.`,
      author: {
        name: "Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        location: "San Francisco, USA",
        badge: "Heritage Ambassador"
      },
      category: "pilgrimage",
      readTime: "8 min read",
      likes: 234,
      comments: 45,
      shares: 12,
      publishedAt: "2025-09-25T10:30:00Z",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=400&fit=crop",
      tags: ["Virtual Reality", "Tibetan Buddhism", "Spiritual Journey"]
    },
    {
      id: 2,
      title: "Preserving Manuscripts: How AI Helped Save 800-Year-Old Texts",
      excerpt: `Working with the AI digitization team has been the highlight of my academic career. We've successfully processed over 500 ancient manuscripts, revealing texts that were thought to be lost forever.\n\nThe collaboration between traditional scholars and AI technology shows how innovation can serve preservation without losing the human touch that makes these texts sacred.`,
      author: {
        name: "Dr. Tenzin Norbu",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        location: "Dharamshala, India",
        badge: "Research Scholar"
      },
      category: "preservation",
      readTime: "12 min read",
      likes: 189,
      comments: 67,
      shares: 28,
      publishedAt: "2025-09-24T14:15:00Z",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop",
      tags: ["AI Technology", "Manuscript Preservation", "Cultural Heritage"]
    },
    {
      id: 3,
      title: "Finding Peace in Digital Spaces: A Modern Meditation Journey",
      excerpt: `Initially skeptical about digital meditation, I discovered that the monastery's virtual meditation hall created a sense of community I hadn't found in local centers.\n\nThe guided sessions with ambient monastery sounds and the ability to meditate 'alongside' others from around the world has transformed my daily practice.`,
      author: {
        name: "Maria Rodriguez",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        location: "Barcelona, Spain",
        badge: "Community Contributor"
      },
      category: "meditation",
      readTime: "6 min read",
      likes: 156,
      comments: 32,
      shares: 18,
      publishedAt: "2025-09-23T09:45:00Z",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
      tags: ["Digital Meditation", "Community", "Mindfulness"]
    }
  ];

  const filteredStories = selectedCategory === 'all' 
    ? stories 
    : stories?.filter(story => story?.category === selectedCategory);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3">
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
      {/* Stories Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredStories?.map((story) => (
          <article
            key={story?.id}
            className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-medium transition-all duration-300 group"
          >
            {/* Story Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={story?.image}
                alt={story?.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium text-foreground rounded-full">
                  {story?.category?.charAt(0)?.toUpperCase() + story?.category?.slice(1)}
                </span>
              </div>
            </div>

            {/* Story Content */}
            <div className="p-6 space-y-4">
              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                {story?.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {story?.excerpt?.split('\n')?.[0]}
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Image
                    src={story?.author?.avatar}
                    alt={story?.author?.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-background"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium text-foreground truncate">
                      {story?.author?.name}
                    </p>
                    <span className="px-2 py-0.5 bg-accent/20 text-accent text-xs font-medium rounded">
                      {story?.author?.badge}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">
                    {story?.author?.location}
                  </p>
                </div>
              </div>

              {/* Story Meta */}
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center space-x-4">
                  <span>{formatDate(story?.publishedAt)}</span>
                  <span>{story?.readTime}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    <Icon name="Heart" size={14} />
                    <span>{story?.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="MessageCircle" size={14} />
                    <span>{story?.comments}</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {story?.tags?.slice(0, 2)?.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-muted text-xs text-muted-foreground rounded"
                  >
                    {tag}
                  </span>
                ))}
                {story?.tags?.length > 2 && (
                  <span className="px-2 py-1 bg-muted text-xs text-muted-foreground rounded">
                    +{story?.tags?.length - 2} more
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-2">
                <Button variant="ghost" size="sm" iconName="BookOpen" iconPosition="left">
                  Read Story
                </Button>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" iconName="Heart">
                    <span className="sr-only">Like</span>
                  </Button>
                  <Button variant="ghost" size="sm" iconName="Share2">
                    <span className="sr-only">Share</span>
                  </Button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" iconName="Plus" iconPosition="left">
          Load More Stories
        </Button>
      </div>
    </div>
  );
};

export default FeaturedStories;