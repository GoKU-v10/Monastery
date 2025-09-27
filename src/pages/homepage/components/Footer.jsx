import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: "Sacred Spaces",
      links: [
        { label: "Virtual Pilgrimage", route: "/virtual-pilgrimage-center" },
        { label: "360° Monastery Tours", route: "/virtual-pilgrimage-center" },
        { label: "Audio Wisdom Library", route: "/audio-wisdom-library" },
        { label: "Digital Meditation", route: "/homepage" }
      ]
    },
    {
      title: "Heritage Preservation",
      links: [
        { label: "AI Manuscript Portal", route: "/ai-manuscript-portal" },
        { label: "Environmental Monitoring", route: "/environmental-stewardship" },
        { label: "Conservation Projects", route: "/environmental-stewardship" },
        { label: "Research Collaboration", route: "/heritage-community" }
      ]
    },
    {
      title: "Community",
      links: [
        { label: "Heritage Community", route: "/heritage-community" },
        { label: "Cultural Events", route: "/heritage-community" },
        { label: "Expert Q&A", route: "/heritage-community" },
        { label: "User Stories", route: "/heritage-community" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Learning Paths", route: "/homepage" },
        { label: "Cultural Calendar", route: "/heritage-community" },
        { label: "Monastery Network", route: "/virtual-pilgrimage-center" },
        { label: "Sustainability Guide", route: "/environmental-stewardship" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: "Facebook", url: "#" },
    { name: "Twitter", icon: "Twitter", url: "#" },
    { name: "Instagram", icon: "Instagram", url: "#" },
    { name: "YouTube", icon: "Youtube", url: "#" },
    { name: "LinkedIn", icon: "Linkedin", url: "#" }
  ];

  const partnerLogos = [
    { name: "UNESCO", logo: "https://via.placeholder.com/120x60/8B7355/FFFFFF?text=UNESCO" },
    { name: "Buddhist Heritage", logo: "https://via.placeholder.com/120x60/8B7355/FFFFFF?text=Heritage" },
    { name: "Digital Preservation", logo: "https://via.placeholder.com/120x60/8B7355/FFFFFF?text=Digital" },
    { name: "Cultural Foundation", logo: "https://via.placeholder.com/120x60/8B7355/FFFFFF?text=Culture" }
  ];

  return (
    <footer className="bg-gradient-to-b from-muted/30 to-background border-t border-border/50">
      {/* Newsletter Section */}
      <div className="border-b border-border/50 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Icon name="Bell" size={24} className="text-primary" />
              </div>
              <span className="text-sm font-medium text-primary tracking-wide uppercase">
                Stay Connected
              </span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Join Our Digital Sangha
            </h3>
            
            <p className="text-muted-foreground mb-8">
              Receive weekly insights on monastery heritage, conservation updates, and exclusive access 
              to new virtual experiences and cultural events.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                />
              </div>
              <Button
                variant="default"
                iconName="Send"
                iconPosition="right"
                className="candlelight-glow"
              >
                Subscribe
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    className="opacity-20"
                  />
                  <path
                    d="M12 20c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8z"
                    fill="currentColor"
                    className="opacity-30"
                  />
                  <circle
                    cx="20"
                    cy="20"
                    r="4"
                    fill="currentColor"
                  />
                  <path
                    d="M20 8v4M20 28v4M8 20h4M28 20h4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-semibold text-lg text-foreground leading-tight">
                  Monastery
                </span>
                <span className="font-sans text-sm text-muted-foreground leading-tight">
                  Digital Heritage
                </span>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Bridging ancient Buddhist monastery traditions with cutting-edge AI and AR technologies. 
              Creating a digital sanctuary for cultural preservation and spiritual growth.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.url}
                  className="w-10 h-10 bg-muted/50 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors duration-300 group"
                  aria-label={social?.name}
                >
                  <Icon 
                    name={social?.icon} 
                    size={18} 
                    className="text-muted-foreground group-hover:text-primary transition-colors" 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections?.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-semibold text-foreground">{section?.title}</h4>
              <ul className="space-y-3">
                {section?.links?.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link?.route}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Partners Section */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="text-center mb-8">
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Trusted Partners & Collaborators
            </h4>
            <p className="text-muted-foreground text-sm">
              Working together to preserve cultural heritage for future generations
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
            {partnerLogos?.map((partner, index) => (
              <div
                key={index}
                className="bg-muted/30 rounded-lg p-4 hover:bg-muted/50 transition-colors duration-300 w-full max-w-[120px]"
              >
                <img
                  src={partner?.logo}
                  alt={partner?.name}
                  className="w-full h-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
              <span>© {currentYear} Monastery Digital Heritage. All rights reserved.</span>
              <div className="flex items-center space-x-4">
                <Link to="/homepage" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/homepage" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
                <Link to="/homepage" className="hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Globe" size={16} />
                <span>English</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>Global</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sacred Geometry Footer Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-30" />
    </footer>
  );
};

export default Footer;