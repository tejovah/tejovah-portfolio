import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Privacy Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Your privacy is important to us. Learn how we protect your data.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Information We Collect",
                content: `We collect information you provide directly to us, such as when you create an account, 
                make a purchase, or contact us. This may include your name, email address, phone number, 
                and project details. We also collect information automatically when you use our services, 
                including your IP address, browser type, and usage patterns.`
              },
              {
                title: "How We Use Your Information",
                content: `We use the information we collect to provide, maintain, and improve our services, 
                process transactions, send you technical notices and support messages, communicate with you 
                about products and services, and protect the rights and safety of Tejovah and our users.`
              },
              {
                title: "Information Sharing",
                content: `We do not sell, trade, or rent your personal information to third parties. We may 
                share your information with service providers who help us operate our business, when required 
                by law, or to protect our rights and the safety of our users.`
              },
              {
                title: "Data Security",
                content: `We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no internet transmission 
                is ever completely secure or error-free.`
              },
              {
                title: "Your Rights",
                content: `You have the right to access, update, or delete your personal information. You may 
                also opt out of certain communications from us. To exercise these rights, please contact us 
                at hello@tejovah.com.`
              },
              {
                title: "Cookies and Tracking",
                content: `We use cookies and similar tracking technologies to improve your experience on our 
                website, analyze usage patterns, and provide personalized content. You can control cookies 
                through your browser settings.`
              },
              {
                title: "Changes to This Policy",
                content: `We may update this privacy policy from time to time. We will notify you of any 
                changes by posting the new policy on this page and updating the "Last updated" date.`
              },
              {
                title: "Contact Us",
                content: `If you have any questions about this privacy policy, please contact us at 
                hello@tejovah.com or call us at +91 7252995449.`
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

export default PrivacyPolicy;