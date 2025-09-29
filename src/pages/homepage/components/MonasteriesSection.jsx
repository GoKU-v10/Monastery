import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const MonasteriesSection = () => {
  const featuredMonasteries = [
    {
      id: 'rumtek-monastery',
      name: 'Rumtek Monastery',
      location: 'Gangtok, Sikkim',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      description: 'The largest monastery in Sikkim and seat of the Karmapa',
      established: '1966',
      type: 'Kagyu Monastery'
    },
    {
      id: 'pemayangtse-monastery',
      name: 'Pemayangtse Monastery',
      location: 'Pelling, West Sikkim',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop',
      description: 'One of the oldest and most important monasteries in Sikkim',
      established: '1705',
      type: 'Nyingma Monastery'
    },
    {
      id: 'tashiding-monastery',
      name: 'Tashiding Monastery',
      location: 'Tashiding, West Sikkim',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      description: 'Sacred monastery on a hilltop with panoramic Himalayan views',
      established: '1717',
      type: 'Nyingma Monastery'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
              <Icon name="Mountain" size={24} className="text-primary" />
            </div>
            <span className="text-sm font-medium text-primary tracking-wide uppercase">
              Sacred Heritage
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore Sacred Monasteries
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the spiritual heritage of Sikkim through authentic monastery experiences with virtual tours and Street View integration.
          </p>
        </div>

        {/* Monasteries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredMonasteries.map((monastery) => (
            <Link
              key={monastery.id}
              to={`/monasteries/${monastery.id}`}
              className="group"
            >
              <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-medium transition-all duration-300 cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={monastery.image}
                    alt={monastery.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {monastery.type}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {monastery.name}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Icon name="MapPin" size={16} className="mr-1" />
                    <span>{monastery.location}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {monastery.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      Est. {monastery.established}
                    </span>
                    <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                      <span>Explore</span>
                      <Icon name="ArrowRight" size={16} className="ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Link to="/monasteries">
            <Button
              variant="outline"
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
              className="candlelight-glow"
            >
              View All Monasteries
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MonasteriesSection;