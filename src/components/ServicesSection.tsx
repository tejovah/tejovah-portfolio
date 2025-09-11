import React from 'react';
import { Code, Cpu, Sparkles, Rocket, Brain, Zap, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import servicesPattern from '@/assets/services-pattern.jpg';

const services = [
  {
    icon: Rocket,
    title: "MVP Development",
    description: "Transform your ideas into market-ready products with rapid prototyping and agile development.",
    features: ["Rapid Prototyping", "Market Validation", "Scalable Architecture"]
  },
  {
    icon: Code,
    title: "Full Software Solutions",
    description: "End-to-end software development from concept to deployment and maintenance.",
    features: ["Custom Development", "Cloud Integration", "Performance Optimization"]
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Integrate intelligent features and automation to give your business a competitive edge.",
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision"]
  },
  {
    icon: Zap,
    title: "Automation Projects",
    description: "Streamline your operations with custom automation solutions and workflow optimization.",
    features: ["Process Automation", "API Integration", "Workflow Optimization"]
  },
  {
    icon: Cpu,
    title: "Enterprise Solutions",
    description: "Scalable, secure systems designed to grow with your business needs.",
    features: ["Microservices", "Security First", "24/7 Monitoring"]
  },
  {
    icon: Sparkles,
    title: "Digital Innovation",
    description: "Stay ahead with cutting-edge technologies and innovative digital solutions.",
    features: ["Emerging Tech", "Digital Transformation", "Innovation Consulting"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: `url(${servicesPattern})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive software solutions tailored to your specific needs and business objectives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="gradient-border hover-scale group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-primary text-primary-foreground group-hover:glow transition-all duration-300">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16 animate-fade-in-up delay-300">
          <Button 
            variant="hero" 
            size="lg" 
            className="group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discuss Your Project
            <MessageSquare className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;