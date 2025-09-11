import React from 'react';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Why Choose Us?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're not just developers – we're your technology partners. With years of experience 
              building solutions for startups to enterprises, we understand what it takes to turn 
              ideas into successful products.
            </p>
            
            <div className="space-y-4">
              {[
                "Expert team with 5+ years average experience",
                "Agile development with weekly sprint reviews", 
                "Modern tech stack and best practices",
                "Post-launch support and maintenance"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Button 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Work Together
                <Users className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6 animate-scale-in delay-200">
            {[
              { icon: Users, label: "Happy Clients", value: "50+" },
              { icon: Award, label: "Success Rate", value: "100%" },
              { icon: Clock, label: "Avg. Delivery", value: "6 weeks" },
              { icon: CheckCircle, label: "Projects", value: "100+" }
            ].map((stat, index) => (
              <Card key={index} className="gradient-border text-center hover-scale">
                <CardContent className="p-6">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;