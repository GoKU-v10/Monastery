import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ExpertQA = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Topics', icon: 'MessageCircle' },
    { id: 'meditation', label: 'Meditation', icon: 'Heart' },
    { id: 'history', label: 'History', icon: 'Clock' },
    { id: 'preservation', label: 'Preservation', icon: 'Shield' },
    { id: 'philosophy', label: 'Philosophy', icon: 'Brain' }
  ];

  const experts = [
    {
      id: 1,
      name: "Lama Tenzin Wangyal",
      title: "Senior Meditation Teacher",
      monastery: "Hemis Monastery, Ladakh",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      specialties: ["Tibetan Buddhism", "Meditation", "Philosophy"],
      responseRate: "98%",
      avgResponseTime: "2 hours",
      totalAnswers: 1247,
      isOnline: true
    },
    {
      id: 2,
      name: "Dr. Sarah Mitchell",
      title: "Cultural Heritage Specialist",
      monastery: "Oxford University & Tashilhunpo",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      specialties: ["Manuscript Preservation", "Art History", "Conservation"],
      responseRate: "95%",
      avgResponseTime: "4 hours",
      totalAnswers: 892,
      isOnline: false
    },
    {
      id: 3,
      name: "Geshe Lobsang Tenzin",
      title: "Buddhist Scholar",
      monastery: "Sera Monastery, Tibet",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      specialties: ["Buddhist Philosophy", "Tibetan Language", "Ritual Studies"],
      responseRate: "92%",
      avgResponseTime: "6 hours",
      totalAnswers: 634,
      isOnline: true
    }
  ];

  const questions = [
    {
      id: 1,
      question: "What is the significance of the prayer wheel spinning direction in Tibetan Buddhism?",
      askedBy: {
        name: "Michael Chen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
        reputation: 156
      },
      category: "meditation",
      tags: ["Prayer Wheels", "Tibetan Buddhism", "Ritual"],
      askedAt: "2025-09-27T08:30:00Z",
      answers: 3,
      views: 234,
      votes: 12,
      hasExpertAnswer: true,
      expertAnswer: {
        expert: experts?.[0],
        answer: `The clockwise direction of prayer wheel spinning is deeply rooted in Buddhist cosmology and represents the natural flow of positive energy. When we spin prayer wheels clockwise, we align ourselves with the movement of the sun, planets, and the natural order of the universe.\n\nThis practice also symbolizes the progression along the Buddhist path - moving forward in our spiritual development rather than regressing. Each rotation sends the mantras contained within the wheel out into the world, multiplying the merit and benefit for all sentient beings.\n\nIn my 30 years of teaching, I've observed that practitioners who maintain this traditional direction often report a deeper sense of connection to the practice and greater mindfulness in their daily activities.`,
        answeredAt: "2025-09-27T10:15:00Z",
        votes: 28,
        helpful: 45
      }
    },
    {
      id: 2,
      question: "How can digital preservation methods maintain the spiritual essence of ancient manuscripts?",
      askedBy: {
        name: "Dr. Elena Rodriguez",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
        reputation: 892
      },
      category: "preservation",
      tags: ["Digital Preservation", "Manuscripts", "Technology"],
      askedAt: "2025-09-26T15:45:00Z",
      answers: 2,
      views: 567,
      votes: 18,
      hasExpertAnswer: true,
      expertAnswer: {
        expert: experts?.[1],
        answer: `Digital preservation, when done thoughtfully, can actually enhance rather than diminish the spiritual essence of manuscripts. The key lies in approaching the technology with the same reverence we would show the physical texts.\n\nOur AI digitization process includes blessing ceremonies before scanning begins, ensuring that the spiritual intention is maintained throughout. We also preserve not just the text, but the context - the wear patterns that show which passages were most studied, the margin notes from generations of scholars, even the scent and texture through detailed metadata.\n\nWhat's remarkable is how digital access has allowed isolated practitioners to connect with teachings they could never physically reach, creating new spiritual communities around these ancient wisdoms.`,
        answeredAt: "2025-09-26T18:20:00Z",
        votes: 34,
        helpful: 67
      }
    },
    {
      id: 3,
      question: "What are the fundamental differences between Gelug and Kagyu meditation practices?",
      askedBy: {
        name: "James Wilson",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
        reputation: 234
      },
      category: "philosophy",
      tags: ["Gelug", "Kagyu", "Meditation Schools"],
      askedAt: "2025-09-25T12:20:00Z",
      answers: 1,
      views: 445,
      votes: 15,
      hasExpertAnswer: true,
      expertAnswer: {
        expert: experts?.[2],
        answer: `Both Gelug and Kagyu schools lead to the same ultimate goal of enlightenment, but they emphasize different approaches in their meditation practices.\n\nThe Gelug tradition, founded by Je Tsongkhapa, emphasizes gradual development through systematic study and analytical meditation. Practitioners typically spend years mastering philosophical understanding before engaging in advanced tantric practices. The approach is methodical, with clear stages of development.\n\nKagyu practice, particularly in the Mahamudra tradition, emphasizes direct experience and the natural state of mind. While study is important, there's greater emphasis on meditation experience and the direct pointing-out instructions from qualified teachers.\n\nBoth paths are complete and effective - the choice often depends on the practitioner's temperament and karmic connection to the teachings.`,
        answeredAt: "2025-09-25T16:45:00Z",
        votes: 22,
        helpful: 38
      }
    }
  ];

  const filteredQuestions = questions?.filter(q => {
    const matchesCategory = selectedCategory === 'all' || q?.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      q?.question?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      q?.tags?.some(tag => tag?.toLowerCase()?.includes(searchQuery?.toLowerCase()));
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

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-foreground">Expert Q&A</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Get answers from monastery scholars, meditation teachers, and cultural heritage experts. 
          Join the conversation and deepen your understanding of Buddhist wisdom and preservation practices.
        </p>
      </div>
      {/* Featured Experts */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
          <Icon name="Star" size={20} className="text-accent mr-2" />
          Featured Experts
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {experts?.map((expert) => (
            <div key={expert?.id} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
              <div className="relative">
                <Image
                  src={expert?.avatar}
                  alt={expert?.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                {expert?.isOnline && (
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-background"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{expert?.name}</p>
                <p className="text-xs text-muted-foreground truncate">{expert?.title}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs text-success">{expert?.responseRate}</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">{expert?.totalAnswers} answers</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <Input
            type="search"
            placeholder="Search questions, topics, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e?.target?.value)}
            className="w-full"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setSelectedCategory(category?.id)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                selectedCategory === category?.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
              }`}
            >
              <Icon name={category?.icon} size={14} />
              <span>{category?.label}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Ask Question Button */}
      <div className="text-center">
        <Button variant="default" size="lg" iconName="Plus" iconPosition="left">
          Ask a Question
        </Button>
      </div>
      {/* Questions List */}
      <div className="space-y-6">
        {filteredQuestions?.map((q) => (
          <div key={q?.id} className="bg-card border border-border rounded-lg p-6 hover:shadow-soft transition-shadow">
            {/* Question Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-foreground mb-2 leading-tight">
                  {q?.question}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Image
                      src={q?.askedBy?.avatar}
                      alt={q?.askedBy?.name}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span>{q?.askedBy?.name}</span>
                    <span className="text-xs bg-muted px-2 py-0.5 rounded">
                      {q?.askedBy?.reputation} rep
                    </span>
                  </div>
                  <span>•</span>
                  <span>{formatTimeAgo(q?.askedAt)}</span>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Icon name="Eye" size={16} />
                  <span>{q?.views}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="MessageCircle" size={16} />
                  <span>{q?.answers}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="ArrowUp" size={16} />
                  <span>{q?.votes}</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {q?.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-muted text-xs text-muted-foreground rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Expert Answer Preview */}
            {q?.hasExpertAnswer && q?.expertAnswer && (
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 mt-4">
                <div className="flex items-center space-x-3 mb-3">
                  <Image
                    src={q?.expertAnswer?.expert?.avatar}
                    alt={q?.expertAnswer?.expert?.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {q?.expertAnswer?.expert?.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {q?.expertAnswer?.expert?.title}
                    </p>
                  </div>
                  <div className="ml-auto flex items-center space-x-2">
                    <Icon name="CheckCircle" size={16} className="text-accent" />
                    <span className="text-xs text-accent font-medium">Expert Answer</span>
                  </div>
                </div>
                <p className="text-sm text-foreground leading-relaxed line-clamp-3">
                  {q?.expertAnswer?.answer}
                </p>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-accent/10">
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span>{formatTimeAgo(q?.expertAnswer?.answeredAt)}</span>
                    <div className="flex items-center space-x-1">
                      <Icon name="ArrowUp" size={12} />
                      <span>{q?.expertAnswer?.votes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Heart" size={12} />
                      <span>{q?.expertAnswer?.helpful} helpful</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read Full Answer
                  </Button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" iconName="RefreshCw" iconPosition="left">
          Load More Questions
        </Button>
      </div>
    </div>
  );
};

export default ExpertQA;