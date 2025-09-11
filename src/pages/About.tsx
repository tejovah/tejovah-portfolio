import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Zap, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Zap,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex problems."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our success. We build lasting partnerships through exceptional service."
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "We focus on delivering measurable outcomes that drive your business forward."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards in code quality, security, and performance."
    }
  ];

  const team = [
    {
      name: "Rahul Sharma",
      role: "Founder & CEO",
      description: "Full-stack developer with 8+ years of experience in building scalable solutions.",
      skills: ["Leadership", "Architecture", "AI/ML"]
    },
    {
      name: "Priya Patel",
      role: "Lead Developer",
      description: "Expert in modern web technologies with a passion for clean, efficient code.",
      skills: ["React", "Node.js", "DevOps"]
    },
    {
      name: "Arjun Kumar",
      role: "AI/ML Specialist",
      description: "Specialized in machine learning and automation solutions for business optimization.",
      skills: ["Python", "TensorFlow", "Automation"]
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
              <span className="gradient-text">About Tejovah</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              When ideas need fire, they find Tejovah. We're a passionate team of developers, 
              designers, and innovators dedicated to transforming your vision into powerful software solutions.
            </p>
          </div>

          {/* Our Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <Card className="gradient-border animate-slide-in-left">
              <CardHeader>
                <CardTitle className="text-2xl">Our Story</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                <p className="mb-4">
                  Tejovah was born from a simple belief: every great idea deserves the fire of innovation 
                  to bring it to life. Founded by a team of experienced developers and entrepreneurs, 
                  we've made it our mission to bridge the gap between visionary ideas and successful software products.
                </p>
                <p className="mb-4">
                  From our headquarters in India, we serve clients globally, delivering everything from 
                  rapid MVPs to enterprise-scale solutions. Our diverse expertise spans web development, 
                  mobile apps, AI/ML integration, and process automation.
                </p>
                <p>
                  What sets us apart is our commitment to understanding not just what you want to build, 
                  but why you want to build it. This deep understanding drives every decision we make, 
                  every line of code we write, and every solution we deliver.
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-border animate-slide-in-right">
              <CardHeader>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                <p className="mb-4">
                  To ignite innovation by transforming ambitious ideas into powerful, scalable software 
                  solutions that drive business success and create positive impact in the world.
                </p>
                <div className="bg-gradient-primary/10 p-6 rounded-lg mt-6">
                  <h4 className="font-semibold text-foreground mb-3">Our Approach</h4>
                  <ul className="space-y-2">
                    <li>• Collaborative partnership from concept to deployment</li>
                    <li>• Agile development with transparent communication</li>
                    <li>• Focus on scalable, maintainable solutions</li>
                    <li>• Continuous support and optimization</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Our Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="gradient-text">Our Values</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="gradient-border text-center animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="inline-flex p-3 rounded-full bg-gradient-primary text-primary-foreground mb-4">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Our Team */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="gradient-text">Meet Our Team</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="gradient-border animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center text-primary-foreground text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4">{member.description}</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="gradient-border bg-gradient-primary text-primary-foreground max-w-3xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Work With Us?</h3>
                <p className="mb-6 opacity-90 text-lg">
                  Let's discuss how we can bring the fire your project needs to succeed.
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
                    Schedule a Call
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

export default About;