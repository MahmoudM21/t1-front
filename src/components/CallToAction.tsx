
import React from 'react';
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-gradient opacity-10"></div>
      <div className="absolute inset-0 backdrop-blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Ready to Reach a Global Audience?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Join thousands of content creators, businesses, and educators who are breaking language barriers with T1Translator.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-blue-gradient hover:opacity-90 button-glow transition-all text-lg py-6 px-8">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-white/20 hover:bg-white/5 text-lg py-6 px-8">
              Schedule Demo
            </Button>
          </div>
          <p className="mt-6 text-sm text-t1-textSecondary">
            No credit card required. 7-day free trial with full access.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
