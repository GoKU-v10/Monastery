import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const ConservationProjects = () => {
  const [activeTab, setActiveTab] = useState('active');

  const projects = {
    active: [
      {
        id: 1,
        title: "Sacred Grove Restoration",
        location: "Tashilhunpo Monastery, Tibet",
        progress: 78,
        funding: {
          raised: 45000,
          goal: 60000
        },
        timeline: "6 months remaining",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
        description: `Restoring ancient sacred groves around the monastery grounds through native tree planting and soil rehabilitation. This project aims to recreate the original forest ecosystem that has supported monastery life for centuries.`,
        impact: "2,500 trees planted, 15 hectares restored",
        volunteers: 127,
        category: "Forest Restoration"
      },
      {
        id: 2,
        title: "Water Conservation System",
        location: "Hemis Monastery, Ladakh",
        progress: 45,
        funding: {
          raised: 28000,
          goal: 75000
        },
        timeline: "8 months remaining",
        image: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?w=400&h=250&fit=crop",
        description: `Installing traditional water harvesting systems combined with modern filtration technology to ensure sustainable water supply for the monastery and surrounding community.`,
        impact: "3 water sources protected, 500 people benefited",
        volunteers: 89,
        category: "Water Conservation"
      },
      {
        id: 3,
        title: "Solar Energy Initiative",
        location: "Rongbuk Monastery, Everest",
        progress: 92,
        funding: {
          raised: 38000,
          goal: 40000
        },
        timeline: "1 month remaining",
        image: "https://images.pixabay.com/photo/2017/09/12/13/21/photovoltaic-system-2742304_1280.jpg?w=400&h=250&fit=crop",
        description: `Installing solar panels and energy storage systems to provide clean, renewable energy for monastery operations while reducing carbon footprint in the high-altitude environment.`,
        impact: "80% renewable energy achieved, 12 tons CO2 saved annually",
        volunteers: 45,
        category: "Renewable Energy"
      }
    ],
    completed: [
      {
        id: 4,
        title: "Organic Garden Project",
        location: "Sera Monastery, Tibet",
        progress: 100,
        funding: {
          raised: 25000,
          goal: 25000
        },
        timeline: "Completed",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop",
        description: `Established sustainable organic gardens to provide fresh vegetables for monastery kitchens while teaching traditional Tibetan agricultural practices to younger monks.`,
        impact: "5 gardens established, 200 monks trained, 100% organic produce",
        volunteers: 156,
        category: "Sustainable Agriculture"
      },
      {
        id: 5,
        title: "Waste Management System",
        location: "Drepung Monastery, Tibet",
        progress: 100,
        funding: {
          raised: 35000,
          goal: 35000
        },
        timeline: "Completed",
        image: "https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?w=400&h=250&fit=crop",
        description: `Implemented comprehensive waste management and recycling systems to maintain the pristine environment around the monastery while educating the community about sustainable practices.`,
        impact: "90% waste reduction, 50 tons recycled annually",
        volunteers: 203,
        category: "Waste Management"
      }
    ]
  };

  const tabs = [
    { id: 'active', label: 'Active Projects', count: projects?.active?.length },
    { id: 'completed', label: 'Completed', count: projects?.completed?.length }
  ];

  const getProgressColor = (progress) => {
    if (progress >= 90) return 'bg-success';
    if (progress >= 70) return 'bg-primary';
    if (progress >= 40) return 'bg-warning';
    return 'bg-error';
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })?.format(amount);
  };

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-muted/50 p-1 rounded-lg">
        {tabs?.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === tab?.id
                ? 'bg-background text-foreground shadow-soft'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <span>{tab?.label}</span>
            <span className="bg-primary/20 text-primary px-2 py-0.5 rounded-full text-xs">
              {tab?.count}
            </span>
          </button>
        ))}
      </div>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects?.[activeTab]?.map((project) => (
          <div
            key={project?.id}
            className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-medium transition-all duration-300 scroll-reveal"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project?.image}
                alt={project?.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-background/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-medium">
                  {project?.category}
                </span>
              </div>
              {project?.progress === 100 && (
                <div className="absolute top-4 right-4">
                  <div className="bg-success text-success-foreground p-2 rounded-full">
                    <Icon name="CheckCircle" size={16} />
                  </div>
                </div>
              )}
            </div>

            {/* Project Content */}
            <div className="p-6 space-y-4">
              <div>
                <h3 className="font-sans font-semibold text-lg text-foreground mb-1">
                  {project?.title}
                </h3>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="MapPin" size={14} />
                  <span>{project?.location}</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {project?.description}
              </p>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium text-foreground">{project?.progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(project?.progress)}`}
                    style={{ width: `${project?.progress}%` }}
                  />
                </div>
              </div>

              {/* Funding Progress */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Funding</span>
                  <span className="font-medium text-foreground">
                    {formatCurrency(project?.funding?.raised)} / {formatCurrency(project?.funding?.goal)}
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="h-2 bg-accent rounded-full transition-all duration-500"
                    style={{ width: `${(project?.funding?.raised / project?.funding?.goal) * 100}%` }}
                  />
                </div>
              </div>

              {/* Project Stats */}
              <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4">
                <div className="flex items-center space-x-1">
                  <Icon name="Users" size={14} />
                  <span>{project?.volunteers} volunteers</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Clock" size={14} />
                  <span>{project?.timeline}</span>
                </div>
              </div>

              {/* Impact */}
              <div className="bg-muted/50 rounded-lg p-3">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Target" size={16} className="text-success" />
                  <span className="font-medium text-sm text-foreground">Impact Achieved</span>
                </div>
                <p className="text-sm text-muted-foreground">{project?.impact}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                {project?.progress < 100 ? (
                  <>
                    <Button
                      variant="default"
                      size="sm"
                      iconName="Heart"
                      iconPosition="left"
                      className="flex-1"
                    >
                      Donate
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="Users"
                      iconPosition="left"
                      className="flex-1"
                    >
                      Volunteer
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Eye"
                    iconPosition="left"
                    className="w-full"
                  >
                    View Results
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConservationProjects;
