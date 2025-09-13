import React from 'react';
import { Button } from '@/components/ui/button';
import tejovahLogo from '@/assets/tejovah-png-logo-icon.png';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href='/'>
            <div className="flex items-center space-x-3">
              <img src={tejovahLogo} alt="Tejovah Logo" className="h-10 w-10 mt-1" />
              <div>
                <h1 className="text-2xl font-bold gradient-text">Tejovah</h1>
              </div>
            </div>
          </a>

          {/* <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/services"
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="/about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="/portfolio"
              className="text-foreground hover:text-primary transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact
            </a>
          </nav> */}

          <Button
            variant="hero"
            size="sm"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;