import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PreservationProjects = () => {
  const [selectedStatus, setSelectedStatus] = useState('all');

  const statusFilters = [
    { id: 'all', label: 'All Projects', icon: 'Grid3X3' },
    { id: 'active', label: 'Active', icon: 'Play' },
    { id: 'funding', label: 'Seeking Funding', icon: 'DollarSign' },
    { id: 'completed', label: 'Completed', icon: 'CheckCircle' }
  ];

  const projects = [
    {
      id: 1,
      title: "Hemis Monastery Manuscript Digitization",
      description: `A comprehensive effort to digitize and preserve over 1,200 ancient Tibetan manuscripts dating back to the 12th century. Using advanced AI-powered OCR technology, we're making these sacred texts searchable and accessible to scholars worldwide.\n\nThis project involves collaboration with local monks, international scholars, and technology experts to ensure cultural sensitivity while leveraging cutting-edge preservation methods.`,
      location: "Hemis Monastery, Ladakh, India",
      status: "active",
      progress: 68,
      fundingGoal: 125000,
      fundingRaised: 89750,
      contributors: 234,
      startDate: "2025-03-15",
      estimatedCompletion: "2025-12-31",
      lead: {
        name: "Dr. Tenzin Norbu",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        title: "Project Director & Buddhist Scholar"
      },
      images: [
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=400&fit=crop"
      ],
      tags: ["Manuscript Preservation", "AI Technology", "Tibetan Buddhism"],
      volunteers: 45,
      impact: "1,200+ manuscripts preserved for future generations",
      urgency: "high"
    },
    {
      id: 2,
      title: "Tashilhunpo Monastery Wall Painting Conservation",
      description: `Emergency conservation project to restore 15th-century wall paintings that are deteriorating due to environmental factors. The project combines traditional Tibetan art restoration techniques with modern conservation science.\n\nWe're training local artisans in conservation methods while documenting the restoration process for educational purposes and future reference.`,
      location: "Tashilhunpo Monastery, Shigatse, Tibet",
      status: "funding",
      progress: 15,
      fundingGoal: 85000,
      fundingRaised: 23400,
      contributors: 156,
      startDate: "2025-10-01",
      estimatedCompletion: "2026-08-15",
      lead: {
        name: "Sarah Mitchell",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        title: "Cultural Heritage Conservator"
      },
      images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"
      ],
      tags: ["Art Conservation", "Wall Paintings", "Cultural Heritage"],
      volunteers: 12,
      impact: "500+ square meters of historical artwork preserved",
      urgency: "critical"
    },
    {
      id: 3,
      title: "Sera Monastery Library Climate Control System",
      description: `Installation of advanced climate control and monitoring systems to protect thousands of ancient texts and artifacts from humidity and temperature fluctuations that threaten their preservation.\n\nThe project includes IoT sensors, automated environmental controls, and a digital monitoring dashboard accessible to conservators worldwide.`,
      location: "Sera Monastery, Lhasa, Tibet",
      status: "active",
      progress: 42,
      fundingGoal: 65000,
      fundingRaised: 65000,
      contributors: 189,
      startDate: "2025-06-01",
      estimatedCompletion: "2025-11-30",
      lead: {
        name: "Dr. James Chen",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        title: "Environmental Conservation Engineer"
      },
      images: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop"
      ],
      tags: ["Climate Control", "Library Preservation", "IoT Technology"],
      volunteers: 28,
      impact: "10,000+ texts protected from environmental damage",
      urgency: "medium"
    },
    {
      id: 4,
      title: "Ganden Monastery 3D Documentation Project",
      description: `Complete 3D documentation and virtual reconstruction of Ganden Monastery using photogrammetry and laser scanning technology. This project creates a permanent digital record for future restoration efforts.\n\nThe detailed 3D models will be used for virtual tours, educational programs, and as reference for any future physical restoration work.`,
      location: "Ganden Monastery, Tibet",
      status: "completed",
      progress: 100,
      fundingGoal: 95000,
      fundingRaised: 98500,
      contributors: 312,
      startDate: "2024-08-01",
      estimatedCompletion: "2025-02-28",
      lead: {
        name: "Dr. Maria Rodriguez",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        title: "Digital Heritage Specialist"
      },
      images: [
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"
      ],
      tags: ["3D Documentation", "Virtual Reality", "Digital Preservation"],
      volunteers: 67,
      impact: "Complete monastery digitally preserved in perpetuity",
      urgency: "completed"
    }
  ];

  const filteredProjects = selectedStatus === 'all' 
    ? projects 
    : projects?.filter(project => project?.status === selectedStatus);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-success bg-success/10';
      case 'funding': return 'text-warning bg-warning/10';
      case 'completed': return 'text-primary bg-primary/10';
      default: return 'text-muted-foreground bg-muted/10';
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'critical': return 'text-error bg-error/10';
      case 'high': return 'text-warning bg-warning/10';
      case 'medium': return 'text-primary bg-primary/10';
      default: return 'text-success bg-success/10';
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })?.format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString)?.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-foreground">Preservation Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Join collaborative efforts to preserve monastery heritage through technology, conservation, 
          and community support. Every contribution helps safeguard cultural treasures for future generations.
        </p>
      </div>
      {/* Status Filters */}
      <div className="flex flex-wrap gap-3 justify-center">
        {statusFilters?.map((filter) => (
          <button
            key={filter?.id}
            onClick={() => setSelectedStatus(filter?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedStatus === filter?.id
                ? 'bg-primary text-primary-foreground shadow-soft'
                : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
            }`}
          >
            <Icon name={filter?.icon} size={16} />
            <span>{filter?.label}</span>
          </button>
        ))}
      </div>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects?.map((project) => (
          <div
            key={project?.id}
            className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-medium transition-all duration-300 group"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project?.images?.[0]}
                alt={project?.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 flex items-center space-x-2">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(project?.status)}`}>
                  {project?.status?.charAt(0)?.toUpperCase() + project?.status?.slice(1)}
                </span>
                {project?.urgency !== 'completed' && (
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${getUrgencyColor(project?.urgency)}`}>
                    {project?.urgency?.charAt(0)?.toUpperCase() + project?.urgency?.slice(1)} Priority
                  </span>
                )}
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 space-y-4">
              {/* Title and Location */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project?.title}
                </h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Icon name="MapPin" size={16} className="mr-1" />
                  <span>{project?.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {project?.description?.split('\n')?.[0]}
              </p>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium text-foreground">{project?.progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${project?.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Funding Information */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Funding</span>
                  <span className="font-medium text-foreground">
                    {formatCurrency(project?.fundingRaised)} / {formatCurrency(project?.fundingGoal)}
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-accent h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(project?.fundingRaised / project?.fundingGoal) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-3 gap-4 py-3 border-t border-border">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Icon name="Users" size={16} className="text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{project?.contributors}</p>
                  <p className="text-xs text-muted-foreground">Contributors</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Icon name="UserCheck" size={16} className="text-success" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{project?.volunteers}</p>
                  <p className="text-xs text-muted-foreground">Volunteers</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Icon name="Calendar" size={16} className="text-accent" />
                  </div>
                  <p className="text-sm font-medium text-foreground">
                    {formatDate(project?.estimatedCompletion)}
                  </p>
                  <p className="text-xs text-muted-foreground">Target Date</p>
                </div>
              </div>

              {/* Project Lead */}
              <div className="flex items-center space-x-3 py-3 border-t border-border">
                <Image
                  src={project?.lead?.avatar}
                  alt={project?.lead?.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{project?.lead?.name}</p>
                  <p className="text-xs text-muted-foreground">{project?.lead?.title}</p>
                </div>
                <Button variant="ghost" size="sm" iconName="MessageCircle">
                  Contact
                </Button>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project?.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-muted text-xs text-muted-foreground rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Impact Statement */}
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-3">
                <div className="flex items-start space-x-2">
                  <Icon name="Target" size={16} className="text-accent mt-0.5" />
                  <div>
                    <p className="text-xs font-medium text-accent mb-1">Project Impact</p>
                    <p className="text-sm text-foreground">{project?.impact}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3 pt-2">
                {project?.status === 'completed' ? (
                  <Button variant="outline" fullWidth iconName="Eye" iconPosition="left">
                    View Results
                  </Button>
                ) : (
                  <>
                    <Button variant="default" className="flex-1" iconName="Heart" iconPosition="left">
                      Support Project
                    </Button>
                    <Button variant="outline" iconName="Users" iconPosition="left">
                      Volunteer
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Call to Action */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-8 text-center">
        <Icon name="Lightbulb" size={48} className="text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-foreground mb-2">Have a Preservation Idea?</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Join our community of heritage preservationists and propose your own project. 
          Together, we can protect cultural treasures for future generations.
        </p>
        <Button variant="default" size="lg" iconName="Plus" iconPosition="left">
          Propose New Project
        </Button>
      </div>
    </div>
  );
};

export default PreservationProjects;