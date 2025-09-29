import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { path: '/homepage', label: 'Home', icon: 'Home' },
    { path: '/monasteries', label: 'Monasteries', icon: 'Building' },
    { path: '/cultural-events', label: 'Cultural Events', icon: 'Calendar' },
    { path: '/ai-manuscript-portal', label: 'AI Manuscripts', icon: 'BookOpen' },
    { path: '/virtual-pilgrimage-center', label: 'Virtual Pilgrimage', icon: 'Mountain' },
    { path: '/audio-wisdom-library', label: 'Audio Wisdom', icon: 'Headphones' },
  ];

  const moreItems = [
    { path: '/environmental-stewardship', label: 'Environmental Stewardship', icon: 'Leaf' },
    { path: '/heritage-community', label: 'Community', icon: 'Users' },
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const Logo = () => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <motion.div 
        className="flex items-center space-x-3 group"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div 
          className="relative"
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 8, ease: "linear", repeat: Infinity }}
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary transition-colors duration-300"
          >
            <circle
              cx="20"
              cy="20"
              r="18"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              className="opacity-20 group-hover:opacity-30 transition-opacity duration-300"
            />
            <path
              d="M12 20c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8z"
              fill="currentColor"
              className="opacity-30 group-hover:opacity-40 transition-opacity duration-300"
            />
            <motion.circle
              cx="20"
              cy="20"
              r="4"
              fill="currentColor"
              animate={{ scale: isHovered ? [1, 1.2, 1] : 1 }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <path
              d="M20 8v4M20 28v4M8 20h4M28 20h4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="opacity-80"
            />
          </svg>
          <motion.div 
            className="absolute inset-0"
            animate={{ rotate: isHovered ? -360 : 0 }}
            transition={{ duration: 12, ease: "linear", repeat: Infinity }}
          >
            <svg
              width="44"
              height="44"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-accent/50 group-hover:text-accent transition-colors duration-300"
            >
              <circle
                cx="20"
                cy="20"
                r="2"
                fill="currentColor"
              />
            </svg>
          </motion.div>
        </motion.div>
        <div className="flex flex-col">
          <motion.span 
            className="font-serif font-bold text-xl text-foreground leading-tight tracking-tight"
            animate={{ x: isHovered ? [0, 2, -2, 2, 0] : 0 }}
            transition={{ duration: 0.5 }}
          >
            Monastery
          </motion.span>
          <motion.span 
            className="font-sans text-xs font-medium uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors duration-300"
            animate={{ opacity: isHovered ? [0.8, 1, 0.8] : 0.7 }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Digital Heritage
          </motion.span>
        </div>
      </motion.div>
    );
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-lg shadow-lg border-b border-border/20'
          : 'bg-gradient-to-b from-background/90 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/homepage" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const isActive = isActivePath(item.path);
              return (
                <div key={item.path} className="relative group">
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-primary font-semibold'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                    }`}
                  >
                    <Icon name={item.icon} size={16} className="flex-shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                  {isActive && (
                    <motion.div 
                      className="absolute bottom-0 left-1/2 w-1/2 h-0.5 bg-primary rounded-full -translate-x-1/2"
                      layoutId="activeNav"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30
                      }}
                    />
                  )}
                </div>
              );
            })}

            {/* More Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Icon name="MoreHorizontal" size={16} />
                <span>More</span>
                <motion.span
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon name="ChevronDown" size={14} className="ml-1" />
                </motion.span>
              </button>
              
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div 
                    className="absolute right-0 top-full mt-1 w-56 bg-popover border border-border/20 rounded-xl shadow-xl overflow-hidden z-50"
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 5, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                  >
                    <div className="py-1.5">
                      {moreItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`flex items-center space-x-3 px-4 py-2 text-sm transition-colors ${
                            isActivePath(item.path)
                              ? 'text-primary bg-primary/10' 
                              : 'text-popover-foreground hover:bg-muted/50'
                          }`}
                        >
                          <Icon name={item.icon} size={16} />
                          <span>{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                size="sm"
                iconName="Search"
                iconPosition="left"
                className="group relative overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <span className="relative z-10">Explore</span>
                <span className="absolute inset-0 w-0 bg-gradient-to-r from-primary/5 to-primary/10 group-hover:w-full transition-all duration-500"></span>
              </Button>
            </motion.div>
            <motion.div 
              whileHover={{ y: -1 }} 
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-amber-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
              <Button
                variant="default"
                size="sm"
                iconName="Heart"
                iconPosition="left"
                className="relative bg-gradient-to-r from-rose-500 to-amber-500 text-white hover:from-rose-600 hover:to-amber-600 transition-all duration-300 shadow-lg shadow-rose-500/20"
              >
                <span>Support</span>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon name="X" size={24} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon name="Menu" size={24} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden border-t border-border/20 bg-background/95 backdrop-blur-lg overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="py-4 space-y-1 px-2">
                {[...navigationItems, ...moreItems].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                      isActivePath(item.path)
                        ? 'text-primary bg-primary/10' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    <Icon name={item.icon} size={18} />
                    <span>{item.label}</span>
                  </Link>
                ))}
                
                <motion.div 
                  className="pt-4 mt-4 border-t border-border/20 space-y-2 px-2"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="Search"
                    iconPosition="left"
                    className="justify-start"
                  >
                    Explore Sacred Spaces
                  </Button>
                  <Button
                    variant="default"
                    fullWidth
                    iconName="Heart"
                    iconPosition="left"
                    className="justify-start"
                  >
                    Support Preservation
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
