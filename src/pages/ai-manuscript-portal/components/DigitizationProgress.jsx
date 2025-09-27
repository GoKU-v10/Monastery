import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DigitizationProgress = ({ projects }) => {
  const getProgressColor = (progress) => {
    if (progress >= 90) return 'text-success bg-success/10';
    if (progress >= 60) return 'text-warning bg-warning/10';
    return 'text-primary bg-primary/10';
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return 'CheckCircle';
      case 'processing':
        return 'Cpu';
      case 'reviewing':
        return 'Eye';
      case 'uploading':
        return 'Upload';
      default:
        return 'Clock';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-soft">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground flex items-center">
            <Icon name="Cpu" size={20} className="mr-2 text-primary" />
            AI Digitization Progress
          </h3>
          <Button
            variant="outline"
            size="sm"
            iconName="Plus"
            iconPosition="left"
          >
            New Project
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Real-time tracking of manuscript digitization projects
        </p>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {projects?.map((project) => (
            <div key={project?.id} className="border border-border rounded-lg p-4 hover:shadow-soft transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-medium text-foreground mb-1">{project?.title}</h4>
                  <p className="text-sm text-muted-foreground">{project?.description}</p>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getProgressColor(project?.progress)}`}>
                    <Icon name={getStatusIcon(project?.status)} size={12} className="mr-1" />
                    {project?.status?.charAt(0)?.toUpperCase() + project?.status?.slice(1)}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Pages:</span>
                  <span className="ml-1 font-medium text-foreground">{project?.totalPages}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Processed:</span>
                  <span className="ml-1 font-medium text-foreground">{project?.processedPages}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Accuracy:</span>
                  <span className="ml-1 font-medium text-success">{project?.accuracy}%</span>
                </div>
                <div>
                  <span className="text-muted-foreground">ETA:</span>
                  <span className="ml-1 font-medium text-foreground">{project?.eta}</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">Progress</span>
                  <span className="text-sm font-medium text-foreground">{project?.progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary rounded-full h-2 transition-all duration-300"
                    style={{ width: `${project?.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Icon name="User" size={14} className="mr-1" />
                    {project?.assignedTo}
                  </span>
                  <span className="flex items-center">
                    <Icon name="Calendar" size={14} className="mr-1" />
                    Started {project?.startDate}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="Eye"
                    className="text-muted-foreground hover:text-foreground"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="Download"
                    className="text-muted-foreground hover:text-success"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="Settings"
                    className="text-muted-foreground hover:text-primary"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-primary mb-1">847</div>
              <div className="text-sm text-muted-foreground">Total Projects</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-success mb-1">623</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-warning mb-1">224</div>
              <div className="text-sm text-muted-foreground">In Progress</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitizationProgress;