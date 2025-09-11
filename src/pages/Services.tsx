import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Rocket, 
  Code, 
  Brain, 
  Cog, 
  Building, 
  Lightbulb,
  ArrowRight,
  Check
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Rocket,
      title: "MVP Development",
      description: "Launch your idea quickly with a Minimum Viable Product that validates your concept and attracts investors.",
      features: [
        "Rapid prototyping",
        "Market validation",
        "User feedback integration",
        "Scalable foundation",
        "Investor-ready demos"
      ],
      timeline: "4-8 weeks",
      pricing: "Starting from ₹2,50,000"
    },
    {
      icon: Code,
      title: "Full Software Solutions",
      description: "Complete end-to-end software development for web applications, mobile apps, and enterprise systems.",
      features: [
        "Custom web applications",
        "Mobile app development",
        "Database design",
        "API development",
        "Cloud deployment"
      ],
      timeline: "8-16 weeks",
      pricing: "Starting from ₹5,00,000"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Integrate intelligent features into your applications with cutting-edge AI and ML technologies.",
      features: [
        "Predictive analytics",
        "Natural language processing",
        "Computer vision",
        "Recommendation systems",
        "Chatbots & virtual assistants"
      ],
      timeline: "6-12 weeks",
      pricing: "Starting from ₹4,00,000"
    },
    {
      icon: Cog,
      title: "Process Automation",
      description: "Streamline your business operations with intelligent automation solutions that save time and reduce costs.",
      features: [
        "Workflow automation",
        "Data integration",
        "Report generation",
        "API integrations",
        "Custom dashboards"
      ],
      timeline: "3-8 weeks",
      pricing: "Starting from ₹1,50,000"
    },
    {
      icon: Building,
      title: "Enterprise Solutions",
      description: "Scalable, secure, and robust software solutions designed for large organizations and complex requirements.",
      features: [
        "Microservices architecture",
        "High availability systems",
        "Enterprise security",
        "Performance optimization",
        "24/7 monitoring"
      ],
      timeline: "12-24 weeks",
      pricing: "Custom pricing"
    },
    {
      icon: Lightbulb,
      title: "Innovation Consulting",
      description: "Strategic technology consulting to help you identify opportunities and plan your digital transformation.",
      features: [
        "Technology strategy",
        "Architecture planning",
        "Feasibility analysis",
        "ROI projections",
        "Implementation roadmap"
      ],
      timeline: "2-4 weeks",
      pricing: "Starting from ₹75,000"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Our Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From rapid MVPs to enterprise solutions, we provide comprehensive software development 
              services tailored to your business needs and growth objectives.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="gradient-border animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-primary text-primary-foreground">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">What's Included:</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div>
                      <p className="text-sm text-muted-foreground">Timeline</p>
                      <p className="font-semibold">{service.timeline}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Investment</p>
                      <p className="font-semibold">{service.pricing}</p>
                    </div>
                  </div>
                  
                  <Button 
                    variant="hero" 
                    className="w-full group"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Discuss This Service
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="gradient-text">Our Process</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Discovery", description: "We understand your vision, requirements, and goals" },
                { step: "02", title: "Planning", description: "Create detailed roadmap with timeline and milestones" },
                { step: "03", title: "Development", description: "Build your solution with regular updates and feedback" },
                { step: "04", title: "Launch", description: "Deploy, test, and provide ongoing support" }
              ].map((phase, index) => (
                <Card key={index} className="gradient-border text-center animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold gradient-text mb-3">{phase.step}</div>
                    <h3 className="font-semibold mb-2">{phase.title}</h3>
                    <p className="text-muted-foreground text-sm">{phase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="gradient-border bg-gradient-primary text-primary-foreground max-w-3xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="mb-6 opacity-90 text-lg">
                  Let's discuss your project and create a custom solution that drives your business forward.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="secondary" 
                    size="lg"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Start Your Project
                  </Button>
                  <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                    Schedule a Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;