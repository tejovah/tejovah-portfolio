import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import tejovahLogo from '@/assets/tejovah-png-logo-icon.png';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={tejovahLogo} alt="Tejovah Logo" className="h-10 w-10 m-1" />
              <div>
                <h3 className="text-xl font-bold gradient-text">Tejovah</h3>
                <p className="text-sm text-muted-foreground">When Ideas Need Fire, They Find Tejovah.</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transforming innovative ideas into powerful software solutions. From MVPs to enterprise applications, 
              we bring the fire your projects need to succeed.
            </p>
            <div className="flex space-x-4">
              {[
                // { icon: Github, href: "" },
                { icon: Twitter, href: "https://x.com/tejovah" },
                { icon: Linkedin, href: "https://linkedin.com/company/tejovah" },
                { icon: Mail, href: "mailto:hello@tejovah.com" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target='_blank'
                  className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Services */}
          {/* <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/services" className="hover:text-primary transition-colors">MVP Development</a></li>
              <li><a href="/services" className="hover:text-primary transition-colors">Full Software Solutions</a></li>
              <li><a href="/services" className="hover:text-primary transition-colors">AI & ML Integration</a></li>
              <li><a href="/services" className="hover:text-primary transition-colors">Process Automation</a></li>
              <li><a href="/services" className="hover:text-primary transition-colors">Enterprise Solutions</a></li>
            </ul>
          </div> */}
          
          {/* Company */}
          {/* <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-primary transition-colors">Our Process</a></li>
              <li><a href="/portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div> */}
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Tejovah. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy-policy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
            {/* <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Cookie Policy
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;