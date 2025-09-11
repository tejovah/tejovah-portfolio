import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Terms of Service</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Please read these terms carefully before using our services.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Acceptance of Terms",
                content: `By accessing or using Tejovah's services, you agree to be bound by these Terms of Service 
                and our Privacy Policy. If you disagree with any part of these terms, then you may not access the service.`
              },
              {
                title: "Description of Service",
                content: `Tejovah provides software development services including MVP development, full software solutions, 
                AI integration, automation, and enterprise applications. We deliver custom solutions tailored to your 
                business needs.`
              },
              {
                title: "User Responsibilities",
                content: `You are responsible for providing accurate information, maintaining the confidentiality of your 
                account, complying with applicable laws, and ensuring you have the right to share any materials with us 
                for your project.`
              },
              {
                title: "Intellectual Property",
                content: `Upon full payment, you will own the intellectual property rights to the custom software we develop 
                for you. Tejovah retains rights to our pre-existing tools, frameworks, and general knowledge used in 
                development.`
              },
              {
                title: "Payment Terms",
                content: `Payment terms will be specified in your project agreement. We typically require a deposit before 
                starting work and payment milestones throughout the project. Late payments may result in project suspension.`
              },
              {
                title: "Project Delivery",
                content: `We commit to delivering projects according to agreed timelines. Delays may occur due to scope 
                changes, late feedback, or circumstances beyond our control. We will communicate any delays promptly.`
              },
              {
                title: "Limitation of Liability",
                content: `Tejovah's liability is limited to the amount paid for services. We are not liable for indirect, 
                incidental, or consequential damages. Our services are provided "as is" without warranty.`
              },
              {
                title: "Termination",
                content: `Either party may terminate the agreement with written notice. Upon termination, you will pay for 
                work completed, and we will deliver all completed work. Confidentiality obligations survive termination.`
              }
            ].map((section, index) => (
              <Card key={index} className="gradient-border animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;