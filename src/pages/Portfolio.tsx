import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with AI-powered recommendations and automated inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "AI/ML", "Stripe"],
      category: "Full Solution",
      image: "/placeholder.svg"
    },
    {
      title: "Healthcare MVP",
      description: "Rapid MVP development for a telemedicine platform connecting patients with healthcare providers.",
      technologies: ["React", "Firebase", "WebRTC", "Stripe"],
      category: "MVP",
      image: "/placeholder.svg"
    },
    {
      title: "Process Automation Suite",
      description: "Custom automation solution that reduced manual work by 80% for a manufacturing company.",
      technologies: ["Python", "RPA", "API Integration", "Dashboard"],
      category: "Automation",
      image: "/placeholder.svg"
    },
    {
      title: "AI Document Processor",
      description: "Machine learning solution for automated document classification and data extraction.",
      technologies: ["Python", "TensorFlow", "OCR", "NLP", "AWS"],
      category: "AI/ML",
      image: "/placeholder.svg"
    },
    {
      title: "Enterprise CRM",
      description: "Scalable customer relationship management system with advanced analytics and reporting.",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
      category: "Enterprise",
      image: "/placeholder.svg"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking solution with biometric authentication and real-time transactions.",
      technologies: ["React Native", "Node.js", "Blockchain", "Security"],
      category: "Full Solution",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Our Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the innovative solutions we've built for clients across various industries. 
              Each project showcases our commitment to excellence and cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="gradient-border hover-scale animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="aspect-video bg-gradient-subtle rounded-t-lg mb-4 flex items-center justify-center">
                  <div className="text-6xl opacity-20">🚀</div>
                </div>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Live
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Card className="gradient-border bg-gradient-primary text-primary-foreground max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Build Your Next Project?</h3>
                <p className="mb-6 opacity-90">
                  Let's discuss your ideas and create something amazing together.
                </p>
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start Your Project
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;