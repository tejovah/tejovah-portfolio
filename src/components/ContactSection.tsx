import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // You'll need to set up EmailJS with your service ID, template ID, and public key
      await emailjs.send(
        'service_wzyohwk', // Replace with your EmailJS service ID
        'template_t6436sj', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          project_type: formData.projectType,
          message: formData.message,
        },
        'JuMybqUtAf3laZ7QV' // Replace with your EmailJS public key
      );

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 12 hours.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        projectType: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Let's Build Something Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Get in touch and let's discuss your project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="animate-scale-in">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Your Name" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <Input 
                    placeholder="Your Email" 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Input 
                  placeholder="Project Type (MVP, Full Solution, AI, etc.)" 
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  required
                />
                <Textarea 
                  placeholder="Tell us about your project..." 
                  className="min-h-[120px]"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                <Button 
                  type="submit" 
                  variant="hero" 
                  className="w-full group" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in-left delay-200">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in touch directly</h3>
              <p className="text-muted-foreground mb-8">
                Prefer to reach out directly? We're here to help answer any questions 
                and discuss your project needs.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  content: "hello@tejovah.com",
                  href: "mailto:hello@tejovah.com"
                },
                {
                  icon: Phone,
                  title: "Phone",
                  content: "+91 7252995449 | +91 80856 85200",
                  href: "tel:+917252995449"
                },
                {
                  icon: MapPin,
                  title: "Location",
                  content: "India",
                  // href: "#"
                }
              ].map((contact, index) => (
                <Card key={index} className="hover-scale cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-lg bg-gradient-primary text-primary-foreground">
                        <contact.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold">{contact.title}</div>
                        <a 
                          href={contact.href} 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {contact.content}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* CTA */}
            <Card className="bg-gradient-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-bold mb-2">Ready to start?</h4>
                <p className="mb-4 opacity-90">
                  Book a free 30-minute consultation to discuss your project.
                </p>
                <Button 
                  variant="secondary" 
                  className="w-full"
                  onClick={() => window.open('https://calendly.com/tejovah', '_blank')}
                >
                  Schedule a Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;