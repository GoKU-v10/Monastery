import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturesGrid = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('[data-index]');
    cards?.forEach(card => observer?.observe(card));

    return () => observer?.disconnect();
  }, []);

  const features = [
    {
      id: 1,
      title: "AI Manuscript Portal",
      description: "Transform ancient texts into searchable digital archives using advanced OCR technology and collaborative research tools.",
      icon: "BookOpen",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      route: "/ai-manuscript-portal",
      stats: "50K+ Manuscripts",
      color: "from-blue-500/20 to-indigo-500/20",
      features: ["OCR Processing", "AI Translation", "Collaborative Research"]
    },
    {
      id: 2,
      title: "Virtual Pilgrimage Center",
      description: "Immersive 360° monastery experiences with AR navigation and guided spiritual journeys.",
      icon: "Mountain",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop",
      route: "/virtual-pilgrimage-center",
      stats: "150+ Sacred Sites",
      color: "from-green-500/20 to-emerald-500/20",
      features: ["360° Tours", "AR Navigation", "Spiritual Guides"]
    },
    {
      id: 3,
      title: "Audio Wisdom Library",
      description: "Multi-language guided tours, meditation sessions, and cultural storytelling with spatial audio.",
      icon: "Headphones",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      route: "/audio-wisdom-library",
      stats: "25+ Languages",
      color: "from-purple-500/20 to-violet-500/20",
      features: ["Guided Tours", "Meditation", "Cultural Stories"]
    },
    {
      id: 4,
      title: "Heritage Community",
      description: "Connect with global audiences through user-generated stories, expert Q&A, and collaborative preservation.",
      icon: "Users",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop",
      route: "/heritage-community",
      stats: "10K+ Members",
      color: "from-orange-500/20 to-red-500/20",
      features: ["Community Stories", "Expert Q&A", "Preservation Projects"]
    },
    {
      id: 5,
      title: "Environmental Stewardship",
      description: "Real-time monitoring dashboards, conservation initiatives, and sustainability education.",
      icon: "Leaf",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
      route: "/environmental-stewardship",
      stats: "Real-time Data",
      color: "from-teal-500/20 to-cyan-500/20",
      features: ["Environmental Monitoring", "Conservation", "Sustainability"]
    },
    {
      id: 6,
      title: "Digital Meditation Space",
      description: "Guided practices, ambient soundscapes, and mindfulness tools for spiritual growth.",
      icon: "Heart",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      route: "/homepage",
      stats: "Daily Sessions",
      color: "from-pink-500/20 to-rose-500/20",
      features: ["Guided Meditation", "Ambient Sounds", "Mindfulness Tools"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Icon name="Compass" size={24} className="text-primary" />
            </div>
            <span className="text-sm font-medium text-primary tracking-wide uppercase">
              Sacred Innovation Platform
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Discover Ancient Wisdom Through Modern Technology
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive digital ecosystem that bridges monastery traditions with cutting-edge AI, 
            AR technologies, and immersive experiences for global heritage preservation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features?.map((feature, index) => (
            <div
              key={feature?.id}
              data-index={index}
              className={`group relative bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden hover:shadow-medium transition-all duration-500 transform ${
                visibleCards?.includes(index)
                  ? 'translate-y-0 opacity-100' :'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature?.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={feature?.image}
                  alt={feature?.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Icon Overlay */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Icon name={feature?.icon} size={20} className="text-primary" />
                </div>
                
                {/* Stats Badge */}
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-xs font-medium text-white">{feature?.stats}</span>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature?.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature?.description}
                  </p>
                </div>

                {/* Feature List */}
                <div className="space-y-2">
                  {feature?.features?.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-xs text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <Link to={feature?.route}>
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="ArrowRight"
                      iconPosition="right"
                      className="w-full justify-between group-hover:bg-primary/10 transition-colors"
                    >
                      Explore {feature?.title?.split(' ')?.[0]}
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 backdrop-blur-sm border border-border/50">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Begin Your Digital Pilgrimage?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of spiritual seekers, researchers, and cultural enthusiasts in preserving 
              and experiencing monastery heritage through innovative technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/virtual-pilgrimage-center">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Mountain"
                  iconPosition="left"
                  className="candlelight-glow"
                >
                  Start Virtual Tour
                </Button>
              </Link>
              <Link to="/heritage-community">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Users"
                  iconPosition="left"
                >
                  Join Community
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;