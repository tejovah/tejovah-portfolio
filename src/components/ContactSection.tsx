import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const formSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Please enter a valid email address'),
    projectType: z.string().min(1, 'Project type is required'),
    message: z.string().min(1, 'Message is required')
  });

  type FormData = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      // You'll need to set up EmailJS with your service ID, template ID, and public key
      await emailjs.send(
        'service_wzyohwk', // Replace with your EmailJS service ID
        'template_t6436sj', // Replace with your EmailJS template ID
        {
          from_name: data.name,
          from_email: data.email,
          project_type: data.projectType,
          message: data.message,
        },
        'JuMybqUtAf3laZ7QV' // Replace with your EmailJS public key
      );

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 12 hours.",
      });

      // Reset form
      reset();
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
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      placeholder="Your Name" 
                      {...register('name')}
                      required
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <Input 
                      placeholder="Your Email" 
                      type="email" 
                      {...register('email')}
                      required
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <Input 
                    placeholder="Project Type (MVP, Full Solution, AI, etc.)" 
                    {...register('projectType')}
                    required
                  />
                  {errors.projectType && (
                    <p className="text-sm text-red-500 mt-1">{errors.projectType.message}</p>
                  )}
                </div>
                <div>
                  <Textarea 
                    placeholder="Tell us about your project..." 
                    className="min-h-[120px]"
                    {...register('message')}
                    required
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
                  )}
                </div>
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